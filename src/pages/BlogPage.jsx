// src/pages/BlogPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './BlogPage.module.css';

function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Las Tendencias de Desarrollo Web para 2024",
      excerpt: "Descubre las tecnologías y prácticas que dominarán el desarrollo web este año.",
      date: "2024-01-15",
      author: "Carlos Martínez",
      image: "https://placehold.co/600x400/21355c/FFFFFF/png?text=Web+Dev+2024"
    },
    {
      id: 2,
      title: "Cómo la IA está Transformando el Desarrollo de Software",
      excerpt: "Un análisis profundo del impacto de la inteligencia artificial en la industria del software.",
      date: "2024-01-10",
      author: "Ana García",
      image: "https://placehold.co/600x400/21355c/FFFFFF/png?text=AI+in+Software"
    },
    {
      id: 3,
      title: "Mejores Prácticas en Desarrollo Móvil",
      excerpt: "Guía completa para crear aplicaciones móviles exitosas y escalables.",
      date: "2024-01-05",
      author: "Miguel Rodríguez",
      image: "https://placehold.co/600x400/21355c/FFFFFF/png?text=Mobile+Dev"
    }
  ];

  return (
    <>
      <Header />
      <main className={styles.blogPage}>
        <div className="container">
          <div className={styles.blogHeader}>
            <h1>Blog de Softrium</h1>
            <p>Noticias, tutoriales y actualizaciones sobre desarrollo de software y tecnología</p>
          </div>
          
          <div className={styles.postsGrid}>
            {posts.map(post => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postImage}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.postContent}>
                  <h2>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span className={styles.author}>{post.author}</span>
                    <span className={styles.date}>
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;