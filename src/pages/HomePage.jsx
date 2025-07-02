// src/pages/HomePage.jsx

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';
import TechStackSection from '../components/TechStackSection';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <FadeInWhenVisible>
          <ServicesSection />
        </FadeInWhenVisible>
        

        <FadeInWhenVisible>
          <TechStackSection /> {/* <-- 2. Añadir el componente aquí */}
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <PortfolioSection />
        </FadeInWhenVisible>
        
        <FadeInWhenVisible>
          <AboutSection />
        </FadeInWhenVisible>
        
        <FadeInWhenVisible>
          <CallToActionSection />
        </FadeInWhenVisible>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;