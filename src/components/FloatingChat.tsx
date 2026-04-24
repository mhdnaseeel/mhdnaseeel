import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from 'react';
import { X, Send, Trash2, Sparkles, ArrowDown, Code2, Briefcase, Cpu, Layers, UserCheck, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat, type ChatMessage } from '../hooks/useChat';

const SUGGESTED_QUESTIONS = [
  { text: "Tech Stack", icon: <Code2 className="w-3.5 h-3.5" />, query: "What's your tech stack?" },
  { text: "Projects", icon: <Layers className="w-3.5 h-3.5" />, query: "Tell me about your projects" },
  { text: "Experience", icon: <Briefcase className="w-3.5 h-3.5" />, query: "What's your work experience?" },
  { text: "Performance", icon: <Cpu className="w-3.5 h-3.5" />, query: "How did you optimize API performance?" },
  { text: "Availability", icon: <UserCheck className="w-3.5 h-3.5" />, query: "Are you available for new opportunities?" },
];

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, isLoading, sendMessage, clearMessages } = useChat();

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Detect scroll position for "scroll to bottom" button
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setShowScrollButton(scrollHeight - scrollTop - clientHeight > 100);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const handleSend = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    const msg = inputValue;
    setInputValue('');
    await sendMessage(msg);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = async (question: string) => {
    await sendMessage(question);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatMessage = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="chat-inline-code">$1</code>')
      .replace(/\n/g, '<br />');
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="chat-fab"
            aria-label="Open AI Chat"
            id="chat-fab-button"
          >
            <div className="chat-fab-pulse" />
            <Sparkles className="w-5 h-5 relative z-10" />
            <span className="chat-fab-label">Ask AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="chat-panel"
            id="chat-panel"
          >
            {/* Header */}
            <div className="chat-header">
              <div className="flex items-center gap-3">
                <div className="chat-avatar flex items-center justify-center bg-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <div className="chat-avatar-status" />
                </div>
                <div>
                  <h3 className="chat-header-name">Ask me</h3>
                  <p className="chat-header-status">
                    {isLoading ? 'Thinking...' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearMessages}
                    className="chat-header-btn"
                    aria-label="Clear chat"
                    title="Clear chat"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="chat-header-btn"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className="chat-messages"
            >
              {messages.length === 0 ? (
                <div className="chat-welcome">
                  <div className="chat-welcome-avatar flex items-center justify-center bg-primary/10 mb-4">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="chat-welcome-title">Hi! I'm an AI assistant 🤖. Ask me anything.</h4>
                  <p className="chat-welcome-text mb-6">
                    How can I help you today?
                  </p>
                  <div className="chat-suggestions-grid">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(q.query)}
                        className="chat-suggestion-chip"
                        disabled={isLoading}
                      >
                        {q.icon}
                        <span>{q.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg: ChatMessage) => (
                    <div
                      key={msg.id}
                      className={`chat-message ${msg.role === 'user' ? 'chat-message-user' : 'chat-message-assistant'}`}
                    >
                      <div
                        className={`chat-bubble ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}
                        dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                      />
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isLoading && (
                    <div className="chat-message chat-message-assistant">
                      <div className="chat-bubble chat-bubble-assistant">
                        <div className="chat-typing">
                          <span /><span /><span />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Scroll to bottom button */}
            <AnimatePresence>
              {showScrollButton && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={scrollToBottom}
                  className="chat-scroll-btn"
                  aria-label="Scroll to bottom"
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Input */}
            <form onSubmit={handleSend} className="chat-input-area">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my experience..."
                className="chat-input"
                disabled={isLoading}
                id="chat-input-field"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="chat-send-btn"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
