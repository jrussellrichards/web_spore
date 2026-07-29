import { MessageCircle } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/fx/Reveal";

/** Banda de cierre: el propio agente es la prueba (dog-fooding). */
const FinalCTA = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="tech-window relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-16 text-center shadow-[0_40px_90px_-32px_rgba(15,23,42,0.5)] md:px-16">
          {/* Brillo interior sutil */}
          <div aria-hidden className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div
            aria-hidden
            className="dot-grid absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_100%)]"
          />

          <div className="relative z-10">
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs tracking-wide text-emerald-300">agente en línea ahora</span>
            </span>

            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Compruébalo tú mismo, ahora.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Este WhatsApp lo responde nuestro propio agente — el mismo que construiríamos
              para ti. Escríbele lo que quieras.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-[0_0_48px_-10px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_64px_-8px_rgba(37,211,102,0.7)]"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbele por WhatsApp
              </a>
              <button
                onClick={() => openCalendly()}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-slate-200 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                O agenda 30 min con un humano
              </button>
            </div>

            <p className="mt-6 font-mono text-xs text-slate-500">
              responde en segundos · sin formularios · personas disponibles cuando las necesites
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCTA;
