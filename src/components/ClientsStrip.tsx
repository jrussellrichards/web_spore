import { Reveal } from "@/components/fx/Reveal";
import liventusLogo from "@/assets/clients/liventus.png";
import udecLogo from "@/assets/clients/universidad-concepcion.png";
import deSalYEstrellaLogo from "@/assets/clients/de-sal-y-estrella.png";
import codelcoLogo from "@/assets/clients/codelco.svg";
import puntoTicketLogo from "@/assets/clients/puntoticket.svg";

/**
 * `height` está calibrado por densidad de tinta de cada logo, no por su caja:
 * un logo compacto y grueso (Puntoticket, 52% de tinta) pesa mucho más a la
 * misma altura que uno de trazo fino (De Sal y Estrella, 7%). Se renderizan
 * como siluetas para que ninguno domine la franja — uno de los logos es casi
 * blanco y sin esto desaparece sobre el fondo claro.
 */
type Client = { name: string; logo?: string; height?: number; opacity?: number };

const clients: Client[] = [
  { name: "Codelco", logo: codelcoLogo, height: 21 },
  { name: "Constructora del Mar" },
  { name: "Liventus", logo: liventusLogo, height: 33 },
  { name: "TruthInvestment" },
  { name: "Universidad de Concepción", logo: udecLogo, height: 25 },
  { name: "Museo Naturalia" },
  { name: "De Sal y Estrella", logo: deSalYEstrellaLogo, height: 34, opacity: 0.85 },
  { name: "Transportes Delfos" },
  { name: "Puntoticket", logo: puntoTicketLogo, height: 21 },
  { name: "Terrazul" },
];

// La pista lleva 4 copias y se desplaza -50%: el corte cae siempre sobre una
// copia idéntica, así el loop es invisible.
const track = [...clients, ...clients, ...clients, ...clients];

const ClientsStrip = () => (
  <section aria-label="Quienes han confiado en nuestro equipo" className="relative py-14">
    <Reveal>
      <p className="mb-8 text-center text-base text-slate-500">
        Quienes han confiado en nuestro equipo
      </p>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_8%,#000_92%,transparent_100%)]">
        <div className="flex w-max animate-scroll-left items-center whitespace-nowrap hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="mx-7 flex h-10 shrink-0 items-center justify-center"
              style={c.logo ? { width: 130 } : undefined}
              aria-hidden={i >= clients.length}
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={i < clients.length ? c.name : ""}
                  title={c.name}
                  style={{ height: `${c.height}px`, opacity: c.opacity ?? 0.5 }}
                  className="w-auto max-w-full object-contain transition-opacity duration-200 [filter:brightness(0)] hover:!opacity-90"
                />
              ) : (
                <span className="font-display text-lg font-semibold tracking-tight text-slate-400 opacity-90 transition-colors duration-200 hover:text-slate-600">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default ClientsStrip;
