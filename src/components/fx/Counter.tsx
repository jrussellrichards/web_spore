import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  /** Final value to count up to */
  value: number;
  /** Rendered before the number, e.g. "+" or "-" */
  prefix?: string;
  /** Rendered after the number, e.g. "%" or "h" */
  suffix?: string;
  /** Decimal places to keep while formatting */
  decimals?: number;
  duration?: number;
  className?: string;
}

/** Number that counts up from 0 when it scrolls into view. */
const Counter = ({ value, prefix = "", suffix = "", decimals = 0, duration = 1.8, className }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const format = (v: number) =>
      `${prefix}${v.toLocaleString("es-CL", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;

    if (reduce) {
      el.textContent = format(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, decimals, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default Counter;
