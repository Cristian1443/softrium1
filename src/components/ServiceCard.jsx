// src/components/ServiceCard.jsx
import React from 'react';
import styles from './ServiceCard.module.css';

function ServiceCard({ icon, title, description, category, duration, onClick }) {
  return (
    <div className={styles.card} onClick={onClick} tabIndex="0">
      
      <div className={styles.content}>
        <div className={styles.header}>
        <div className={styles.iconWrapper}>
          {icon}
          </div>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.duration}>⏱️ {duration}</span>
          </div>
        </div>
        
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.ctaLink}>Ver más detalles</span>
        <div className={styles.hoverArrow}>→</div>
      </div>

    </div>
  );
}

export default ServiceCard;