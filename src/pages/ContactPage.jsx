import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MailIcon, LinkedInIcon } from '../components/Icons';
import styles from './ContactPage.module.css';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    presupuesto: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_4njhsnv',
        'template_0i65sj9',
        formRef.current,
        'Q1JvC5Eo83KtdxXj_'
      );
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        empresa: '',
        telefono: '',
        servicio: '',
        presupuesto: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      alert('Error al enviar el mensaje. Intenta de nuevo.');
    }
    setIsSubmitting(false);
  };

  const servicios = [
    'Desarrollo Web',
    'Desarrollo Móvil',
    'Consultoría IT',
    'DevOps',
    'UI/UX Design',
    'Mantenimiento',
    'Otro'
  ];

  const presupuestos = [
    'Menos de $2,000,000 COP',
    '$2,000,000 - $8,000,000 COP',
    '$8,000,000 - $15,000,000 COP',
    '$15,000,000 - $25,000,000 COP',
    'Más de $25,000,000 COP',
    'A definir'
  ];

  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>¿Listo para Transformar tu Idea?</h1>
              <p>
                Conectemos y convirtamos tu visión en una solución tecnológica innovadora. 
                Nuestro equipo está aquí para acompañarte en cada paso del proceso.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24h</span>
                  <span className={styles.statLabel}>Respuesta</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>13+</span>
                  <span className={styles.statLabel}>Proyectos</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className={styles.content}>
            {/* Información de Contacto */}
            <div className={styles.contactInfo}>
              <div className={styles.infoSection}>
                <h2>Información de Contacto</h2>
                <p className={styles.infoDescription}>
                  Estamos disponibles para resolver tus dudas y comenzar a trabajar juntos.
              </p>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className={styles.infoContent}>
                  <h3>Ubicación</h3>
                      <p>Bogotá, Colombia</p>
                      <span className={styles.infoExtra}>Trabajo remoto disponible</span>
                    </div>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <MailIcon />
                    </div>
                    <div className={styles.infoContent}>
                  <h3>Email</h3>
                  <a href="mailto:contacto@softrium.com">contacto@softrium.com</a>
                      <span className={styles.infoExtra}>Respuesta en 24 horas</span>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className={styles.infoContent}>
                      <h3>Teléfono</h3>
                      <a href="tel:+573006136656">+57 (300) 613-6656</a>
                      <span className={styles.infoExtra}>WhatsApp disponible</span>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className={styles.infoContent}>
                      <h3>Horario</h3>
                      <p>Lun - Vie: 9:00 AM - 10:00 PM</p>
                      <span className={styles.infoExtra}>Zona horaria: GMT-5</span>
                    </div>
                  </div>
                </div>

                <div className={styles.socialSection}>
                  <h3>Síguenos</h3>
                  <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink}>
                      <LinkedInIcon />
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className={styles.socialLink}>
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                    </a>
                    <a href="#" className={styles.socialLink}>
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className={styles.formContainer}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>¡Mensaje Enviado!</h3>
                  <p>Gracias por contactarnos. Te responderemos en las próximas 24 horas.</p>
                </div>
              ) : (
              <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formHeader}>
                    <h2>Cuéntanos sobre tu Proyecto</h2>
                    <p>Completa el formulario y te contactaremos pronto.</p>
                  </div>

                  <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                        placeholder="Juan Pérez"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                        placeholder="juan@empresa.com"
                  />
                    </div>
                </div>

                  <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                        placeholder="Mi Empresa S.A.S"
                  />
                </div>

                <div className={styles.formGroup}>
                      <label htmlFor="telefono">Teléfono</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="servicio">Servicio de Interés *</label>
                      <select
                        id="servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona un servicio</option>
                        {servicios.map(servicio => (
                          <option key={servicio} value={servicio}>{servicio}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="presupuesto">Presupuesto Estimado</label>
                      <select
                        id="presupuesto"
                        name="presupuesto"
                        value={formData.presupuesto}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona un rango</option>
                        {presupuestos.map(presupuesto => (
                          <option key={presupuesto} value={presupuesto}>{presupuesto}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Describe tu proyecto *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                      placeholder="Cuéntanos qué quieres lograr, qué características necesitas, timeline esperado, etc."
                  ></textarea>
                </div>

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                  Enviar Mensaje
                        <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                </button>

                  <p className={styles.formNote}>
                    * Campos obligatorios. Tu información está protegida y no será compartida.
                  </p>
              </form>
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <section className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Preguntas Frecuentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>¿Cuánto tiempo toma desarrollar un proyecto?</h3>
                <p>Depende del alcance, pero típicamente entre 4-12 semanas para proyectos web y 8-16 semanas para aplicaciones móviles complejas.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>¿Ofrecen soporte post-lanzamiento?</h3>
                <p>Sí, incluimos 3 meses de soporte gratuito y ofrecemos planes de mantenimiento a largo plazo.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>¿Trabajan con clientes internacionales?</h3>
                <p>Absolutamente. Trabajamos con clientes en Latinoamérica, España y Estados Unidos.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>¿Qué metodología de desarrollo utilizan?</h3>
                <p>Utilizamos metodologías ágiles (Scrum) con entregas incrementales y comunicación constante.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage; 