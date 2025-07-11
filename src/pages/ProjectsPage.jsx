import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import styles from './ProjectsPage.module.css';

// Importamos las imágenes de los proyectos
import projectImage1 from '../assets/projects/proyecto-1.png';
import projectImage2 from '../assets/projects/proyecto-2.png';

const projectsData = [
  {
    id: 'Relacionamiento CCB',
    image: projectImage1,
    video: "/assets/video/proyecto-camara-de-comercio.mp4",
    client: "Uniempresarial - CCB",
    title: "Plataforma de Relacionamiento",
    description: "App CCB que gestiona talleres, agenda, consultores y reportes de horas e informes de pago.",
    tags: ["Web App", "React", "Node.js", "Logística"],
    category: "Web App"
  },
  {
    id: 'Events IA',
    image: projectImage2,
    video: "/assets/video/EventConnect _ Plataforma de Eventos Empresariales - Brave 2025-06-20 18-29-19.mp4",
    client: "Uniempresarial",
    title: "Events IA",
    description: "App empresarial para consultar eventos, talleres y conferencias de IA en áreas estratégicas corporativas.",
    tags: ["App Móvil", "IA", "Fintech", "Swift", "Kotlin"],
    category: "App Móvil"
  },
  {
    id: 'TaskGo',
    image: projectImage1,
    video: "/assets/video/videocelular.mp4",
    client: "Proyecto personal",
    title: "TaskGo",
    description: "TaskGo es una agenda digital que escanea tarjetas físicas y guarda contactos para facilitar tu networking.",
    tags: ["E-commerce", "React", "Python", "Stripe"],
    category: "App Móvil"
  },
  {
    id: 'fUsoft Web',
    image: projectImage2,
    video: "/assets/video/fusoft.mp4",
    client: "FUsoft",
    title: "fUsoft Web",
    description: "fUSoft ya cuenta con página oficial en la web, donde podrás ver todos nuestros servicios y más.",
    tags: ["Web", "React", "Node.js", "PostgreSQL"],
    category: "Web"
  },
  {
    id: 'Campus Virtual',
    image: projectImage1,
    video: "/assets/video/Campus.mp4",
    client: "Uniempresarial",
    title: "Campus Virtual",
    description: "Campus virtual con todos los múltiples servicios físicos que ofrece Uniempresarial, digitalmente integrados",
    tags: ["Web App", "React", "Firebase", "Campus Virtual", "Node.js"],
    category: "Web App"
  },
  {
    id: 'VitroCompos',
    image: projectImage2,
    video: "/assets/video/VITROCAMPO.mp4",
    client: "VitroCompos",
    title: "VitroCompos Web",
    description: "Sitio web corporativo para VitroCampos, empresa especializada en vidrios y materiales de construcción.",
    tags: ["Web", "Vue.js", "Laravel", "Laboratorio"],
    category: "Web"
  },
  {
    id: 'CE ASE INGENIERIA',
    image: projectImage1,
    video: "/public/assets/video/ce-ace-ingenieria.mp4",
    client: "CE ASE INGENIERIA",
    title: "CE ASE INGENIERIA",
    description: "Tienda online completa para CE-ACE Ingeniería, permitiendo la venta de productos y servicios de ingeniería de forma digital.",
    tags: ["Web", "React", "Node.js", "Tienda Online", "E-commerce"],
    category: "E-commerce"
  },
  {
    id: 'FoodBoleros',
    image: projectImage2,
    video: "/public/assets/video/foodboleros .mp4",
    client: "FoodBoleros",
    title: "FoodBoleros Web",
    description: "Sitio web corporativo para FoodBoleros, empresa especializada en la venta de productos de alimentos y bebidas.",
    tags: ["Web", "React", "Node.js", "Tienda Online", "E-commerce"],
    category: "E-commerce"
  },
  {
    id: 'Gruas Premium',
    image: projectImage1,
    video: "/public/assets/video/gruas.mp4",
    client: "Gruas Premium",
    title: "Gruas Premium Web",
    description: "Sitio web corporativo para Gruas Premium, empresa especializada en la venta de productos de grúas y maquinaria pesada.",
    tags: ["Web", "React", "Node.js", "Tienda Online", "E-commerce"],
    category: "E-commerce"
  },
  {
    id: 'Juguetes Elite',
    image: projectImage2,
    video: "/public/assets/video/jugueteria.mp4",
    client: "Juguetes Elite",
    title: "Juguetes Elite Web",
    description: "Sitio web corporativo para Juguetes Elite, empresa especializada en la venta de productos de juguetes y artículos para bebés.",
    tags: ["Web", "React", "Node.js", "Tienda Online", "E-commerce"],
    category: "E-commerce"
  },
  {
    id: 'La Mafia Barber Club',
    image: projectImage1,
    video: "/public/assets/video/lamafia.mp4",
    client: "La Mafia Barber Club",
    title: "La Mafia Barber Club Web",
    description: "Sitio web corporativo para La Mafia Barber Club, empresa especializada en la venta de productos de barbería y cuidado personal.",
    tags: ["Web", "Bootstrap", "Node.js", "JavaScript", "MySQL"],
    category: "Web"
  },
  {
    id: 'Fibra Optica',
    image: projectImage2,
    video: "/public/assets/video/FIBRAOPTICA.mp4",
    client: "Fibra Optica",
    title: "Fibra Optica Web",
    description: "Plataforma web para la venta de fibra óptica, permitiendo a los usuarios realizar compras y gestionar pedidos en línea.",
    tags: ["PHP", "MongoDB", "MySQL", "E-commerce", "Bootstrap"],
    category: "E-commerce"
  },
  {
    id: 'Aplicación ATS',
    image: projectImage1,
    video: "/public/assets/video/ATS.mp4",
    client: "Movistar",
    title: "Movistar Web",
    description: "App móvil para la gestión de actividades de los técnicos ATS, permitiendo reportes y seguimiento en campo desde dispositivos móviles",
    tags: ["Web", "Spring Boot", "Kotlin", "MySQL"],
    category: "App Móvil"
  }
];

