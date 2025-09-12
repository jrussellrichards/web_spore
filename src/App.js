import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="App-header">
        <h1>Soluciones Empresariales de IA y Data Science</h1>
        <p>
          Impulsa tu empresa con asistentes inteligentes, automatización y análisis avanzado de datos.
        </p>
        <a className="App-link cta-btn" href="#contacto">
          Solicita una consulta gratuita
        </a>
      </header>

      {/* Servicios */}
      <section className="App-section servicios">
        <h2>¿Qué ofrecemos?</h2>
        <div className="servicios-list">
          <div className="servicio-card">
            <h3>Asistentes Inteligentes</h3>
            <p>Desarrollo de asistentes virtuales personalizados para atención al cliente, soporte interno y automatización de tareas.</p>
          </div>
          <div className="servicio-card">
            <h3>Automatización con IA</h3>
            <p>Optimización de procesos empresariales mediante inteligencia artificial y machine learning.</p>
          </div>
          <div className="servicio-card">
            <h3>Consultoría en Data Science</h3>
            <p>Transformamos tus datos en decisiones estratégicas con análisis avanzado y visualización de datos.</p>
          </div>
          <div className="servicio-card">
            <h3>Integración Empresarial</h3>
            <p>Implementación de soluciones de IA en bancos, consultoras y empresas de diversos rubros.</p>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="App-section experiencia">
        <h2>+7 años de experiencia</h2>
        <p>
          Nuestro equipo ha implementado soluciones de inteligencia artificial en bancos, consultoras y empresas líderes, ayudando a transformar datos en resultados tangibles.
        </p>
        <div className="clientes">
          <h3>Confían en nosotros:</h3>
          <ul>
            <li>Bancos líderes</li>
            <li>Consultoras internacionales</li>
            <li>Empresas de retail y logística</li>
            <li>Startups tecnológicas</li>
          </ul>
        </div>
      </section>

      {/* Testimonios */}
      <section className="App-section testimonios">
        <h2>Testimonios</h2>
        <div className="testimonios-list">
          <blockquote>
            “Gracias a sus asistentes inteligentes, mejoramos la atención al cliente y optimizamos nuestros procesos internos.”<br />
            <span>- Gerente de Innovación, Banco XYZ</span>
          </blockquote>
          <blockquote>
            “Su consultoría en Data Science nos permitió tomar decisiones basadas en datos y crecer un 30% en un año.”<br />
            <span>- CEO, Consultora ABC</span>
          </blockquote>
        </div>
      </section>

      {/* Equipo */}
      <section className="App-section equipo">
        <h2>Nuestro equipo</h2>
        <div className="equipo-list">
          <div className="equipo-card">
            <h4>María López</h4>
            <p>CEO & Data Scientist</p>
          </div>
          <div className="equipo-card">
            <h4>Carlos Pérez</h4>
            <p>CTO & Especialista en IA</p>
          </div>
          <div className="equipo-card">
            <h4>Lucía Gómez</h4>
            <p>Consultora de Transformación Digital</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="App-section contacto" id="contacto">
        <h2>Contáctanos</h2>
        <p>
          ¿Listo para llevar tu empresa al siguiente nivel? Escríbenos a <a href="mailto:info@tuempresa.com">info@tuempresa.com</a> o completa el siguiente formulario:
        </p>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="¿En qué podemos ayudarte?" required />
          <button type="submit" className="cta-btn">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Tu Empresa IA & Data Science. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
