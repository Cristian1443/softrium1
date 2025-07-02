    // src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'; // Importamos los estilos del módulo

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.headerContainer} container`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Softrium</span>
        </Link>
        
        <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link 
                to="/" 
                className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              >
                Inicio
              </Link>
            </li>
            <li className={styles.dropdownContainer}>
              <Link 
                to="/servicios" 
                className={`${styles.navLink} ${isActive('/servicios') ? styles.active : ''}`}
              >
                Servicios
                <i className="fas fa-chevron-down"></i>
              </Link>
              <ul className={styles.dropdown}>
                <li>
                  <Link to="/servicios#desarrollo-web">
                    <i className="fas fa-laptop-code"></i>
                    <div>
                      <strong>Desarrollo Web</strong>
                      <span>Sitios y aplicaciones web</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/servicios#desarrollo-movil">
                    <i className="fas fa-mobile-alt"></i>
                    <div>
                      <strong>Desarrollo Móvil</strong>
                      <span>Apps iOS y Android</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/servicios#ecommerce">
                    <i className="fas fa-shopping-cart"></i>
                    <div>
                      <strong>E-commerce</strong>
                      <span>Tiendas en línea</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/servicios#consultoria">
                    <i className="fas fa-chart-line"></i>
                    <div>
                      <strong>Consultoría IT</strong>
                      <span>Asesoría tecnológica</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                to="/proyectos" 
                className={`${styles.navLink} ${isActive('/proyectos') ? styles.active : ''}`}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`${styles.navLink} ${isActive('/blog') ? styles.active : ''}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contacto" 
                className={`${styles.navLink} ${isActive('/contacto') ? styles.active : ''}`}
              >
                Contacto
              </Link>
            </li>
          </ul>

          <div className={styles.ctaButtons}>
            <Link to="/contacto" className={styles.ctaButton}>
              Iniciar Proyecto
              <i className="fas fa-arrow-right"></i>
            </Link>
        </div>
      </nav>
      </div>
    </header>
  );
}

export default Header;