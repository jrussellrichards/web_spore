import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";

type Message = {
    id: string;
    role: "agent" | "user";
    content: string;
    time: string;
};

const conversation: Message[] = [
    { id: "1", role: "user", content: "Hola, vi su anuncio en Instagram. Me interesa saber más.", time: "10:23" },
    { id: "2", role: "agent", content: "¡Hola! 👋 Qué bueno que nos escribas. Soy el asistente virtual de Blue Analytics. 🤖", time: "10:23" },
    { id: "3", role: "agent", content: "Para darte la mejor info, ¿cuéntame qué tipo de negocio tienes?", time: "10:23" },
    { id: "4", role: "user", content: "Es una clínica dental. Recibimos muchos mensajes y no damos abasto.", time: "10:24" },
    { id: "5", role: "agent", content: "Entiendo perfecto. 🦷 En el rubro salud, la velocidad es clave para que el paciente no busque otra opción.", time: "10:24" },
    { id: "6", role: "agent", content: "Podemos automatizar la confirmación de horas y responder dudas de precios 24/7. ¿Te hace sentido?", time: "10:24" },
    { id: "7", role: "user", content: "Sí, justo eso necesitamos. ¿Es muy difícil de implementar?", time: "10:25" },
    { id: "8", role: "agent", content: "Para nada. Nos conectamos a su agenda y listo. En 24 horas podría estar funcionando. ⚡", time: "10:25" },
    { id: "9", role: "agent", content: "¿Te gustaría agendar una demo corta para que veas cómo funcionaría en tu clínica?", time: "10:25" },
    { id: "10", role: "user", content: "Sí, me interesa.", time: "10:26" },
    { id: "11", role: "agent", content: "Buenísimo. Tengo disponibilidad mañana a las 11:00 AM o a las 4:00 PM. ¿Cuál te acomoda? 📅", time: "10:26" },
    { id: "12", role: "user", content: "A las 11 por favor.", time: "10:27" },
    { id: "13", role: "agent", content: "Agendado para mañana a las 11:00 AM ✅. Te envié la invitación. ¡Nos vemos!", time: "10:27" },
];

const WspDemo = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages([]); // Clear previous messages to ensure single conversation flow
        let timeouts: NodeJS.Timeout[] = [];
        let cumulativeTime = 500; // Start quicker

        conversation.forEach((msg, index) => {
            // Logic for timing
            const readingTimePrevious = index === 0 ? 0 : 800 + (msg.content.length * 20); // Simulate reading previous msg
            const typingTime = msg.role === "agent" ? 600 + (msg.content.length * 15) : 0; // Typing duration
            const userReplyDelay = msg.role === "user" ? 1000 : 0; // User thinking time

            const delayBeforeStart = index === 0 ? 0 : (msg.role === "agent" ? 400 : readingTimePrevious + userReplyDelay);

            const startActionTime = cumulativeTime + delayBeforeStart;

            // If agent, start typing animation first
            if (msg.role === "agent") {
                timeouts.push(setTimeout(() => setIsTyping(true), startActionTime));
                cumulativeTime = startActionTime + typingTime;
            } else {
                cumulativeTime = startActionTime;
            }

            // Show message
            timeouts.push(setTimeout(() => {
                setIsTyping(false);
                setMessages((prev) => [...prev, msg]);
            }, cumulativeTime));

            // Add a small pause after message appears before next action logic starts (reading time)
            cumulativeTime += 300;
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    // Auto-scroll
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#0b141a] relative flex flex-col">
                {/* Notch/Dynamic Island area fake */}
                <div className="absolute top-0 w-full h-6 bg-[#202c33] z-20 flex justify-center items-center">
                    <div className="w-20 h-4 bg-black rounded-full"></div>
                </div>

                {/* Header WhatsApp */}
                <div className="bg-[#202c33] px-4 py-3 pt-8 flex items-center gap-3 shadow-sm z-10 cursor-pointer hover:bg-[#2a373f] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                        BA
                    </div>
                    <div className="flex-1">
                        <h3 className="text-gray-100 text-sm font-medium">Blue Agent</h3>
                        <p className="text-[#8696a0] text-xs">
                            {isTyping ? "escribiendo..." : "en línea"}
                        </p>
                    </div>
                </div>

                {/* Chat Area */}
                <div
                    ref={containerRef}
                    className="flex-1 overflow-y-auto p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-opacity-10 scrollbar-hide"
                >
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div className={`max-w-[80%] rounded-lg p-2 px-3 text-sm shadow-sm relative ${msg.role === "user"
                                    ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none"
                                    : "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                                    }`}>
                                    <p className="leading-relaxed text-[13px]">{msg.content}</p>
                                    <div className="flex justify-end items-center gap-1 mt-1">
                                        <span className="text-[10px] text-[#8696a0]">{msg.time}</span>
                                        {msg.role === "user" && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Loading Bubble */}
                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 shadow-sm">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Footer Input Fake */}
                <div className="bg-[#202c33] p-2 px-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#8696a0]/20"></div>
                    <div className="flex-1 bg-[#2a3942] rounded-lg h-9"></div>
                    <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center">
                        <div className="w-4 h-4 bg-white mask-send"></div> {/* Placeholder for send icon */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WspDemo;
