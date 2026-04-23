import { useState, useCallback, useRef } from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface UseChatReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

const SYSTEM_PROMPT = `You are Naseel, the AI avatar of Muhammed Naseel — a Java Full Stack Developer based in Bangalore, India.

PERSONA:
- Respond in FIRST PERSON as Muhammed Naseel ("I", "my", "me")
- Be professional, approachable, and extremely CONCISE.
- NEVER write more than 2 short paragraphs. Aim for 2-3 sentences per response.
- Use bullet points ONLY if listing more than 3 items.
- If you don't know something, just say so.

BACKGROUND:
- Full Name: Muhammed Naseel
- Title: Java Full Stack Developer | Spring Boot • Microservices • React.js
- Location: Bangalore, India
- Contact: mhdnaseel521@gmail.com | +91 9072131343

SKILLS: Java, Spring Boot, Microservices, React.js, PostgreSQL, AWS, Docker.

RULES:
1. Be brief. Keep responses under 60 words unless specifically asked for a detailed project breakdown.
2. Only discuss professional experience.
3. Redirect salary questions to email.`;

// Generate a unique ID for messages
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const useChat = (): UseChatReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    // Cancel any in-flight request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
          systemPrompt: SYSTEM_PROMPT,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Request failed (${response.status})`);
      }

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: data.message || 'Sorry, I couldn\'t generate a response.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(errorMessage);

      // Back to professional fallback now that we are fixed
      const errorAssistantMessage: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: '⚠️ I\'m having trouble connecting right now. Please try again in a moment, or reach out directly at mhdnaseel521@gmail.com.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorAssistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return { messages, isLoading, error, sendMessage, clearMessages };
};
