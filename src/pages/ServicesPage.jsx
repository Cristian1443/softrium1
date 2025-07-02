import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ServicesPage.module.css';

function ServicesPage() {
  const services = [
    {
      id: 'desarrollo-web',
      icon: 'fas fa-laptop-code',
      title: 'Desarrollo Web',
      description: 'Creamos sitios y aplicaciones web modernas, responsivas y escalables utilizando las últimas tecnologías.',
      features: [
        'Aplicaciones Web Progresivas (PWA)',
        'Sitios Web Corporativos',
        'E-commerce y Plataformas de Venta',
        'Sistemas Web a Medida'
      ]
    },
    {
      id: 'desarrollo-movil',
      icon: 'fas fa-mobile-alt',
      title: 'Desarrollo Móvil',
      description: 'Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android que destacan en el mercado.',
      features: [
        'Apps Nativas iOS y Android',
        'Aplicaciones Multiplataforma',
        'Integración con APIs',
        'Mantenimiento y Actualizaciones'
      ]
    },
    {
      id: 'ecommerce',
      icon: 'fas fa-shopping-cart',
      title: 'E-commerce',
      description: 'Implementamos soluciones de comercio electrónico que impulsan las ventas y mejoran la experiencia del usuario.',
      features: [
        'Tiendas Online Personalizadas',
        'Integración de Pasarelas de Pago',
        'Gestión de Inventario',
        'Analytics y Reportes'
      ]
    },
    {
      id: 'consultoria',
      icon: 'fas fa-chart-line',
      title: 'Consultoría IT',
      description: 'Asesoramos en la transformación digital de tu negocio con soluciones tecnológicas estratégicas.',
      features: [
        'Análisis de Procesos',
        'Arquitectura de Software',
        'Optimización de Sistemas',
        'Seguridad Informática'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className={styles.servicesPage}>
        <section className={styles.hero}>
          <div className="container">
            <h1>Nuestros Servicios</h1>
            <p>Soluciones tecnológicas integrales para impulsar tu negocio</p>
          </div>
        </section>

        <section className={`${styles.servicesGrid} container`}>
          {services.map((service) => (
            <div key={service.id} id={service.id} className={styles.serviceCard}>
              <i className={`${service.icon} ${styles.icon}`}></i>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ServicesPage; 