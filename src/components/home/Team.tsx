import { Linkedin, Mail } from "lucide-react";
import GlowCard from "@/components/fx/GlowCard";
import SectionIntro from "@/components/fx/SectionIntro";
import { Stagger, StaggerItem } from "@/components/fx/Reveal";
import javierImg from "../../imgs/javier.jpeg";
import rodrigoImg from "../../imgs/rodrigo.jpeg";
import nicolasImg from "../../imgs/nicolas.jpeg";

const team = [
  {
    name: "Javier R.",
    role: "CEO & Co-Founder",
    img: javierImg,
    linkedin: "https://www.linkedin.com/in/javier-richards-valenzuela",
    email: "mailto:richards.javier@gmail.com",
    bio: "El radar de negocio del equipo. Define qué vale la pena construir y qué no, para que la inversión en datos vuelva multiplicada.",
  },
  {
    name: "Rodrigo R.",
    role: "Lead ML Engineer",
    img: rodrigoImg,
    linkedin: "https://www.linkedin.com/in/rrichards95/",
    email: "mailto:rodrigo.a.richards@gmail.com",
    bio: "Experto en gobernar el caos de los datos. Transforma ideas ambiciosas en modelos que funcionan de verdad y a escala industrial.",
  },
  {
    name: "Nicolas S.",
    role: "COO & Co-Founder",
    img: nicolasImg,
    linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-s%C3%A1ez-orellana-1b277a106/",
    email: "mailto:nicolas.saez@uc.cl",
    bio: "El maestro de la ejecución y antídoto contra los proyectos que se desvían. Entregas documentadas, a tiempo y en presupuesto.",
  },
];

const Team = () => (
  <section id="team" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionIntro
        eyebrow="El equipo"
        title="Seniority técnico,"
        titleAccent="foco en negocio."
        subtitle="Un equipo compacto que combina ingeniería sólida con obsesión por el resultado."
        className="mb-14"
      />

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

export default Team;
