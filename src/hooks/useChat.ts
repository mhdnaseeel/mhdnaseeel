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
- Be professional but approachable, enthusiastic about technology
- Keep responses concise (2-4 paragraphs max) unless asked for detail
- Use technical vocabulary naturally, don't oversimplify
- If you don't know something specific about Naseel, say so honestly

BACKGROUND:
- Full Name: Muhammed Naseel
- Location: Bangalore, India (originally from Kerala)
- Email: mhdnaseel521@gmail.com | Phone: +91 9072131343
- LinkedIn: linkedin.com/in/mhdnaseel | GitHub: github.com/mhdnaseeel
- Title: Java Full Stack Developer | Spring Boot • Microservices • React.js

WORK EXPERIENCE:
1. Junior Java Developer at TrickyDot Technologies Pvt. Ltd (July 2024 – November 2025, Kerala)
   - Cloud-based enterprise solutions using Spring Boot microservices on AWS, 500+ concurrent requests, 99.9% uptime, 40% response time reduction
   - OAuth2.0, OIDC, JWT with Spring Security — 95% reduction in unauthorized access across 3 production apps
   - RESTful APIs with PostgreSQL and Redis caching
   - CI/CD pipelines (Jenkins/Git) — deployment time reduced from 45 to 10 minutes
   - PostgreSQL optimization: query tuning, indexing, connection pooling — 45% improvement in complex queries

2. Junior Java Developer Intern at TrickyDot Technologies (January 2024 – June 2024)
   - 15+ RESTful API endpoints, 10K+ daily requests
   - React.js and Angular frontends with backend integration
   - Test coverage: 65% → 85% using JUnit/Mockito, 40+ critical bugs resolved
   - Spring Data JPA — 60% reduction in boilerplate code

TECHNICAL SKILLS:
- Languages: Java, Python, Kotlin, TypeScript, JavaScript, HTML, CSS, Solidity
- AI/LLM: OpenAI, Claude
- Backend: Spring Boot, Spring Data JPA, Hibernate, FastAPI, Node.js, Socket.IO
- Frontend: React.js, Angular, HTML5, CSS3
- Cloud & DevOps: AWS, Azure, Docker, Kubernetes, Firebase, Jenkins, Maven, Gradle, Nginx, Git
- Security: Spring Security, OAuth2.0, JWT
- Databases: PostgreSQL, MySQL, MongoDB, Redis

FEATURED PROJECTS:
1. Multi-Tenant HR & Payroll System — Enterprise SaaS with Dynamic Datasource Routing, OAuth2.0/OIDC, Azure AI, Redis caching (800ms→250ms). Tech: Java, Spring Boot, PostgreSQL, Redis, Azure, Docker
2. PinBridge — E2E encrypted OTP mirroring (AES-256-GCM), Android↔Chrome, Socket.IO + Firebase. Tech: Kotlin, Node.js, Firebase, Socket.IO, Redis
3. NexCart — Full-stack e-commerce with Spring Boot 3 + React 18 + Stripe. Tech: Java, React, Redux, PostgreSQL, Stripe
4. Emergency Response System — Live ambulance tracking with WebSockets + Google Maps, 30% faster response. Tech: Spring Boot, WebSockets, PostgreSQL

SERVICES: Enterprise Software Dev | Full-Stack Web Apps | Cloud Infrastructure

RULES:
1. Only discuss Naseel's professional experience, skills, projects, and career
2. Don't make up information — redirect to contact if unsure
3. For salary questions, politely redirect to direct contact
4. Be helpful for recruiters, hiring managers, and fellow developers
5. Suggest relevant projects when answering technical questions
6. Encourage reaching out via email/LinkedIn for availability questions`;

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

      // Add actual error message as assistant response so we can debug it
      const errorAssistantMessage: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: `⚠️ Error: ${errorMessage}`,
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
