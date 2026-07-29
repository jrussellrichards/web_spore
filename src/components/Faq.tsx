import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionIntro from "@/components/fx/SectionIntro";
import { Reveal } from "@/components/fx/Reveal";

const faqs = [
  {
    q: "¿Y si el agente se equivoca?",
    a: "Responde únicamente con tu información oficial: si no sabe algo, lo dice y deriva a una persona de tu equipo con todo el contexto de la conversación. Nunca inventa una respuesta. Además, tú revisas y apruebas cómo responde antes de que hable con un solo cliente.",
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Siguen siendo tuyos. Viajan encriptados, no se usan para entrenar modelos públicos y puedes pedir su eliminación cuando quieras. Lo dejamos por escrito.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de las tareas y los sistemas a conectar. Por eso trabajamos con un piloto de precio fijo: conoces el número exacto antes de empezar y no hay permanencia. Y si tu caso no justifica IA, te lo decimos gratis en la primera llamada.",
  },
  {
    q: "¿En cuánto tiempo está funcionando?",
    a: "Entre 2 y 3 semanas. La primera semana definimos alcance y conectamos tus datos; a la tercera el agente está operando con clientes reales bajo supervisión.",
  },
  {
    q: "¿Tengo que saber programar o cambiar mis sistemas?",
    a: "No. Nos conectamos a lo que ya usas — WhatsApp, agenda, ERP, planillas — y lo administras desde un panel simple: subir un documento nuevo o ajustar una respuesta toma minutos.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionIntro
          eyebrow="Preguntas honestas"
          title="Lo que nos preguntan"
          titleAccent="antes de partir."
          className="mb-14 md:mb-16"
        />

        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-slate-200">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:text-accent hover:no-underline md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.95rem] leading-relaxed text-slate-600">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default Faq;
