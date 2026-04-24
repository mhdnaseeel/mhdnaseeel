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

    // Using 'gemini-1.5-flash' specifically for better stability.
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      system_instruction: systemPrompt
        ? { parts: [{ text: systemPrompt }] }
        : undefined,
      generationConfig: {
        maxOutputTokens: 512, // Reduced for speed
        temperature: 0.7,
      }
    };

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json().catch(() => ({}));
      return res.status(geminiResponse.status).json({ 
        error: errorData?.error?.message || `Gemini API Error ${geminiResponse.status}` 
      });
    }

    const data = await geminiResponse.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    return res.status(200).json({ message: text });

  } catch (error) {
    return res.status(500).json({
      error: `Server Error: ${error.message}`,
    });
  }
}
