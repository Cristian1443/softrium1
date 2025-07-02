// src/components/ServicesSection.jsx
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import Modal from './Modal';
import styles from './ServicesSection.module.css';
import { ConsultingIcon, DevelopmentIcon, IntegrationIcon, TrainingIcon, CloudIcon, DesignIcon } from './Icons';

// La información detallada (antes en "visual") ahora se mostrará en el modal.
// La definimos aquí como antes.
const ConsultoriaVisual = () => ( <div className={styles.visualElement}><h4>Metodología Clave</h4><p>Design Thinking & Roadmapping Estratégico.</p><h4>Herramientas</h4><ul><li>Jira & Confluence</li><li>Miro & Figma</li><li>Análisis SWOT & PEST</li></ul><h4>Entregables Comunes</h4><p>Documento de Visión y Alcance, Plan de Arquitectura, Hoja de Ruta Tecnológica.</p></div>);
const DisenoVisual = () => ( <div className={styles.visualElement}><h4>Metodología Clave</h4><p>Diseño Centrado en el Usuario (UCD) y Atomic Design.</p><h4>Tecnologías Principales</h4><ul><li>Figma & Sketch</li><li>Adobe XD & Protopie</li><li>Maze (para testing)</li></ul><h4>Entregables Comunes</h4><p>Wireframes, Prototipos Interactivos de Alta Fidelidad, Guía de Estilo y Sistema de Diseño.</p></div>);
const DesarrolloVisual = () => ( <div className={styles.visualElement}><h4>Metodología Clave</h4><p>Desarrollo Ágil (Scrum & Kanban).</p><h4>Tecnologías Principales</h4><ul><li>Frontend: React, Vue, Angular</li><li>Backend: Node.js, Python, Java</li><li>Bases de Datos: PostgreSQL, MongoDB</li></ul><h4>Entregables Comunes</h4><p>Aplicación Funcional, Código Fuente Documentado, API RESTful/GraphQL.</p></div>);
const IntegracionVisual = () => ( <div className={styles.visualElement}><h4>Metodología Clave</h4><p>Arquitectura Orientada a Servicios (SOA) y Microservicios.</p><h4>Tecnologías Principales</h4><ul><li>REST APIs & GraphQL</li><li>Message Queues (RabbitMQ, Kafka)</li><li>Plataformas iPaaS (Zapier, MuleSoft)</li></ul><h4>Entregables Comunes</h4><p>APIs Personalizadas, Flujos de Datos Automatizados, Sistemas Sincronizados.</p></div>);
const DevOpsVisual = () => ( <div className={styles.visualElement}><h4>Metodología Clave</h4><p>Integración y Entrega Continuas (CI/CD).</p><h4>Tecnologías Principales</h4><ul><li>Cloud: AWS, Google Cloud, Azure</li><li>Contenedores: Docker, Kubernetes</li><li>Automatización: Jenkins, Terraform</li></ul><h4>Entregables Comunes</h4><p>Pipeline de CI/CD, Infraestructura como Código (IaC), Sistemas de Monitoreo.</p></div>);
const SoporteVisual = () => ( <div className={styles.visualElement}><h4>Metodología Clave</h4><p>ITIL y Gestión Proactiva de Incidentes.</p><h4>Herramientas</h4><ul><li>Monitoreo: Datadog, Grafana, Sentry</li><li>Ticketing: Jira Service Desk, Zendesk</li></ul><h4>Entregables Comunes</h4><p>Acuerdos de Nivel de Servicio (SLAs), Reportes de Rendimiento, Backlog de Mejoras.</p></div>);
const servicesData = [ { icon: <ConsultingIcon />, title: "Consultoría Estratégica", description: "Analizamos a fondo tus procesos y objetivos para diseñar una hoja de ruta tecnológica que genere un impacto real.", visual: <ConsultoriaVisual /> }, { icon: <DesignIcon />, title: "Diseño UI/UX y Prototipado", description: "Creamos interfaces intuitivas y experiencias de usuario memorables que validan tu idea antes del desarrollo.", visual: <DisenoVisual /> }, { icon: <DevelopmentIcon />, title: "Desarrollo a la Medida", description: "Construimos aplicaciones robustas, escalables y de alto rendimiento, utilizando las tecnologías más adecuadas.", visual: <DesarrolloVisual /> }, { icon: <IntegrationIcon />, title: "Integración de Sistemas y APIs", description: "Conectamos tus herramientas existentes creando un ecosistema digital unificado y sin fisuras.", visual: <IntegracionVisual /> }, { icon: <CloudIcon />, title: "DevOps & Soluciones Cloud", description: "Automatizamos tus procesos y optimizamos tu infraestructura en la nube para máxima eficiencia y escalabilidad.", visual: <DevOpsVisual /> }, { icon: <TrainingIcon />, title: "Soporte y Mantenimiento", description: "Garantizamos la operatividad y mejora continua de tus aplicaciones con soporte técnico y monitoreo.", visual: <SoporteVisual /> } ];

function ServicesSection() {
  // 1. Añadimos un estado para controlar el servicio seleccionado
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section id="servicios" className={`${styles.servicesSection} container`}>
        <h2 className={styles.sectionTitle}>Un Servicio Integral para tu Transformación Digital</h2>
        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => handleOpenModal(service)} // 2. Al hacer clic, abrimos el modal con ese servicio
            />
          ))}
        </div>
      </section>

      {/* 3. Renderizamos el Modal aquí */}
      <Modal isOpen={!!selectedService} onClose={handleCloseModal}>
        {selectedService && (
          <>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>{selectedService.icon}</div>
              <h2>{selectedService.title}</h2>
            </div>
            {/* El contenido detallado (el antiguo "visual") se muestra aquí */}
            {selectedService.visual}
          </>
        )}
      </Modal>
    </>
  );
}

export default ServicesSection;