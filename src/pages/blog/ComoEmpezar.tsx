import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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

const ComoEmpezar = () => {
  useEffect(() => {
    const title = "Cómo empezar con IA en tu empresa — Guía práctica | Blue Analytics";
    document.title = title;
    upsertMeta({ selector: `meta[name='description']`, attr: "content", value: "Guía paso a paso para identificar casos de uso, diseñar pilotos medibles y obtener ROI con IA. Plantillas y ejemplos prácticos." });
    upsertMeta({ selector: `meta[property='og:title']`, attr: "content", value: title });
    upsertMeta({ selector: `meta[property='og:description']`, attr: "content", value: "Aprende a priorizar proyectos de IA según impacto y factibilidad, diseñar pilotos y escalar con medición de resultados." });
    upsertMeta({ selector: `meta[property='og:type']`, attr: "content", value: "article" });
    upsertMeta({ selector: `meta[name='twitter:card']`, attr: "content", value: "summary_large_image" });
    // optionally set og:image if you host an image in public/
    upsertMeta({ selector: `meta[property='og:image']`, attr: "content", value: `${location.origin}/favicon.png` });

    return () => {
      // cleanup: no-op (keeping tags is fine), you can implement restore if desired
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold mb-4 border border-primary/10">Guía práctica</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">¿Cómo empezar con IA</span> en tu empresa?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prioriza casos de uso con impacto real y diseña pilotos que entreguen ROI medible. Esta guía compacta te lleva del diagnóstico a la escala.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-6">
          <article className="grid gap-6">
            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary font-semibold">-</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Resumen ejecutivo</h3>
                  <p className="text-muted-foreground mt-2">La clave no es la tecnología: es el problema. Enfócate en procesos que afecten directamente ingresos, costos o retención. Implementa pilotos rápidos con métricas claras y criterios de éxito definidos.</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary font-semibold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Encuentra el caso correcto</h3>
                  <p className="text-muted-foreground mt-2">Usa esta checklist interna para priorizar oportunidades:</p>
                  <ul className="mt-3 list-disc list-inside text-muted-foreground">
                    <li><strong>Impacto:</strong> ¿Aumenta ingresos o reduce costos materialmente?</li>
                    <li><strong>Disponibilidad de datos:</strong> ¿Los datos existen y son accesibles?</li>
                    <li><strong>Velocidad de validación:</strong> ¿Puedes medir resultado en semanas/meses?</li>
                    <li><strong>Riesgo operativo:</strong> ¿El cambio es seguro y controlable?</li>
                  </ul>
                  <div className="mt-4 rounded-md p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border">
                    <strong>Tip rápido:</strong> Empieza con un experimento que tenga <em>una</em> métrica primaria (ej. tasa de conversión, tiempo por tarea, tasa de error).
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary font-semibold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Diseña un piloto medible</h3>
                  <p className="text-muted-foreground mt-2">Define alcance, datos, línea base y objetivo. Un piloto tiene 4 elementos mínimos:</p>
                  <ol className="mt-3 list-decimal list-inside text-muted-foreground">
                    <li><strong>Hipótesis:</strong> qué cambio esperas y por qué.</li>
                    <li><strong>Métrica primaria:</strong> cómo medirás éxito.</li>
                    <li><strong>Duración y tamaño:</strong> cuánto tiempo y cuántos usuarios/registros.</li>
                    <li><strong>Plan de integración:</strong> cómo la solución operará durante el piloto.</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Entrega valor rápido — Roadmap de 90 días</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold">0–30 días</h4>
                  <p>Diagnóstico, definición de métricas y extracción de muestra de datos.</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold">30–60 días</h4>
                  <p>Modelo mínimo viable + integración para A/B o prueba controlada.</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold">60–90 días</h4>
                  <p>Medición, iteración y plan para escalado si la métrica mejora.</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Ejemplos prácticos</h3>
              <ul className="mt-3 list-disc list-inside text-muted-foreground">
                <li><strong>Clasificación de leads:</strong> modelo simple de scoring que mejora tasa de cierre.</li>
                <li><strong>Detección de fraude operacional:</strong> reglas + ML para reducir errores manuales.</li>
                <li><strong>Recomendaciones:</strong> aumento de ticket medio con pruebas A/B.</li>
              </ul>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Medición y gobernanza</h3>
              <p className="text-muted-foreground mt-2">Define dashboard de KPIs (línea base vs resultado), responsables y frecuencia de revisión. Sin medición no hay escalado responsable.</p>
              <blockquote className="mt-3">Prioriza menos proyectos bien medidos sobre muchos proyectos sin seguimiento.</blockquote>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Plantilla rápida (copiar/pegar)</h3>
            <div className="space-y-2 text-sm">
                <div>
                    <span className="font-semibold text-primary">HIPÓTESIS:</span>{" "}
                    <span className="text-muted-foreground">Describe el cambio esperado y por qué.</span>
                </div>
                <div>
                    <span className="font-semibold text-primary">MÉTRICA PRIMARIA:</span>{" "}
                    <span className="text-muted-foreground">¿Cómo medirás el éxito?</span>
                </div>
                <div>
                    <span className="font-semibold text-primary">TAMAÑO/DURACIÓN:</span>{" "}
                    <span className="text-muted-foreground">¿Cuánto tiempo y cuántos usuarios/registros?</span>
                </div>
                <div>
                    <span className="font-semibold text-primary">DATA NEEDED:</span>{" "}
                    <span className="text-muted-foreground">¿Qué datos necesitas y cómo los obtendrás?</span>
                </div>
                <div>
                    <span className="font-semibold text-primary">CRITERIO DE ÉXITO:</span>{" "}
                    <span className="text-muted-foreground">¿Qué resultado define el éxito?</span>
                </div>
                <div>
                    <span className="font-semibold text-primary">RESPONSABLES:</span>{" "}
                    <span className="text-muted-foreground">¿Quién lidera y quién apoya?</span>
        </div>
      </div>
            </section>

            <section className="rounded-2xl p-6 bg-gradient-to-r from-primary/10 to-accent/10 border shadow-sm">
              <h3 className="text-lg font-semibold">¿Listo para comenzar?</h3>
              <p className="text-muted-foreground mt-2">Si quieres, podemos preparar un diagnóstico de 2 semanas con hipótesis y plan de piloto con estimación de ROI.</p>
              <div className="mt-4 flex gap-4">
                <a href="mailto:info@blueanalytics.com" className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg">Solicitar diagnóstico</a>
                <Link to="/" className="inline-block px-6 py-3 rounded-md border border-muted text-muted-foreground">Volver al inicio</Link>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ComoEmpezar;