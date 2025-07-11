// src/components/AboutSection.jsx
import React, { useState } from 'react';
import { ArrowIcon } from './Icons';
import styles from './AboutSection.module.css';
import teamImage from '../assets/team-softrium.jpg';



const values = [
  {
    icon: "🎯",
    title: "Misión",
    description: "Empoderar a nuestros clientes a través de soluciones de software innovadoras, robustas y a la medida, impulsando su crecimiento y eficiencia operativa.",
    color: "primary"
  },
  {
    icon: "👁️",
    title: "Visión",
    description: "Ser el socio tecnológico de referencia en Colombia, reconocidos por nuestra excelencia técnica, compromiso y la calidad humana de nuestro equipo.",
    color: "secondary"
  },
  {
    icon: "💎",
    title: "Valores",
    description: "Innovación constante, transparencia total, compromiso con la calidad y desarrollo de relaciones a largo plazo con nuestros clientes.",
    color: "accent"
  }
];



const teamHighlights = [
  "Desarrolladores Full-Stack especializados",
  "Arquitectos de software senior",
  "Especialistas en UX/UI Design",
  "Consultores en transformación digital",
  "Expertos en metodologías ágiles",
  "Certificaciones en tecnologías de vanguardia"
];

function AboutSection() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section id="nosotros" className={styles.aboutSection}>
      <div className="container">
        {/* Hero Content */}
        <div className={styles.heroContent}>

          
          <h2 className={styles.sectionTitle}>
            <br />Tu Visión, Nuestra Tecnología
          </h2>
          
          <p className={styles.sectionSubtitle}>
            En Softrium, nacimos de la pasión por la tecnología y la convicción de que el software 
            bien hecho tiene el poder de transformar negocios. No nos limitamos a escribir código; 
            nos sumergimos en tus objetivos para construir soluciones que generen un impacto real y medible.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className={styles.mainContent}>
          {/* Left Side - Team Image and Info */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img src={teamImage} alt="Equipo de Softrium" className={styles.teamImage} />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h3>Nuestro Equipo</h3>
                  <p>Profesionales apasionados por la tecnología</p>
                </div>
              </div>
            </div>
            
            <div className={styles.teamInfo}>
              <h3 className={styles.teamTitle}>¿Por qué elegirnos?</h3>
              <div className={styles.teamHighlights}>
                {teamHighlights.map((highlight, index) => (
                  <div key={index} className={styles.highlight}>
                    <span className={styles.highlightIcon}>✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Values and Content */}
          <div className={styles.contentSection}>
            {/* Interactive Values */}
            <div className={styles.valuesSection}>
              <h3 className={styles.valuesTitle}>Nuestros Fundamentos</h3>
              <div className={styles.valuesGrid}>
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className={`${styles.valueCard} ${activeValue === index ? styles.active : ''}`}
                    onClick={() => setActiveValue(index)}
                  >
                    <div className={styles.valueIcon}>{value.icon}</div>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

       
      </div>
    </section>
  );
}

export default AboutSection;