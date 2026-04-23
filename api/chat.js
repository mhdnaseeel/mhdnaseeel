export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "AI service not configured" });
  }

  try {
    const { messages, systemPrompt } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages are required" });
    }

    // We use the 'v1' stable endpoint instead of 'v1beta'
    // Model name 'gemini-1.5-flash' is the stable identifier
    const geminiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    // We move the system prompt into the content history to ensure compatibility 
    // with all versions/models that support generateContent
    const contents = [];
    
    if (systemPrompt) {
      contents.push({
        role: "user",
        parts: [{ text: `SYSTEM INSTRUCTIONS: ${systemPrompt}\n\nPlease acknowledge these instructions and wait for my first message.` }]
      });
      contents.push({
        role: "model",
        parts: [{ text: "Understood. I will act as Naseel according to those instructions. How can I help you today?" }]
      });
    }

    // Add conversation history
    messages.forEach((m) => {
      contents.push({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      });
    });

    const requestBody = {
      contents,
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
        topP: 0.9,
      }
    };

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      console.error("Gemini API error:", data);
      return res.status(geminiResponse.status).json({ 
        error: data?.error?.message || `API Error ${geminiResponse.status}: ${JSON.stringify(data)}` 
      });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    return res.status(200).json({ message: text });

  } catch (error) {
    console.error("Chat API Error:", error);
    return res.status(500).json({
      error: `Server Error: ${error.message}`,
    });
  }
}
