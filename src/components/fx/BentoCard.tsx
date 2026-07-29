import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BentoTone = "cyan" | "ink" | "pale" | "slate" | "navy" | "white";

const tones: Record<BentoTone, { bg: string; title: string; kicker: string }> = {
  cyan: { bg: "bg-[#0E7490]", title: "text-white", kicker: "text-cyan-100/70" },
  navy: { bg: "bg-[#0B1424]", title: "text-white", kicker: "text-slate-400" },
  ink: { bg: "bg-[#0F172A]", title: "text-white", kicker: "text-slate-400" },
  slate: { bg: "bg-slate-700", title: "text-white", kicker: "text-slate-400" },
  pale: { bg: "bg-slate-100", title: "text-foreground", kicker: "text-slate-500" },
  white: { bg: "bg-white border border-slate-200", title: "text-foreground", kicker: "text-slate-500" },
};

interface BentoCardProps {
  title: string;
  kicker: string;
  tone: BentoTone;
  children: ReactNode;
  className?: string;
  /** Tarjeta destacada: más alta y con título más grande */
  big?: boolean;
}

/**
 * Tarjeta bento: el arte ocupa toda la superficie y el título flota encima.
 * Es lo que hace que la pieza se lea como producto y no como diapositiva.
 */
export const BentoCard = ({ title, kicker, tone, children, className, big }: BentoCardProps) => {
  const t = tones[tone];
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-2xl transition-shadow duration-300",
        t.bg,
        big ? "min-h-[30rem]" : "min-h-[15rem]",
        className,
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 z-10", big ? "p-5" : "p-4")}>
        <p className={cn("font-display font-bold leading-snug", big ? "text-xl" : "text-lg", t.title)}>{title}</p>
        <p className={cn("text-xs", t.kicker)}>{kicker}</p>
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

/** Contenedor del arte: se ancla abajo y deja aire para el título flotante. */
export const BentoArt = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("flex h-full flex-col justify-end p-4 pt-[4.5rem]", className)}>{children}</div>
);

export default BentoCard;
