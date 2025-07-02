// src/components/ServiceCard.jsx
import React from 'react';
import styles from './ServiceCard.module.css';

function ServiceCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ServiceCard;