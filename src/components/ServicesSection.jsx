// src/components/ServicesSection.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';
import { ConsultingIcon, DevelopmentIcon, IntegrationIcon, TrainingIcon } from './Icons';

// Definimos los datos de los servicios en un array
const servicesData = [
  {
    icon: <ConsultingIcon />,
    title: "Consultoría en Soluciones",
    description: "Diagnóstico, visión estratégica y hoja de ruta tecnológica para transformar tu negocio."
  },
  {
    icon: <DevelopmentIcon />,
    title: "Desarrollo de Soluciones",
    description: "Creamos aplicaciones web, móviles y de escritorio a tu medida, con arquitectura moderna y alto rendimiento."
  },
  {
    icon: <IntegrationIcon />,
    title: "Integración de Sistemas",
    description: "Conectamos tus herramientas y plataformas para que trabajen en perfecta armonía."
  },
  {
    icon: <TrainingIcon />,
    title: "Capacitación en Software",
    description: "Formamos a tus equipos para que aprovechen al máximo las soluciones implementadas."
  }
];

function ServicesSection() {
  return (
    <section id="servicios" className={`${styles.servicesSection} container`}>
      <h2 className={styles.sectionTitle}>Soluciones para Potenciar tu Negocio</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;