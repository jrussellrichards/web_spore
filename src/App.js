import './App.css';
import HeroSection from './components/HeroSection/HeroSection'; // importa el componente HeroSection
import AboutUs from './components/AboutUs/AboutUs'; // importa el componente HeroSection
import React, { useEffect, useState } from 'react';
import logo from './imgs/logo_2.png';
import Footer from './components/Footer/Footer';


function App() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [menuOpen, setMenuOpen] = useState(false); // estado para menú móvil

  useEffect(() => {
    // Esta función crea un manejador de scroll personalizado para todos los enlaces con anclas
    const setupSmoothScrolling = () => {
      const nav = document.querySelector('nav');
      const links = Array.from(document.querySelectorAll('a[href^="#"]'));
      
      const handleSmoothScroll = (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        
        const targetSection = document.querySelector(href);
        if (!targetSection) return;
        
        e.preventDefault();
        
        const navHeight = nav ? nav.offsetHeight : 0;
        const offset = navHeight + 16;
        const top = targetSection.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
        
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', href);
        } else {
          window.location.hash = href;
        }
        
        // Asegurar que el scroll no esté bloqueado
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      };
      
      // Agregar event listeners a todos los enlaces de ancla
      links.forEach(link => {
        // Eliminar listeners anteriores para evitar duplicados
        link.removeEventListener('click', handleSmoothScroll);
        // Agregar nuevo listener
        link.addEventListener('click', handleSmoothScroll);
      });
      
      return () => {
        // Cleanup: remover todos los event listeners
        links.forEach(link => {
          link.removeEventListener('click', handleSmoothScroll);
        });
      };
    };
    
    // Configurar scroll suave
    const cleanupFunction = setupSmoothScrolling();
    
    // Asegurar que el scroll funcione al cargar la página
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Reconfigurar scroll suave cuando cambie el DOM (por ejemplo, cuando se abre/cierra el menú móvil)
    window.addEventListener('DOMContentLoaded', setupSmoothScrolling);
    window.addEventListener('resize', setupSmoothScrolling);
    
    return () => {
      if (cleanupFunction) cleanupFunction();
      window.removeEventListener('DOMContentLoaded', setupSmoothScrolling);
      window.removeEventListener('resize', setupSmoothScrolling);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

      async function handleSubmit(e) {
    e.preventDefault();
    // simple client validation
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      // Replace with your Formspree endpoint or your API
      // For production, use Netlify Forms, HubSpot, or your backend API
      const res = await fetch('https://formspree.io/f/{your-id}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          message: form.message,
          page: window.location.pathname
        })
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', company: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setTimeout(() => {
        setStatus('idle');
        // Asegurar que el scroll funcione después de enviar el formulario
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }, 4000);
    }
  }

  function openCalendly(e) {
    if (e && e.preventDefault) e.preventDefault();
    const url = 'https://calendly.com/your-calendly'; // ← reemplazar
    if (window && (window.Calendly && window.Calendly.initPopupWidget)) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, '_blank', 'noopener');
    }
    
    // Asegurarse de que el scroll siga funcionando después de abrir/cerrar Calendly
    setTimeout(() => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 500);
  }

  return (
    <div className="App">
      <nav className="top-nav" style={{ 
        minHeight: 'auto', 
        padding: '12px 28px',
        background: 'var(--color-primary)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, width: '100%', maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={logo} alt="logo" style={{ width: 70, height: 70, borderRadius: 8 }} />
            <div style={{ textAlign: 'left' }}>
              <strong style={{ display: 'block', color: '#FFFFFF' }}>Spore</strong>
              <small style={{ color: 'rgba(255,255,255,0.9)' }}>No vendemos IA. Creamos tu Próxima Ventaja Competitiva.</small>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <a href="#servicios" onClick={(e) => {
              e.preventDefault();
              const serviciosSection = document.getElementById('servicios');
              if (serviciosSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = serviciosSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#servicios');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Servicios</a>
            
            <a href="#casos" onClick={(e) => {
              e.preventDefault();
              const casosSection = document.getElementById('casos');
              if (casosSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = casosSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#casos');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Casos</a>
            
            <a href="#nosotros" onClick={(e) => {
              e.preventDefault();
              const nosotrosSection = document.getElementById('nosotros');
              if (nosotrosSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = nosotrosSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#nosotros');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Nosotros</a>
            
            <a href="#recursos" onClick={(e) => {
              e.preventDefault();
              const recursosSection = document.getElementById('recursos');
              if (recursosSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = recursosSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#recursos');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Recursos</a>
            
            <a href="#contacto" className="cta-btn" onClick={(e) => {
              e.preventDefault();
              // Navegar manualmente al contacto con scroll suave
              const contactoSection = document.getElementById('contacto');
              if (contactoSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = contactoSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#contacto');
                }
              }
              // Asegurar que el scroll esté habilitado
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }}>Agendar Consultoría Estratégica</a>
          </div>

          {/* Menú hamburguesa para móvil */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{ 
            display: 'none', 
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '1.5rem',
            cursor: 'pointer',
            '@media (max-width: 780px)': {
              display: 'block'
            }
          }}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--color-primary)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 50,
            borderTop: '1px solid rgba(255,255,255,0.06)'
          }}>
            <a href="#servicios" onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              const serviciosSection = document.querySelector('#servicios');
              if (serviciosSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = serviciosSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#servicios');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }} style={{ color: '#FFFFFF', padding: '10px', textDecoration: 'none' }}>Servicios</a>
            
            <a href="#casos" onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              const casosSection = document.querySelector('#casos');
              if (casosSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = casosSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#casos');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }} style={{ color: '#FFFFFF', padding: '10px', textDecoration: 'none' }}>Casos</a>
            
            <a href="#nosotros" onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              const nosotrosSection = document.querySelector('#nosotros');
              if (nosotrosSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = nosotrosSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#nosotros');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }} style={{ color: '#FFFFFF', padding: '10px', textDecoration: 'none' }}>Nosotros</a>
            
            <a href="#recursos" onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              const recursosSection = document.querySelector('#recursos');
              if (recursosSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = recursosSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#recursos');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }} style={{ color: '#FFFFFF', padding: '10px', textDecoration: 'none' }}>Recursos</a>
            
            <a href="#contacto" className="cta-btn" onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              const contactoSection = document.querySelector('#contacto');
              if (contactoSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const offset = navHeight + 16;
                const top = contactoSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', '#contacto');
                }
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
            }}>Agendar Consultoría Estratégica</a>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <HeroSection openCalendly={openCalendly} />

      {/* Problema / Solución */}
      <section className="App-section">
        <div className="container">
         <h2>Detén la Hemorragia de Inversiones en IA Fallidas.</h2>
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
            <a className="App-link" href="#casos" style={{ marginTop: 12, color: 'var(--color-accent)', backgroundColor: 'rgba(0,245,212,0.08)' }}>Ver caso de éxito relacionado</a>
          </div>
          <div className="servicio-card">
            <h3>Eficiencia y Costos</h3>
            <p>Optimización de procesos con IA y automatización para reducir costos operativos y mejorar la utilización de recursos.</p>
            <a className="App-link" href="#contacto" style={{ marginTop: 12, color: 'var(--color-accent)', backgroundColor: 'rgba(0,245,212,0.08)' }}>Solicitar más información</a>
          </div>
          <div className="servicio-card">
            <h3>Estrategia y Visión</h3>
            <p>Consultoría estratégica de datos: evaluación de madurez, hoja de ruta y gobernanza para asegurar ROI y escalabilidad.</p>
            <a className="App-link" href="#contacto" style={{ marginTop: 12, color: 'var(--color-accent)', backgroundColor: 'rgba(0,245,212,0.08)' }}>Agenda una llamada</a>
          </div>
         </div>

         <div style={{ textAlign: 'center', marginTop: 26 }}>
          <a href="#servicios" className="cta-btn" onClick={(e) => {
            e.preventDefault();
            const serviciosSection = document.querySelector('#servicios');
            if (serviciosSection) {
              const navHeight = document.querySelector('nav')?.offsetHeight || 0;
              const offset = navHeight + 16;
              const top = serviciosSection.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top, behavior: 'smooth' });
              if (window.history && window.history.pushState) {
                window.history.pushState(null, '', '#servicios');
              }
            }
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
          }}>Ver todas las soluciones</a>
         </div>
         </div>
       </section>

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
          <a href="#contacto" className="cta-btn" onClick={(e) => {
            e.preventDefault();
            const contactoSection = document.querySelector('#contacto');
            if (contactoSection) {
              const navHeight = document.querySelector('nav')?.offsetHeight || 0;
              const offset = navHeight + 16;
              const top = contactoSection.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top, behavior: 'smooth' });
              if (window.history && window.history.pushState) {
                window.history.pushState(null, '', '#contacto');
              }
            }
            // Asegurar que el scroll esté habilitado
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
          }}>Conoce nuestro Framework</a>
        </div>
         </div>
       </section>

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

       


            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Sección AboutUs - Reincorporar componente */}
      <AboutUs />

      {/* Recursos / Blog */}
      <section className="App-section" id="recursos">
        <div className="container">
         <h2>Recursos y Blog</h2>
        <p>Artículos prácticos para comenzar con IA y potenciar tus decisiones de negocio.</p>

        <div style={{ maxWidth: 1000, margin: '18px auto', display: 'grid', gap: 14 }}>
          <div className="servicio-card">
            <h3>¿Cómo empezar con IA en tu empresa?</h3>
            <p>Guía práctica para priorizar casos de uso y obtener rápido valor.</p>
            <a className="App-link" href="#recursos" style={{ marginTop: 12, color: 'var(--color-accent)', backgroundColor: 'rgba(0,245,212,0.08)' }}>Leer artículo</a>
          </div>
          <div className="servicio-card">
            <h3>5 formas de usar tus datos para vender más</h3>
            <p>Estrategias aplicables para equipos comerciales y marketing.</p>
            <a className="App-link" href="#recursos" style={{ marginTop: 12, color: 'var(--color-accent)', backgroundColor: 'rgba(0,245,212,0.08)' }}>Leer artículo</a>
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

      {/* Contacto */}
      <section className="App-section contacto" id="contacto">
        <div className="container">
         <h2>Contacto</h2>
        <p>¿Listo para iniciar tu evolución? Completa el formulario o agenda una reunión.</p>

        <form className="contact-form" style={{ maxWidth: 720, margin: '18px auto 0', display: 'grid', gap: 12 }} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" required value={form.name} onChange={handleChange} />
          <input type="text" name="company" placeholder="Empresa" value={form.company} onChange={handleChange} />
          <input type="email" name="email" placeholder="Correo electrónico" required value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Mensaje / ¿Qué objetivo quieres alcanzar?" required value={form.message} onChange={handleChange} />
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button type="submit" className="cta-btn" disabled={status === 'sending'} onClick={() => {
              // Asegurar que el scroll siga funcionando después de enviar el formulario
              setTimeout(() => {
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
              }, 100);
            }}>
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            <a className="App-link" href="https://calendly.com/your-calendly" target="_blank" rel="noreferrer" onClick={openCalendly} style={{ color: 'var(--color-accent)', backgroundColor: 'rgba(0,245,212,0.08)' }}>Agenda una reunión</a>
            <a className="App-link" href="mailto:contacto@spore.com" style={{ color: 'var(--color-accent)', backgroundColor: 'rgba(0,245,212,0.08)' }}>info@tuempresa.com</a>
          </div>

          {status === 'success' && <div style={{ color: 'var(--color-primary)', marginTop: 8 }}>Gracias — recibimos tu mensaje. Te contactaremos pronto.</div>}
          {status === 'error' && <div style={{ color: '#ff6b6b', marginTop: 8 }}>Ocurrió un error. Verifica los campos e intenta nuevamente.</div>}
        </form>
        </div>
      </section>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
