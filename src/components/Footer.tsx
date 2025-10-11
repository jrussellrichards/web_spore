import { Linkedin, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo-blue-analytics.png";


const Footer = () => {
  return (
    <footer className="bg-white text-slate-800">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Blue Analytics" className="h-9 w-auto" />
            <div>
              <p className="text-sm font-semibold">Blue Analytics</p>
              <p className="text-xs text-slate-500">IA aplicada que genera resultados medibles</p>
            </div>
          </div>

          <nav className="flex gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-800">Servicios</a>
            <a href="#team" className="hover:text-slate-800">Equipo</a>
            <a href="#cases" className="hover:text-slate-800">Casos</a>
            <a href="#blog" className="hover:text-slate-800">Blog</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:info@blueanalytics.com" className="text-sm text-slate-600 hover:text-slate-800">info@blueanalytics.com</a>
            <div className="hidden sm:flex items-center gap-2">
              <a href="#" className="text-slate-500 hover:text-slate-700"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="text-slate-500 hover:text-slate-700"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="text-slate-500 hover:text-slate-700"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Blue Analytics. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-slate-700">Privacidad</a>
            <a href="#" className="hover:text-slate-700">Términos</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
