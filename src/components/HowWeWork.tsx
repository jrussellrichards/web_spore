import { motion } from "framer-motion";
import SectionIntro from "@/components/fx/SectionIntro";
import { Reveal, Stagger, StaggerItem } from "@/components/fx/Reveal";

const steps = [
  {
    number: "01",
    week: "Semana 1",
    title: "Diagnóstico y conexión",
    description:
      "Revisamos tu operación, elegimos las tareas que el agente tomará y conectamos tus fuentes de información.",
    deliverables: ["Alcance definido", "Precio fijo conocido", "Datos conectados"],
  },
  {
    number: "02",
    week: "Semana 2",
    title: "Construcción y entrenamiento",
    description:
      "El agente aprende de tu información oficial. Tú revisas cómo responde y ajustamos el tono hasta que te represente.",
    deliverables: ["Agente entrenado", "Tono aprobado por ti", "Pruebas con tu equipo"],
  },
  {
    number: "03",
    week: "Semana 3",
    title: "Piloto en producción",
    description:
      "Opera con clientes reales bajo supervisión. Medimos juntos lo que resuelve y decides si sigue.",
    deliverables: ["Operando con clientes", "Panel de conversaciones", "Tú decides continuar"],
  },
];

const HowWeWork = () => {
  return (
    <section id="how" className="relative overflow-hidden py-28">
      <div aria-hidden className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <SectionIntro
          eyebrow="Cómo trabajamos"
          title="De la primera llamada a"
          titleAccent="producción en 3 semanas."
          subtitle="Sin proyectos eternos ni presupuestos que crecen: un piloto acotado, con precio fijo, que ves funcionando con clientes reales."
          className="mb-14 md:mb-16"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Línea de progreso conectora (desktop) */}
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
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                      {step.week}
                    </span>
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

          {/* La frase valiente: honestidad como identidad de marca */}
          <Reveal delay={0.2} className="mt-16">
            <div className="mx-auto max-w-3xl rounded-2xl border border-cyan-600/20 bg-cyan-50/60 px-8 py-7 text-center">
              <p className="font-display text-lg font-semibold leading-relaxed text-foreground md:text-xl">
                Si tu caso no justifica IA, te lo decimos en la primera llamada.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Preferimos decirte la verdad hoy antes que cobrarte un proyecto que no te sirve.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
