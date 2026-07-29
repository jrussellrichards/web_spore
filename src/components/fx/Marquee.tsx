import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Extra classes for the moving track (e.g. gap or duration overrides) */
  trackClassName?: string;
}

/**
 * Infinite horizontal marquee with edge fade. Content is duplicated once,
 * and the `marquee` keyframe translates exactly one copy's width.
 */
const Marquee = ({ children, className, trackClassName }: MarqueeProps) => (
  <div
    className={cn(
      "relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]",
      className,
    )}
  >
    <div className={cn("flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]", trackClassName)}>
      {children}
      {children}
    </div>
  </div>
);

export default Marquee;
