import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-blue-analytics.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="#mission" className="text-sm font-medium hover:text-primary transition-colors">Misión</a>
            <a href="#challenge" className="text-sm font-medium hover:text-primary transition-colors">Desafío</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Servicios</a>
            <a href="#framework" className="text-sm font-medium hover:text-primary transition-colors">Framework</a>
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Casos de Éxito</a>
            <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Equipo</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
            <Button variant="gradient" size="sm">Contactar</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a href="#mission" className="block text-sm font-medium hover:text-primary transition-colors">Misión</a>
            <a href="#challenge" className="block text-sm font-medium hover:text-primary transition-colors">Desafío</a>
            <a href="#services" className="block text-sm font-medium hover:text-primary transition-colors">Servicios</a>
            <a href="#framework" className="block text-sm font-medium hover:text-primary transition-colors">Framework</a>
            <a href="#cases" className="block text-sm font-medium hover:text-primary transition-colors">Casos de Éxito</a>
            <a href="#team" className="block text-sm font-medium hover:text-primary transition-colors">Equipo</a>
            <a href="#blog" className="block text-sm font-medium hover:text-primary transition-colors">Blog</a>
            <Button variant="gradient" size="sm" className="w-full">Contactar</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
