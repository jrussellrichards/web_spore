import React from 'react';
import styles from './Footer.module.css';
import logo from '../../imgs/logo_blue_analytics.png';

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src={logo} alt="BlueAnalytics" className={styles.logo} />
          <div className={styles.copy}>© {new Date().getFullYear()} BlueAnalytics</div>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <a href="#servicios">Servicios</a>
          <a href="#casos">Casos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#recursos">Recursos</a>
        </nav>

        <div className={styles.contact}>
          <a className={styles.mail} href="mailto:info@tuempresa.com">contacto@BlueAnalytics.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;