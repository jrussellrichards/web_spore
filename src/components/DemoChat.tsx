import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, User } from "lucide-react";

type Message = {
    id: string;
    role: "agent" | "user";
    content: string;
};

type ScenarioType = "ecommerce" | "saas" | "fintech";

const scenarios: Record<ScenarioType, Message[]> = {
    ecommerce: [
        { id: "1", role: "agent", content: "¡Hola! 👋 Veo que estás revisando las Nike Air Zoom. ¿Tienes dudas con la talla?" },
        { id: "2", role: "user", content: "Sí, calzo 42 en Adidas, ¿será igual acá?" },
        { id: "3", role: "agent", content: "Nike suele ser un poco más ajustado. El 90% de clientes con tu perfil eligió 42.5 para mayor comodidad. 👟 ¿Te separo esas?" },
        { id: "4", role: "user", content: "Dale. ¿Y cuánto demora el envío a Las Condes?" },
        { id: "5", role: "agent", content: "Si confirmas en los próximos 15 mins, llega mañana AM. 🚚 ¿Procedemos con la tarjeta terminada en 4492?" },
    ],
    saas: [
        { id: "1", role: "agent", content: "Hola Javier, noté que tu equipo exportó 50 reportes hoy manualmente. 📈 ¿Te gustaría automatizar esto?" },
        { id: "2", role: "user", content: "Me encantaría, pierdo 2 horas semanales en eso." },
        { id: "3", role: "agent", content: "Puedo configurar un Workflow para que se envíen solos a tu email cada lunes a las 9:00 AM. ⏳ ¿Te parece bien?" },
        { id: "4", role: "user", content: "Sí, pero necesito filtrar solo las ventas sobre $1000." },
        { id: "5", role: "agent", content: "Entendido. He aplicado el filtro 'Amount > 1000' y configurado el envío. ✅ ¿Activo la automatización ahora?" },
    ],
    fintech: [
        { id: "1", role: "agent", content: "Alerta de Seguridad 🛡️: Detectamos un intento de compra por $499 USD en 'Casino Royal'. ¿Fuiste tú?" },
        { id: "2", role: "user", content: "No!! 😱 Bloquea todo por favor." },
        { id: "3", role: "agent", content: "Tranquilo. Tarjeta bloqueada inmediatamente. ⛔ Tu dinero está seguro. ¿Quieres que emita una tarjeta digital de reemplazo ya mismo?" },
        { id: "4", role: "user", content: "Sí, necesito pagar un Uber ahora." },
        { id: "5", role: "agent", content: "Listo. Tarjeta digital generada y agregada a tu Wallet. 💳 Puedes usarla desde ya. He iniciado el reclamo del fraude." },
    ],
};

const DemoChat = ({ scenario }: { scenario: ScenarioType }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reset conversation when scenario changes
        setMessages([]);
        setIsTyping(true);
        let timeouts: NodeJS.Timeout[] = [];

        const currentScenarioMessages = scenarios[scenario];
        let cumulativeTime = 0;

        currentScenarioMessages.forEach((msg, index) => {
            // Time for typing/thinking
            const typingTime = msg.role === "agent" ? 1000 : 800; // Agent "types" a bit slower/natural, user "replies"
            const readingTime = 1200; // Time user takes to read previous message

            // Step 1: Start typing (if agent) or just wait (if user)
            const delay = index === 0 ? 500 : 1500; // Short delay for first message

            const showMessageTime = cumulativeTime + delay;

            const t1 = setTimeout(() => {
                if (msg.role === "agent") setIsTyping(true);
            }, cumulativeTime);

            const t2 = setTimeout(() => {
                setIsTyping(false);
                setMessages((prev) => [...prev, msg]);
                // Scroll to bottom
                if (containerRef.current) {
                    containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
                }
            }, showMessageTime);

            timeouts.push(t1, t2);
            cumulativeTime = showMessageTime;
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [scenario]);

    // Auto-scroll effect whenever messages change
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isTyping]);


    return (
        <div className="bg-[#0B0F19] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[500px]">
            {/* Header */}
            <div className="bg-slate-900/50 p-4 border-b border-white/5 flex items-center gap-3 backdrop-blur-sm sticky top-0 z-10">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-slate-400 font-mono ml-2 uppercase tracking-wider">
                    {scenario} Assistant_v2.0 • Live
                </span>
            </div>

            {/* Chat Area */}
            <div
                ref={containerRef}
                className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
            >
                <AnimatePresence mode="popLayout">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                        >
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "agent" ? "bg-indigo-500/20 text-indigo-400" : "bg-slate-700 text-slate-300"
                                }`}>
                                {msg.role === "agent" ? <Brain className="w-4 h-4" /> : <User className="w-4 h-4" />}
                            </div>

                            {/* Bubble */}
                            <div className={`p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm ${msg.role === "agent"
                                    ? "bg-indigo-500/10 text-slate-200 rounded-tl-none border border-indigo-500/20"
                                    : "bg-slate-800 text-slate-200 rounded-tr-none border border-white/5"
                                }`}>
                                {msg.content}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                            <Brain className="w-4 h-4" />
                        </div>
                        <div className="bg-indigo-500/10 p-4 rounded-2xl rounded-tl-none border border-indigo-500/20 flex items-center gap-1.5 h-[54px]">
                            <span className="w-2 h-2 bg-indigo-400/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-2 h-2 bg-indigo-400/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-2 h-2 bg-indigo-400/50 rounded-full animate-bounce"></span>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default DemoChat;
