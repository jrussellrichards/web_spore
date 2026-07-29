import { ArrowUpRight } from "lucide-react";
import Counter from "@/components/fx/Counter";
import SectionIntro from "@/components/fx/SectionIntro";
import { Reveal, Stagger, StaggerItem } from "@/components/fx/Reveal";
import { whatsappUrl } from "@/lib/whatsapp";

const beats = [
  {
    label: "El contexto",
    text: "Una distribuidora regional recibía cientos de consultas por WhatsApp: stock, precios, estado de pedidos. El equipo pasaba el día respondiendo lo mismo y digitando pedidos a mano — con errores que costaban caro.",
  },
  {
    label: "Qué construimos",
    text: "Un agente vendedor conectado a su sistema de pedidos y stock, más la automatización de los documentos que antes se digitaban a mano.",
  },
  {
    label: "Qué cambió",
    text: "Las consultas repetidas dejaron de tocar al equipo, los pedidos se registran solos en el sistema y los errores de digitación prácticamente desaparecieron.",
  },
];

const CaseStory = () => {
  return (
    <section id="case" className="relative overflow-hidden py-28">
      <div className="container relative z-10 mx-auto px-4">
        <SectionIntro
          eyebrow="Caso real"
          title="Así se ve cuando"
          titleAccent="empieza a funcionar."
          className="mb-14 md:mb-16"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Historia */}
          <Stagger className="space-y-8" gap={0.15}>
            {beats.map((b) => (
              <StaggerItem key={b.label}>
                <div className="border-l-2 border-slate-200 pl-6 transition-colors hover:border-accent/60">
                  <p className="mb-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">{b.label}</p>
                  <p className="leading-relaxed text-slate-600">{b.text}</p>
                </div>
              </StaggerItem>
            ))}

            <StaggerItem>
              <a
                href={whatsappUrl("Hola! Mi operación se parece al caso de la distribuidora. Conversemos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-cyan-800"
              >
                ¿Tu operación se parece? Conversemos
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </StaggerItem>
          </Stagger>

          {/* Ventana técnica: la operación en números */}
          <Reveal delay={0.15} y={40}>
            <div className="tech-window overflow-hidden rounded-2xl shadow-[0_32px_72px_-28px_rgba(15,23,42,0.45)]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                </div>
                <p className="font-mono text-[0.65rem] tracking-wider text-slate-500">
                  operación / distribuidora-regional
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-emerald-400/90">live</span>
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/[0.07]">
                <div className="px-7 py-6">
                  <p className="font-display text-4xl font-bold text-white md:text-5xl">
                    <Counter value={2200} suffix=" h" />
                  </p>
                  <p className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-slate-400">
                    al año que el equipo dejó de gastar en tareas repetidas
                  </p>
                </div>
                <div className="px-7 py-6">
                  <p className="font-display text-4xl font-bold text-white md:text-5xl">
                    <Counter value={90} prefix="−" suffix="%" />
                  </p>
                  <p className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-slate-400">
                    errores de digitación en pedidos
                  </p>
                </div>
                <div className="px-7 py-6">
                  <p className="font-display text-4xl font-bold text-white md:text-5xl">24/7</p>
                  <p className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-slate-400">
                    atención — incluidas las consultas de las 11 de la noche
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CaseStory;
