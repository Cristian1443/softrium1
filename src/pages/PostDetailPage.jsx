// src/pages/PostDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './PostDetailPage.module.css';

function PostDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: '', data: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Importamos dinámicamente el archivo .md basado en el slug de la URL
        const rawContent = await import(`/posts/${slug}.md?raw`);
        const { content, data } = matter(rawContent.default);
        setPost({ content, data });
      } catch (error) {
        console.error("No se pudo cargar el post", error);
        // Aquí podrías redirigir a una página 404
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Header />
      <main className="container">
        <article className={styles.postArticle}>
          <header className={styles.postHeader}>
            <h1 className={styles.postTitle}>{post.data.title}</h1>
            <p className={styles.postMeta}>
              Por {post.data.author} • {new Date(post.data.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>
          <img src={post.data.image} alt={post.data.title} className={styles.postImage} />
          <div className={styles.postContent}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
        <Link to="/blog" className={styles.backLink}>← Volver al Blog</Link>
      </main>
      <Footer />
    </>
  );
}

export default PostDetailPage;