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

    if (process.env.GROQ_API_KEY) {
      providers.push({ name: "groq", key: process.env.GROQ_API_KEY });
    }
    if (process.env.OPENAI_API_KEY) {
      providers.push({ name: "chatgpt", key: process.env.OPENAI_API_KEY });
    }
    if (process.env.GEMINI_API_KEY) {
      providers.push({ name: "gemini", key: process.env.GEMINI_API_KEY });
    }

    if (providers.length === 0) {
      return res.status(500).json({ error: "AI service not configured. No API keys found." });
    }

    console.log(`[chat] Available providers: ${providers.map(p => p.name).join(', ')}`);

    const errors = [];

    // Try each provider in order; fallback to the next on failure
    for (const provider of providers) {
      try {
        console.log(`[chat] Trying provider: ${provider.name}...`);
        const text = await callProvider(provider, messages, systemPrompt);
        console.log(`[chat] ✅ Success with: ${provider.name}`);
        return res.status(200).json({
          message: text,
          provider: provider.name,
        });
      } catch (err) {
        const errMsg = err.message || 'Unknown error';
        errors.push(`[${provider.name}]: ${errMsg}`);
        console.error(`[chat] ❌ ${provider.name} failed: ${errMsg}`);
        // Continue to the next provider
      }
    }

    // All providers failed — return a user-friendly message
    console.error("[chat] All providers failed:", errors.join(" | "));
    return res.status(503).json({
      error: "AI is temporarily unavailable. Please try again in a moment.",
      details: errors,
    });

  } catch (error) {
    console.error("[chat] Server error:", error);
    return res.status(500).json({
      error: `Server Error: ${error.message}`,
    });
  }
}

// ─── Provider implementations ────────────────────────────────────────

async function callProvider(provider, messages, systemPrompt) {
  if (provider.name === "groq") {
    return callGroq(provider.key, messages, systemPrompt);
  }
  if (provider.name === "chatgpt") {
    return callChatGPT(provider.key, messages, systemPrompt);
  }
  if (provider.name === "gemini") {
    return callGemini(provider.key, messages, systemPrompt);
  }
  throw new ProviderError(`Unknown provider: ${provider.name}`, 500);
}

// ─── Groq ────────────────────────────────────────────────────────────

async function callGroq(apiKey, messages, systemPrompt) {
  const groqMessages = [];

  if (systemPrompt) {
    groqMessages.push({ role: "system", content: systemPrompt });
  }

  for (const m of messages) {
    groqMessages.push({ role: m.role, content: m.content });
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: groqMessages,
      max_tokens: 2048,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData?.error?.message || `Groq Error ${response.status}`;
    console.error(`[Groq] HTTP ${response.status}: ${msg}`);
    throw new ProviderError(msg, response.status);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new ProviderError("Groq returned empty response", 500);
  return text;
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

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: openaiMessages,
      max_tokens: 2048,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData?.error?.message || `OpenAI Error ${response.status}`;
    console.error(`[ChatGPT] HTTP ${response.status}: ${msg}`);
    throw new ProviderError(msg, response.status);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new ProviderError("OpenAI returned empty response", 500);
  return text;
}

// ─── Gemini (Google) ─────────────────────────────────────────────────

async function callGemini(apiKey, messages, systemPrompt) {
  const models = ["gemini-2.0-flash", "gemini-1.5-flash"];

  for (const model of models) {
    try {
      console.log(`[Gemini] Trying model: ${model}`);
      const text = await attemptGeminiModel(apiKey, model, messages, systemPrompt);
      return text;
    } catch (err) {
      console.error(`[Gemini] Model ${model} failed: ${err.message}`);
    }
  }

  throw new ProviderError("All Gemini models exhausted", 429);
}

async function attemptGeminiModel(apiKey, model, messages, systemPrompt) {
  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  if (systemPrompt && contents.length > 0) {
    contents[0].parts[0].text = `Instructions: ${systemPrompt}\n\nUser Message: ${contents[0].parts[0].text}`;
  }

  const response = await fetch(geminiUrl, {
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

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData?.error?.message || `Gemini Error ${response.status}`;
    console.error(`[Gemini] HTTP ${response.status}: ${msg}`);
    throw new ProviderError(msg, response.status);
  }

  const data = await response.json();

  if (data?.promptFeedback?.blockReason) {
    throw new ProviderError(`Gemini blocked: ${data.promptFeedback.blockReason}`, 400);
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new ProviderError("Gemini returned empty response", 500);
  return text;
}

// ─── Helpers ─────────────────────────────────────────────────────────

class ProviderError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
