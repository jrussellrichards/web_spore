import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

function upsertMeta({ selector, attr, value }: { selector: string; attr: "content" | "href"; value: string }) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    const isProperty = selector.startsWith('meta[property=');
    el = document.createElement("meta");
    if (isProperty) {
      const prop = selector.match(/meta\[property=['"](.+)['"]\]/)![1];
      el.setAttribute("property", prop);
    } else {
      const name = selector.match(/meta\[name=['"](.+)['"]\]/)![1];
      el.setAttribute("name", name);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const CincoFormas = () => {
  useEffect(() => {
    const title = "5 formas de usar tus datos para vender más | Blue Analytics";
    document.title = title;
    upsertMeta({ selector: `meta[name='description']`, attr: "content", value: "Cinco estrategias accionables para convertir datos en ingresos: segmentación, scoring, recomendaciones, automatización y atribución." });
    upsertMeta({ selector: `meta[property='og:title']`, attr: "content", value: title });
    upsertMeta({ selector: `meta[property='og:description']`, attr: "content", value: "Estrategias prácticas y casos de uso para que equipos comerciales y de marketing conviertan datos en ventas." });
    upsertMeta({ selector: `meta[property='og:type']`, attr: "content", value: "article" });
    upsertMeta({ selector: `meta[name='twitter:card']`, attr: "content", value: "summary_large_image" });
    upsertMeta({ selector: `meta[property='og:image']`, attr: "content", value: `${location.origin}/favicon.png` });
    return () => { };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary font-semibold mb-4 border border-secondary/10">Tácticas</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">5 formas</span> de usar tus datos para vender más
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estrategias prácticas y accionables para equipos comerciales y marketing. Implementa rápido, mide y optimiza.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section card */}
          <article className="grid gap-6">
            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary font-semibold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Segmentación avanzada</h3>
                  <p className="text-muted-foreground mt-2">Divide tu base por comportamiento y valor potencial. Usa cohorts para personalizar mensajes y ofertas.</p>
                  <div className="mt-4 rounded-md p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border">
                    <strong>Ejemplo:</strong> segmenta por recencia, frecuencia y valor (RFM) y lanza campañas dirigidas para reactivar clientes con mayor ROI.
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary font-semibold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Scoring de leads</h3>
                  <p className="text-muted-foreground mt-2">Un scoring simple con 5–10 features suele ser suficiente para priorizar &gt;75% de los cierres tempranos. Prioriza variables como industria, interacción reciente y señales de compra.</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary font-semibold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Recomendaciones personalizadas</h3>
                  <p className="text-muted-foreground mt-2">Recomendaciones no siempre requieren ML complejo. Comienza por reglas + filtros colaborativos ligeros y mide uplift en A/B.</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary font-semibold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Automatización de tareas comerciales</h3>
                  <p className="text-muted-foreground mt-2">Automatiza pasos repetitivos: scoring → asignación de lead → secuencia de email personalizada. Aumenta eficiencia y reduce tiempos de respuesta.</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary font-semibold">5</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Medición y atribución</h3>
                  <p className="text-muted-foreground mt-2">Sin atribución no sabes qué canal genera valor. Implementa un esquema de tracking y un dashboard simple que muestre conversiones por canal y CAC.</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Caso breve</h3>
              <p className="text-muted-foreground mt-2">En un piloto de scoring y automatización un cliente aumentó su tasa de conversión de leads calificados en +32% y redujo CAC en 18% en 3 meses.</p>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Checklist de implementación rápida</h3>
              <ul className="mt-3 list-disc list-inside text-muted-foreground">
                <li>Define métrica de negocio (ej. MQL→SQL conversion)</li>
                <li>Selecciona 3 features iniciales</li>
                <li>Despliega MVP y prueba A/B</li>
                <li>Monitorea uplift y itera semanalmente</li>
              </ul>
            </section>

            <section className="rounded-2xl p-6 bg-gradient-to-r from-secondary/10 to-accent/10 border shadow-sm">
              <h3 className="text-lg font-semibold">¿Quieres que lo implementemos?</h3>
              <p className="text-muted-foreground mt-2">Solicita un diagnóstico y te entregamos un plan de ejecución con estimación de impacto.</p>
              <div className="mt-4 flex gap-4">
                <a href="mailto:contacto@blueanalytics.cl" className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-secondary to-accent text-white font-semibold shadow-lg">Pedir diagnóstico</a>
                <Link to="/" className="inline-block px-6 py-3 rounded-md border border-muted text-muted-foreground">Volver al inicio</Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CincoFormas;