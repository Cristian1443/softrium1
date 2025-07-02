import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ContactPage.module.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario
    setFormData({
      nombre: '',
      email: '',
      empresa: '',
      mensaje: ''
    });
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.contactInfo}>
              <h1>Hablemos de tu Proyecto</h1>
              <p className={styles.subtitle}>
                ¿Tienes una idea innovadora o un desafío tecnológico? 
                Estamos aquí para ayudarte a convertirlo en realidad.
              </p>
              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <h3>Ubicación</h3>
                  <p>Ciudad de México, México</p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Email</h3>
                  <a href="mailto:contacto@softrium.com">contacto@softrium.com</a>
                </div>
                <div className={styles.infoCard}>
                  <h3>Horario</h3>
                  <p>Lunes a Viernes<br />9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className={styles.formContainer}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="nombre">Nombre completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="¿Cómo te llamas?"
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
                    placeholder="tu@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="¿Dónde trabajas?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mensaje">¿Cómo podemos ayudarte? *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage; 