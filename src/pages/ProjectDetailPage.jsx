import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ProjectDetailPage.module.css';

// Los proyectos ahora solo usan videos, sin imágenes estáticas

// Importamos los logos de tecnologías
import reactLogo from '../assets/tech/react.svg';
import nodejsLogo from '../assets/tech/nodedotjs.svg';
import pythonLogo from '../assets/tech/python.svg';
import mysqlLogo from '../assets/tech/mysql.svg';
import postgresqlLogo from '../assets/tech/postgresql.svg';
import mongodbLogo from '../assets/tech/mongodb.svg';
import javascriptLogo from '../assets/tech/javascript.svg';
import typescriptLogo from '../assets/tech/typescript.svg';
import bootstrapLogo from '../assets/tech/bootstrap.svg';
import laravelLogo from '../assets/tech/laravel.svg';
import kotlinLogo from '../assets/tech/kotlin.svg';
import springbootLogo from '../assets/tech/springboot.svg';
import phpLogo from '../assets/tech/php.svg';
import angularLogo from '../assets/tech/angular.svg';

// Mapeo de tecnologías a logos
const techLogos = {
  'React': reactLogo,
  'Node.js': nodejsLogo,
  'Python': pythonLogo,
  'MySQL': mysqlLogo,
  'PostgreSQL': postgresqlLogo,
  'MongoDB': mongodbLogo,
  'JavaScript': javascriptLogo,
  'TypeScript': typescriptLogo,
  'Bootstrap': bootstrapLogo,
  'Laravel': laravelLogo,
  'Kotlin': kotlinLogo,
  'Spring Boot': springbootLogo,
  'PHP': phpLogo,
  'Angular': angularLogo,
  'Vue.js': reactLogo, // Usaremos React como placeholder
  'Firebase': nodejsLogo, // Placeholder
  'Stripe': pythonLogo, // Placeholder
  'Swift': kotlinLogo, // Placeholder
  'Flutter': reactLogo, // Placeholder
  'Django': pythonLogo, // Placeholder
  'Java': springbootLogo // Placeholder
};

