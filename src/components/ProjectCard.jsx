// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

function ProjectCard({ image, client, title, description, tags, id }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={`Proyecto para ${client}`} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.client}>{client}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
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