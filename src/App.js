import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const nav = document.querySelector('nav');
    const links = Array.from(document.querySelectorAll('a[href^="#"]'));
    const clickHandler = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const offset = navHeight + 16;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      if (window.history && window.history.pushState) window.history.pushState(null, '', href);
      else window.location.hash = href;
    };

    links.forEach(l => l.addEventListener('click', clickHandler));
    return () => links.forEach(l => l.removeEventListener('click', clickHandler));
  }, []);

  return (
    <div className="App">
      <nav className="App-header top-nav" style={{ minHeight: 'auto', padding: '12px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, width: '100%', maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/logo192.png" alt="logo" style={{ width: 44, height: 44, borderRadius: 8 }} />
            <div style={{ textAlign: 'left' }}>
              <strong style={{ display: 'block' }}>Spore</strong>
              <small style={{ color: 'var(--color-text-soft)' }}>IA & Data Science — La siguiente evolución de tu empresa</small>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <a href="#servicios" style={{ color: 'var(--color-text-soft)' }}>Servicios</a>
            <a href="#casos" style={{ color: 'var(--color-text-soft)' }}>Casos</a>
            <a href="#nosotros" style={{ color: 'var(--color-text-soft)' }}>Nosotros</a>
            <a href="#recursos" style={{ color: 'var(--color-text-soft)' }}>Recursos</a>
            <a href="#contacto" className="cta-btn">Agendar Consultoría Estratégica</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="App-header hero" style={{ paddingTop: 36, paddingBottom: 56 }}>
        <div className="hero-grid" style={{ maxWidth: 1180, margin: '0 auto', alignItems: 'center' }}>
          <div className="hero-content">
            <div className="eyebrow" style={{ color: 'var(--color-primary)', fontWeight: 700, marginBottom: 12 }}>La Siguiente Evolución</div>
            <h1 style={{ margin: '0 0 14px' }}>La Siguiente Evolución de tu Empresa.</h1>
            <p style={{ margin: 0, maxWidth: 680, color: 'var(--color-text-soft)', fontSize: '1.05rem' }}>Desbloqueamos el poder de la Inteligencia Artificial y el Data Science para transformar tu negocio. Mitigamos el riesgo de fracaso enfocando la IA en problemas de negocio reales.</p>

            <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
              <a className="cta-btn" href="#contacto">Agendar Consultoría Estratégica</a>
              <a className="App-link" href="#servicios" style={{ alignSelf: 'center', color: 'var(--color-text-soft)' }}>Descubre nuestra metodología</a>
            </div>

            <ul className="hero-features" style={{ marginTop: 22 }}>
              <li>🔍 Diagnóstico de negocio y datos</li>
              <li>⚙️ Implementación segura y escalable</li>
              <li>📈 Entrega de resultados medibles (ROI)</li>
            </ul>

            <div className="hero-logos" aria-hidden="true" style={{ marginTop: 22 }}>
              <img src="/logo192.png" alt="cliente" />
              <img src="/logo512.png" alt="cliente" />
              <div style={{ display: 'inline-block', width: 64, height: 24, background: 'rgba(255,255,255,.03)', borderRadius: 6 }}></div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <picture>
              <source media="(min-width:1000px)" srcSet="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop" />
              <source media="(min-width:600px)" srcSet="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" />
              <img src="https://images.unsplash.com/photo-1526378725929-7f87b5b7f6d1?q=80&w=800&auto=format&fit=crop" alt="Ilustración tecnológica: visualización de datos y redes neuronales" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
            </picture>
          </div>
        </div>
      </header>

      <div className="section-divider" />

      {/* Problema / Solución */}
      <section className="App-section">
        <div className="container">
         <h2>¿Tus datos son un costo y no un activo?</h2>
         <p>
          Según Gartner, el 85% de los proyectos de IA fracasan porque se prioriza la tecnología sobre el problema de negocio. ¿Puedes permitirte esa inversión a ciegas?
        </p>
        <p>
          Nosotros cambiamos el enfoque: diagnosticamos el negocio primero, diseñamos soluciones orientadas a impacto y solo entregamos lo que genera resultados medibles. <strong>Tu éxito es nuestra métrica.</strong>
        </p>

        <div style={{ marginTop: 28, display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', maxWidth: '1180px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="servicio-card">
            <h3>Crecimiento y Clientes</h3>
            <p>Modelos predictivos y segmentación para retener clientes, mejorar conversión y optimizar campañas comerciales.</p>
            <a className="App-link" href="#casos" style={{ marginTop: 8 }}>Ver caso de éxito relacionado</a>
          </div>
          <div className="servicio-card">
            <h3>Eficiencia y Costos</h3>
            <p>Optimización de procesos con IA y automatización para reducir costos operativos y mejorar la utilización de recursos.</p>
            <a className="App-link" href="#contacto" style={{ marginTop: 8 }}>Solicitar más información</a>
          </div>
          <div className="servicio-card">
            <h3>Estrategia y Visión</h3>
            <p>Consultoría estratégica de datos: evaluación de madurez, hoja de ruta y gobernanza para asegurar ROI y escalabilidad.</p>
            <a className="App-link" href="#contacto" style={{ marginTop: 8 }}>Agenda una llamada</a>
          </div>
         </div>

         <div style={{ textAlign: 'center', marginTop: 26 }}>
          <a href="#servicios" className="cta-btn">Ver todas las soluciones</a>
         </div>
         </div>
       </section>

       <div className="section-divider" />

       {/* Proceso */}
       <section className="App-section" id="servicios">
         <div className="container">
         <h2>Nuestro Framework de Impacto IA</h2>
        <p>Tu ruta segura hacia resultados medibles. Nuestro framework asegura que la tecnología se aplique sólo cuando hay un caso de negocio claro.</p>
        <div style={{ display: 'flex', gap: 18, maxWidth: 980, margin: '28px auto 0', flexWrap: 'wrap' }}>
          <div className="servicio-card" style={{ flex: 1 }}>
            <h3>1. Diagnóstico Estratégico</h3>
            <p>Mapa de valor y priorización de casos según impacto potencial y factibilidad técnica.</p>
          </div>
          <div className="servicio-card" style={{ flex: 1 }}>
            <h3>2. Implementación Ágil</h3>
            <p>Desarrollo iterativo, validación temprana y despliegue con foco en seguridad y escalabilidad.</p>
          </div>
          <div className="servicio-card" style={{ flex: 1 }}>
            <h3>3. Medición de Impacto</h3>
            <p>Monitoreo de métricas, atribución y optimización continua para maximizar ROI.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 22 }}>
          <a href="#contacto" className="cta-btn">Conoce nuestro Framework</a>
        </div>
         </div>
       </section>

      <div className="section-divider" />

      {/* Caso de éxito destacado */}
      <section className="App-section" id="casos">
        <div className="container">
         <h2>Caso de éxito destacado</h2>
        <p>Cómo un banco regional mejoró conversión y redujo fraude usando IA aplicada.</p>

        <div className="case-study" style={{ maxWidth: 1100, margin: '24px auto 0' }}>
          <div className="case-grid">
            <div className="case-visual" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop" alt="Visual caso de éxito" />
            </div>

            <div className="case-content">
              <h3 className="case-title">Aumento de ventas y reducción de fraude</h3>
              <p className="case-challenge"><strong>Desafío:</strong> El cliente enfrentaba caída en conversión digital y aumento de operaciones fraudulentas que impactaban ingresos y confianza.</p>
              <p className="case-solution"><strong>Nuestra solución:</strong> Implementamos modelos predictivos de comportamiento, sistemas de scoring en tiempo real y un asistente inteligente para capturar leads y validar interacciones fraudulentas.</p>

              <div className="case-metrics" aria-hidden="false">
                <div className="metric">
                  <div className="metric-value">+20%</div>
                  <div className="metric-label">Ventas atribuidas</div>
                </div>
                <div className="metric">
                  <div className="metric-value">-18%</div>
                  <div className="metric-label">Costos operativos</div>
                </div>
                <div className="metric">
                  <div className="metric-value">4x</div>
                  <div className="metric-label">ROI en 12 meses</div>
                </div>
              </div>

              <div className="case-cta" style={{ marginTop: 18 }}>
                <a className="cta-btn" href="#contacto">¿Quieres resultados similares? Hablemos</a>
                <a className="App-link" href="#contacto" style={{ marginLeft: 12 }}>Solicita el caso completo</a>
              </div>

              <figure className="testimonial-styled" style={{ marginTop: 18 }}>
                <blockquote>
                  “Implementamos modelos predictivos y un asistente inteligente que permitió aumentar ventas en un 20% y reducir tiempos de atención.”
                </blockquote>
                <figcaption>- Gerente de Transformación, Banco Cliente</figcaption>
              </figure>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Sobre nosotros */}
      <section className="App-section" id="nosotros">
        <div className="container">
         <h2>Sobre nosotros</h2>
        <p>Nuestra misión: ser el catalizador de la siguiente evolución de las empresas en LATAM, democratizando la inteligencia de datos de clase mundial.</p>
        <p><strong>Filosofía:</strong> Estrategia antes que Tecnología. La IA es una herramienta, no un fin. Nos comprometemos a ser tu socio estratégico y mitigar el riesgo de fracaso en proyectos de IA.</p>

        <div className="equipo-list" style={{ marginTop: 24 }}>
          <div className="equipo-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop&crop=faces" alt="Javier Richards" className="equipo-avatar" />
              <div>
                <h4 style={{ margin: 0 }}>Javier Richards</h4>
                <p style={{ margin: 0 }}>Senior Data Scientist — Ing. Civil Informático. Experiencia liderando proyectos de Gen IA y ML para banca y consultoras.</p>
              </div>
            </div>
          </div>

          <div className="equipo-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src="https://images.unsplash.com/photo-1545996124-1e8f6f6d8f4b?q=80&w=160&auto=format&fit=crop&crop=faces" alt="Co-Fundador" className="equipo-avatar" />
              <div>
                <h4 style={{ margin: 0 }}>Co-Fundador</h4>
                <p style={{ margin: 0 }}>MBA y experiencia en estrategia de negocio y operaciones, enfocado en transformar iniciativas tecnológicas en impacto comercial.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 18 }}>
          <a href="https://www.linkedin.com" className="App-link" target="_blank" rel="noreferrer">Conecta con nosotros en LinkedIn</a>
        </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Recursos / Blog */}
      <section className="App-section" id="recursos">
        <div className="container">
         <h2>Recursos y Blog</h2>
        <p>Artículos prácticos para comenzar con IA y potenciar tus decisiones de negocio.</p>

        <div style={{ maxWidth: 1000, margin: '18px auto', display: 'grid', gap: 14 }}>
          <div className="servicio-card">
            <h3>¿Cómo empezar con IA en tu empresa?</h3>
            <p>Guía práctica para priorizar casos de uso y obtener rápido valor.</p>
            <a className="App-link" href="#recursos">Leer artículo</a>
          </div>
          <div className="servicio-card">
            <h3>5 formas de usar tus datos para vender más</h3>
            <p>Estrategias aplicables para equipos comerciales y marketing.</p>
            <a className="App-link" href="#recursos">Leer artículo</a>
          </div>
        </div>

        <div style={{ marginTop: 18, textAlign: 'center' }}>
          <form style={{ display: 'inline-grid', gridAutoFlow: 'row', gap: 8 }} onSubmit={e => e.preventDefault()}>
            <input placeholder="Tu correo para el newsletter" aria-label="newsletter" style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} />
            <button className="cta-btn" type="submit">Suscribirse</button>
          </form>
        </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contacto */}
      <section className="App-section contacto" id="contacto">
        <div className="container">
         <h2>Contacto</h2>
        <p>¿Listo para iniciar tu evolución? Completa el formulario o agenda una reunión.</p>

        <form className="contact-form" style={{ maxWidth: 720, margin: '18px auto 0', display: 'grid', gap: 12 }} onSubmit={e => e.preventDefault()}>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="text" name="company" placeholder="Empresa" />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <textarea name="message" placeholder="Mensaje / ¿Qué objetivo quieres alcanzar?" required />
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button type="submit" className="cta-btn">Enviar Mensaje</button>
            <a className="App-link" href="https://calendly.com/" target="_blank" rel="noreferrer">Agenda una reunión</a>
            <a className="App-link" href="mailto:info@tuempresa.com">info@tuempresa.com</a>
          </div>
        </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>© {new Date().getFullYear()} Spore — IA & Data Science</div>
          <div style={{ color: 'var(--color-text-soft)' }}>Resultados, no promesas — +7 años de experiencia</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
