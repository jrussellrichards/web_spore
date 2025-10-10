import { AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Problem */}
          <Card className="p-8 bg-destructive/5 border-destructive/20 animate-slide-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Detén la Hemorragia de Inversiones en IA Fallidas
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Según Gartner, el <span className="font-bold text-destructive">85% de los proyectos de IA fracasan</span> porque 
                  se prioriza la tecnología sobre el problema de negocio.
                </p>
                <p className="text-muted-foreground">
                  ¿Puedes permitirte esa inversión a ciegas?
                </p>
              </div>
            </div>
          </Card>

          {/* Solution */}
          <Card className="p-8 bg-primary/5 border-primary/20 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Nosotros cambiamos el enfoque
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    <p>Diagnosticamos el negocio primero</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    <p>Diseñamos soluciones orientadas a impacto</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    <p>Solo entregamos lo que genera resultados medibles</p>
                  </div>
                </div>
                <p className="font-semibold text-primary pt-2">
                  Tu éxito es nuestra métrica.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
