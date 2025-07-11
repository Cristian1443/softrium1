import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckIcon } from '../components/Icons';
import styles from './ServicesPage.module.css';

function ServicesPage() {
  const [activeTab, setActiveTab] = useState('desarrollo-web');

  const services = [
    {
      id: 'desarrollo-web',
      icon: 'fas fa-laptop-code',
      title: 'Desarrollo Web',
      subtitle: 'Aplicaciones web modernas y escalables',
      description: 'Creamos experiencias web excepcionales utilizando las tecnologías más avanzadas del mercado.',
      features: [
        'Aplicaciones Web Progresivas (PWA)',
        'Sitios Web Corporativos Responsivos',
        'E-commerce y Plataformas de Venta',
        'Sistemas Web a Medida',
        'APIs RESTful y GraphQL',
        'Integración con Servicios de Terceros'
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Laravel', 'Django'],
      startingPrice: '$800,000',
      deliveryTime: '4-12 semanas'
    },
    {
      id: 'desarrollo-movil',
      icon: 'fas fa-mobile-alt',
      title: 'Desarrollo Móvil',
      subtitle: 'Apps nativas y multiplataforma',
      description: 'Desarrollamos aplicaciones móviles que destacan en App Store y Google Play con experiencias nativas.',
      features: [
        'Apps Nativas iOS y Android',
        'Aplicaciones Multiplataforma (React Native)',
        'Integración con APIs y Servicios Cloud',
        'Push Notifications y Analytics',
        'Mantenimiento y Actualizaciones',
        'Publicación en Stores'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      startingPrice: '$1,500,000',
      deliveryTime: '6-16 semanas'
    },
    {
      id: 'ecommerce',
      icon: 'fas fa-shopping-cart',
      title: 'E-commerce',
      subtitle: 'Plataformas de venta online',
      description: 'Implementamos soluciones de comercio electrónico que convierten visitantes en clientes satisfechos.',
      features: [
        'Tiendas Online Personalizadas',
        'Integración con Pasarelas de Pago',
        'Gestión Avanzada de Inventario',
        'CRM y Email Marketing',
        'Analytics y Reportes Detallados',
        'SEO y Optimización de Conversiones'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'PrestaShop'],
      startingPrice: '$1,500,000',
      deliveryTime: '6-14 semanas'
    },
    {
      id: 'consultoria',
      icon: 'fas fa-chart-line',
      title: 'Consultoría IT',
      subtitle: 'Transformación digital estratégica',
      description: 'Guiamos la transformación digital de tu empresa con estrategias tecnológicas personalizadas.',
      features: [
        'Auditoría Tecnológica Completa',
        'Arquitectura de Software Escalable',
        'Optimización de Procesos',
        'Migración a la Nube',
        'Seguridad Informática Avanzada',
        'Capacitación de Equipos'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps'],
      startingPrice: '$800,000',
      deliveryTime: '2-8 semanas'
    },
    {
      id: 'devops',
      icon: 'fas fa-server',
      title: 'DevOps & Cloud',
      subtitle: 'Infraestructura moderna y automatizada',
      description: 'Implementamos prácticas DevOps y soluciones cloud para optimizar el ciclo de desarrollo.',
      features: [
        'CI/CD Pipelines Automatizados',
        'Contenedorización con Docker',
        'Orquestación con Kubernetes',
        'Monitoreo y Logging',
        'Migración a Cloud (AWS/Azure)',
        'Optimización de Costos'
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus'],
      startingPrice: '$1,500,000',
      deliveryTime: '3-10 semanas'
    },
    {
      id: 'uiux',
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      subtitle: 'Diseño centrado en el usuario',
      description: 'Creamos interfaces intuitivas y experiencias memorables que conectan con tus usuarios.',
      features: [
        'Research y Análisis de Usuarios',
        'Wireframes y Prototipos',
        'Diseño de Interfaces Modernas',
        'Testing de Usabilidad',
        'Design Systems Escalables',
        'Guías de Marca Digital'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
      startingPrice: '$1,000,000',
      deliveryTime: '2-6 semanas'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description: 'Analizamos tus necesidades y objetivos para definir la estrategia perfecta.',
      icon: 'fas fa-search'
    },
    {
      number: '02',
      title: 'Planificación',
      description: 'Creamos un roadmap detallado con entregables, tiempos y recursos necesarios.',
      icon: 'fas fa-map'
    },
    {
      number: '03',
      title: 'Desarrollo',
      description: 'Ejecutamos el proyecto con metodologías ágiles y comunicación constante.',
      icon: 'fas fa-code'
    },
    {
      number: '04',
      title: 'Entrega',
      description: 'Desplegamos la solución y brindamos capacitación para tu equipo.',
      icon: 'fas fa-rocket'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$800,000 - $2,500,000',
      duration: '2-6 semanas',
      description: 'Perfecto para startups y pequeñas empresas',
      features: [
        'Sitio web responsivo',
        'Hasta 5 páginas',
        'Diseño personalizado',
        'SEO básico',
        '3 meses de soporte',
        'Hosting por 1 año'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,500,000 - $6,000,000',
      duration: '6-12 semanas',
      description: 'Ideal para empresas en crecimiento',
      features: [
        'Aplicación web completa',
        'Panel de administración',
        'Integración con APIs',
        'Base de datos optimizada',
        '6 meses de soporte',
        'Capacitación incluida'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$6,000,000+',
      duration: '12+ semanas',
      description: 'Soluciones empresariales escalables',
      features: [
        'Arquitectura escalable',
        'Integraciones complejas',
        'Seguridad avanzada',
        'Soporte 24/7',
        '12 meses de soporte',
        'Consultoría estratégica'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      company: 'TechCorp',
      text: 'Softrium transformó completamente nuestra presencia digital. El equipo es profesional y los resultados superaron nuestras expectativas.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'InnovateLab',
      text: 'La aplicación móvil que desarrollaron aumentó nuestras ventas en un 300%. Excelente trabajo y soporte post-lanzamiento.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      company: 'E-Shop',
      text: 'Nuestro e-commerce ahora procesa cientos de pedidos diarios sin problemas. La plataforma es robusta y fácil de usar.',
      rating: 5
    }
  ];

  return (
    <>
      <Header />
      <main className={styles.servicesPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Servicios de Desarrollo de Software</h1>
              <p>
                Transformamos ideas en soluciones tecnológicas innovadoras que impulsan 
                el crecimiento de tu negocio con las mejores prácticas de la industria.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>6+</span>
                  <span className={styles.statLabel}>Servicios</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Tecnologías</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>2-16</span>
                  <span className={styles.statLabel}>Semanas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          {/* Services Tabs */}
          <section className={styles.servicesSection}>
            <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
            <div className={styles.servicesTabs}>
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`${styles.tabButton} ${activeTab === service.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <i className={`${service.icon} ${styles.tabIcon}`}></i>
                  <span>{service.title}</span>
                </button>
              ))}
            </div>

            <div className={styles.serviceDetails}>
              {services.map((service) => (
                activeTab === service.id && (
                  <div key={service.id} className={styles.serviceContent}>
                    <div className={styles.serviceInfo}>
                      <div className={styles.serviceHeader}>
                        <i className={`${service.icon} ${styles.serviceIcon}`}></i>
                        <div>
                          <h3>{service.title}</h3>
                          <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                        </div>
                      </div>
                      <p className={styles.serviceDescription}>{service.description}</p>
                      
                      <div className={styles.serviceFeatures}>
                        <h4>¿Qué incluye?</h4>
                        <div className={styles.featuresGrid}>
                          {service.features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                              <CheckIcon />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={styles.serviceMeta}>
                        <div className={styles.metaItem}>
                          <span className={styles.metaLabel}>Tiempo:</span>
                          <span className={styles.metaValue}>{service.deliveryTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.serviceTech}>
                      <h4>Tecnologías que utilizamos</h4>
                      <div className={styles.techList}>
                        {service.technologies.map((tech, index) => (
                          <span key={index} className={styles.techItem}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className={styles.processSection}>
            <h2 className={styles.sectionTitle}>Nuestro Proceso</h2>
            <p className={styles.sectionSubtitle}>
              Seguimos una metodología probada que garantiza resultados excepcionales
            </p>
            <div className={styles.processSteps}>
              {processSteps.map((step, index) => (
                <div key={index} className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepIcon}>
                    <i className={step.icon}></i>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Packages Section */}
          <section className={styles.packagesSection}>
            <h2 className={styles.sectionTitle}>Paquetes de Servicios</h2>
            <p className={styles.sectionSubtitle}>
              Elige el paquete que mejor se adapte a las necesidades de tu proyecto
            </p>
            <div className={styles.packagesGrid}>
              {packages.map((pkg, index) => (
                <div key={index} className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}>
                  {pkg.popular && <div className={styles.popularBadge}>Más Popular</div>}
                  <h3>{pkg.name}</h3>
                  <div className={styles.packagePrice}>{pkg.price}</div>
                  <div className={styles.packageDuration}>{pkg.duration}</div>
                  <p className={styles.packageDescription}>{pkg.description}</p>
                  <ul className={styles.packageFeatures}>
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contacto" className={styles.packageButton}>
                    Solicitar Cotización
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className={styles.testimonialsSection}>
            <h2 className={styles.sectionTitle}>Lo que Dicen Nuestros Clientes</h2>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.testimonialRating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p>"{testimonial.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>¿Listo para Comenzar tu Proyecto?</h2>
              <p>
                Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
                Ofrecemos una consulta gratuita para analizar tu proyecto.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contacto" className={styles.ctaPrimary}>
                  Solicitar Consulta Gratuita
                </a>
                <a href="#" className={styles.ctaSecondary}>
                  Ver Portfolio
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ServicesPage; 