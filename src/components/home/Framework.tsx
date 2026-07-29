import { Card } from "@/components/ui/card";
import diagnosticIcon from "@/assets/diagnostic-icon.png";
import implementationIcon from "@/assets/implementation-icon.png";
import measurementIcon from "@/assets/measurement-icon.png";

const Framework = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Estratégico",
      description: "Mapa de valor y priorización de casos según impacto potencial y factibilidad técnica.",
      icon: diagnosticIcon,
      color: "from-primary to-secondary",
    },
    {
      number: "02",
      title: "Implementación Ágil",
      description: "Desarrollo iterativo, validación temprana y despliegue con foco en seguridad y escalabilidad.",
      icon: implementationIcon,
      color: "from-secondary to-accent",
    },
    {
      number: "03",
      title: "Medición de Impacto",
      description: "Monitoreo de métricas, atribución y optimización continua para maximizar ROI.",
      icon: measurementIcon,
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="framework" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Framework de Impacto IA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tu garantía de valor. Detenemos el "hype" tecnológico. 
            Nuestro proceso es tu primer filtro: si no hay un Caso de Negocio rentable y medible a la vista, no implementamos. 
            Solo avanzamos a la tecnología cuando el valor está asegurado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative p-8 hover:shadow-xl transition-all duration-300 group animate-scale-in border-2 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Number Badge */}
              <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-6 mt-4">
                <img 
                  src={step.icon} 
                  alt={step.title}
                  className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Decorative line */}
              <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${step.color} transition-all duration-500 rounded-full`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;
