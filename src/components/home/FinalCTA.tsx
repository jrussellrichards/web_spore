import { ArrowRight, MessageCircle } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/fx/Reveal";

/** Banda de cierre de la home corporativa. */
const FinalCTA = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="tech-window relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-16 text-center shadow-[0_40px_90px_-32px_rgba(15,23,42,0.5)] md:px-16">
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]"
          />
          <div
            aria-hidden
            className="dot-grid absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_100%)]"
          />

          <div className="relative z-10">
            <p className="font-script text-3xl font-semibold text-cyan-300 md:text-4xl">Conversemos</p>
            <h2 className="mx-auto mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              ¿Qué problema quieres resolver primero?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Media hora con nuestro equipo. Salimos de la llamada con tu caso de mayor impacto
              identificado — y si no justifica IA, te lo decimos ahí mismo.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => openCalendly()}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                Agenda un diagnóstico
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={whatsappUrl("Hola! Quiero conversar sobre un proyecto de datos e IA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-slate-200 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </div>

            <p className="mt-6 font-mono text-xs text-slate-500">30 min · sin costo · sin compromiso</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCTA;
