import React from 'react';
import styles from './HeroSection.module.css';
// Importamos una imagen placeholder temporal si no se encuentra la original
import heroImage from './hero.png'; // Usamos el logo como fallback


const HeroSection = ({ openCalendly }) => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      const offset = navHeight + 16;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${sectionId}`);
      }
      
      // Asegurar que el scroll no esté bloqueado
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  };

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Transforma tu negocio con IA que genera resultados medibles</h1>
          <p className={styles.heroSubtitle}>En Spore creamos soluciones de IA aplicada que resuelven problemas de negocio reales. Nuestra metodología garantiza proyectos con ROI demostrable.</p>
          
          <div className={styles.heroActions}>
            <button className={styles.ctaPrimary} onClick={() => {
              // Asegurar que el scroll esté habilitado después de hacer clic
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
              // Llamar a openCalendly
              openCalendly();
            }}>Agendar Consultoría Estratégica</button>
            
            <button className={styles.ctaSecondary} onClick={() => handleScrollToSection('servicios')}>
              Descubre nuestra metodología
            </button>
          </div>
          
          <ul className={styles.heroFeatures}>
            <li><span>+7 años experiencia IA empresarial</span></li>
            <li><span>Enfoque en métricas de negocio</span></li>
            <li><span>Tecnología de vanguardia</span></li>
          </ul>
        </div>
        
        <div className={styles.heroVisual}>
          <img 
            src={heroImage} 
            alt="Ilustración tecnológica: visualización de datos y redes neuronales" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
