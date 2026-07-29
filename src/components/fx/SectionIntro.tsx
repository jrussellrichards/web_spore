import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionIntroProps {
  /** Etiqueta manuscrita sobre el titular */
  eyebrow: string;
  /** Primera parte del titular, en tinta */
  title: ReactNode;
  /** Segunda parte del titular, en acento cian */
  titleAccent?: ReactNode;
  subtitle?: ReactNode;
  /** Pestañas opcionales bajo el titular */
  tabs?: string[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
  className?: string;
}

/**
 * Separador de sección: etiqueta manuscrita + titular a dos tonos + pestañas
 * opcionales. Marca el cambio de tema entre bloques de la página.
 */
const SectionIntro = ({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  tabs,
  activeTab,
  onTabChange,
  className,
}: SectionIntroProps) => {
  const [internal, setInternal] = useState(0);
  const current = activeTab ?? internal;
  const select = onTabChange ?? setInternal;

  return (
    <Reveal className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="font-script text-3xl font-semibold text-accent md:text-4xl">{eyebrow}</p>

      <h2 className="mt-2 font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-5xl">
        {title}
        {titleAccent && <span className="text-gradient"> {titleAccent}</span>}
      </h2>

      {subtitle && <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{subtitle}</p>}

      {tabs && tabs.length > 0 && (
        <div className="mt-7 inline-flex rounded-full bg-slate-100 p-1">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => select(i)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                current === i ? "text-white" : "text-slate-500 hover:text-foreground",
              )}
            >
              {current === i && (
                <motion.span
                  layoutId={`tab-pill-${eyebrow}`}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-accent"
                />
              )}
              <span className="relative z-10">{t}</span>
            </button>
          ))}
        </div>
      )}
    </Reveal>
  );
};

export default SectionIntro;
