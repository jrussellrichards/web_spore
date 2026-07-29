import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, Check, CheckCheck, Database, FileText, MessageCircle, UserRound } from "lucide-react";
import SectionIntro from "@/components/fx/SectionIntro";
import { Stagger, StaggerItem } from "@/components/fx/Reveal";

/* ————— Marcas de las herramientas que ya usa el cliente ————— */

const WhatsAppMark = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
    <path
      fill="#25D366"
      d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2zm5.8 14.1c-.25.69-1.43 1.32-1.97 1.4-.53.08-1.02.29-3.42-.71-2.88-1.2-4.7-4.15-4.84-4.34-.14-.2-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.36.24-.27.55-.34.73-.34l.53.01c.17 0 .4-.06.62.48l.85 2.06c.07.14.12.31.02.5l-.3.48-.44.48c-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.95 1.07.95 1.98 1.25 2.26 1.39.28.15.45.12.61-.07.17-.2.7-.82.89-1.1.19-.29.37-.24.63-.14l1.8.85c.53.26.88.4 1.01.62.13.22.13 1.26-.12 1.95z"
    />
  </svg>
);

const InstagramMark = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#FEDA75" />
        <stop offset="35%" stopColor="#FA7E1E" />
        <stop offset="65%" stopColor="#D62976" />
        <stop offset="100%" stopColor="#962FBF" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
    <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="4" fill="none" stroke="#fff" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.6" />
    <circle cx="17" cy="7" r="1.1" fill="#fff" />
  </svg>
);

const GmailMark = () => (
  <svg viewBox="0 0 512 384" className="h-5 w-6" aria-hidden>
    <path fill="#4285F4" d="M34.9 384h81.5V186.2L0 98.9v250.2C0 368.4 15.6 384 34.9 384z" />
    <path fill="#34A853" d="M395.6 384h81.5c19.3 0 34.9-15.6 34.9-34.9V98.9l-116.4 87.3V384z" />
    <path fill="#FBBC04" d="M395.6 34.9v151.3L512 98.9V52.4c0-43.1-49.2-67.7-83.7-41.8l-32.7 24.3z" />
    <path fill="#EA4335" d="M116.4 186.2V34.9L256 139.6 395.6 34.9v151.3L256 291z" />
    <path fill="#C5221F" d="M0 52.4v46.5l116.4 87.3V34.9L83.7 10.6C49.1-15.3 0 9.3 0 52.4z" />
  </svg>
);

const CalendarMark = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
    <rect x="3" y="4" width="18" height="17" rx="3" fill="#fff" stroke="#DADCE0" strokeWidth="1" />
    <rect x="3" y="4" width="18" height="4.5" rx="3" fill="#4285F4" />
    <text x="12" y="17.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#4285F4" fontFamily="Inter, sans-serif">
      31
    </text>
  </svg>
);

const SheetsMark = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
    <path fill="#0F9D58" d="M6 2h8l6 6v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
    <path fill="#87CEAC" d="M14 2l6 6h-6V2z" />
    <path fill="#fff" d="M8 12h8v7H8v-7zm1.2 1.2v1.4h2.2v-1.4H9.2zm3.4 0v1.4h2.2v-1.4h-2.2zm-3.4 2.6v1.9h2.2v-1.9H9.2zm3.4 0v1.9h2.2v-1.9h-2.2z" />
  </svg>
);

const tools = [
  { Mark: WhatsAppMark, label: "WhatsApp" },
  { Mark: InstagramMark, label: "Instagram" },
  { Mark: GmailMark, label: "Gmail" },
  { Mark: CalendarMark, label: "Google Calendar" },
  { Mark: SheetsMark, label: "Planillas" },
];

/** Radio de la órbita, en px. Un anillo se dibuja justo aquí para que los
 *  iconos viajen visiblemente sobre él. */
const ORBIT_R = 104;
const ORBIT_SECONDS = 30;

const systems = [
  { Icon: Building2, label: "Tu ERP" },
  { Icon: UserRound, label: "Tu CRM" },
  { Icon: Database, label: "Tus datos" },
];

/* ————— Card base: arte a sangre completa, título flotando encima ————— */

interface CardProps {
  title: string;
  kicker: string;
  tone: "cyan" | "ink" | "pale" | "slate" | "navy";
  children: ReactNode;
  className?: string;
  big?: boolean;
}

const tones: Record<CardProps["tone"], { bg: string; title: string; kicker: string }> = {
  cyan: { bg: "bg-[#0E7490]", title: "text-white", kicker: "text-cyan-100/70" },
  navy: { bg: "bg-[#0B1424]", title: "text-white", kicker: "text-slate-400" },
  ink: { bg: "bg-[#0F172A]", title: "text-white", kicker: "text-slate-400" },
  slate: { bg: "bg-slate-700", title: "text-white", kicker: "text-slate-400" },
  pale: { bg: "bg-slate-100", title: "text-foreground", kicker: "text-slate-500" },
};

