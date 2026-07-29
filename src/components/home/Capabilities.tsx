import { motion } from "framer-motion";
import { ArrowUpRight, Check, FileText, GraduationCap, ScanLine } from "lucide-react";
import { Link } from "react-router-dom";
import SectionIntro from "@/components/fx/SectionIntro";
import { BentoCard as Card, BentoArt as Art } from "@/components/fx/BentoCard";
import { Stagger, StaggerItem } from "@/components/fx/Reveal";

const secondary = [
  "Estrategia y priorización de iniciativas IA",
  "MLOps: despliegue y monitoreo",
  "Evaluación de madurez de datos",
  "Gobernanza y prácticas responsables",
];

/** RAG: la respuesta sale de un documento tuyo, con la fuente a la vista. */
const RagArt = () => (
  <Art>
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
      <p className="text-[0.72rem] leading-relaxed text-slate-200">
        “¿Cuál es el plazo de garantía del equipo X?”
      </p>
      <div className="mt-2 border-t border-white/10 pt-2">
        <p className="text-[0.72rem] leading-relaxed text-white">24 meses, contra defectos de fábrica.</p>
        <div className="mt-1.5 flex items-center gap-1.5">
          <FileText className="h-3 w-3 shrink-0 text-cyan-400" />
          <span className="truncate font-mono text-[0.6rem] text-cyan-400">manual-tecnico-v4.pdf · p. 12</span>
        </div>
      </div>
    </div>
  </Art>
);

/** Visión y OCR: campos extraídos de un documento, uno por uno. */
const VisionArt = () => (
  <Art>
    <div className="rounded-xl bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <ScanLine className="h-3.5 w-3.5 text-accent" />
        <span className="font-mono text-[0.58rem] uppercase tracking-wider text-slate-400">factura_8821.pdf</span>
      </div>
      {[
        { k: "RUT", v: "76.383.936-2" },
        { k: "Total", v: "$1.284.900" },
        { k: "Vence", v: "12/08" },
      ].map((f, i) => (
        <motion.div
          key={f.k}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.18 }}
          className="flex items-center justify-between border-t border-slate-100 py-1.5 first:border-0"
        >
          <span className="text-[0.66rem] text-slate-500">{f.k}</span>
          <span className="rounded bg-cyan-50 px-1.5 py-0.5 font-mono text-[0.66rem] font-medium text-accent">
            {f.v}
          </span>
        </motion.div>
      ))}
    </div>
  </Art>
);

/** Agentes: la tarjeta destacada que lleva a la landing. */
const AgentsArt = () => (
  <div className="relative h-full">
    <div aria-hidden className="absolute left-1/2 top-[44%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

    <div className="flex h-full flex-col justify-center px-5 pb-24 pt-20">
      {/* Conversación */}
      <div className="space-y-2">
        <div className="w-fit max-w-[85%] rounded-xl rounded-tl-none bg-white/15 px-3 py-2 text-[0.74rem] text-white backdrop-blur-sm">
          ¿Me pueden cotizar 40 unidades?
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="ml-auto w-fit max-w-[88%] rounded-xl rounded-tr-none bg-white px-3 py-2 text-[0.74rem] text-slate-700 shadow-lg"
        >
          Listo ✅ Cotización #C-2207 enviada a tu correo. ¿La revisamos mañana a las 11?
        </motion.div>
      </div>

      {/* Tareas que ejecuta */}
      <div className="mt-4 space-y-1.5">
        {["Consultó tu stock real", "Generó el documento", "Agendó el seguimiento"].map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.2 }}
            className="flex items-center gap-2"
          >
            <Check className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
            <span className="text-[0.7rem] text-cyan-50/90">{t}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Pie con enlace a la landing */}
    <div className="absolute inset-x-0 bottom-0 p-4">
      <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors group-hover/cap:bg-white/20">
        <span className="text-[0.72rem] font-medium text-white">Conoce los 3 empleados digitales</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-white transition-transform group-hover/cap:-translate-y-0.5 group-hover/cap:translate-x-0.5" />
      </div>
    </div>
  </div>
);

