import { motion } from "framer-motion";
import { KeyRound, Sparkles, Target } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";

const tools = ["Claude", "ChatGPT", "Gemini", "Copilot"];

const points = [
  {
    icon: Target,
    title: "Elegimos la herramienta que te sirve",
    text: "No la que nos convenga vender. A veces basta con una licencia bien configurada.",
  },
  {
    icon: KeyRound,
    title: "Dejamos los accesos y reglas claros",
    text: "Qué información puede salir de la empresa y cuál no, definido contigo antes de partir.",
  },
  {
    icon: Sparkles,
    title: "Entrenamos con el trabajo de tu equipo",
    text: "Sus correos, sus informes, sus cotizaciones. No con ejemplos genéricos de internet.",
  },
];

/** Panel de adopción: qué hace hoy cada rol con la herramienta. */
const AdoptionPanel = () => (
  <div className="relative w-full max-w-md">
    <div aria-hidden className="absolute -inset-8 rounded-[2rem] bg-cyan-300/25 blur-3xl" />

    <div className="tech-window relative overflow-hidden rounded-2xl shadow-[0_32px_80px_-28px_rgba(15,23,42,0.5)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
        <p className="font-mono text-[0.65rem] tracking-wider text-slate-500">tu empresa / adopción</p>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
          <span className="font-mono text-[0.62rem] uppercase tracking-wider text-emerald-400/90">activo</span>
        </div>
      </div>

      {/* Herramientas disponibles */}
      <div className="flex flex-wrap gap-2 border-b border-white/[0.07] px-5 py-4">
        {tools.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.4 }}
            className="rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 font-mono text-[0.65rem] text-slate-200"
          >
            {t}
          </motion.span>
        ))}
      </div>

      {/* Qué hace cada área */}
      <div className="divide-y divide-white/[0.07]">
        {[
          { area: "Ventas", antes: "2 h armando propuestas", ahora: "20 min" },
          { area: "Administración", antes: "1 h resumiendo correos", ahora: "10 min" },
          { area: "Operaciones", antes: "media mañana de informes", ahora: "una taza de café" },
        ].map((r, i) => (
          <motion.div
            key={r.area}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.18, duration: 0.5 }}
            className="px-5 py-3.5"
          >
            <p className="text-[0.78rem] font-medium text-white">{r.area}</p>
            <p className="mt-0.5 font-mono text-[0.66rem] text-slate-400">
              <span className="line-through decoration-slate-600">{r.antes}</span>
              <span className="mx-1.5 text-cyan-400">→</span>
              <span className="text-cyan-300">{r.ahora}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const TeamEnablement = () => (
  <section id="equipo-ia" className="relative overflow-hidden py-24">
    <div
      aria-hidden
      className="dot-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_55%_50%_at_50%_50%,#000_40%,transparent_100%)]"
    />

    <div className="container relative z-10 mx-auto px-4">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="font-script text-3xl font-semibold text-accent md:text-4xl">Tu equipo con IA</p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-5xl">
            Tu gente ya podría estar usando IA.{" "}
            <span className="text-gradient">Hoy.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            No todo se resuelve construyendo. A veces lo que falta es poner una herramienta como Claude,
            ChatGPT o Gemini a disposición de tu equipo, con las reglas correctas, y enseñarles a usarla
            en su trabajo real.
          </p>

          <div className="mt-8 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-600/20 bg-cyan-50 text-accent">
                  <p.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{p.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* La promesa honesta, en vez del multiplicador de siempre */}
          <div className="mt-8 rounded-2xl border border-cyan-600/20 bg-cyan-50/60 px-6 py-5">
            <p className="leading-relaxed text-foreground">
              No te vamos a prometer que tu equipo será “10 veces más productivo”.{" "}
              <span className="font-semibold">
                Sí que en dos semanas esté resolviendo con IA cosas que hoy le toman horas
              </span>{" "}
              — y que sepa cuándo no usarla.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} y={40} className="flex justify-center lg:justify-end">
          <AdoptionPanel />
        </Reveal>
      </div>
    </div>
  </section>
);

export default TeamEnablement;
