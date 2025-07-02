// src/components/AboutSection.jsx
import React from 'react';
import styles from './AboutSection.module.css';
import teamImage from '../assets/team-softrium.jpg'; // Importamos la imagen del equipo

function AboutSection() {
  return (
    <section id="nosotros" className={`${styles.aboutSection} container`}>
      <div className={styles.imageContainer}>
        <img src={teamImage} alt="Equipo de Softrium" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.sectionTitle}>Más que una Fábrica de Software, Somos tu Socio Tecnológico</h2>
        <p className={styles.description}>
          En Softrium, nacimos de la pasión por la tecnología y la convicción de que el software bien hecho tiene el poder de transformar negocios. No nos limitamos a escribir código; nos sumergimos en tus objetivos para construir soluciones que generen un impacto real y medible.
        </p>
        <div className={styles.values}>
          <div className={styles.valueItem}>
            <h3>Misión</h3>
            <p>Empoderar a nuestros clientes a través de soluciones de software innovadoras, robustas y a la medida, impulsando su crecimiento y eficiencia.</p>
          </div>
          <div className={styles.valueItem}>
            <h3>Visión</h3>
            <p>Ser el socio tecnológico de referencia en Latinoamérica, reconocidos por nuestra excelencia técnica, compromiso y la calidad humana de nuestro equipo.</p>
          </div>
        </div>
        <a href="/contacto" className={styles.ctaButton}>Conoce más sobre nosotros</a>
      </div>
    </section>
  );
}

export default AboutSection;