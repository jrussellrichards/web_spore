import React from 'react';
import styles from './HeroSection.module.css';
import heroImage from './hero.png';


const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: '#00F5D4' }}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>IA Estratégica: De la Ambigüedad al Impacto Medible.</h1>
          <p className={styles.heroSubtitle}>
            Desbloqueamos el poder de la Inteligencia Artificial y los datos, para
            transformar tu negocio. Mitigamos el riesgo de fracaso enfocando la IA en
            problemas de negocio reales.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.ctaPrimary}>Agendar Consultoría Estratégica</button>
            <button className={styles.ctaSecondary}>Descubre nuestra metodología</button>
          </div>
{/* 
          <ul className={styles.heroFeatures} aria-hidden="false">
            <li><CheckIcon /> <span>Diagnóstico de negocio y datos</span></li>
            <li><CheckIcon /> <span>Implementación segura y escalable</span></li>
            <li><CheckIcon /> <span>Entrega de resultados medibles</span></li>
          </ul> */}
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <img src={heroImage} alt="Ilustración tecnológica: visualización de datos y redes neuronales" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
