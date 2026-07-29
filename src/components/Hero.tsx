import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { whatsappUrl } from "@/lib/whatsapp";
import WspDemo, { WspScenario } from "@/components/WspDemo";

const headline = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const lineReveal = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

const roles: { id: WspScenario; label: string; hint: string }[] = [
  { id: "vendedor", label: "El Vendedor", hint: "cotiza con tu stock real" },
  { id: "soporte", label: "El de Soporte", hint: "resuelve y deriva con contexto" },
  { id: "secretario", label: "El Secretario", hint: "te organiza el día" },
];

const Hero = () => {
  const [scenario, setScenario] = useState<WspScenario>("vendedor");
  const activeRole = roles.find((r) => r.id === scenario)!;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 md:pt-32">
      {/* Fondo: grid de líneas + brillos suaves */}
      <div
        aria-hidden
        className="line-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_20%,#000_55%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 h-[32rem] w-[32rem] animate-aurora rounded-full bg-cyan-300/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute right-0 top-1/3 h-[28rem] w-[28rem] animate-aurora rounded-full bg-blue-300/25 blur-[130px]"
        style={{ animationDuration: "18s", animationDelay: "-6s" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <div>
            <motion.a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-600/25 bg-cyan-50 px-4 py-1.5 transition-colors hover:border-cyan-600/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              <span className="font-mono text-xs tracking-wide text-accent">
                Nuestro agente está en línea — pruébalo
              </span>
            </motion.a>

            <motion.h1
              variants={headline}
              initial="hidden"
              animate="show"
              className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl xl:text-7xl"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="text-gradient block">
                  Empleados digitales
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span variants={lineReveal} className="block">
                  que trabajan en tu empresa.
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
            >
              Atienden a tus clientes, venden y te organizan el día — conectados a tus sistemas
              y a tu información real. Nada de chatbots de plantilla.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-12px_rgba(15,23,42,0.45)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_48px_-12px_rgba(15,23,42,0.55)]"
              >
                <MessageCircle className="h-5 w-5" />
                Pruébalo por WhatsApp
              </a>
              <button
                onClick={() => openCalendly()}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-base font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:text-accent"
              >
                Agenda 30 min
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
            >
              {[
                "Conectado a tus sistemas",
                "Responde solo con tu información oficial",
                "Deriva a un humano cuando hace falta",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Demo jugable */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Selector de rol */}
            <div className="flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setScenario(r.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scenario === r.id ? "text-white" : "text-slate-600 hover:text-foreground"
                  }`}
                >
                  {scenario === r.id && (
                    <motion.span
                      layoutId="role-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  )}
                  <span className="relative z-10">{r.label}</span>
                </button>
              ))}
            </div>

            <div className="relative">
              {/* Brillo detrás del teléfono */}
              <div aria-hidden className="absolute -inset-10 rounded-full bg-cyan-300/30 blur-[90px]" />
              <WspDemo scenario={scenario} />
            </div>

            <p className="font-mono text-xs text-slate-500">
              Demo — {activeRole.label.toLowerCase()} {activeRole.hint}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#products"
        aria-label="Bajar a la siguiente sección"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-slate-400 transition-colors hover:text-accent md:flex"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em]">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
