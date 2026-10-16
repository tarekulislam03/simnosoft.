import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
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
      <Footer />
    </div>
  );
}
