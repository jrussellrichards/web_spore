import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo-blue-analytics.png";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-navy via-navy-light to-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold">Mantente informado</h3>
            <p className="text-white/70">
              Suscríbete para recibir insights y estrategias de IA aplicada directo en tu inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-white/5 border-white/30 text-white placeholder:text-white/60 focus:border-secondary focus:bg-white/10 h-12"
              />
              <Button variant="secondary" size="lg" className="whitespace-nowrap h-12">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Blue Analytics Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/70 text-sm">
              IA aplicada que genera resultados medibles para empresas en LATAM.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Consultoría en IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desarrollo de Modelos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integración de Datos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Capacitación</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#team" className="hover:text-white transition-colors">Nuestro Equipo</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@blueanalytics.com</li>
              <li>+52 (55) 1234 5678</li>
              <li className="pt-4 flex gap-3">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 Blue Analytics. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
