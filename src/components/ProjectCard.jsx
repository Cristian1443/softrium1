// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

function ProjectCard({ image, video, client, title, description, tags, id, category, year, impact, status }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {video ? (
          <video 
            src={video} 
            autoPlay
            loop
            muted
            className={styles.video}
          >
            Tu navegador no soporta el elemento video.
          </video>
        ) : image ? (
          <img src={image} alt={`Proyecto para ${client}`} className={styles.image} />
        ) : (
          <div className={styles.placeholderVideo}>
            <span>📹</span>
            <p>Video del proyecto</p>
          </div>
        )}
        {status && (
          <div className={styles.statusBadge}>
            <span className={`${styles.status} ${styles[status.replace(' ', '').toLowerCase()]}`}>
              {status}
            </span>
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.clientSection}>
            <span className={styles.client}>{client}</span>
            {year && <span className={styles.year}>{year}</span>}
          </div>
          {category && (
            <span className={styles.category}>{category}</span>
          )}
        </div>
        
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {impact && (
          <div className={styles.impact}>
            <span className={styles.impactLabel}>Impacto:</span>
            <span className={styles.impactValue}>{impact}</span>
          </div>
        )}
        
        <div className={styles.tags}>
          {tags.slice(0, 4).map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        
        <Link to={`/proyecto/${id}`} className={styles.link}>
          Ver Caso de Estudio →
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;