/** Modelos analíticos: una proyección dibujándose. */
const ModelsArt = () => (
  <Art>
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="font-mono text-[0.58rem] uppercase tracking-wider text-slate-400">demanda 12 meses</span>
        <span className="font-mono text-[0.58rem] text-cyan-400">AUC 0.94</span>
      </div>
      <svg viewBox="0 0 200 60" className="h-16 w-full" aria-hidden>
        <defs>
          <linearGradient id="modelArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[15, 30, 45].map((y) => (
          <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
        ))}
        <motion.path
          d="M0,52 C24,48 40,42 60,39 C82,36 96,28 120,24 C146,20 170,12 200,6 L200,60 L0,60 Z"
          fill="url(#modelArea)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        />
        <motion.path
          d="M0,52 C24,48 40,42 60,39 C82,36 96,28 120,24 C146,20 170,12 200,6"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.33, 1, 0.68, 1] }}
        />
      </svg>
    </div>
  </Art>
);

/** Capacitación: el equipo del cliente subiendo de nivel. */
const TrainingArt = () => (
  <Art>
    <div className="rounded-xl bg-white p-3 shadow-sm">
      <div className="mb-2.5 flex items-center gap-2">
        <GraduationCap className="h-4 w-4 text-accent" />
        <span className="text-[0.7rem] font-medium text-slate-700">Tu equipo, autónomo</span>
      </div>
      {[
        { t: "Prompting aplicado", p: 100 },
        { t: "Uso de datos", p: 80 },
        { t: "Automatizaciones", p: 60 },
      ].map((r, i) => (
        <div key={r.t} className="mb-2 last:mb-0">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[0.64rem] text-slate-500">{r.t}</span>
            <span className="font-mono text-[0.58rem] text-slate-400">{r.p}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${r.p}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400"
            />
          </div>
        </div>
      ))}
    </div>
  </Art>
);

const Capabilities = () => (
  <section id="capabilities" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionIntro
        eyebrow="Qué hacemos"
        title="Todo lo que hay entre tus datos"
        titleAccent="y un resultado."
        subtitle="Cinco frentes que solemos combinar en un mismo proyecto. Empezamos por el que te mueve la aguja."
        className="mb-14"
      />

      <Stagger className="mx-auto grid max-w-6xl gap-3 lg:grid-cols-3" gap={0.08}>
        {/* Izquierda */}
        <StaggerItem className="flex flex-col gap-3">
          <Card title="RAG y asistentes de conocimiento" kicker="Tu documentación, respondiendo sola" tone="navy">
            <RagArt />
          </Card>
          <Card title="Visión computacional y OCR" kicker="Documentos que se leen solos" tone="pale">
            <VisionArt />
          </Card>
        </StaggerItem>

        {/* Centro: destacado */}
        <StaggerItem className="h-full">
          <Link to="/empleados-digitales" className="group/cap block h-full">
            <Card
              big
              title="Agentes autónomos"
              kicker="Atienden, venden y ejecutan tareas completas."
              tone="cyan"
              className="bg-gradient-to-br from-[#0E7490] via-[#0E7490] to-[#134E5E] hover:shadow-[0_24px_60px_-24px_rgba(14,116,144,0.6)]"
            >
              <AgentsArt />
            </Card>
          </Link>
        </StaggerItem>

        {/* Derecha */}
        <StaggerItem className="flex flex-col gap-3">
          <Card title="Modelos analíticos" kicker="Segmentación, forecast y recomendación" tone="ink">
            <ModelsArt />
          </Card>
          <Card title="Capacitación y adopción" kicker="Para que no dependas de nosotros" tone="pale">
            <TrainingArt />
          </Card>
        </StaggerItem>

        {/* Servicios de soporte */}
        <StaggerItem className="lg:col-span-3">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="mr-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">además</span>
              {secondary.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </div>
  </section>
);

export default Capabilities;
