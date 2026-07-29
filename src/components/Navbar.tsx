import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo-blue-analytics.png";
import { whatsappUrl } from "@/lib/whatsapp";

const links = [
  { label: "Empleados", id: "products" },
  { label: "Cómo trabajamos", id: "how" },
  { label: "Caso", id: "case" },
  { label: "Equipo", id: "team" },
  { label: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  // Única superficie oscura: la landing /agents. Todo lo demás es claro.
  const isDark = location.pathname === "/agents";

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getHref = (sectionId: string) => (isHome ? `#${sectionId}` : `/#${sectionId}`);

  const linkClass = isDark
    ? "text-sm font-medium text-slate-300 transition-colors hover:text-white"
    : "text-sm font-medium text-slate-600 transition-colors hover:text-foreground";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Hairline de progreso de scroll */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600"
      />

      <nav className="container mx-auto px-4">
        <div
          className={`mt-3 flex h-14 items-center justify-between rounded-2xl border px-4 transition-all duration-300 md:px-6 ${
            scrolled
              ? isDark
                ? "border-white/10 bg-[#060a14]/75 shadow-[0_8px_32px_-12px_rgba(2,6,23,0.8)] backdrop-blur-xl"
                : "border-slate-200/80 bg-white/80 shadow-[0_8px_32px_-16px_rgba(15,23,42,0.18)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="/" className="flex items-center gap-3" aria-label="Blue Analytics — inicio">
            <img
              src={logo}
              alt="Blue Analytics"
              className={`h-8 w-auto ${isDark ? "brightness-0 invert" : ""}`}
            />
          </a>

          {/* Menú escritorio */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.id} href={getHref(l.id)} className={`group relative ${linkClass}`}>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-2 pl-2">
              <Link
                to="/contact"
                className={`hidden items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:inline-flex ${
                  isDark
                    ? "text-slate-300 hover:bg-white/5 hover:text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-foreground"
                }`}
              >
                Contacto
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_rgba(15,23,42,0.45)] transition-all hover:shadow-[0_10px_32px_-8px_rgba(15,23,42,0.55)]"
              >
                <MessageCircle className="h-4 w-4" />
                Habla con el agente
              </a>
            </div>
          </div>

          {/* Toggle móvil */}
          <button
            className={`md:hidden ${isDark ? "text-white" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={`mt-2 space-y-1 rounded-2xl border p-3 backdrop-blur-xl md:hidden ${
                isDark ? "border-white/10 bg-[#060a14]/90" : "border-slate-200 bg-white/95"
              }`}
            >
              {links.map((l) => (
                <a
                  key={l.id}
                  href={getHref(l.id)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isDark ? "text-slate-200 hover:bg-white/5" : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/contact"
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isDark ? "text-slate-200 hover:bg-white/5" : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-1 flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Habla con el agente
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
