import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import { X, Send, MessageCircle } from "lucide-react";
import { willyChat } from "@/utils/willy-chat.functions";
import willyImg from "@/assets/willy.png";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL_MESSAGE: Msg = {
  role: "assistant",
  content:
    "¡Qué más mi gente! Soy Willy 🎩 tu guía oficial del Son de Calle Fest. Pregúntame lo que quieras del festival… ¡y no olvides asegurar tu boleta! 🎫💃",
};

export default function WillyChat() {
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatFn = useServerFn(willyChat);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg: Msg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await chatFn({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: res.reply }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Algo se enredó. Intenta otra vez 🎶" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (closed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] sm:w-[380px] h-[480px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-salsa-red/90 to-salsa-red border-b border-border">
              <div className="w-10 h-10 rounded-full bg-salsa-yellow/20 overflow-hidden shrink-0 flex items-end justify-center">
                <img src={willyImg} alt="Willy" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading text-lg text-white leading-none">Willy</p>
                <p className="text-xs text-white/80">Tu guía del festival</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Minimizar"
                className="text-white/80 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3 bg-background">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      m.role === "user"
                        ? "bg-salsa-yellow text-salsa-black rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground px-3 py-2 rounded-2xl rounded-bl-sm text-sm">
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce [animation-delay:0.15s]" />
                      <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce [animation-delay:0.3s]" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-card flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Escríbele a Willy..."
                disabled={loading}
                className="flex-1 bg-muted text-foreground px-3 py-2 rounded-full text-sm border border-border focus:outline-none focus:border-salsa-yellow"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Enviar"
                className="w-10 h-10 rounded-full bg-salsa-yellow text-salsa-black flex items-center justify-center disabled:opacity-50 hover:scale-105 transition"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating bubble button */}
      <div className="relative">
        {!open && (
          <button
            onClick={() => setClosed(true)}
            aria-label="Cerrar Willy"
            className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-salsa-black border border-border text-white/80 hover:text-white text-xs flex items-center justify-center z-10 shadow-md"
          >
            <X size={12} />
          </button>
        )}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Abrir chat con Willy"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-salsa-red to-salsa-red/80 shadow-2xl border-2 border-salsa-yellow overflow-hidden flex items-end justify-center"
        >
          {open ? (
            <MessageCircle className="text-white m-auto" size={28} />
          ) : (
            <img src={willyImg} alt="Willy" className="w-full h-full object-cover object-top scale-110" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
