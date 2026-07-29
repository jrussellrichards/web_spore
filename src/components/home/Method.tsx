import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionIntro from "@/components/fx/SectionIntro";
import Counter from "@/components/fx/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/fx/Reveal";

const steps = [
  {
    number: "01",
    title: "Diagnóstico estratégico",
    description: "Mapa de valor y priorización de casos según impacto potencial y factibilidad técnica.",
    deliverables: ["Mapa de valor", "Caso de negocio", "Hoja de ruta priorizada"],
  },
  {
    number: "02",
    title: "Implementación ágil",
    description: "Desarrollo iterativo, validación temprana y despliegue con foco en seguridad y escalabilidad.",
    deliverables: ["MVP en semanas", "Validación continua", "Despliegue seguro"],
  },
  {
    number: "03",
    title: "Medición de impacto",
    description: "Monitoreo de métricas, atribución y optimización continua sobre el negocio.",
    deliverables: ["Panel de KPIs", "Atribución de valor", "Optimización"],
  },
];

/** Medidor radial: el 85% de los proyectos de IA que no llegan a nada. */
const FailureGauge = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const R = 84;
  const C = 2 * Math.PI * R;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[17rem]">
      <svg viewBox="0 0 200 200" className="w-full -rotate-90" aria-hidden>
        <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="10" />
        <motion.circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={inView ? { strokeDashoffset: C * 0.15 } : {}}
          transition={{ duration: 2, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
        />
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="font-display text-5xl font-bold text-foreground">
          <Counter value={85} suffix="%" duration={2.2} />
        </p>
        <p className="mt-1 max-w-[10rem] text-center font-mono text-[0.6rem] uppercase tracking-wider text-slate-500">
          de los proyectos de IA fracasan
        </p>
        <p className="mt-1 font-mono text-[0.56rem] text-slate-400">fuente: Gartner</p>
      </div>
    </div>
  );
};

const Method = () => (
  <section id="framework" className="relative overflow-hidden py-24">
    <div
      aria-hidden
      className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)]"
    />

    <div className="container relative z-10 mx-auto px-4">
      {/* El problema, antes del método */}
      <div className="mx-auto mb-24 grid max-w-5xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal y={40}>
          <FailureGauge />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-script text-3xl font-semibold text-accent md:text-4xl">El problema</p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-4xl">
            La mayoría de la IA empresarial{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              nunca llega a producción.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Se elige la tecnología antes que el problema. Nosotros invertimos el orden: si no hay un
            caso de negocio rentable y medible a la vista,{" "}
            <span className="font-semibold text-foreground">no implementamos</span>.
          </p>
        </Reveal>
      </div>

      <SectionIntro
        eyebrow="Nuestro método"
        title="Framework de"
        titleAccent="impacto IA."
        subtitle="Tu garantía de valor: cada etapa tiene entregables concretos y un criterio para seguir o parar."
        className="mb-14"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Línea conectora */}
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 md:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.33, 1, 0.68, 1] }}
            className="h-full origin-left bg-gradient-to-r from-cyan-600/70 via-sky-500/70 to-blue-600/70"
          />
        </div>

        <Stagger className="grid gap-10 md:grid-cols-3 md:gap-8" gap={0.18}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-600/30 bg-white font-mono text-sm font-semibold text-accent shadow-[0_4px_16px_-6px_rgba(14,116,144,0.35)] transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>

                <ul className="mt-5 space-y-2">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 font-mono text-xs text-slate-500">
                      <span className="h-1 w-1 rounded-full bg-accent/80" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  </section>
);

export default Method;