const Card = ({ title, kicker, tone, children, className, big }: CardProps) => {
  const t = tones[tone];
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl ${t.bg} ${big ? "min-h-[30rem]" : "min-h-[15rem]"} ${className ?? ""}`}
    >
      <div className={`absolute inset-x-0 top-0 z-10 ${big ? "p-5" : "p-4"}`}>
        <p className={`font-display font-bold leading-snug ${big ? "text-xl" : "text-lg"} ${t.title}`}>{title}</p>
        <p className={`text-xs ${t.kicker}`}>{kicker}</p>
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

/** Contenedor del arte: se ancla abajo y deja aire para el título. */
const Art = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`flex h-full flex-col justify-end p-4 pt-[4.5rem] ${className ?? ""}`}>{children}</div>
);

/* ————— Artes de cada tarjeta ————— */

const IncomingArt = () => (
  <Art>
    <div className="space-y-2">
      <div className="w-fit max-w-[88%] rounded-xl rounded-tl-none bg-white/15 px-3 py-2 text-[0.72rem] leading-snug text-white backdrop-blur-sm">
        ¿Tienen bomba de 1 HP? ¿A cuánto sale?
      </div>
      <div className="ml-auto flex w-fit items-center gap-1.5 rounded-xl rounded-tr-none bg-white/90 px-3 py-2 text-[0.72rem] text-slate-800">
        Leído <CheckCheck className="h-3 w-3 text-cyan-600" />
      </div>
    </div>
    <div className="mt-3 flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/95">
        <WhatsAppMark />
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/95">
        <InstagramMark />
      </div>
      <span className="font-mono text-[0.6rem] text-cyan-100/70">responde en segundos</span>
    </div>
  </Art>
);

const AnswerArt = () => (
  <Art>
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
      <p className="text-[0.72rem] leading-relaxed text-slate-200">
        Bomba periférica 1 HP: <span className="font-semibold text-white">$89.990</span>. Quedan 6 en bodega
        Santiago.
      </p>
      <div className="mt-2 flex items-center gap-1.5 border-t border-white/10 pt-2">
        <FileText className="h-3 w-3 shrink-0 text-cyan-400" />
        <span className="truncate font-mono text-[0.6rem] text-cyan-400">lista-precios-julio.pdf</span>
      </div>
    </div>
    <p className="mt-2 font-mono text-[0.6rem] text-emerald-400">✓ 0 respuestas inventadas</p>
  </Art>
);

const QualifyArt = () => (
  <Art className="space-y-2">
    {[
      { label: "Presupuesto confirmado", ok: true },
      { label: "Compra esta semana", ok: true },
      { label: "Solo está cotizando", ok: false },
    ].map((r) => (
      <div key={r.label} className="flex items-center gap-2.5 rounded-lg bg-white px-3 py-2 shadow-sm">
        <div
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${r.ok ? "bg-emerald-500" : "bg-slate-300"}`}
        >
          <Check className="h-3 w-3 text-white" />
        </div>
        <span className="text-[0.72rem] text-slate-600">{r.label}</span>
      </div>
    ))}
  </Art>
);

