import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from './ProjectsPage.module.css';

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

function ProjectsPage() {
  return (
    <>
      <Header />
      <main className={styles.projectsPage}>
        <section className={styles.hero}>
          <div className="container">
            <h1>Nuestros Proyectos</h1>
            <p>Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos</p>
          </div>
        </section>

        <section className={`${styles.projectsGrid} container`}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              client={project.client}
              title={project.title}
              description={project.description}
              tags={project.tags}
              id={project.id}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProjectsPage; 