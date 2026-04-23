import { GoogleGenerativeAI } from "@google/generative-ai";

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

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // The official SDK handles the correct URLs internally.
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: systemPrompt || "",
    });

    // Convert messages to Gemini SDK history format (history + last user message)
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    const result = await chat.sendMessage(lastMessage.content);
    const response = result.response;
    const text = response.text();

    return res.status(200).json({ message: text });
  } catch (error) {
    console.error("Chat API Error:", error);

    if (error.message?.includes("SAFETY")) {
      return res.status(400).json({
        error: "I can't respond to that. Let's keep our conversation professional!",
      });
    }

    return res.status(500).json({
      error: `Error: ${error.message}`,
    });
  }
}
