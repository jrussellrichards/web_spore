import { Linkedin, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo-blue-analytics.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-white text-slate-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Blue Analytics" className="h-7 w-auto" />
            <div>
              <p className="text-sm font-medium">Blue Analytics</p>
              <p className="text-xs text-slate-500">IA aplicada que genera resultados</p>
            </div>
          </div>

          <nav className="flex gap-5 text-sm text-slate-600">
            <a href="/#services" className="hover:text-slate-800">Servicios</a>
            <a href="/#team" className="hover:text-slate-800">Equipo</a>
            <a href="/#cases" className="hover:text-slate-800">Casos</a>
            <a href="/#blog" className="hover:text-slate-800">Blog</a>
            <Link to="/contact" className="hover:text-slate-800">Contacto</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:contacto@blueanalytics.cl" className="text-xs text-slate-600 hover:text-slate-800">contacto@blueanalytics.cl</a>
            <div className="flex items-center gap-2">
              <a href="#" className="text-slate-400 hover:text-slate-700"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-700"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-700"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Blue Analytics. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacidad</a>
            <a href="#" className="hover:text-slate-700">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
