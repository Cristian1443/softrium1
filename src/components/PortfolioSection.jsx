// src/components/PortfolioSection.jsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { ArrowIcon } from './Icons';
import styles from './PortfolioSection.module.css';

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
    tags: ["Web App", "React", "Node.js", "MySQL"],
    category: "Educación",
    year: "2025",
    impact: "300+ talleres gestionados mensualmente",
    status: "Activo"
  },
  {
    id: 'Campus Virtual',
    image: projectImage1,
    video: "/assets/video/Campus.mp4",
    client: "Uniempresarial",
    title: "Campus Virtual",
    description: "Campus virtual con todos los múltiples servicios físicos que ofrece Uniempresarial, digitalmente integrados.",
    tags: ["Web App", "React", "Firebase", "Node.js"],
    category: "Educación",
    year: "2025",
    impact: "3,000+ estudiantes activos",
    status: "Activo"
  },
  {
    id: 'Events IA',
    image: projectImage2,
    video: "/assets/video/EventConnect _ Plataforma de Eventos Empresariales - Brave 2025-06-20 18-29-19.mp4",
    client: "Uniempresarial",
    title: "Events IA",
    description: "App empresarial para consultar eventos, talleres y conferencias de IA en áreas estratégicas corporativas.",
    tags: ["App Móvil", "IA", "React Native", "Python"],
    category: "Eventos",
    year: "2025",
    impact: "2,000+ usuarios empresariales",
    status: "Activo"
  }
];

const categories = ['Todos', 'Educación', 'Eventos'];

const stats = [
  { number: "15+", label: "Proyectos Completados", icon: "📈" },
  { number: "10+", label: "Clientes Satisfechos", icon: "🤝" },
  { number: "3", label: "Años de Experiencia", icon: "⏰" },
  { number: "98%", label: "Proyectos Exitosos", icon: "🎯" }
];

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [featuredProject, setFeaturedProject] = useState(projectsData[0]);

  const filteredProjects = activeCategory === 'Todos' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="proyectos" className={styles.portfolioSection}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🚀</span>
            <span>Casos de Éxito</span>
          </div>
          
          <h2 className={styles.sectionTitle}>
            Proyectos que 
            <span className={styles.highlight}> Transforman Negocios</span>
          </h2>
          
          <p className={styles.sectionSubtitle}>
            Descubre cómo hemos ayudado a empresas de diferentes sectores a alcanzar sus 
            objetivos digitales con soluciones innovadoras y resultados medibles.
          </p>

          {/* Statistics */}
          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statIcon}>{stat.icon}</span>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        <div className={styles.featuredSection}>
          <h3 className={styles.featuredTitle}>Proyecto Destacado</h3>
          <div className={styles.featuredProject}>
            <div className={styles.featuredImage}>
              <video 
                src={featuredProject.video} 
                autoPlay
                loop
                muted
                className={styles.featuredVideo}
                poster={featuredProject.image}
              >
                Tu navegador no soporta el elemento video.
              </video>
              <div className={styles.projectStatus}>
                <span className={`${styles.statusBadge} ${styles[featuredProject.status.replace(' ', '').toLowerCase()]}`}>
                  {featuredProject.status}
                </span>
              </div>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredClient}>{featuredProject.client}</span>
                <span className={styles.featuredYear}>{featuredProject.year}</span>
              </div>
              <h4 className={styles.featuredProjectTitle}>{featuredProject.title}</h4>
              <p className={styles.featuredDescription}>{featuredProject.description}</p>
              <div className={styles.featuredImpact}>
                <span className={styles.impactLabel}>Impacto:</span>
                <span className={styles.impactValue}>{featuredProject.impact}</span>
              </div>
              <div className={styles.featuredTags}>
                {featuredProject.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className={styles.featuredTag}>{tag}</span>
                ))}
              </div>
              <div className={styles.featuredActions}>
                <a href={`/proyecto/${featuredProject.id}`} className={styles.viewProject}>
                  <span>Ver Caso Completo</span>
                  <ArrowIcon className={styles.arrowIcon} />
                </a>
                <div className={styles.projectSelector}>
                  {projectsData.map((project, index) => (
                    <button
                      key={index}
                      className={`${styles.selectorDot} ${featuredProject.id === project.id ? styles.active : ''}`}
                      onClick={() => setFeaturedProject(project)}
                      aria-label={`Ver ${project.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className={styles.filtersSection}>
          <h3 className={styles.filtersTitle}>Explorar por Sector</h3>
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.portfolioGrid}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={styles.projectWrapper}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                image={project.image}
                video={project.video}
                client={project.client}
                title={project.title}
                description={project.description}
                tags={project.tags}
                id={project.id}
                category={project.category}
                year={project.year}
                impact={project.impact}
                status={project.status}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>
              Cada proyecto es único y merece una solución personalizada. 
              Conversemos sobre cómo podemos hacer realidad tu visión digital.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contacto" className={styles.ctaPrimary}>
                <span>Iniciar mi Proyecto</span>
                <ArrowIcon className={styles.arrowIcon} />
              </a>
              <a href="/proyectos" className={styles.ctaSecondary}>
                Ver Todos los Proyectos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;