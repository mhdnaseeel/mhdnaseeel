export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages, systemPrompt } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages are required" });
    }

    // Build the list of available providers (order = priority)
    const providers = [];

    if (process.env.OPENAI_API_KEY) {
      providers.push({ name: "chatgpt", key: process.env.OPENAI_API_KEY });
    }
    if (process.env.GEMINI_API_KEY) {
      providers.push({ name: "gemini", key: process.env.GEMINI_API_KEY });
    }

    if (providers.length === 0) {
      return res.status(500).json({ error: "AI service not configured. No API keys found." });
    }

    const errors = [];

    // Try each provider in order; fallback to the next on failure
    for (const provider of providers) {
      try {
        const text = await callProvider(provider, messages, systemPrompt);
        return res.status(200).json({
          message: text,
          provider: provider.name,
        });
      } catch (err) {
        errors.push(`[${provider.name}]: ${err.message}`);
        console.error(`[${provider.name}] failed:`, err.message);
        // Continue to the next provider
      }
    }

    // All providers failed — return a user-friendly message
    console.error("All providers failed:", errors.join(" | "));
    return res.status(503).json({
      error: "AI is temporarily unavailable. Please try again in a moment.",
    });

  } catch (error) {
    return res.status(500).json({
      error: `Server Error: ${error.message}`,
    });
  }
}

// ─── Provider implementations ────────────────────────────────────────

async function callProvider(provider, messages, systemPrompt) {
  if (provider.name === "chatgpt") {
    return callChatGPT(provider.key, messages, systemPrompt);
  }
  if (provider.name === "gemini") {
    return callGemini(provider.key, messages, systemPrompt);
  }
  throw new ProviderError(`Unknown provider: ${provider.name}`, 500);
}

// ─── ChatGPT (OpenAI) ───────────────────────────────────────────────

async function callChatGPT(apiKey, messages, systemPrompt) {
  const openaiMessages = [];

  if (systemPrompt) {
    openaiMessages.push({ role: "system", content: systemPrompt });
  }

  for (const m of messages) {
    openaiMessages.push({ role: m.role, content: m.content });
  }

  const body = JSON.stringify({
    model: "gpt-4o-mini",
    messages: openaiMessages,
    max_tokens: 2048,
    temperature: 0.7,
  });

  // Retry up to 2 times on transient errors (429, 503) with exponential backoff
  const response = await fetchWithRetry(
    () => fetchOpenAI(apiKey, body),
    2,
    [429, 503]
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData?.error?.message || `OpenAI Error ${response.status}`;
    throw new ProviderError(msg, response.status);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new ProviderError("OpenAI returned empty response", 500);
  return text;
}

async function fetchOpenAI(apiKey, body) {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body,
  });
}

// ─── Gemini (Google) ─────────────────────────────────────────────────

async function callGemini(apiKey, messages, systemPrompt) {
  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  // Build Gemini-format contents
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  // Prepend system prompt to the first user message (Gemini doesn't have a system role)
  if (systemPrompt && contents.length > 0) {
    contents[0].parts[0].text = `Instructions: ${systemPrompt}\n\nUser Message: ${contents[0].parts[0].text}`;
  }

  // Retry up to 2 times on transient errors (429, 503) with exponential backoff
  const response = await fetchWithRetry(
    () => fetchGemini(geminiUrl, contents),
    2,
    [429, 503]
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData?.error?.message || `Gemini Error ${response.status}`;
    throw new ProviderError(msg, response.status);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new ProviderError("Gemini returned empty response", 500);
  return text;
}

async function fetchGemini(url, contents) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents,
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.7,
      },
    }),
  });
}

// ─── Helpers ─────────────────────────────────────────────────────────

/**
 * Retries a fetch call on specific status codes with exponential backoff.
 * @param {Function} fetchFn - A function that returns a fetch Promise
 * @param {number} maxRetries - Max number of retries
 * @param {number[]} retryOnStatuses - HTTP status codes to retry on
 */
async function fetchWithRetry(fetchFn, maxRetries, retryOnStatuses) {
  let lastResponse;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    lastResponse = await fetchFn();
    if (!retryOnStatuses.includes(lastResponse.status)) {
      return lastResponse;
    }
    if (attempt < maxRetries) {
      const delay = 2000 * Math.pow(2, attempt); // 2s, 4s
      console.log(`Retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})...`);
      await sleep(delay);
    }
  }
  return lastResponse;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class ProviderError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
