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

    // According to your diagnostic, 'gemini-2.0-flash' is available on your key.
    // We use the v1beta endpoint as it's the standard for these newer models.
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    const requestBody = {
      system_instruction: systemPrompt
        ? { parts: [{ text: systemPrompt }] }
        : undefined,
      contents: [
        ...history,
        { role: "user", parts: [{ text: lastMessage.content }] },
      ],
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
      return res.status(geminiResponse.status).json({ 
        error: data?.error?.message || `API Error: ${geminiResponse.status}` 
      });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    return res.status(200).json({ message: text });

  } catch (error) {
    return res.status(500).json({
      error: `Server Error: ${error.message}`,
    });
  }
}
