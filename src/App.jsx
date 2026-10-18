import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalNotice from './pages/LegalNotice';
import LegalTerms from './pages/LegalTerms';

const getPageFromLocation = () => {
  if (typeof window === 'undefined') return 'home';

  try {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const hash = window.location.hash.toLowerCase();

    if (
      path === '/privacy' || 
      path === '/privacy-policy' || 
      hash === '#privacy' || 
      hash === '#/privacy' || 
      hash === '#privacy-policy'
    ) {
      return 'privacy';
    }

    if (
      path === '/terms' || 
      path === '/terms-of-service' || 
      hash === '#terms' || 
      hash === '#/terms' || 
      hash === '#terms-of-service'
    ) {
      return 'terms';
    }
  } catch (err) {
    console.warn('Error reading route:', err);
  }

  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      const page = getPageFromLocation();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentPage === 'home' && window.location.hash) {
      const hash = window.location.hash;
      if (
        hash.startsWith('#') && 
        hash.length > 1 && 
        !['#privacy', '#terms', '#/privacy', '#/terms'].includes(hash.toLowerCase())
      ) {
        setTimeout(() => {
          try {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } catch (err) {
            // Silently ignore invalid selectors
          }
        }, 100);
      }
    }
  }, [currentPage]);

  const navigate = (page, hash = '') => {
    setCurrentPage(page || 'home');

    try {
      if (page === 'privacy') {
        window.history.pushState(null, '', '/privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (page === 'terms') {
        window.history.pushState(null, '', '/terms');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        // Navigate to home
        const targetUrl = hash && hash.length > 1 ? `/${hash}` : '/';
        window.history.pushState(null, '', targetUrl);

        if (hash && hash.length > 1) {
          setTimeout(() => {
            try {
              const el = document.querySelector(hash);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            } catch (err) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }, 50);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } catch (err) {
      console.warn('Navigation error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#060D1D] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {currentPage === 'privacy' ? (
          <LegalNotice />
        ) : currentPage === 'terms' ? (
          <LegalTerms />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Work />
            <Contact />
          </>
        )}
      </main>
      <Footer currentPage={currentPage} onNavigate={navigate} />
    </div>
  );
}
