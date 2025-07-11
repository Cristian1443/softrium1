// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon, ReactIcon, NodeIcon, PythonIcon, AWSIcon, DockerIcon, MongoIcon } from './Icons';
import styles from './HeroSection.module.css';

function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { number: '50+', label: 'Proyectos Entregados', icon: '🚀' },
    { number: '30+', label: 'Clientes Satisfechos', icon: '😊' },
    { number: '99%', label: 'Tasa de Éxito', icon: '⭐' },
    { number: '24/7', label: 'Soporte Disponible', icon: '🛠️' }
  ];

  const technologies = [
    { name: 'React', Icon: ReactIcon },
    { name: 'Node.js', Icon: NodeIcon },
    { name: 'Python', Icon: PythonIcon },
    { name: 'AWS', Icon: AWSIcon },
    { name: 'Docker', Icon: DockerIcon },
    { name: 'MongoDB', Icon: MongoIcon }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.backgroundShape1}></div>
        <div className={styles.backgroundShape2}></div>
        <div className={styles.floatingElements}>
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className={`${styles.floatingTech} ${styles[`tech${index + 1}`]}`}
              title={tech.name}
            >
              <tech.Icon className={styles.techIcon} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.mainContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⚡</span>
              <span>Desarrollo Ágil & Innovador</span>
            </div>
            
            <h1 className={styles.title}>
              Transformamos Ideas en 
              <span className={styles.highlight}> Soluciones Digitales</span>
              <br />de Alto Impacto
            </h1>
            
            <p className={styles.subtitle}>
              Somos Softrium, tu fábrica de software especializada en crear aplicaciones web, 
              móviles y sistemas empresariales que <strong>impulsan el crecimiento</strong> de tu negocio.
            </p>

            <div className={styles.statsPreview}>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>{stats[currentStat].icon}</span>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>{stats[currentStat].number}</span>
                  <span className={styles.statLabel}>{stats[currentStat].label}</span>
                </div>
              </div>
            </div>

            <div className={styles.ctaContainer}>
              <Link to="/contacto" className={styles.ctaPrimary}>
                <span>Inicia tu Proyecto</span>
                <ArrowIcon className={styles.arrowIcon} />
              </Link>
              <Link to="/servicios" className={styles.ctaSecondary}>
                Ver Nuestros Servicios
              </Link>
            </div>

            <div className={styles.socialProof}>
              <p className={styles.socialText}>Confían en nosotros:</p>
              <div className={styles.clientLogos}>
                <div className={styles.clientLogo}>TechCorp</div>
                <div className={styles.clientLogo}>InnovateStart</div>
                <div className={styles.clientLogo}>DigitalPro</div>
                <div className={styles.clientLogo}>CloudSoft</div>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowButtons}>
                  <span className={styles.windowButton} style={{backgroundColor: '#ff5f57'}}></span>
                  <span className={styles.windowButton} style={{backgroundColor: '#ffbd2e'}}></span>
                  <span className={styles.windowButton} style={{backgroundColor: '#28ca42'}}></span>
                </div>
                <span className={styles.windowTitle}>softrium-app.js</span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.codeComment}>// Creando el futuro digital</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span>
                  <span className={styles.codeVariable}> proyecto</span>
                  <span className={styles.codeOperator}> = </span>
                  <span className={styles.codeString}>'tu-idea'</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span>
                  <span className={styles.codeVariable}> resultado</span>
                  <span className={styles.codeOperator}> = </span>
                  <span className={styles.codeFunction}>softrium</span>
                  <span className={styles.codeBracket}>(</span>
                  <span className={styles.codeVariable}>proyecto</span>
                  <span className={styles.codeBracket}>)</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeComment}>// → Éxito Garantizado 🚀</span>
                </div>
              </div>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`${styles.statCard} ${index === currentStat ? styles.active : ''}`}
                >
                  <span className={styles.statCardIcon}>{stat.icon}</span>
                  <span className={styles.statCardNumber}>{stat.number}</span>
                  <span className={styles.statCardLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Descubre más</div>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  );
}

export default HeroSection;