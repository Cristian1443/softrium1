import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ProjectDetailPage.module.css';

// Importamos los datos de los proyectos
import projectImage1 from '../assets/projects/proyecto-1.png';
import projectImage2 from '../assets/projects/proyecto-2.png';

const projectsData = [
  {
    id: 'plataforma-logistica',
    image: projectImage1,
    client: "Empresa de Logística",
    title: "Plataforma de Optimización de Rutas",
    description: "Desarrollamos una aplicación web que redujo los costos de combustible en un 20% mediante algoritmos de enrutamiento inteligente.",
    tags: ["Web App", "React", "Node.js", "Logística"],
    fullDescription: `
      Nuestra solución permitió a la empresa optimizar sus rutas de entrega, 
      resultando en un ahorro significativo de combustible y tiempo. 
      La plataforma incluye características como:
      
      • Algoritmos de optimización de rutas en tiempo real
      • Seguimiento GPS de la flota
      • Dashboard con métricas clave
      • Reportes automatizados
      • Integración con sistemas existentes
    `,
    results: [
      "20% de reducción en costos de combustible",
      "30% de mejora en tiempos de entrega",
      "95% de satisfacción del cliente"
    ]
  },
  {
    id: 'app-fintech',
    image: projectImage2,
    client: "Startup Fintech",
    title: "App Móvil de Asesoría Financiera",
    description: "Creamos una app móvil nativa para iOS y Android que ofrece asesoramiento financiero personalizado utilizando IA.",
    tags: ["App Móvil", "IA", "Fintech", "Swift", "Kotlin"],
    fullDescription: `
      Desarrollamos una aplicación móvil innovadora que democratiza el acceso 
      a asesoría financiera personalizada. La app utiliza inteligencia artificial 
      para proporcionar recomendaciones adaptadas a cada usuario.
      
      Características principales:
      • Análisis financiero personalizado
      • Recomendaciones de inversión basadas en IA
      • Seguimiento de gastos en tiempo real
      • Planificación financiera automatizada
      • Educación financiera interactiva
    `,
    results: [
      "100,000+ descargas en el primer mes",
      "4.8/5 calificación promedio en tiendas",
      "85% de retención de usuarios"
    ]
  }
];

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <>
        <Header />
        <main className="container">
          <h1>Proyecto no encontrado</h1>
          <p>Lo sentimos, el proyecto que buscas no existe.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.projectDetail}>
        <div className="container">
          <div className={styles.hero}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <span className={styles.client}>{project.client}</span>
              <h1 className={styles.title}>{project.title}</h1>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.description}>
              <h2>Sobre el Proyecto</h2>
              <p>{project.fullDescription}</p>
            </div>

            <div className={styles.results}>
              <h2>Resultados</h2>
              <ul>
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetailPage; 