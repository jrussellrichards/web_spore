import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero4 from "@/imgs/hero_6.png";

const Mission = () => {
  return (
    <section id="mission" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center md:grid-cols-2 gap-12">
          <div className="max-w-xl">
            <div className="inline-flex px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold mb-4">Nuestra misión</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Impulsar decisiones con{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">IA con propósito</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Desbloquear la ventaja competitiva sostenible en LATAM. Nuestra misión es diseñar, ejecutar y escalar soluciones de IA con propósito, asegurando que cada inversión esté rigurosamente alineada con métricas de negocio y un impacto en el ROI tangible.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Diseñar soluciones alineadas a métricas de negocio.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-secondary" />
                <span className="text-sm text-muted-foreground">Entregar pilotos rápidos y medibles.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Escalar con gobernanza y responsabilidad.</span>
              </li>
            </ul>

            <div className="flex gap-4">
              <Link to="/contact" className="inline-block">
                <Button variant="gradient">Contactar equipo</Button>
              </Link>
              <a href="#services" className="inline-block">
                <Button variant="outline">Ver servicios</Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xl md:max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-muted/10 bg-gradient-to-br from-primary/6 to-accent/6 p-0">
              <div className="bg-transparent">
                <img
                  src={hero4}
                  alt="Nuestra misión"
                  loading="lazy"
                  style={{ objectPosition: 'right center' }}
                  className="w-full max-h-[48rem] h-auto object-contain block bg-card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;