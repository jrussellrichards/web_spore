import { ArrowRight, ArrowUpRight, CalendarClock, Check, Headset, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import GlowCard from "@/components/fx/GlowCard";
import SectionIntro from "@/components/fx/SectionIntro";
import { Stagger, StaggerItem } from "@/components/fx/Reveal";
import { whatsappUrl } from "@/lib/whatsapp";

const products = [
  {
    id: "vendedor",
    icon: ShoppingCart,
    name: "El Vendedor",
    tagline: "Tu mejor vendedor, despierto 24/7.",
    featured: true,
    tasks: [
      "Responde en segundos por WhatsApp e Instagram",
      "Cotiza con tu stock y precios reales",
      "Reserva, agenda y registra pedidos",
      "Hace seguimiento hasta el cierre",
    ],
    connects: ["WhatsApp", "Instagram", "Tu ERP / stock", "Pagos"],
    cta: { label: "Ver en detalle", to: "/agents" },
  },
  {
    id: "soporte",
    icon: Headset,
    name: "El de Soporte",
    tagline: "Resuelve lo repetido; tu equipo, lo importante.",
    featured: false,
    tasks: [
      "Responde las preguntas frecuentes al instante",
      "Informa estado de pedidos y entregas",
      "Gestiona cambios y devoluciones",
      "Deriva a un humano con todo el contexto",
    ],
    connects: ["WhatsApp", "Correo", "Sistema de pedidos"],
    cta: { label: "Pregunta por este rol", href: whatsappUrl("Hola! Me interesa el agente de soporte.") },
  },
  {
    id: "secretario",
    icon: CalendarClock,
    name: "El Secretario",
    tagline: "El asistente que todo dueño quisiera.",
    featured: false,
    tasks: [
      "Agenda y confirma reuniones",
      "Prepara cotizaciones y reportes",
      "Te recuerda cobros y vencimientos",
      "Resume tu correo y pendientes",
    ],
    connects: ["Google Calendar", "Gmail", "Facturación", "Sheets"],
    cta: { label: "Pregunta por este rol", href: whatsappUrl("Hola! Me interesa el agente secretario.") },
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionIntro
          eyebrow="Los empleados"
          title="Elige a tu próximo"
          titleAccent="empleado digital."
          subtitle="Cada uno llega entrenado con tu información, conectado a tus sistemas y con tareas concretas. Operando en 2 a 3 semanas."
          className="mb-14 md:mb-16"
        />

        <Stagger className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3" gap={0.1}>
          {products.map((p) => (
            <StaggerItem key={p.id} className="h-full">
              <GlowCard
                className={`h-full ${p.featured ? "border-accent/50 shadow-[0_16px_48px_-20px_rgba(14,116,144,0.25)]" : ""}`}
              >
                <div className="flex h-full flex-col p-7">
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-600/20 bg-cyan-50 text-accent">
                      <p.icon className="h-6 w-6" />
                    </div>
                    {p.featured && (
                      <span className="rounded-full border border-cyan-600/25 bg-cyan-50 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-accent">
                        El más pedido
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{p.tagline}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {p.tasks.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm leading-snug text-slate-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-live" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-400">
                      Se conecta con
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.connects.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[0.65rem] text-slate-500"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    {"to" in p.cta ? (
                      <Link
                        to={p.cta.to!}
                        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-cyan-800"
                      >
                        {p.cta.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <a
                        href={p.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-cyan-800"
                      >
                        {p.cta.label}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}

          {/* Oferta secundaria: software a medida */}
          <StaggerItem className="md:col-span-3">
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 md:flex-row">
              <p className="text-center text-sm text-slate-600 md:text-left">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">además</span>
                {"  "}
                ¿Necesitas algo más grande? También construimos software a medida, análisis de datos y plataformas completas.
              </p>
              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-cyan-800"
              >
                Cuéntanos tu proyecto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};

export default ProductsSection;
