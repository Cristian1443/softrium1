// src/components/PortfolioSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './PortfolioSection.module.css';

// Importamos las imágenes de los proyectos
import projectImage1 from '../assets/projects/proyecto-1.png';
import projectImage2 from '../assets/projects/proyecto-2.png';



const projectsData = [
  {
    id: 'plataforma-logistica',
    image: projectImage1,
    client: "Empresa de Logística",
    title: "Plataforma de Optimización de Rutas",
    description: "Desarrollamos una aplicación web que redujo los costos de combustible en un 20% mediante algoritmos de enrutamiento inteligente.",
    tags: ["Web App", "React", "Node.js", "Logística"]
  },
  {
    id: 'app-fintech',
    image: projectImage2,
    client: "Startup Fintech",
    title: "App Móvil de Asesoría Financiera",
    description: "Creamos una app móvil nativa para iOS y Android que ofrece asesoramiento financiero personalizado utilizando IA.",
    tags: ["App Móvil", "IA", "Fintech", "Swift", "Kotlin"]
  }
];

function PortfolioSection() {
  return (
    <section id="proyectos" className={`${styles.portfolioSection} container`}>
      <h2 className={styles.sectionTitle}>Casos de Éxito</h2>
      <p className={styles.sectionSubtitle}>
        Mira cómo hemos ayudado a otras empresas a transformar sus ideas en realidad.
      </p>
      <div className={styles.portfolioGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            client={project.client}
            title={project.title}
            description={project.description}
            tags={project.tags}
            id={project.id}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;