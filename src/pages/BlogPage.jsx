// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CalendarIcon, UserIcon, ClockIcon, SearchIcon, TagIcon } from '../components/Icons';
import styles from './BlogPage.module.css';

// Importar imágenes
import blogImage1 from '../assets/blog/blog-image-1.jpg';
import blogImage2 from '../assets/blog/blog-image-2.jpg';
import teamSoftrium from '../assets/team-softrium.jpg';

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Desarrollo Web', 'Inteligencia Artificial', 'Desarrollo Móvil', 'DevOps', 'UI/UX'];

  const posts = [
    {
      id: 1,
      title: "Las Tendencias de Desarrollo Web para 2024",
      excerpt: "Descubre las tecnologías y prácticas que dominarán el desarrollo web este año, desde frameworks modernos hasta herramientas de desarrollo.",
      content: "El desarrollo web continúa evolucionando a un ritmo acelerado...",
      date: "2024-01-15",
      author: "Carlos Martínez",
      image: blogImage1,
      category: "Desarrollo Web",
      readTime: "5 min",
      featured: true,
      tags: ["React", "Next.js", "TypeScript", "Web Development"]
    },
    {
      id: 2,
      title: "Cómo la IA está Transformando el Desarrollo de Software",
      excerpt: "Un análisis profundo del impacto de la inteligencia artificial en la industria del software y las nuevas oportunidades que presenta.",
      content: "La inteligencia artificial está revolucionando la manera en que desarrollamos software...",
      date: "2024-01-10",
      author: "Ana García",
      image: blogImage2,
      category: "Inteligencia Artificial",
      readTime: "7 min",
      featured: true,
      tags: ["AI", "Machine Learning", "Automation", "Future"]
    },
    {
      id: 3,
      title: "Mejores Prácticas en Desarrollo Móvil",
      excerpt: "Guía completa para crear aplicaciones móviles exitosas y escalables utilizando las últimas tecnologías.",
      content: "El desarrollo móvil requiere un enfoque específico...",
      date: "2024-01-05",
      author: "Miguel Rodríguez",
      image: blogImage1,
      category: "Desarrollo Móvil",
      readTime: "6 min",
      featured: false,
      tags: ["React Native", "Flutter", "Mobile", "App Development"]
    },
    {
      id: 4,
      title: "DevOps: Automatización y Mejores Prácticas",
      excerpt: "Aprende cómo implementar DevOps en tu organización para mejorar la eficiencia y calidad del desarrollo.",
      content: "DevOps es más que una metodología...",
      date: "2024-01-08",
      author: "Luis Fernández",
      image: blogImage2,
      category: "DevOps",
      readTime: "8 min",
      featured: false,
      tags: ["Docker", "CI/CD", "Automation", "DevOps"]
    },
    {
      id: 5,
      title: "Diseño UI/UX: Principios Fundamentales",
      excerpt: "Los principios esenciales del diseño de interfaces que todo desarrollador debería conocer.",
      content: "El diseño UI/UX es crucial para el éxito de cualquier aplicación...",
      date: "2024-01-12",
      author: "Carolina López",
      image: teamSoftrium,
      category: "UI/UX",
      readTime: "4 min",
      featured: false,
      tags: ["Design", "UX", "UI", "User Experience"]
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Header />
      <main className={styles.blogPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Blog de Softrium</h1>
              <p>
                Explora nuestros artículos sobre desarrollo de software, tecnología y las últimas tendencias 
                en el mundo digital. Mantente actualizado con contenido de calidad creado por nuestros expertos.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Artículos</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10K+</span>
                  <span className={styles.statLabel}>Lectores</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5</span>
                  <span className={styles.statLabel}>Categorías</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          {/* Search and Filter Section */}
          <section className={styles.filtersSection}>
            <div className={styles.searchContainer}>
              <div className={styles.searchBox}>
                <SearchIcon className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              
              <div className={styles.categoriesContainer}>
                <h3 className={styles.categoriesTitle}>
                  <TagIcon className={styles.tagIcon} />
                  Categorías
                </h3>
                <div className={styles.categories}>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`${styles.categoryButton} ${
                        selectedCategory === category ? styles.active : ''
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && selectedCategory === 'Todos' && !searchTerm && (
            <section className={styles.featuredSection}>
              <h2 className={styles.sectionTitle}>Artículos Destacados</h2>
              <div className={styles.featuredGrid}>
                {featuredPosts.map(post => (
                  <article key={post.id} className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                      <img src={post.image} alt={post.title} />
                      <div className={styles.featuredBadge}>Destacado</div>
                    </div>
                    <div className={styles.featuredContent}>
                      <div className={styles.postCategory}>{post.category}</div>
                      <h3>{post.title}</h3>
                      <p className={styles.excerpt}>{post.excerpt}</p>
                      <div className={styles.postMeta}>
                        <div className={styles.metaGroup}>
                          <UserIcon className={styles.metaIcon} />
                          <span>{post.author}</span>
                        </div>
                        <div className={styles.metaGroup}>
                          <CalendarIcon className={styles.metaIcon} />
                          <span>
                            {new Date(post.date).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className={styles.metaGroup}>
                          <ClockIcon className={styles.metaIcon} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className={styles.tags}>
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                      <Link to={`/blog/${post.id}`} className={styles.readMore}>
                        Leer Artículo
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Regular Posts */}
          <section className={styles.postsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {searchTerm ? `Resultados para "${searchTerm}"` : 
                 selectedCategory !== 'Todos' ? selectedCategory : 'Todos los Artículos'}
              </h2>
              <div className={styles.postsCount}>
                {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''}
              </div>
            </div>
            
            <div className={styles.postsGrid}>
              {regularPosts.map(post => (
                <article key={post.id} className={styles.postCard}>
                  <div className={styles.postImage}>
                    <img src={post.image} alt={post.title} />
                    <div className={styles.categoryTag}>{post.category}</div>
                  </div>
                  <div className={styles.postContent}>
                    <h3>{post.title}</h3>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <div className={styles.postMeta}>
                      <div className={styles.metaGroup}>
                        <UserIcon className={styles.metaIcon} />
                        <span>{post.author}</span>
                      </div>
                      <div className={styles.metaGroup}>
                        <CalendarIcon className={styles.metaIcon} />
                        <span>
                          {new Date(post.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className={styles.metaGroup}>
                        <ClockIcon className={styles.metaIcon} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className={styles.tags}>
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <Link to={`/blog/${post.id}`} className={styles.readMore}>
                      Leer más
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className={styles.noResults}>
                <h3>No se encontraron artículos</h3>
                <p>Intenta con diferentes términos de búsqueda o categorías.</p>
              </div>
            )}
          </section>

          {/* Newsletter CTA */}
          <section className={styles.newsletterSection}>
            <div className={styles.newsletterContent}>
              <h2>¿Te gustó nuestro contenido?</h2>
              <p>
                Suscríbete a nuestro newsletter para recibir los últimos artículos, 
                tutoriales y novedades del mundo del desarrollo de software.
              </p>
              <Link to="/contacto" className={styles.ctaButton}>
                Suscribirme al Newsletter
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;