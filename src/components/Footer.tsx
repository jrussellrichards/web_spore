import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo-blue-analytics.png";
import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "light" | "dark";
}

const Footer = ({ variant = "light" }: FooterProps) => {
  const isDark = variant === "dark";

  if (!isDark) {
    return (
      <footer className="border-t border-slate-200 bg-white text-slate-600">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            {/* Marca */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src={logo} alt="Blue Analytics" className="h-8 w-auto" />
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                Empleados digitales para tu empresa: agentes de IA que atienden, venden y te
                organizan — conectados a tus sistemas y a tu información real.
              </p>
              <p className="mt-6 font-mono text-xs tracking-wider text-slate-400">
                SANTIAGO · CHILE — REMOTO · LATAM
              </p>
            </div>

            {/* Navegación */}
            <div>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Explorar</p>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="/#products" className="w-fit transition-colors hover:text-foreground">Empleados digitales</a>
                <a href="/#how" className="w-fit transition-colors hover:text-foreground">Cómo trabajamos</a>
                <a href="/#case" className="w-fit transition-colors hover:text-foreground">Caso real</a>
                <a href="/#team" className="w-fit transition-colors hover:text-foreground">Equipo</a>
                <a href="/#blog" className="w-fit transition-colors hover:text-foreground">Blog</a>
                <Link to="/agents" className="group flex w-fit items-center gap-1 font-medium text-accent transition-colors hover:text-cyan-800">
                  El Vendedor en detalle
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </nav>
            </div>

            {/* Contacto */}
            <div>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Contacto</p>
              <div className="flex flex-col gap-3 text-sm">
                <a href="mailto:contacto@blueanalytics.cl" className="w-fit transition-colors hover:text-foreground">
                  contacto@blueanalytics.cl
                </a>
                <Link to="/contact" className="w-fit transition-colors hover:text-foreground">
                  Formulario de contacto
                </Link>
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/blue-analytics-cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Blue Analytics"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-accent/50 hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:contacto@blueanalytics.cl"
                    aria-label="Email a Blue Analytics"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-accent/50 hover:text-accent"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Blue Analytics. Todos los derechos reservados.</p>
            <p className="font-mono">Hecho con datos, no con humo.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#04070f] text-slate-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="Blue Analytics" className="h-8 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Empleados digitales para tu empresa: agentes de IA que atienden, venden y te
              organizan — conectados a tus sistemas y a tu información real.
            </p>
            <p className="mt-6 font-mono text-xs tracking-wider text-slate-600">
              SANTIAGO · CHILE — REMOTO · LATAM
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Explorar</p>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="/#products" className="w-fit transition-colors hover:text-white">Empleados digitales</a>
              <a href="/#how" className="w-fit transition-colors hover:text-white">Cómo trabajamos</a>
              <a href="/#case" className="w-fit transition-colors hover:text-white">Caso real</a>
              <a href="/#team" className="w-fit transition-colors hover:text-white">Equipo</a>
              <a href="/#blog" className="w-fit transition-colors hover:text-white">Blog</a>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Contacto</p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:contacto@blueanalytics.cl" className="w-fit transition-colors hover:text-white">
                contacto@blueanalytics.cl
              </a>
              <Link to="/contact" className="w-fit transition-colors hover:text-white">
                Formulario de contacto
              </Link>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/company/blue-analytics-cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Blue Analytics"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:contacto@blueanalytics.cl"
                  aria-label="Email a Blue Analytics"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-slate-600 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Blue Analytics. Todos los derechos reservados.</p>
          <p className="font-mono">Hecho con datos, no con humo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
