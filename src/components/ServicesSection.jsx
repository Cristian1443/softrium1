// src/components/ServicesSection.jsx
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import Modal from './Modal';
import { ArrowIcon } from './Icons';
import styles from './ServicesSection.module.css';
import { ConsultingIcon, DevelopmentIcon, IntegrationIcon, TrainingIcon, CloudIcon, DesignIcon } from './Icons';

// Información detallada para modales
const ConsultoriaVisual = () => ( 
  <div className={styles.visualElement}>
    <h4>Metodología Clave</h4>
    <p>Design Thinking & Roadmapping Estratégico para transformar ideas en realidad.</p>
    <h4>Herramientas</h4>
    <ul>
      <li>Jira & Confluence</li>
      <li>Miro & Figma</li>
      <li>Análisis SWOT & PEST</li>
    </ul>
    <h4>Entregables Comunes</h4>
    <p>Documento de Visión y Alcance, Plan de Arquitectura, Hoja de Ruta Tecnológica.</p>
  </div>
);

const DisenoVisual = () => ( 
  <div className={styles.visualElement}>
    <h4>Metodología Clave</h4>
    <p>Diseño Centrado en el Usuario (UCD) y Atomic Design para experiencias excepcionales.</p>
    <h4>Tecnologías Principales</h4>
    <ul>
      <li>Figma & Sketch</li>
      <li>Adobe XD & Protopie</li>
      <li>Maze (para testing)</li>
    </ul>
    <h4>Entregables Comunes</h4>
    <p>Wireframes, Prototipos Interactivos de Alta Fidelidad, Guía de Estilo y Sistema de Diseño.</p>
  </div>
);

const DesarrolloVisual = () => ( 
  <div className={styles.visualElement}>
    <h4>Metodología Clave</h4>
    <p>Desarrollo Ágil (Scrum & Kanban) con entregas incrementales y calidad asegurada.</p>
    <h4>Tecnologías Principales</h4>
    <ul>
      <li>Frontend: React, Vue, Angular</li>
      <li>Backend: Node.js, Python, Java</li>
      <li>Bases de Datos: PostgreSQL, MongoDB</li>
    </ul>
    <h4>Entregables Comunes</h4>
    <p>Aplicación Funcional, Código Fuente Documentado, API RESTful/GraphQL.</p>
  </div>
);

const IntegracionVisual = () => ( 
  <div className={styles.visualElement}>
    <h4>Metodología Clave</h4>
    <p>Arquitectura Orientada a Servicios (SOA) y Microservicios para ecosistemas unificados.</p>
    <h4>Tecnologías Principales</h4>
    <ul>
      <li>REST APIs & GraphQL</li>
      <li>Message Queues (RabbitMQ, Kafka)</li>
      <li>Plataformas iPaaS (Zapier, MuleSoft)</li>
    </ul>
    <h4>Entregables Comunes</h4>
    <p>APIs Personalizadas, Flujos de Datos Automatizados, Sistemas Sincronizados.</p>
  </div>
);

const DevOpsVisual = () => ( 
  <div className={styles.visualElement}>
    <h4>Metodología Clave</h4>
    <p>Integración y Entrega Continuas (CI/CD) para deployments sin interrupciones.</p>
    <h4>Tecnologías Principales</h4>
    <ul>
      <li>Cloud: AWS, Google Cloud, Azure</li>
      <li>Contenedores: Docker, Kubernetes</li>
      <li>Automatización: Jenkins, Terraform</li>
    </ul>
    <h4>Entregables Comunes</h4>
    <p>Pipeline de CI/CD, Infraestructura como Código (IaC), Sistemas de Monitoreo.</p>
  </div>
);

const SoporteVisual = () => ( 
  <div className={styles.visualElement}>
    <h4>Metodología Clave</h4>
    <p>ITIL y Gestión Proactiva de Incidentes para operación sin interrupciones.</p>
    <h4>Herramientas</h4>
    <ul>
      <li>Monitoreo: Datadog, Grafana, Sentry</li>
      <li>Ticketing: Jira Service Desk, Zendesk</li>
    </ul>
    <h4>Entregables Comunes</h4>
    <p>Acuerdos de Nivel de Servicio (SLAs), Reportes de Rendimiento, Backlog de Mejoras.</p>
  </div>
);

