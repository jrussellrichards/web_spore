import javierFoto from './javier.jpeg'; // imagen centralizada en src/imgs
import rodrigoFoto from './rodrigo.jpeg'; // imagen centralizada en src/imgs
import tomasFoto from './tomas.jpeg'; // imagen centralizada en src/imgs

const AboutUs = () => {
  return (
      <section className="App-section" id="nosotros">
        <div className="container">
         <h2>Nuestro equipo</h2>
        <p>Nuestra misión: ser el catalizador de la siguiente evolución de las empresas en LATAM, democratizando la inteligencia de datos de clase mundial.</p>
        <p><strong>Filosofía:</strong> Estrategia antes que Tecnología. La IA es una herramienta, no un fin. Nos comprometemos a ser tu socio estratégico y mitigar el riesgo de fracaso en proyectos de IA.</p>

        <div className="equipo-list" style={{ marginTop: 24 }}>
          <div className="equipo-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={javierFoto} alt="Javier Richards" className="equipo-avatar" loading="lazy" />
              <div className="equipo-meta">
                <h4>Javier Richards</h4>
                <div className="equipo-role">CEO & Estratega de Negocios con IA</div>
                <p className="equipo-bio">Experto en traducir datos complejos en estrategias de negocio rentables.</p>
                <div className="equipo-links"><a className="equipo-link" href="https://www.linkedin.com/in/javier-richards-valenzuela/" target="_blank" rel="noreferrer">LinkedIn</a></div>
              </div>
            </div>
          </div>


          <div className="equipo-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={rodrigoFoto} alt="Rodrigo Richards" className="equipo-avatar" loading="lazy" />
              <div className="equipo-meta">
                <h4>Rodrigo Richards</h4>
                <div className="equipo-role">CTO & Líder de Ingeniería de IA</div>
                <p className="equipo-bio">Garantiza la operación confiable y escalable de soluciones de IA críticas.</p>
                <div className="equipo-links"><a className="equipo-link" href="https://www.linkedin.com/in/rrichards95/" target="_blank" rel="noreferrer">LinkedIn</a></div>
              </div>
            </div>
          </div>

          <div className="equipo-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={tomasFoto} alt="Co-Fundador" className="equipo-avatar" loading="lazy" />
              <div className="equipo-meta">
                <h4>Tomas Prado</h4>
                <div className="equipo-role">COO & Especialista en Transformación de Negocios</div>
                <p className="equipo-bio">Convierte la innovación tecnológica en impacto directo y medible en las operaciones.</p>
                <div className="equipo-links"><a className="equipo-link" href="https://www.linkedin.com/in/tomasprado/" target="_blank" rel="noreferrer">LinkedIn</a></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 18 }}>
          <a href="https://www.linkedin.com" className="App-link" target="_blank" rel="noreferrer">Conecta con nosotros en LinkedIn</a>
        </div>
        </div>
      </section>

  );
}

export default AboutUs;