const projectsData = [
  {
    id: 'Relacionamiento CCB',
    image: null,
    video: "/assets/video/proyecto-camara-de-comercio.mp4",
    client: "Uniempresarial - CCB",
    title: "Plataforma de Relacionamiento",
    description: "App CCB que gestiona talleres, agenda, consultores y reportes de horas e informes de pago.",
    tags: ["Web App", "React", "Node.js", "MySQL"],
    duration: "6 meses",
    team: "5 desarrolladores",
    year: "2025",
    fullDescription: `
      Desarrollamos una plataforma integral para la Cámara de Comercio de Bogotá (CCB) 
      que centraliza la gestión de talleres empresariales, consultoría y seguimiento 
      de actividades formativas.
      
      Esta solución digital transformó completamente la manera en que la CCB gestiona 
      sus programas de capacitación, permitiendo una mayor eficiencia operativa y 
      mejor experiencia tanto para consultores como para participantes.
    `,
    features: [
      "Sistema de gestión de talleres y eventos",
      "Agenda integrada para consultores y participantes", 
      "Reportes automáticos de horas de consultoría",
      "Generación de informes de pago",
      "Dashboard administrativo completo",
      "Notificaciones automáticas"
    ],
    results: [
      { icon: "📊", metric: "300+", description: "Talleres gestionados mensualmente" },
      { icon: "⚡", metric: "95%", description: "Reducción en tiempo de reportes" },
      { icon: "👥", metric: "100+", description: "Consultores activos en la plataforma" },
      { icon: "😊", metric: "98%", description: "Satisfacción de usuarios" }
    ]
  },
  {
    id: 'Events IA',
    image: null,
    video: "/assets/video/EventConnect _ Plataforma de Eventos Empresariales - Brave 2025-06-20 18-29-19.mp4",
    client: "Uniempresarial",
    title: "Events IA",
    description: "App empresarial para consultar eventos, talleres y conferencias de IA en áreas estratégicas corporativas.",
    tags: ["App Móvil", "IA", "Fintech", "Swift", "Kotlin"],
    duration: "3 meses",
    team: "3 desarrolladores",
    year: "2025",
    fullDescription: `
      Aplicación móvil especializada que permite a empresarios y ejecutivos 
      acceder a eventos de inteligencia artificial relevantes para sus sectores 
      estratégicos corporativos.
      
      Funcionalidades clave:
      • Catálogo de eventos de IA por industria
      • Recomendaciones personalizadas por sector
      • Calendario integrado de conferencias
      • Networking empresarial
      • Contenido exclusivo post-evento
      • Alertas de eventos relevantes
    `,
    features: [
      "Catálogo de eventos de IA por industria",
      "Recomendaciones personalizadas por sector",
      "Calendario integrado de conferencias",
      "Networking empresarial",
      "Contenido exclusivo post-evento",
      "Alertas de eventos relevantes"
    ],
    results: [
      { icon: "📊", metric: "500+", description: "Eventos indexados" },
      { icon: "👥", metric: "2,000+", description: "Usuarios empresariales activos" },
      { icon: "😊", metric: "85%", description: "Asistencia a eventos recomendados" },
      { icon: "⭐", metric: "4.7/5", description: "Rating en app stores" }
    ]
  },
  {
    id: 'TaskGo',
    image: null,
    video: "/assets/video/videocelular.mp4",
    client: "Proyecto personal",
    title: "TaskGo",
    description: "TaskGo es una agenda digital que escanea tarjetas físicas y guarda contactos para facilitar tu networking.",
    tags: ["E-commerce", "React", "Python", "Stripe"],
    duration: "2 meses",
    team: "1 desarrolladores",
    year: "2025",
    fullDescription: `
      TaskGo es una innovadora aplicación de networking que digitaliza 
      el intercambio de tarjetas de presentación mediante tecnología OCR 
      y gestión inteligente de contactos.
      
      Características destacadas:
      • Escaneo OCR de tarjetas físicas
      • Base de datos inteligente de contactos
      • Recordatorios de seguimiento
      • Sincronización con CRM populares
      • Análisis de red de contactos
      • Backup automático en la nube
    `,
    features: [
      "Escaneo OCR de tarjetas físicas",
      "Base de datos inteligente de contactos",
      "Recordatorios de seguimiento",
      "Sincronización con CRM populares",
      "Análisis de red de contactos",
      "Backup automático en la nube"
    ],
    results: [
      { icon: "📊", metric: "99%", description: "Precisión en escaneo OCR" },
      { icon: "📊", metric: "10,000+", description: "Tarjetas digitalizadas" },
      { icon: "👥", metric: "5,000+", description: "Usuarios registrados" },
      { icon: "😊", metric: "40%", description: "Incremento en follow-ups efectivos" }
    ]
  },
  {
    id: 'fUsoft Web',
    image: null,
    video: "/assets/video/fusoft.mp4",
    client: "FUsoft",
    title: "fUsoft Web",
    description: "fUSoft ya cuenta con página oficial en la web, donde podrás ver todos nuestros servicios y más.",
    tags: ["Web", "React", "Node.js", "PostgreSQL"],
    duration: "2 meses",
    team: "1 desarrolladores",
    year: "2025",
    fullDescription: `
      Sitio web corporativo moderno y responsivo para fUSoft, 
      diseñado para mostrar profesionalmente todos los servicios 
      de desarrollo de software y soluciones tecnológicas.
      
      Elementos implementados:
      • Diseño responsivo y moderno
      • Portfolio interactivo de servicios
      • Sistema de contacto integrado
      • Blog corporativo
      • Optimización SEO avanzada
      • Panel administrativo
    `,
    features: [
      "Diseño responsivo y moderno",
      "Portfolio interactivo de servicios",
      "Sistema de contacto integrado",
      "Blog corporativo",
      "Optimización SEO avanzada",
      "Panel administrativo"
    ],
    results: [
      { icon: "📊", metric: "200%", description: "Incremento en leads calificados" },
      { icon: "👥", metric: "75%", description: "Reducción en bounce rate" },
      { icon: "📊", metric: "150+", description: "Consultas mensuales" },
      { icon: "🏆", description: "Top 3 en búsquedas locales" }
    ]
  },
  {
    id: 'Campus Virtual',
    image: null,
    video: "/assets/video/Campus.mp4",
    client: "Uniempresarial",
    title: "Campus Virtual",
    description: "Campus virtual con todos los múltiples servicios físicos que ofrece Uniempresarial, digitalmente integrados",
    tags: ["Web App", "React", "Firebase", "Campus Virtual", "Node.js"],
    duration: "1 meses",
    team: "1 desarrolladores",
    year: "2025",
    fullDescription: `
      Plataforma educativa integral que digitaliza todos los servicios 
      presenciales de Uniempresarial, creando un ecosistema virtual 
      completo para la educación empresarial.
      
      Servicios integrados:
      • Aulas virtuales interactivas
      • Biblioteca digital empresarial
      • Sistema de evaluaciones online
      • Networking estudiantil
      • Certificaciones digitales
      • Mentorías virtuales
    `,
    features: [
      "Aulas virtuales interactivas",
      "Biblioteca digital empresarial",
      "Sistema de evaluaciones online",
      "Networking estudiantil",
      "Certificaciones digitales",
      "Mentorías virtuales"
    ],
    results: [
      { icon: "📊", metric: "3,000+", description: "Estudiantes activos" },
      { icon: "📊", metric: "500+", description: "Cursos disponibles" },
      { icon: "😊", metric: "92%", description: "Tasa de finalización" },
      { icon: "😊", metric: "95%", description: "Satisfacción estudiantil" }
    ]
  },
  {
    id: 'VitroCompos',
    image: null,
    video: "/assets/video/VITROCAMPO.mp4",
    client: "VitroCompos",
    title: "VitroCompos Web",
    description: "Sitio web corporativo para VitroCampos, empresa especializada en vidrios y materiales de construcción.",
    tags: ["Web", "Vue.js", "Laravel", "Laboratorio"],
    duration: "1 meses",
    team: "1 desarrolladores",
    year: "2024",
    fullDescription: `
      Sitio web especializado para empresa líder en vidrios técnicos 
      y materiales de construcción, con catálogo detallado y 
      sistema de cotizaciones online.
      
      Características técnicas:
      • Catálogo interactivo de productos
      • Calculadora de materiales
      • Sistema de cotizaciones automático
      • Galería de proyectos realizados
      • Especificaciones técnicas detalladas
      • Portal de proveedores
    `,
    features: [
      "Catálogo interactivo de productos",
      "Calculadora de materiales",
      "Sistema de cotizaciones automático",
      "Galería de proyectos realizados",
      "Especificaciones técnicas detalladas",
      "Portal de proveedores"
    ],
    results: [
      { icon: "📊", metric: "300+", description: "Productos catalogados" },
      { icon: "📊", metric: "150%", description: "Incremento en cotizaciones" },
      { icon: "👥", metric: "80%", description: "Reducción en tiempo de respuesta" },
      { icon: "📊", metric: "50+", description: "Proyectos showcaseados" }
    ]
  },
  {
    id: 'CE ASE INGENIERIA',
    image: null,
    video: "/public/assets/video/ce-ace-ingenieria.mp4",
    client: "CE ASE INGENIERIA",
    title: "CE ASE INGENIERIA",
    description: "Tienda online completa para CE-ACE Ingeniería, permitiendo la venta de productos y servicios de ingeniería de forma digital.",
    tags: ["Web", "React", "Node.js", "Tienda Online", "E-commerce"],
    duration: "2 meses",
    team: "2 desarrolladores",
    year: "2024",
    fullDescription: `
      Tienda online especializada en productos y servicios de ingeniería, 
      con sistema de gestión de inventario y procesamiento de pedidos 
      optimizado para el sector industrial.
      
      Funcionalidades principales:
      • Catálogo técnico especializado
      • Sistema de pedidos B2B
      • Gestión de inventario en tiempo real
      • Calculadora de especificaciones
      • Portal de servicios de ingeniería
      • Integración con sistemas ERP
    `,
    features: [
      "Catálogo técnico especializado",
      "Sistema de pedidos B2B",
      "Gestión de inventario en tiempo real",
      "Calculadora de especificaciones",
      "Portal de servicios de ingeniería",
      "Integración con sistemas ERP"
    ],
    results: [
      { icon: "📊", metric: "400%", description: "Incremento en ventas online" },
      { icon: "📊", metric: "200+", description: "Productos técnicos" },
      { icon: "👥", metric: "50+", description: "Clientes corporativos activos" },
      { icon: "👥", metric: "95%", description: "Automatización de pedidos" }
    ]
  },
  {
    id: 'FoodBoleros',
    image: null,
    video: "/public/assets/video/foodboleros .mp4",
    client: "FoodBoleros",
    title: "FoodBoleros Web",
    description: "Sitio web corporativo para FoodBoleros, empresa especializada en la venta de productos de alimentos y bebidas.",
    tags: ["Web", "React", "Node.js", "Tienda Online", "E-commerce"],
    duration: "3 meses",
    team: "1 desarrolladores",
    year: "2025",
    fullDescription: `
      E-commerce gastronómico completo para FoodBoleros, especializado 
      en productos gourmet y bebidas premium, con sistema de delivery 
      integrado y gestión de inventario.
      
      Características destacadas:
      • Catálogo gastronómico premium
      • Sistema de delivery integrado
      • Gestión de temperatura de productos
      • Programa de fidelización
      • Reviews y calificaciones
      • Promociones automáticas
    `,
    features: [
      "Catálogo gastronómico premium",
      "Sistema de delivery integrado",
      "Gestión de temperatura de productos",
      "Programa de fidelización",
      "Reviews y calificaciones",
      "Promociones automáticas"
    ],
    results: [
      { icon: "📊", metric: "250%", description: "Crecimiento en ventas online" },
      { icon: "📊", metric: "1,000+", description: "Productos gourmet" },
      { icon: "👥", metric: "500+", description: "Clientes recurrentes" },
      { icon: "😊", metric: "4.9/5", description: "Satisfacción del cliente" }
    ]
  },
  {
    id: 'Gruas Premium',
    image: null,
    video: "/public/assets/video/gruas.mp4",
    client: "Gruas Premium",
    title: "Gruas Premium Web",
    description: "Sitio web corporativo para Gruas Premium, empresa especializada en la venta de productos de grúas y maquinaria pesada.",
    tags: ["Web", "React", "Node.js", "Tienda Online", "E-commerce"],
    duration: "4 meses",
    team: "2 desarrolladores",
    year: "2024",
    fullDescription: `
      Plataforma B2B especializada en maquinaria pesada y grúas industriales, 
      con sistema de cotizaciones técnicas y financiamiento especializado 
      para el sector de construcción.
      
      Soluciones implementadas:
      • Catálogo técnico de maquinaria
      • Sistema de cotizaciones B2B
      • Calculadora de capacidades
      • Financiamiento online
      • Servicio técnico integrado
      • Gestión de garantías
    `,
    features: [
      "Catálogo técnico de maquinaria",
      "Sistema de cotizaciones B2B",
      "Calculadora de capacidades",
      "Financiamiento online",
      "Servicio técnico integrado",
      "Gestión de garantías"
    ],
    results: [
      { icon: "📊", metric: "150%", description: "Incremento en leads calificados" },
      { icon: "📊", metric: "50+", description: "Máquinas en catálogo" },
      { icon: "📊", metric: "30+", description: "Cotizaciones mensuales" },
      { icon: "😊", metric: "85%", description: "Conversión lead-to-sale" }
    ]
  },
  {
    id: 'Juguetes Elite',
    image: null,
    video: "/public/assets/video/jugueteria.mp4",
    client: "Juguetes Elite",
    title: "Juguetes Elite Web",
    description: "Sitio web corporativo para Juguetes Elite, empresa especializada en la venta de productos de juguetes y artículos para bebés.",
    tags: ["Web", "React", "Node.js", "Tienda Online", "E-commerce"],
    duration: "3 meses",
    team: "2 desarrolladores",
    year: "2024",
    fullDescription: `
      E-commerce especializado en juguetes educativos y artículos para bebés, 
      con sistema de recomendaciones por edad y desarrollo, enfocado en 
      productos premium y educativos.
      
      Características familiares:
      • Catálogo por edades y desarrollo
      • Recomendaciones educativas
      • Sistema de wishlist familiar
      • Programa de loyalty points
      • Guías de desarrollo infantil
      • Envío express y packaging premium
    `,
    features: [
      "Catálogo por edades y desarrollo",
      "Recomendaciones educativas",
      "Sistema de wishlist familiar",
      "Programa de loyalty points",
      "Guías de desarrollo infantil",
      "Envío express y packaging premium"
    ],
    results: [
      { icon: "📊", metric: "400+", description: "Juguetes educativos" },
      { icon: "📊", metric: "2,000+", description: "Familias registradas" },
      { icon: "📊", metric: "300%", description: "Crecimiento en ventas" },
      { icon: "😊", metric: "4.8/5", description: "Satisfacción parental" }
    ]
  },
  {
    id: 'La Mafia Barber Club',
    image: null,
    video: "/public/assets/video/lamafia.mp4",
    client: "La Mafia Barber Club",
    title: "La Mafia Barber Club Web",
    description: "Sitio web corporativo para La Mafia Barber Club, empresa especializada en la venta de productos de barbería y cuidado personal.",
    tags: ["Web", "Bootstrap", "Node.js", "JavaScript", "MySQL"],
    duration: "3 meses",
    team: "1 desarrolladores",
    year: "2025",
    fullDescription: `
      Sitio web premium para barbería de alta gama, con sistema de 
      reservas online, venta de productos especializados y gestión 
      de membresías VIP para clientes frecuentes.
      
      Servicios digitales:
      • Sistema de reservas online
      • Catálogo de productos premium
      • Membresías VIP digitales
      • Galería de trabajos realizados
      • Blog de tendencias masculinas
      • Programa de referidos
    `,
    features: [
      "Sistema de reservas online",
      "Catálogo de productos premium",
      "Membresías VIP digitales",
      "Galería de trabajos realizados",
      "Blog de tendencias masculinas",
      "Programa de referidos"
    ],
    results: [
      { icon: "📊", metric: "80%", description: "Reservas online" },
      { icon: "📊", metric: "100+", description: "Productos de barbería" },
      { icon: "👥", metric: "300+", description: "Clientes VIP" },
      { icon: "📊", metric: "50%", description: "Incremento en ventas" }
    ]
  },
  {
    id: 'Fibra Optica',
    image: null,
    video: "/public/assets/video/FIBRAOPTICA.mp4",
    client: "Fibra Optica",
    title: "Fibra Optica Web",
    description: "Plataforma web para la venta de fibra óptica, permitiendo a los usuarios realizar compras y gestionar pedidos en línea.",
    tags: ["PHP", "MongoDB", "MySQL", "E-commerce", "Bootstrap"],
    duration: "4 meses",
    team: "2 desarrolladores",
    year: "2023",
    fullDescription: `
      E-commerce técnico especializado en fibra óptica y equipos de 
      telecomunicaciones, con calculadoras técnicas y sistema de 
      cotizaciones para proyectos de infraestructura.
      
      Herramientas técnicas:
      • Calculadora de distancias de fibra
      • Cotizador automático de proyectos
      • Especificaciones técnicas detalladas
      • Gestión de proyectos grandes
      • Soporte técnico integrado
      • Certificaciones de productos
    `,
    features: [
      "Calculadora de distancias de fibra",
      "Cotizador automático de proyectos",
      "Especificaciones técnicas detalladas",
      "Gestión de proyectos grandes",
      "Soporte técnico integrado",
      "Certificaciones de productos"
    ],
    results: [
      { icon: "📊", metric: "500+", description: "Productos técnicos" },
      { icon: "📊", metric: "100+", description: "Proyectos cotizados" },
      { icon: "📊", metric: "200%", description: "Crecimiento en B2B" },
      { icon: "👥", metric: "99.9%", description: "Precisión en cotizaciones" }
    ]
  },
  {
    id: 'Aplicación ATS',
    image: null,
    video: "/public/assets/video/ATS.mp4",
    client: "Movistar",
    title: "Movistar Web",
    description: "App móvil para la gestión de actividades de los técnicos ATS, permitiendo reportes y seguimiento en campo desde dispositivos móviles",
    tags: ["Web", "Spring Boot", "Kotlin", "MySQL"],
    duration: "3 meses",
    team: "3 desarrolladores",
    year: "2023",
    fullDescription: `
      Aplicación empresarial para técnicos de campo de Movistar, 
      que optimiza la gestión de actividades ATS (Autorización de 
      Trabajo Seguro) con reportes en tiempo real y seguimiento GPS.
      
      Funcionalidades operativas:
      • Gestión de órdenes de trabajo
      • Reportes de campo en tiempo real
      • Seguimiento GPS de técnicos
      • Check-list de seguridad digital
      • Inventario de materiales
      • Sincronización offline
    `,
    features: [
      "Gestión de órdenes de trabajo",
      "Reportes de campo en tiempo real",
      "Seguimiento GPS de técnicos",
      "Check-list de seguridad digital",
      "Inventario de materiales",
      "Sincronización offline"
    ],
    results: [
      { icon: "📊", metric: "500+", description: "Técnicos activos diarios" },
      { icon: "📊", metric: "2,000+", description: "Reportes mensuales" },
      { icon: "👥", metric: "90%", description: "Reducción en paperwork" },
      { icon: "😊", metric: "95%", description: "Mejora en compliance" }
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
          <div className={styles.notFound}>
            <h1>🔍 Proyecto no encontrado</h1>
            <p>Lo sentimos, el proyecto que buscas no existe.</p>
            <Link to="/proyectos" className={styles.backButton}>
              ← Volver a Proyectos
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.projectDetail}>
        {/* Breadcrumbs */}
        <div className="container">
          <nav className={styles.breadcrumbs}>
            <Link to="/">Inicio</Link>
            <span>/</span>
            <Link to="/proyectos">Proyectos</Link>
            <span>/</span>
            <span>{project.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <div className={styles.projectMeta}>
                  <span className={styles.client}>{project.client}</span>
                  <div className={styles.metaInfo}>
                    <span>📅 {project.year}</span>
                    <span>⏱️ {project.duration}</span>
                    <span>👥 {project.team}</span>
                  </div>
                </div>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.subtitle}>{project.description}</p>
                
                {/* Tech Stack con logos */}
                <div className={styles.techStack}>
                  <h3>Tecnologías Utilizadas</h3>
                  <div className={styles.techGrid}>
                    {project.tags.map((tech, index) => (
                      <div key={index} className={styles.techItem}>
                        {techLogos[tech] && (
                          <img src={techLogos[tech]} alt={tech} className={styles.techLogo} />
                        )}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.heroImage}>
                {project.video ? (
                  <video 
                    src={project.video} 
                    controls 
                    autoPlay
                    loop
                    muted
                    className={styles.projectVideo}
                    poster={project.image}
                  >
                    Tu navegador no soporta el elemento video.
                  </video>
                ) : (
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                )}
                <div className={styles.imageOverlay}>
                  <span className={styles.imageLabel}>
                    {project.video ? "Demo del Proyecto" : "Vista del Proyecto"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Descripción del Proyecto */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>📝</div>
                <h2>Sobre el Proyecto</h2>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.description}>{project.fullDescription}</p>
              </div>
            </section>

            {/* Características */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>⚡</div>
                <h2>Características Principales</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.featuresList}>
                  {project.features?.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <div className={styles.featureIcon}>✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Resultados */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>📈</div>
                <h2>Resultados Obtenidos</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.resultsGrid}>
                  {project.results?.map((result, index) => (
                    <div key={index} className={styles.resultItem}>
                      <div className={styles.resultIcon}>{result.icon}</div>
                      <div className={styles.resultDetails}>
                        <span className={styles.resultMetric}>{result.metric}</span>
                        <span className={styles.resultDescription}>{result.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>


          </div>

          {/* Call to Action */}
          <section className={styles.cta}>
            <div className={styles.ctaContent}>
              <h2>¿Te gustó este proyecto?</h2>
              <p>Hablemos sobre cómo podemos ayudarte a crear algo similar para tu empresa.</p>
              <div className={styles.ctaButtons}>
                <Link to="/contacto" className={styles.ctaButton}>
                  Iniciar mi Proyecto
                </Link>
                <Link to="/proyectos" className={styles.ctaButtonSecondary}>
                  Ver más Proyectos
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetailPage; 
