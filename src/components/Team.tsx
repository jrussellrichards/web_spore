import { FileCheck, Linkedin, LifeBuoy, Mail, Shield, SlidersHorizontal } from "lucide-react";
import GlowCard from "@/components/fx/GlowCard";
import SectionIntro from "@/components/fx/SectionIntro";
import { Stagger, StaggerItem } from "@/components/fx/Reveal";
import javierImg from "../imgs/javier.jpeg";
import rodrigoImg from "../imgs/rodrigo.jpeg";
import nicolasImg from "../imgs/nicolas.jpeg";

const trust = [
  { icon: Shield, text: "Tu información no entrena modelos públicos" },
  { icon: FileCheck, text: "El agente responde solo con lo que tú apruebas" },
  { icon: LifeBuoy, text: "Derivación a humano siempre disponible, con contexto" },
  { icon: SlidersHorizontal, text: "Lo controlas desde un panel, sin programar" },
];

const team = [
  {
    name: "Javier R.",
    role: "CEO & Co-Founder",
    img: javierImg,
    linkedin: "https://www.linkedin.com/in/javier-richards-valenzuela",
    email: "mailto:richards.javier@gmail.com",
    bio: "Define qué tareas vale la pena automatizar y cuáles no. Su trabajo es que el agente te ahorre plata de verdad, no que sea una demo bonita.",
  },
  {
    name: "Rodrigo R.",
    role: "Lead ML Engineer",
    img: rodrigoImg,
    linkedin: "https://www.linkedin.com/in/rrichards95/",
    email: "mailto:rodrigo.a.richards@gmail.com",
    bio: "Construye y entrena los agentes. Siete años llevando modelos de machine learning a producción — de los que atienden clientes reales, no presentaciones.",
  },
  {
    name: "Nicolas S.",
    role: "COO & Co-Founder",
    img: nicolasImg,
    linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-s%C3%A1ez-orellana-1b277a106/",
    email: "mailto:nicolas.saez@uc.cl",
    bio: "Lidera la implementación: alcance claro, fechas que se cumplen y un piloto que llega a producción en las semanas prometidas.",
  },
];

const Team = () => {
  return (
    <section id="team" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionIntro
          eyebrow="Confianza"
          title="Quién construye — y cómo"
          titleAccent="cuidamos tus datos."
          subtitle="Caras reales, LinkedIn a un clic y reglas de datos por escrito."
          className="mb-14 md:mb-16"
        />

        {/* Reglas de datos */}
        <Stagger className="mx-auto mb-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
          {trust.map((t) => (
            <StaggerItem key={t.text} className="h-full">
              <div className="flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-600/20 bg-cyan-50 text-accent">
                  <t.icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium leading-snug text-slate-700">{t.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.12}>
          {team.map((m) => (
            <StaggerItem key={m.name} className="h-full">
              <GlowCard className="h-full">
                <div className="flex h-full flex-col p-7">
                  <div className="mb-5 flex items-center gap-4">
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="h-16 w-16 rounded-full border-2 border-cyan-600/30 object-cover grayscale transition-all duration-500 group-hover/glow:grayscale-0"
                    />
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{m.name}</h3>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent">{m.role}</p>
                    </div>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-slate-600">{m.bio}</p>

                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} en LinkedIn`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-accent/50 hover:text-accent"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={m.email}
                      aria-label={`Email a ${m.name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-accent/50 hover:text-accent"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Team;
