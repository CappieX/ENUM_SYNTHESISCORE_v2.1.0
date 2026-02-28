import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Cpu,
  Hash
} from 'lucide-react';

interface Message {
  id: number;
  role: 'ai' | 'user';
  content: string;
  timestamp: string;
}

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      role: 'ai', 
      content: 'Synthesis Intelligence Online. How can I assist with your project architecture today?', 
      timestamp: new Date().toLocaleTimeString() 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const responses = [
    "I recommend the Fullstack Genesis template for that scale. It includes pre-configured gRPC nodes.",
    "Synthesis matrix updated. I can generate a custom JSON blueprint for your Go-based microservice.",
    "Your current architecture supports up to 50 concurrent modules. Should I optimize the dependency graph?",
    "GitHub orchestration established. I've detected a mismatch in your CI/CD workflow version."
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI delay
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: 'ai',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="h-full flex flex-col gap-6 max-w-5xl mx-auto">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 uppercase flex items-center gap-4">
            AI_ORCHESTRATOR <Sparkles className="text-primary-bright animate-pulse" size={32} />
          </h1>
          <p className="text-text-tertiary text-sm font-medium uppercase tracking-[0.2em]">Neural Synthesis Assistance Active</p>
        </div>
        <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border border-primary-bright/20">
          <Cpu size={16} className="text-primary-bright" />
          <span className="text-[10px] font-black uppercase tracking-widest">Model: Synthesis-Alpha-v4</span>
        </div>
      </header>

      {/* Chat Interface */}
      <div className="flex-1 glass-elevated rounded-[3rem] border border-glass-border flex flex-col overflow-hidden bg-background-surface/20">
        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar scroll-smooth"
        >
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                  msg.role === 'user' ? 'bg-primary-accent/10 border-primary-accent/30 text-primary-accent' : 'bg-primary-bright/10 border-primary-bright/30 text-primary-bright'
                }`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`space-y-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`p-5 rounded-[2rem] text-sm leading-relaxed ${
                    msg.role === 'user' ? 'bg-primary-accent text-white rounded-tr-none' : 'glass border-white/5 text-text-primary rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                  <p className="text-[8px] font-mono text-text-tertiary uppercase tracking-tighter px-2">
                    {msg.role === 'ai' ? 'CORE_LOG' : 'USER_TX'} // {msg.timestamp}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="glass border-white/5 p-4 rounded-[2rem] rounded-tl-none flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-bounce" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form 
          onSubmit={handleSend}
          className="p-6 bg-white/[0.02] border-t border-white/5 flex gap-4"
        >
          <div className="relative flex-1 group">
            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Ask the orchestrator anything about your architecture..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all placeholder:text-white/20"
            />
          </div>
          <button 
            type="submit"
            className="w-14 h-14 rounded-2xl bg-primary-bright text-background-deep flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-bright/20"
          >
            <Send size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
