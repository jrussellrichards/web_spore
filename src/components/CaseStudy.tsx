import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Users } from "lucide-react";

const CaseStudy = () => {
  const stats = [
    { value: "2.200h", label: "Horas optimizadas al año", icon: Users },
    { value: "-90%", label: "Disminución de errores operativos", icon: Shield },
    { value: "300%", label: "Retorno de inversión en el primer año", icon: TrendingUp },
  ];

  return (
    <section id="cases" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Caso de éxito destacado
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cómo una empresa regional{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              mejoró conversión y optimizó sus procesos
            </span>{" "}
            usando IA aplicada
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 group animate-stat-count border-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        {/* Case Description */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-4 text-destructive/80">Desafío</h3>
            <p className="text-muted-foreground leading-relaxed">
              El cliente enfrentaba altos costos y demoras debido a procesos manuales, tareas repetitivas y análisis complejos, lo que limitaba su capacidad de respuesta y eficiencia operativa.
            </p>
          </Card>

          <Card className="p-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4 text-primary">Nuestra solución</h3>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos agentes inteligentes personalizados que automatizan tareas repetitivas, procesan datos en tiempo real y optimizan procesos críticos, permitiendo decisiones más ágiles y eficientes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
