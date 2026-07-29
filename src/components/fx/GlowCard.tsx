import { ReactNode, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** Radius of the cursor-following glow, in px */
  glowSize?: number;
}

/**
 * Card with a cursor-following radial glow on its border + surface
 * (the Linear/Aceternity "spotlight card" pattern, CSS-variable driven).
 */
const GlowCard = ({ children, className, glowSize = 320 }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        "group/glow relative overflow-hidden rounded-2xl border border-slate-200 bg-card shadow-[0_1px_3px_rgba(15,23,42,0.04)]",
        "transition-all duration-300 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgba(15,23,42,0.16)]",
        className,
      )}
      style={{ "--glow-size": `${glowSize}px` } as React.CSSProperties}
    >
      {/* Cursor-following glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100"
        style={{
          background:
            "radial-gradient(var(--glow-size) circle at var(--glow-x, 50%) var(--glow-y, 50%), hsl(192 80% 45% / 0.08), transparent 65%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default GlowCard;