/** Card central: todo el ecosistema del cliente orbitando al agente. */
const EcosystemArt = () => (
  <div className="relative h-full">
    {/* Resplandor */}
    <div aria-hidden className="absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

    {/* Anillos — el exterior coincide con el radio de la órbita */}
    {[
      { size: ORBIT_R * 2, border: "border-white/25" },
      { size: 148, border: "border-white/15" },
      { size: 96, border: "border-white/10" },
    ].map((r) => (
      <div
        key={r.size}
        aria-hidden
        className={`absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border ${r.border}`}
        style={{ width: r.size, height: r.size }}
      />
    ))}

    {/* Núcleo: el agente */}
    <motion.div
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-[42%] flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-white shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45)]"
    >
      <span className="font-display text-lg font-bold text-[#0E7490]">BA</span>
      <span className="font-mono text-[0.45rem] uppercase tracking-[0.15em] text-slate-400">agente</span>
    </motion.div>

    {/* Herramientas girando sobre la circunferencia */}
    <div
      className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
      style={{ width: ORBIT_R * 2, height: ORBIT_R * 2 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: ORBIT_SECONDS, repeat: Infinity, ease: "linear" }}
      >
        {tools.map((t, i) => {
          // Posición por layout (no por transform): así el radio es exacto y los
          // iconos caen justo sobre el anillo, sin deformarse al rotar el padre.
          const a = ((2 * Math.PI) / tools.length) * i;
          const x = Math.sin(a) * ORBIT_R;
          const y = -Math.cos(a) * ORBIT_R;
          return (
            <motion.div
              key={t.label}
              title={t.label}
              style={{ left: `calc(50% + ${x}px - 1.375rem)`, top: `calc(50% + ${y}px - 1.375rem)` }}
              // Contra-rotación: cancela el giro de la órbita para que el icono
              // nunca quede de cabeza.
              animate={{ rotate: -360 }}
              transition={{ duration: ORBIT_SECONDS, repeat: Infinity, ease: "linear" }}
              className="absolute flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)]"
            >
              <t.Mark />
            </motion.div>
          );
        })}
      </motion.div>
    </div>

    {/* Sistemas internos, en el pie */}
    <div className="absolute inset-x-0 bottom-0 p-4">
      <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
        <p className="mb-2 text-center font-mono text-[0.58rem] uppercase tracking-[0.18em] text-cyan-50/80">
          y con tus sistemas internos
        </p>
        <div className="flex items-center justify-center gap-2">
          {systems.map((s) => (
            <div
              key={s.label}
              className="flex flex-1 flex-col items-center gap-1 rounded-lg bg-white/10 py-2"
            >
              <s.Icon className="h-4 w-4 text-white" />
              <span className="text-[0.6rem] text-cyan-50/90">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-2.5 text-center text-[0.62rem] leading-snug text-cyan-50/70">
          Sin cambiar lo que ya usas.
        </p>
      </div>
    </div>
  </div>
);

const OrderArt = () => (
  <Art>
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.6rem] text-slate-400">PEDIDO</span>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[0.58rem] text-emerald-400">
          creado
        </span>
      </div>
      <p className="mt-1 font-display text-xl font-bold text-white">#4512</p>
      <div className="mt-2 space-y-1 border-t border-white/10 pt-2 font-mono text-[0.6rem] text-slate-400">
        <p>✓ escrito en tu ERP</p>
        <p>✓ despacho coordinado</p>
      </div>
    </div>
  </Art>
);

const AgendaArt = () => (
  <Art>
    <div className="rounded-xl bg-white p-3 shadow-sm">
      <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-wider text-slate-400">Martes 12</p>
      <div className="grid grid-cols-4 gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded ${i === 5 ? "bg-[#0E7490]" : i % 3 === 0 ? "bg-slate-200" : "bg-slate-100"}`}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-lg bg-cyan-50 px-2.5 py-1.5">
        <Calendar className="h-3 w-3 shrink-0 text-[#0E7490]" />
        <span className="truncate text-[0.66rem] text-slate-700">11:00 — visita a terreno</span>
      </div>
    </div>
  </Art>
);

const HandoffArt = () => (
  <Art>
    <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-sm">
      {[
        { icon: UserRound, title: "Pasó a Carla", desc: "Pidió cambio de dirección" },
        { icon: MessageCircle, title: "Contexto enviado", desc: "Conversación completa" },
      ].map((n) => (
        <div key={n.title} className="flex items-start gap-2.5 py-1.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15">
            <n.icon className="h-3.5 w-3.5 text-white" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[0.72rem] font-medium text-white">{n.title}</p>
            <p className="truncate text-[0.64rem] text-slate-400">{n.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </Art>
);

const FlowBento = () => (
  <section id="flow" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionIntro
        eyebrow="El flujo completo"
        title="De la consulta al pedido cerrado,"
        titleAccent="sin que nadie mueva un dedo."
        subtitle="Así trabaja un empleado digital dentro de tu empresa, paso a paso."
        className="mb-14"
      />

      <Stagger className="mx-auto grid max-w-6xl gap-3 lg:grid-cols-3" gap={0.08}>
        <StaggerItem className="flex flex-col gap-3">
          <Card title="Llega la consulta" kicker="Captación" tone="cyan">
            <IncomingArt />
          </Card>
          <Card title="Responde con tu información real" kicker="Precisión" tone="navy">
            <AnswerArt />
          </Card>
          <Card title="Califica al cliente en 2 minutos" kicker="Calificación" tone="pale">
            <QualifyArt />
          </Card>
        </StaggerItem>

        <StaggerItem className="h-full">
          <Card
            big
            title="Conectado a tus sistemas"
            kicker="Tus canales, tu agenda y tu ERP en un solo lugar."
            tone="cyan"
            className="bg-gradient-to-br from-[#0E7490] via-[#0E7490] to-[#134E5E]"
          >
            <EcosystemArt />
          </Card>
        </StaggerItem>

        <StaggerItem className="flex flex-col gap-3">
          <Card title="Registra el pedido solo" kicker="Sincronización" tone="ink">
            <OrderArt />
          </Card>
          <Card title="Agenda la reunión sola" kicker="Agenda" tone="pale">
            <AgendaArt />
          </Card>
          <Card title="Deriva a un humano con contexto" kicker="Escalamiento" tone="slate">
            <HandoffArt />
          </Card>
        </StaggerItem>
      </Stagger>
    </div>
  </section>
);

export default FlowBento;
