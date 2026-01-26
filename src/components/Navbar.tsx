import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-blue-analytics.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Helper to generate correct href
  const getHref = (sectionId: string) => {
    return isHome ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Blue Analytics Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu (ordered to match page) */}
          <div className="hidden md:flex items-center gap-8">
            <a href={getHref("mission")} className="text-sm font-medium px-3 py-2 rounded-md sweep-hover">Misión</a>
            <a href={getHref("challenge")} className="text-sm font-medium px-3 py-2 rounded-md sweep-hover">Desafío</a>
            <a href={getHref("services")} className="text-sm font-medium px-3 py-2 rounded-md sweep-hover">Servicios</a>
            <a href={getHref("framework")} className="text-sm font-medium px-3 py-2 rounded-md sweep-hover">Framework</a>
            <a href={getHref("cases")} className="text-sm font-medium px-3 py-2 rounded-md sweep-hover">Casos de Éxito</a>
            <a href={getHref("team")} className="text-sm font-medium px-3 py-2 rounded-md sweep-hover">Equipo</a>
            <a href={getHref("blog")} className="text-sm font-medium px-3 py-2 rounded-md sweep-hover">Blog</a>
            <Link to="/contact">
              <Button variant="gradient" size="sm">Contactar</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a href={getHref("mission")} className="block text-sm font-medium px-3 py-2 rounded-md sweep-hover" onClick={() => setIsOpen(false)}>Misión</a>
            <a href={getHref("challenge")} className="block text-sm font-medium px-3 py-2 rounded-md sweep-hover" onClick={() => setIsOpen(false)}>Desafío</a>
            <a href={getHref("services")} className="block text-sm font-medium px-3 py-2 rounded-md sweep-hover" onClick={() => setIsOpen(false)}>Servicios</a>
            <a href={getHref("framework")} className="block text-sm font-medium px-3 py-2 rounded-md sweep-hover" onClick={() => setIsOpen(false)}>Framework</a>
            <a href={getHref("cases")} className="block text-sm font-medium px-3 py-2 rounded-md sweep-hover" onClick={() => setIsOpen(false)}>Casos de Éxito</a>
            <a href={getHref("team")} className="block text-sm font-medium px-3 py-2 rounded-md sweep-hover" onClick={() => setIsOpen(false)}>Equipo</a>
            <a href={getHref("blog")} className="block text-sm font-medium px-3 py-2 rounded-md sweep-hover" onClick={() => setIsOpen(false)}>Blog</a>
            <Link to="/contact" className="block w-full" onClick={() => setIsOpen(false)}>
              <Button variant="gradient" size="sm" className="w-full">Contactar</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
