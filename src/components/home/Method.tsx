import { motion } from "framer-motion";
import SectionIntro from "@/components/fx/SectionIntro";
import { Stagger, StaggerItem } from "@/components/fx/Reveal";

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

const Method = () => (
  <section id="framework" className="relative overflow-hidden py-24">
    <div
      aria-hidden
      className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)]"
    />

    <div className="container relative z-10 mx-auto px-4">
      <SectionIntro
        eyebrow="Nuestro método"
        title="Casi siempre se elige la tecnología"
        titleAccent="antes que el problema."
        subtitle="Nosotros invertimos el orden. Cada etapa tiene entregables concretos y un criterio para seguir o parar — y si no hay un caso de negocio rentable a la vista, no implementamos."
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
