export default async function handler(req, res) {
  // Only allow POST
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

    // Build the Gemini REST API request body
    // Convert to Gemini format: history (all except last) + current message
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    // Use Gemini 1.5 Flash (stable)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

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
      },
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      ],
    };

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json().catch(() => ({}));
      console.error("Gemini API error:", errorData);
      
      // Return the actual API error to the frontend for debugging
      return res.status(geminiResponse.status).json({ 
        error: errorData?.error?.message || `Gemini API error: ${geminiResponse.status}` 
      });
    }

    const data = await geminiResponse.json();

    // Extract the text from the response
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response right now.";

    // Check for blocked content
    const finishReason = data?.candidates?.[0]?.finishReason;
    if (finishReason === "SAFETY") {
      return res.status(400).json({
        error:
          "I can't respond to that. Let's keep our conversation professional!",
      });
    }

    return res.status(200).json({ message: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return res.status(500).json({
      error: `Server Error: ${error.message}`,
    });
  }
}
