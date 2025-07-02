// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Importar componentes de enrutamiento
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage'; // 2. Importar la nueva página
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 3. Definir las rutas */}
      <Routes>
        {/* La ruta para la página de inicio */}
        <Route path="/" element={<HomePage />} />
        
        {/* La ruta para los servicios */}
        <Route path="/servicios" element={<ServicesPage />} />
        
        {/* La ruta para la lista de proyectos */}
        <Route path="/proyectos" element={<ProjectsPage />} />
        
        {/* La ruta para los detalles del proyecto. :projectId es un parámetro dinámico. */}
        <Route path="/proyecto/:projectId" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;