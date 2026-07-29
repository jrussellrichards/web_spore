import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Vertical offset in px the element travels while fading in */
  y?: number;
  /** Animate only the first time it enters the viewport */
  once?: boolean;
  className?: string;
}

/** Fade + rise on scroll into view. The workhorse reveal for every section. */
export const Reveal = ({ children, delay = 0, y = 28, once = true, className }: RevealProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerProps {
  children: ReactNode;
  /** Seconds between each child's entrance */
  gap?: number;
  delay?: number;
  className?: string;
}

/** Container that staggers its <StaggerItem> children on scroll into view. */
export const Stagger = ({ children, gap = 0.1, delay = 0, className }: StaggerProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: gap, delayChildren: delay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
