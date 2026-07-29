import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCheck } from "lucide-react";

export type WspScenario = "vendedor" | "soporte" | "secretario";

type Message = {
    id: string;
    role: "agent" | "user";
    content: string;
    time: string;
};

const conversations: Record<WspScenario, { title: string; messages: Message[] }> = {
    vendedor: {
        title: "Vendedor · Blue",
        messages: [
            { id: "v1", role: "user", content: "Hola! ¿Tienen bomba de agua de 1 HP? ¿A cuánto?", time: "10:42" },
            { id: "v2", role: "agent", content: "¡Hola! 👋 Sí — Bomba periférica 1 HP: $89.990. Quedan 6 unidades en bodega Santiago.", time: "10:42" },
            { id: "v3", role: "agent", content: "¿Te la reservo? Puedo generar el pedido con despacho para mañana.", time: "10:42" },
            { id: "v4", role: "user", content: "Sí, dale. ¿Aceptan transferencia?", time: "10:43" },
            { id: "v5", role: "agent", content: "Perfecto ✅ Pedido #4512 creado en el sistema. Te envié los datos de transferencia y la guía de despacho.", time: "10:43" },
            { id: "v6", role: "user", content: "Excelente, gracias!", time: "10:44" },
            { id: "v7", role: "agent", content: "¡A ti! 🚚 Llega mañana entre 10:00 y 13:00. Quedo atento a lo que necesites, 24/7.", time: "10:44" },
        ],
    },
    soporte: {
        title: "Soporte · Blue",
        messages: [
            { id: "s1", role: "user", content: "Hola, mi pedido #8823 no ha llegado 😠", time: "18:07" },
            { id: "s2", role: "agent", content: "Hola Camila, lo reviso al tiro… Tu pedido #8823 salió hoy a las 9:14 desde bodega y está en reparto. Llega hoy antes de las 20:00. 📦", time: "18:07" },
            { id: "s3", role: "user", content: "Ok… ¿y puedo cambiar la dirección de entrega?", time: "18:08" },
            { id: "s4", role: "agent", content: "Sí. Para cambios de dirección te comunico con Carla de nuestro equipo — ya le pasé tu caso completo para que no tengas que repetir nada.", time: "18:08" },
            { id: "s5", role: "agent", content: "Carla te escribe en ~2 minutos por este mismo chat. 🤝", time: "18:08" },
            { id: "s6", role: "user", content: "Uf, qué rápido. Gracias!", time: "18:09" },
        ],
    },
    secretario: {
        title: "Secretario · Blue",
        messages: [
            { id: "c1", role: "user", content: "¿Qué tengo mañana?", time: "22:31" },
            { id: "c2", role: "agent", content: "Mañana tienes 3 reuniones 📅 — 9:00 Banco (renovación de línea), 11:30 propuesta Constructora Andes, 16:00 entrevista bodeguero. Sin choques de horario.", time: "22:31" },
            { id: "c3", role: "user", content: "Prepárame la cotización para Andes con los precios de julio", time: "22:32" },
            { id: "c4", role: "agent", content: "Listo ✅ Cotización #C-2207 generada con la lista de julio y enviada a tu correo para que la revises.", time: "22:32" },
            { id: "c5", role: "user", content: "Y recuérdame cobrar la factura de Soto", time: "22:33" },
            { id: "c6", role: "agent", content: "Anotado. Factura #1180 de Soto (vencida hace 6 días): te lo recuerdo mañana a las 9:30. Si quieres, le envío yo un recordatorio de pago cortés. ✔️", time: "22:33" },
        ],
    },
};

interface WspDemoProps {
    scenario?: WspScenario;
}

