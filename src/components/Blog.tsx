import { ArrowRight, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import GlowCard from "@/components/fx/GlowCard";
import SectionIntro from "@/components/fx/SectionIntro";
import { Stagger, StaggerItem } from "@/components/fx/Reveal";

const articles = [
  {
    icon: BookOpen,
    tag: "Guía práctica",
    title: "¿Cómo empezar con IA en tu empresa?",
    description: "Guía práctica para priorizar casos de uso y obtener valor rápido.",
    href: "/blog/como-empezar",
  },
  {
    icon: TrendingUp,
    tag: "Ventas & Marketing",
    title: "5 formas de usar tus datos para vender más",
    description: "Estrategias aplicables para equipos comerciales y de marketing.",
    href: "/blog/cinco-formas",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionIntro
          eyebrow="Recursos"
          title="Ideas para"
          titleAccent="decidir mejor."
          subtitle="Artículos prácticos, sin jerga, para entender qué puede hacer la IA por tu negocio."
          className="mb-14 md:mb-16"
        />

        <Stagger className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2" gap={0.15}>
          {articles.map((article) => (
            <StaggerItem key={article.href} className="h-full">
              <Link to={article.href} className="block h-full">
                <GlowCard className="h-full">
                  <div className="flex h-full flex-col p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-600/20 bg-cyan-50 text-accent">
                        <article.icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-400">
                        {article.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover/glow:text-accent md:text-2xl">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{article.description}</p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Leer artículo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/glow:translate-x-1" />
                    </div>
                  </div>
                </GlowCard>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Blog;
