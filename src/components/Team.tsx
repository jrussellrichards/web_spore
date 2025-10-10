import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Shield } from "lucide-react";

const Team = () => {
  const values = [
    {
      icon: Target,
      title: "Nuestra misión",
      description: "Ser el catalizador de la siguiente evolución de las empresas en LATAM, democratizando la inteligencia de datos de clase mundial.",
      color: "from-primary to-secondary",
    },
    {
      icon: Lightbulb,
      title: "Filosofía",
      description: "Estrategia antes que Tecnología. La IA es una herramienta, no un fin.",
      color: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Compromiso",
      description: "Ser tu socio estratégico y mitigar el riesgo de fracaso en proyectos de IA.",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Equipo
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {value.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
