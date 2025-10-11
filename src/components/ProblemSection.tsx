import { AlertTriangle, CheckCircle, BarChart2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  return (
    <section id="challenge" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-10 bg-surface/80 border-muted/10 rounded-2xl shadow-lg backdrop-blur-sm animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight">
                Evita inversiones de IA sin impacto
              </h2>

                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Según Gartner, el <span className="font-bold text-destructive">85% de los proyectos de IA fracasan</span> porque 
                  se prioriza la tecnología sobre el problema de negocio. 
                  <span className="font-bold text-primary"> Nosotros invertimos el orden</span> y evitamos ese riesgo con una Metodología de Valor que garantiza:
                </p>

              <div className="flex flex-col md:flex-row gap-4 items-stretch mt-2">
                <div className="flex-1 bg-muted/20 rounded-xl p-4 flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                    <BarChart2 className="h-6 w-6 text-blue-500" />
                    </div>
                  <div>
                    <p className="font-semibold">Diagnóstico estratégico</p>
                    <p className="text-sm text-muted-foreground">Priorización del caso de uso con mayor impacto.</p>
                  </div>
                </div>

                <div className="flex-1 bg-muted/10 rounded-xl p-4 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">MVP a Negocio</p>
                    <p className="text-sm text-muted-foreground">Pilotos definidos por el Retorno de Inversión (ROI), no por la funcionalidad.</p>
                  </div>
                </div>

                <div className="flex-1 bg-muted/20 rounded-xl p-4 flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-accent" />
                    </div>
                  <div>
                    <p className="font-semibold">Observabilidad 360</p>
                    <p className="text-sm text-muted-foreground">Alineación y medición de métricas de negocio desde el día uno.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <Button variant="gradient" size="lg">Solicitar diagnóstico</Button>
                <Button variant="outline" size="lg">Ver casos</Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">Resultados varían según contexto. Pide una evaluación personalizada.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
