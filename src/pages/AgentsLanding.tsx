import heroWave from "@/assets/hero-wave.png";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, Brain, Lightbulb, Clock, Database, Users, FileText, Zap, BarChart, CheckCircle2, XCircle, ChevronDown, ChevronUp, MessageSquare, Shield, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

import DemoChat from "@/components/DemoChat";
import WspDemo from "@/components/WspDemo";

const AgentsLanding = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeScenario, setActiveScenario] = useState<"ecommerce" | "saas" | "fintech">("ecommerce");

    return (
        <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden dark">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-40 md:pt-48 md:pb-60 overflow-hidden">
                {/* Dot Grid Background */}
                <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20 pointer-events-none"></div>

                {/* Meteors Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <Meteors number={30} />
                </div>

                {/* Hero Wave Background Image */}
                <div className="absolute bottom-0 left-0 w-full z-0 h-[60%] flex items-end">
                    <img
                        src={heroWave}
                        alt="Horizon"
                        className="w-full h-full object-cover object-top opacity-80 mix-blend-screen"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="text-left">
                            {/* Headline */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                                <span className="block text-slate-200">¿Cuánto le cuesta a tu empresa</span>
                                <span className="block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent opacity-90">
                                    no estar cuando un cliente quiere comprar?
                                </span>
                            </h1>

                            {/* Subtext */}
                            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
                                Te ayudamos a estar presente en el segundo exacto en que te necesitan. Transformamos la información de tu negocio en un asistente inteligente que elimina las esperas.
                            </p>

                            {/* Single Button - Aligned Left */}
                            <div className="flex justify-start">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-lg font-medium px-10 py-7 rounded-full shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] transition-all hover:scale-105"
                                    onClick={() => setIsDemoOpen(true)}
                                >
                                    Agendar una Demo
                                </Button>
                            </div>
                        </div>

                        {/* Right Column: WhatsApp Demo */}
                        <div className="flex justify-center lg:justify-end relative">
                            {/* Glow effect behind phone */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                            <WspDemo />
                        </div>
                    </div>


                    {/* Divider / Why Us Text */}
                    <div className="text-center mb-16 relative z-20">
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-indigo-300 uppercase bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                            Confía en nosotros
                        </div>
                        <h2 className="text-xl md:text-3xl font-medium text-slate-200 max-w-3xl mx-auto leading-relaxed">
                            No solo implementamos tecnología; construimos tu siguiente ventaja competitiva.
                        </h2>
                    </div>

                    {/* Value Proposition Cards - Moved Inside Hero */}
                    <div className="grid md:grid-cols-3 gap-6 text-left relative z-20">
                        {/* Card 01 */}
                        <div className="bg-[#0B0F19] border border-white/5 p-8 rounded-xl relative hover:border-indigo-500/30 transition-all duration-300 group flex flex-col h-full hover:shadow-2xl hover:shadow-indigo-500/10">
                            <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300 border border-indigo-500/20">
                                <Zap className="w-8 h-8 text-indigo-400" />
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-xl font-bold mb-3 text-white">Respuesta Instantánea 24/7</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    No pierdas ni una venta por falta de respuesta. Tu empresa presente en el segundo exacto en que el cliente decide preguntar.
                                </p>
                            </div>
                        </div>

                        {/* Card 02 */}
                        <div className="bg-[#0B0F19] border border-white/5 p-8 rounded-xl relative hover:border-indigo-500/30 transition-all duration-300 group flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/10">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20">
                                <Shield className="w-8 h-8 text-blue-400" />
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-xl font-bold mb-3 text-white">Precisión Garantizada</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    Sin errores ni inventos. El asistente responderá exactamente lo que tú quieras que responda, utilizando exclusivamente tu información oficial.
                                </p>
                            </div>
                        </div>

                        {/* Card 03 */}
                        <div className="bg-[#0B0F19] border border-white/5 p-8 rounded-xl relative hover:border-indigo-500/30 transition-all duration-300 group flex flex-col h-full hover:shadow-2xl hover:shadow-purple-500/10">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20">
                                <Target className="w-8 h-8 text-purple-400" />
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-xl font-bold mb-3 text-white">Entrenado para Convertir</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    No solo responde dudas; está diseñado con la expertís necesaria para guiar al cliente hacia la compra y cerrar oportunidades de negocio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Curved Horizon Glow Effect via CSS */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#030712] to-transparent pointer-events-none blur-3xl z-0"></div>
                <div className="absolute -bottom-1 left-0 w-full h-32 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
            </section>

            {/* Section 3: The Problem (PAS) */}
            <section className="py-24 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">El costo invisible de la atención tradicional</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Tus clientes viven en el ahora. Tu soporte sigue en el pasado.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Problem Card 1 */}
                        <div className="bg-[#0B0F19] p-8 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-all group">
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">La Trampa del Volumen</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Tu equipo pasa el 80% de su tiempo respondiendo las mismas 10 preguntas. El talento humano se desperdicia en tareas robóticas.
                            </p>
                        </div>

                        {/* Problem Card 2 */}
                        <div className="bg-[#0B0F19] p-8 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-all group">
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">La Espera que Mata Ventas</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Los clientes modernos no esperan. Cada minuto en cola es una oportunidad para que se vayan a la competencia.
                            </p>
                        </div>

                        {/* Problem Card 3 */}
                        <div className="bg-[#0B0F19] p-8 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-all group">
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
                                <Database className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Datos Desconectados</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Tener los datos del cliente en un silo y el chat en otro hace imposible la personalización real.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: The Solution */}
            <section className="py-24 bg-[#050810] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
                            Blue Analytics Mechanism
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Más que un Chatbot. Tu mejor colaborador.</h2>
                    </div>

                    <div className="space-y-24">
                        {/* Feature 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
                                <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-8 relative z-10 aspect-video flex flex-col items-center justify-center text-center">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                            <FileText className="w-4 h-4 text-indigo-400" /> PDFs
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                            <Database className="w-4 h-4 text-blue-400" /> Sitios Web
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                            <Brain className="w-4 h-4 text-purple-400" /> Manuales de Venta
                                        </div>
                                        <div className="text-green-400 text-sm font-bold mt-2 pt-2 border-t border-white/5 flex items-center justify-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Conectados
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <FileText className="text-indigo-400" /> Toda tu empresa en su memoria
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    El agente aprende de tus documentos, sitios web y manuales en minutos. Responde con la autoridad de un experto y la precisión de tu información oficial, sin inventar nada.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Brain className="text-indigo-400" /> Imposible notar que no es humano
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Entrenado para entender tonos, matices y contextos reales. Tus clientes sentirán que hablan con un profesional que resuelve sus problemas al instante, logrando una fluidez natural en cada chat.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                                <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-8 relative z-10 aspect-video flex items-center justify-center">
                                    <div className="bg-indigo-600 text-white p-6 rounded-2xl rounded-bl-none shadow-xl max-w-xs relative">
                                        <p className="text-lg font-medium">"Gracias por la ayuda, ¡qué rápido contestas! 🙌"</p>
                                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-indigo-600 transform rotate-45"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"></div>
                                <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-8 relative z-10 aspect-video flex items-center justify-center">
                                    <Button
                                        size="lg"
                                        className="bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-bold px-12 py-8 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all hover:scale-105"
                                    >
                                        Actualizar Agente
                                    </Button>

                                    {/* Simulated mouse cursor */}
                                    <div className="absolute bottom-1/3 right-1/3 w-6 h-6 z-20 pointer-events-none">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white drop-shadow-md">
                                            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19138L23.0212 16.8829H14.4891L11.5369 22.3168L7.59765 20.2078L10.5186 14.8698L5.65376 12.3673Z" fill="currentColor" stroke="black" strokeWidth="1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Zap className="text-indigo-400" /> Contrólalo tú, sin programar
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Gestiona y actualiza tu agente con un clic, sin depender de ingenieros. Puedes subir nuevos archivos o ajustar el estilo de respuesta fácilmente, manteniendo el control total de tu tecnología.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section 6: Interactive Demo */}
            <section className="py-24 bg-[#050810]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Pruébalo ahora mismo</h2>
                        <p className="text-slate-400">Selecciona un escenario y mira cómo responde el agente.</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="flex justify-center gap-4 mb-8">
                            {[
                                { id: "ecommerce", label: "E-commerce" },
                                { id: "saas", label: "SaaS" },
                                { id: "fintech", label: "Fintech" }
                            ].map((scen) => (
                                <button
                                    key={scen.id}
                                    onClick={() => setActiveScenario(scen.id as any)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeScenario === scen.id
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                                        : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                                        }`}
                                >
                                    {scen.label}
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Demo Chat Component */}
                        <DemoChat scenario={activeScenario} />
                    </div>
                </div>
            </section>

            {/* Section 7: FAQ */}
            <section className="py-24 relative z-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "¿Es seguro para mis datos?", a: "Absolutamente. Utilizamos encriptación de grado bancario y no utilizamos tus datos para entrenar modelos públicos. Tu información es tuya." },
                            { q: "¿Qué pasa si la IA se equivoca?", a: "Implementamos 'Human Handover'. Si el agente detecta baja confianza o frustración en el usuario, transfiere la conversación inmediatamente a un humano, con todo el contexto." },
                            { q: "¿Necesito saber programar?", a: "No. Nuestra plataforma es 100% No-Code. Si puedes subir un archivo PDF, puedes entrenar a tu agente." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#0B0F19] border border-white/5 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-medium text-slate-200">{item.q}</span>
                                    {openFaq === idx ? <ChevronUp className="text-indigo-400" /> : <ChevronDown className="text-slate-500" />}
                                </button>
                                {openFaq === idx && (
                                    <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Final CTA */}
            <section className="py-32 relative text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Deja de perder tickets hoy.</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Únete a las empresas que ya automatizan su éxito con Blue Analytics.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-indigo-950 hover:bg-slate-200 text-lg font-bold px-10 py-6 rounded-full shadow-2xl transition-all hover:scale-105"
                        onClick={() => setIsDemoOpen(true)}
                    >
                        Empieza Gratis
                    </Button>
                </div>
            </section>

            <ContactModal
                isOpen={isDemoOpen}
                onClose={() => setIsDemoOpen(false)}
            />

            <Footer variant="dark" />
        </div>
    );
};

export default AgentsLanding;