const WspDemo = ({ scenario = "vendedor" }: WspDemoProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const conversation = conversations[scenario];

    useEffect(() => {
        setMessages([]);
        setIsTyping(false);
        const timeouts: ReturnType<typeof setTimeout>[] = [];
        let cumulativeTime = 500;

        conversation.messages.forEach((msg, index) => {
            const readingTimePrevious = index === 0 ? 0 : 800 + msg.content.length * 20;
            const typingTime = msg.role === "agent" ? 600 + msg.content.length * 15 : 0;
            const userReplyDelay = msg.role === "user" ? 1000 : 0;

            const delayBeforeStart = index === 0 ? 0 : msg.role === "agent" ? 400 : readingTimePrevious + userReplyDelay;
            const startActionTime = cumulativeTime + delayBeforeStart;

            if (msg.role === "agent") {
                timeouts.push(setTimeout(() => setIsTyping(true), startActionTime));
                cumulativeTime = startActionTime + typingTime;
            } else {
                cumulativeTime = startActionTime;
            }

            timeouts.push(
                setTimeout(() => {
                    setIsTyping(false);
                    setMessages((prev) => [...prev, msg]);
                }, cumulativeTime),
            );

            cumulativeTime += 300;
        });

        return () => timeouts.forEach(clearTimeout);
    }, [conversation]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
        }
    }, [messages, isTyping]);

    const statusTime = conversation.messages[0]?.time ?? "9:41";

    return (
        <div className="relative mx-auto w-[302px] antialiased">
            {/* Sombra de piso */}
            <div aria-hidden className="absolute -bottom-7 left-1/2 h-10 w-[80%] -translate-x-1/2 rounded-[50%] bg-slate-900/25 blur-xl" />

            {/* Cuerpo titanio */}
            <div className="relative rounded-[3.1rem] bg-gradient-to-b from-slate-400 via-slate-600 to-slate-500 p-[3px] shadow-[0_36px_88px_-28px_rgba(15,23,42,0.55)]">
                {/* Botones laterales */}
                <div aria-hidden className="absolute -left-[2px] top-[108px] h-7 w-[3px] rounded-l-md bg-gradient-to-b from-slate-400 to-slate-600" />
                <div aria-hidden className="absolute -left-[2px] top-[152px] h-11 w-[3px] rounded-l-md bg-gradient-to-b from-slate-400 to-slate-600" />
                <div aria-hidden className="absolute -left-[2px] top-[200px] h-11 w-[3px] rounded-l-md bg-gradient-to-b from-slate-400 to-slate-600" />
                <div aria-hidden className="absolute -right-[2px] top-[168px] h-16 w-[3px] rounded-r-md bg-gradient-to-b from-slate-400 to-slate-600" />

                {/* Bisel negro */}
                <div className="rounded-[2.95rem] bg-black p-[6px]">
                    {/* Pantalla */}
                    <div className="relative flex h-[576px] flex-col overflow-hidden rounded-[2.6rem] bg-[#0b141a]">
                        {/* Dynamic Island */}
                        <div aria-hidden className="absolute left-1/2 top-[10px] z-40 h-[25px] w-[88px] -translate-x-1/2 rounded-full bg-black" />

                        {/* Barra de estado */}
                        <div className="z-30 flex items-center justify-between bg-[#202c33] px-7 pb-0.5 pt-3.5">
                            <span className="w-10 text-[12px] font-semibold tracking-tight text-white">{statusTime}</span>
                            <div className="flex w-10 items-center justify-end gap-1">
                                <svg viewBox="0 0 18 12" className="h-[10px] w-[15px] fill-white" aria-hidden>
                                    <rect x="0" y="8" width="3" height="4" rx="0.8" />
                                    <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
                                    <rect x="10" y="3" width="3" height="9" rx="0.8" />
                                    <rect x="15" y="0" width="3" height="12" rx="0.8" opacity="0.4" />
                                </svg>
                                <svg viewBox="0 0 16 12" className="h-[10px] w-[13px] fill-white" aria-hidden>
                                    <path d="M8 9.6a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM8 5.2c-1.9 0-3.6.77-4.84 2.01l1.42 1.42A4.8 4.8 0 0 1 8 7.2c1.32 0 2.52.53 3.42 1.43l1.42-1.42A6.77 6.77 0 0 0 8 5.2zM8 .8C5 .8 2.28 2 .28 3.99L1.7 5.4A8.75 8.75 0 0 1 8 2.8c2.46 0 4.68 1 6.3 2.61l1.42-1.42A10.72 10.72 0 0 0 8 .8z" />
                                </svg>
                                <svg viewBox="0 0 25 12" className="h-[11px] w-[23px]" aria-hidden>
                                    <rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="white" strokeOpacity="0.4" />
                                    <rect x="2" y="2" width="14" height="8" rx="1.6" fill="white" />
                                    <path d="M23 4v4c1-.3 1.6-1.1 1.6-2s-.6-1.7-1.6-2z" fill="white" fillOpacity="0.4" />
                                </svg>
                            </div>
                        </div>

                        {/* Header WhatsApp */}
                        <div className="z-10 flex items-center gap-2.5 bg-[#202c33] px-3.5 pb-2.5 pt-2 shadow-sm">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[#8696a0] stroke-2" aria-hidden>
                                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 text-xs font-bold text-white">
                                BA
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 key={conversation.title} className="truncate text-[14px] font-semibold leading-tight text-gray-100">
                                    {conversation.title}
                                </h3>
                                <p className="flex items-center gap-1.5 text-[11.5px] leading-tight text-[#8696a0]">
                                    {isTyping ? (
                                        "escribiendo..."
                                    ) : (
                                        <>
                                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            en línea
                                        </>
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pr-1 text-[#8696a0]">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                                    <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </div>
                        </div>

                {/* Chat */}
                <div
                    ref={containerRef}
                    className="scrollbar-hide flex-1 space-y-3 overflow-y-auto p-4"
                    style={{
                        backgroundImage: "radial-gradient(rgba(134,150,160,0.08) 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                    }}
                >
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`relative max-w-[82%] rounded-lg p-2 px-3 text-sm shadow-sm ${
                                        msg.role === "user"
                                            ? "rounded-tr-none bg-[#005c4b] text-[#e9edef]"
                                            : "rounded-tl-none bg-[#202c33] text-[#e9edef]"
                                    }`}
                                >
                                    <p className="text-[13px] leading-relaxed">{msg.content}</p>
                                    <div className="mt-1 flex items-center justify-end gap-1">
                                        <span className="text-[10px] text-[#8696a0]">{msg.time}</span>
                                        {msg.role === "user" && <CheckCheck className="h-3 w-3 text-[#53bdeb]" />}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="rounded-lg rounded-tl-none bg-[#202c33] p-3 shadow-sm">
                                <div className="flex gap-1">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8696a0] [animation-delay:-0.3s]"></span>
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8696a0] [animation-delay:-0.15s]"></span>
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8696a0]"></span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Input fake */}
                <div className="flex items-center gap-2 bg-[#202c33] p-2 px-3">
                    <div className="h-6 w-6 rounded-full bg-[#8696a0]/20"></div>
                    <div className="h-9 flex-1 rounded-lg bg-[#2a3942]"></div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a884]">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-white" aria-hidden>
                            <path d="M3.4 20.4 20.85 12.92c.8-.35.8-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
                        </svg>
                    </div>
                </div>

                        {/* Indicador de inicio iOS */}
                        <div aria-hidden className="flex justify-center bg-[#202c33] pb-2 pt-1.5">
                            <div className="h-1 w-28 rounded-full bg-white/30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WspDemo;
