// src/components/CallToActionSection.jsx
import React from 'react';
import styles from './CallToActionSection.module.css';
import { Link } from 'react-router-dom'; // <-- 1. Importar Link

function CallToActionSection() {
  return (
    <section id="contacto" className={styles.ctaSection}>
      <div className={`${styles.ctaContent} container`}>
        <h2 className={styles.title}>¿Tienes una idea o un proyecto en mente?</h2>
        <p className={styles.subtitle}>
          No esperes más para transformar tu negocio. Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
        {/* 2. Cambiar la etiqueta <a> por <Link> */}
        <Link to="/contacto" className={styles.ctaButton}>
          Hablemos de tu idea
        </Link>
      </div>
    </section>
  );
}

export default CallToActionSection;