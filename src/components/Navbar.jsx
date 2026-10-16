import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0B001A]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Left */}
        <a 
          href="#" 
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-sm py-1"
          aria-label={content.brand.name}
        >
          {content.brand.logo ? (
            <img 
              src={content.brand.logo} 
              alt={content.brand.name} 
              className="h-8 md:h-9 w-auto object-contain" 
            />
          ) : (
            <span className="text-2xl font-bold tracking-tight text-white font-sans">
              Simnosoft<span className="text-purple-400">.</span>
            </span>
          )}
        </a>

        {/* Center / Right Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <a
            href="#"
            className="text-[14px] font-medium text-white transition-colors duration-200"
          >
            Home
          </a>
          {content.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[14px] font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#faq"
            className="text-[14px] font-medium text-white/70 hover:text-white transition-colors duration-200"
          >
            FAQs
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0B001A]/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] font-medium text-white py-2"
            >
              Home
            </a>
            {content.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-white/70 hover:text-white py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] font-medium text-white/70 hover:text-white py-2"
            >
              FAQs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