const categories = ["Todos", "Web", "Web App", "App Móvil", "E-commerce"];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <>
      <Header />
      <main className={styles.projectsPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <h1>Nuestro Portfolio</h1>
            <p>
              Descubre cómo hemos transformado ideas en soluciones digitales exitosas. 
              Cada proyecto representa nuestra pasión por la innovación y el compromiso 
              con la excelencia técnica.
            </p>
            
            {/* Estadísticas */}
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>13+</span>
                <span className={styles.statLabel}>Proyectos Completados</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Satisfacción Cliente</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Tecnologías</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros de Proyectos */}
        <section className={styles.filtersSection}>
          <div className="container">
            <div className={styles.filtersContainer}>
              <h3 className={styles.filtersTitle}>Filtrar por Categoría</h3>
              <div className={styles.filters}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.filterButton} ${
                      selectedCategory === category ? styles.active : ''
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grid de Proyectos */}
        <section className={styles.projectsGridSection}>
          <div className="container">
            {/* Contador de Proyectos */}
            <div className={styles.projectsCounter}>
              <div className={styles.projectsCount}>
                {filteredProjects.length}
              </div>
              <div className={styles.projectsCountLabel}>
                {selectedCategory === "Todos" ? "Proyectos Totales" : `Proyectos en ${selectedCategory}`}
              </div>
            </div>

            {/* Grid */}
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  video={project.video}
                  client={project.client}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  id={project.id}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>¿Listo para el Siguiente Proyecto?</h2>
            <p>
              Únete a nuestros clientes satisfechos y transforma tu idea en realidad. 
              Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <Link to="/contacto" className={styles.ctaButton}>
              Iniciar mi Proyecto
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProjectsPage; 