// src/components/TechStackSection.jsx
import React from 'react';
import styles from './TechStackSection.module.css';

// Importa los logos
import reactLogo from '../assets/tech/react.svg';
import nodejsLogo from '../assets/tech/nodedotjs.svg';
import pythonLogo from '../assets/tech/python.svg';
import dockerLogo from '../assets/tech/docker.svg';
import awsLogo from '../assets/tech/astro.svg';
import figmaLogo from '../assets/tech/figma.svg';
import javascriptLogo from '../assets/tech/javascript.svg';
import typescriptLogo from '../assets/tech/typescript.svg';
import botstraptLogo from '../assets/tech/bootstrap.svg';
import csstLogo from '../assets/tech/css.svg';
import eclipseLogo from '../assets/tech/eclipseide.svg';
import html5Logo from '../assets/tech/html5.svg';
import kotlinLogo from '../assets/tech/kotlin.svg';
import htmlLogo from '../assets/tech/laravel.svg';
import javaLogo from '../assets/tech/mysql.svg';
import mysqlLogo from '../assets/tech/php.svg';
import nextjsLogo from '../assets/tech/springboot.svg';
import tailwindcssLogo from '../assets/tech/tailwindcss.svg';
import postgresqlLogo from '../assets/tech/postgresql.svg';
import mongodbLogo from '../assets/tech/mongodb.svg';
import gitLogo from '../assets/tech/git.svg';

const technologies = [
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodejsLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'Astro', logo: awsLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'Bootstrap', logo: botstraptLogo },
  { name: 'CSS', logo: csstLogo },
  { name: 'Eclipse', logo: eclipseLogo },
  { name: 'HTML', logo: html5Logo },
  { name: 'Kotlin', logo: kotlinLogo },
  { name: 'Laravel', logo: htmlLogo },
  { name: 'MySQL', logo: javaLogo },
  { name: 'PHP', logo: mysqlLogo },
  { name: 'Spring Boot', logo: nextjsLogo },
  { name: 'Tailwindcss', logo: tailwindcssLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'Git', logo: gitLogo },
];

// Dividir el array de tecnologías en dos
const half = Math.ceil(technologies.length / 2);
const firstRow = technologies.slice(0, half);
const secondRow = technologies.slice(half);


function TechStackSection() {
  return (
    <section className={styles.techSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Tecnologías y Herramientas</h2>
        <p className={styles.sectionSubtitle}>
          Utilizamos un stack tecnológico moderno y robusto para garantizar soluciones escalables y de alto rendimiento.
        </p>
      </div>

      <div className={styles.scrollers}>
        {/* Fila 1 (hacia la izquierda) */}
        <div className={styles.scroller}>
          <div className={styles.scrollerInner}>
            {[...firstRow, ...firstRow].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className={styles.techItem} aria-hidden={index >= firstRow.length}>
                <img src={tech.logo} alt={tech.name} className={styles.techLogo} />
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fila 2 (hacia la derecha) */}
        <div className={`${styles.scroller} ${styles.scrollerRight}`}>
          <div className={styles.scrollerInner}>
            {[...secondRow, ...secondRow].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className={styles.techItem} aria-hidden={index >= secondRow.length}>
                <img src={tech.logo} alt={tech.name} className={styles.techLogo} />
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;