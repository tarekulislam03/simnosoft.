import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy' || hash === '#privacy-policy') {
        setLegalModal('privacy');
      } else if (hash === '#terms' || hash === '#terms-of-service') {
        setLegalModal('terms');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCloseLegal = () => {
    setLegalModal(null);
    if (
      window.location.hash === '#privacy' ||
      window.location.hash === '#privacy-policy' ||
      window.location.hash === '#terms' ||
      window.location.hash === '#terms-of-service'
    ) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0017] text-white flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer 
        onOpenPrivacy={() => setLegalModal('privacy')} 
        onOpenTerms={() => setLegalModal('terms')} 
      />
      <LegalModal type={legalModal} onClose={handleCloseLegal} />
    </div>
  );
}
