import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { openCalendly } from "@/lib/calendly";
import Counter from "@/components/fx/Counter";

const headline = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const lineReveal = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

const stages = [
  { label: "Datos", detail: "ordenados y conectados" },
  { label: "Modelos", detail: "entrenados con lo tuyo" },
  { label: "Agentes", detail: "operando 24/7" },
  { label: "Decisiones", detail: "medidas en el negocio" },
];

/** Panel que muestra la amplitud del trabajo: del dato crudo a la decisión. */
const PipelinePanel = () => (
  <div className="relative w-full max-w-md">
    <div aria-hidden className="absolute -inset-8 rounded-[2rem] bg-cyan-300/25 blur-3xl" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="tech-window relative overflow-hidden rounded-2xl shadow-[0_32px_80px_-28px_rgba(15,23,42,0.5)]"
    >
      {/* Barra de título */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <p className="font-mono text-[0.65rem] tracking-wider text-slate-500">blue-analytics / pipeline</p>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
          <span className="font-mono text-[0.62rem] uppercase tracking-wider text-emerald-400/90">live</span>
        </div>
      </div>

      {/* Etapas */}
      <div className="space-y-2.5 p-5">
        {stages.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
            className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5"
          >
            <span className="font-mono text-[0.65rem] text-cyan-400">{`0${i + 1}`}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.82rem] font-medium text-white">{s.label}</p>
              <p className="truncate text-[0.68rem] text-slate-400">{s.detail}</p>
            </div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 + i * 0.15, type: "spring", stiffness: 300 }}
              className="text-[0.7rem] text-emerald-400"
            >
              ✓
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.07] border-t border-white/[0.07]">
        <div className="px-3 py-3.5 text-center">
          <p className="font-display text-lg font-bold text-white">
            <Counter value={7} suffix="+" />
          </p>
          <p className="font-mono text-[0.55rem] uppercase tracking-wider text-slate-500">años</p>
        </div>
        <div className="px-3 py-3.5 text-center">
          <p className="font-display text-lg font-bold text-white">
            <Counter value={2200} suffix="h" />
          </p>
          <p className="font-mono text-[0.55rem] uppercase tracking-wider text-slate-500">ahorradas/año</p>
        </div>
        <div className="px-3 py-3.5 text-center">
          <p className="font-display text-lg font-bold text-white">24/7</p>
          <p className="font-mono text-[0.55rem] uppercase tracking-wider text-slate-500">en producción</p>
        </div>
      </div>
    </motion.div>
  </div>
);

const Hero = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 md:pt-32">
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
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-600/25 bg-cyan-50 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-live" />
            <span className="font-mono text-xs tracking-wide text-accent">
              Datos e IA aplicada · Chile y LATAM
            </span>
          </motion.div>

          <motion.h1
            variants={headline}
            initial="hidden"
            animate="show"
            className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl xl:text-7xl"
          >
            <span className="block overflow-hidden pb-1">
              <motion.span variants={lineReveal} className="block">
                Tus datos ya saben
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span variants={lineReveal} className="text-gradient block">
                qué hacer.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            Ordenamos tu información, construimos los modelos y ponemos agentes a trabajar con
            ella. Ingeniería de datos e IA que llega a producción, no a una presentación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => openCalendly()}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-12px_rgba(15,23,42,0.45)] transition-all duration-300 hover:scale-[1.02]"
            >
              Agenda un diagnóstico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              to="/empleados-digitales"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-base font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:text-accent"
            >
              Ver empleados digitales
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {[
              "7 años llevando modelos a producción",
              "Equipo senior de punta a punta",
              "Impacto medido en el negocio",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {t}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PipelinePanel />
        </div>
      </div>
    </div>

    <motion.a
      href="#capabilities"
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

export default Hero;
