import { Shield, TrendingUp, Users } from "lucide-react";
import Counter from "@/components/fx/Counter";
import SectionIntro from "@/components/fx/SectionIntro";
import { Reveal, Stagger, StaggerItem } from "@/components/fx/Reveal";

const stats = [
  { value: 2200, suffix: " h", prefix: "", label: "horas liberadas al año", icon: Users },
  { value: 90, suffix: "%", prefix: "−", label: "errores operativos", icon: Shield },
  { value: 300, suffix: "%", prefix: "+", label: "retorno en el primer año", icon: TrendingUp },
];

const Impact = () => (
  <section id="cases" className="relative overflow-hidden py-24">
    <div aria-hidden className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-cyan-200/25 blur-[130px]" />

    <div className="container relative z-10 mx-auto px-4">
      <SectionIntro
        eyebrow="Caso de éxito"
        title="Resultados reales,"
        titleAccent="medidos en producción."
        subtitle="Una empresa regional que pasó de procesos manuales a una operación asistida por IA."
        className="mb-14"
      />

      <div className="mx-auto max-w-5xl">
        {/* Panel de métricas en ventana técnica */}
        <Reveal>
          <div className="tech-window overflow-hidden rounded-2xl shadow-[0_32px_72px_-28px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
              </div>
              <p className="font-mono text-[0.65rem] tracking-wider text-slate-500">impacto / año 1</p>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-emerald-400/90">live</span>
              </div>
            </div>

            <div className="grid divide-y divide-white/[0.07] md:grid-cols-3 md:divide-x md:divide-y-0">
              {stats.map((stat) => (
                <div key={stat.label} className="group px-8 py-9 text-center">
                  <stat.icon className="mx-auto mb-4 h-5 w-5 text-cyan-400/70 transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-display text-4xl font-bold text-white md:text-5xl">
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.15em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Desafío y solución */}
        <Stagger className="mt-6 grid gap-6 md:grid-cols-2" gap={0.15}>
          <StaggerItem>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 transition-colors hover:border-red-300">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-red-500">El desafío</p>
              <p className="leading-relaxed text-slate-600">
                Altos costos y demoras por procesos manuales, tareas repetitivas y análisis que tomaban
                días, limitando la capacidad de respuesta del equipo.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 transition-colors hover:border-accent/40">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Nuestra solución</p>
              <p className="leading-relaxed text-slate-600">
                Automatización de las tareas repetidas, modelos que procesan la información en tiempo
                real y agentes que resuelven las consultas frecuentes sin intervención humana.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </div>
  </section>
);

export default Impact;
