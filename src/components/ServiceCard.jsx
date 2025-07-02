// src/components/ServiceCard.jsx
import React from 'react';
import styles from './ServiceCard.module.css';

// Ya no necesitamos el ArrowIcon aquí, lo usaremos de otra forma
function ServiceCard({ icon, title, description, onClick }) {
  return (
    <div className={styles.card} onClick={onClick} tabIndex="0"> {/* Añadimos tabIndex para accesibilidad */}
      
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.ctaLink}>Ver más detalles</span>
      </div>

    </div>
  );
}

export default ServiceCard;