import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, MessageSquare, Users, Cpu, Camera } from "lucide-react";

const primary = [
  {
    icon: Activity,
    title: "Automatización y Agentes Autónomos",
    outcome:
      "Desde optimizar flujos (RPA + IA) hasta agentes autónomos proactivos que ejecutan tareas complejas y reducen costos.",
  },
  {
    icon: MessageSquare,
    title: "RAG & Conversational AI",
    outcome: "Convierte tu conocimiento en respuestas automáticas para ventas y soporte",
  },
  {
    icon: Camera,
    title: "Visión por Computador & OCR",
    outcome: "Extracción automática de información y visión aplicada para operaciones, control de calidad y analítica.",
  },
  {
    icon: Users,
    title: "Capacitación & Adopción",
    outcome: "Equipamos a tu equipo con skills prácticos para aprovechar la IA desde el día uno",
  },
  {
    icon: Cpu,
    title: "Modelos Analíticos & Insights",
    outcome: "Modelos que transforman datos en decisiones: segmentación, forecasts y recomendaciones",
  },
];

const secondary = [
  "Estrategia y priorización de iniciativas IA",
  "MLOps: deploy y monitorización",
  "Evaluación de madurez de datos & hoja de ruta para capturar valor",
  "Governance y prácticas responsables",
];

const Services = () => {
  const mailto = `mailto:info@blueanalytics.com?subject=Interés en servicios de IA`;

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto p-6 rounded-3xl bg-gradient-to-br from-primary/6 via-accent/4 to-secondary/6 animate-fade-in">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 w-28 h-1 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">IA aplicada para mejorar resultados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ayudamos a empresas a diseñar e implementar soluciones de IA y analítica avanzada en impacto medible: menos costes, mayor eficiencia y mejores decisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            {primary.map((p, i) => {
              const Icon = p.icon;
              return (
                <Card key={i} className="p-6 text-center flex flex-col items-center h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-primary/20">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-4 shadow-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 max-w-[12rem]">{p.outcome}</p>
                </Card>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-4">También ofrecemos:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {secondary.map((s, i) => (
                <div key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-white/60 text-sm text-muted-foreground shadow-sm">{s}</div>
              ))}
            </div>

            <div className="mt-6">
              <a href={mailto}>
                <Button variant="gradient" className="shadow-lg">Solicitar diagnóstico</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;