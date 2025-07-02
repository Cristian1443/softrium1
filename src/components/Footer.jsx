// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.newsletter}>
            <div className={styles.newsletterContent}>
              <h2>¿Listo para transformar tu negocio?</h2>
              <p>Únete a nuestra lista y recibe las últimas tendencias en tecnología y desarrollo.</p>
            </div>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Tu correo electrónico" aria-label="Correo electrónico" />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <div className={styles.brand}>
                <h2>Softrium</h2>
                <p>Impulsamos la innovación digital con soluciones tecnológicas de vanguardia, transformando ideas en experiencias excepcionales.</p>
                <div className={styles.socialLinks}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h3>Soluciones</h3>
              <ul>
                <li><Link to="/servicios#desarrollo-web">Desarrollo Web</Link></li>
                <li><Link to="/servicios#desarrollo-movil">Desarrollo Móvil</Link></li>
                <li><Link to="/servicios#ecommerce">E-commerce</Link></li>
                <li><Link to="/servicios#consultoria">Consultoría IT</Link></li>
                <li><Link to="/servicios#cloud">Servicios Cloud</Link></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>Compañía</h3>
              <ul>
                <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/carreras">Carreras</Link></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>Contacto</h3>
              <ul className={styles.contactInfo}>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Oficina Principal</strong>
                    <span>Bogota, Colombia</span>
                  </div>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <strong>Teléfono</strong>
                    <a href="tel:+573006136656">+57 (300) 613-6656</a>
                  </div>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:contacto@softrium.com">contacto@softrium.com</a>
                  </div>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <div>
                    <strong>Horario</strong>
                    <span>Lun - Vie: 9:00 AM - 10:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <div className={styles.copyright}>
              <p>&copy; {currentYear} Softrium. Todos los derechos reservados.</p>
            </div>
            <div className={styles.legalLinks}>
              <Link to="/privacidad">Política de Privacidad</Link>
              <span className={styles.separator}>•</span>
              <Link to="/terminos">Términos y Condiciones</Link>
              <span className={styles.separator}>•</span>
              <Link to="/cookies">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;