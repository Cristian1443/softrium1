// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Fábrica de Software a la Medida
        </h1>
        <p className={styles.subtitle}>
          Transformamos tus ideas en soluciones digitales de alto impacto. 
          No solo programamos, <span className={styles.highlight}>potenciamos tu negocio</span>.
        </p>
        <Link to="/contacto" className={styles.ctaButton}>
          Agenda una Consultoría Gratuita
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;