const servicesData = [
  { 
    icon: <ConsultingIcon />, 
    title: "Consultoría Estratégica", 
    description: "Analizamos a fondo tus procesos y objetivos para diseñar una hoja de ruta tecnológica que genere un impacto real.", 
    visual: <ConsultoriaVisual />,
    category: "Estrategia",
    duration: "2-4 semanas"
  },
  { 
    icon: <DesignIcon />, 
    title: "Diseño UI/UX y Prototipado", 
    description: "Creamos interfaces intuitivas y experiencias de usuario memorables que validan tu idea antes del desarrollo.", 
    visual: <DisenoVisual />,
    category: "Diseño",
    duration: "3-6 semanas"
  },
  { 
    icon: <DevelopmentIcon />, 
    title: "Desarrollo a la Medida", 
    description: "Construimos aplicaciones robustas, escalables y de alto rendimiento, utilizando las tecnologías más adecuadas.", 
    visual: <DesarrolloVisual />,
    category: "Desarrollo",
    duration: "6-16 semanas"
  },
  { 
    icon: <IntegrationIcon />, 
    title: "Integración de Sistemas", 
    description: "Conectamos tus herramientas existentes creando un ecosistema digital unificado y sin fisuras.", 
    visual: <IntegracionVisual />,
    category: "Integración",
    duration: "4-8 semanas"
  },
  { 
    icon: <CloudIcon />, 
    title: "DevOps & Cloud", 
    description: "Automatizamos tus procesos y optimizamos tu infraestructura en la nube para máxima eficiencia.", 
    visual: <DevOpsVisual />,
    category: "Infrastructure",
    duration: "3-10 semanas"
  },
  { 
    icon: <TrainingIcon />, 
    title: "Soporte & Mantenimiento", 
    description: "Garantizamos la operatividad y mejora continua de tus aplicaciones con soporte técnico proactivo.", 
    visual: <SoporteVisual />,
    category: "Soporte",
    duration: "Continuo"
  }
];



function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section id="servicios" className={styles.servicesSection}>
        <div className="container">
          {/* Hero Section */}
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🎯</span>
              <span>Servicios Especializados</span>
            </div>
            
            <h2 className={styles.sectionTitle}>
              Un Ecosistema Completo para tu 
              <span className={styles.highlight}> Transformación Digital</span>
            </h2>
            
            <p className={styles.sectionSubtitle}>
              Desde la conceptualización hasta el despliegue y mantenimiento, ofrecemos un conjunto 
              integral de servicios diseñados para llevar tu negocio al siguiente nivel tecnológico.
            </p>

          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <div 
                key={service.title} 
                className={styles.serviceWrapper}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  category={service.category}
                  duration={service.duration}
                  onClick={() => handleOpenModal(service)}
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿No encuentras lo que buscas?</h3>
              <p>
                Cada proyecto es único. Conversemos sobre tus necesidades específicas 
                y diseñemos una solución personalizada para tu negocio.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contacto" className={styles.ctaPrimary}>
                  <span>Solicitar Consulta</span>
                  <ArrowIcon className={styles.arrowIcon} />
                </a>
                <a href="/servicios" className={styles.ctaSecondary}>
                  Ver Todos los Servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={!!selectedService} onClose={handleCloseModal}>
        {selectedService && (
          <>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>{selectedService.icon}</div>
              <div className={styles.modalTitleSection}>
                <h2>{selectedService.title}</h2>
                <div className={styles.modalMeta}>
                  <span className={styles.modalCategory}>{selectedService.category}</span>
                  <span className={styles.modalDuration}>⏱️ {selectedService.duration}</span>
                </div>
              </div>
            </div>
            {selectedService.visual}
          </>
        )}
      </Modal>
    </>
  );
}

export default ServicesSection;