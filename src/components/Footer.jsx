import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { content } from '../data/content';

export default function Footer({ currentPage = 'home', onNavigate, onOpenPrivacy, onOpenTerms }) {
  const { brand, footer, navigation, contact } = content;

  const handleLinkClick = (e, targetHref) => {
    if (targetHref.startsWith('http') || targetHref.startsWith('mailto:') || targetHref.startsWith('tel:')) {
      return;
    }

    e.preventDefault();

    if (targetHref === '#' || targetHref === '') {
      if (currentPage === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigate) {
        onNavigate('home');
      }
      return;
    }

    if (targetHref.startsWith('#') && targetHref.length > 1) {
      if (currentPage === 'home') {
        try {
          const el = document.querySelector(targetHref);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {
          // Ignore invalid selector
        }
      } else if (onNavigate) {
        onNavigate('home', targetHref);
      }
    }
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('privacy');
    } else if (onOpenPrivacy) {
      onOpenPrivacy();
    }
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('terms');
    } else if (onOpenTerms) {
      onOpenTerms();
    }
  };

  return (
    <footer className="relative bg-[#02050E] border-t border-white/10 text-white overflow-hidden">
      {/* Subtle Ambient Blue Gradient at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] mx-auto px-6 pt-16 pb-12">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand & One-line Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a 
              href="#" 
              onClick={(e) => handleLinkClick(e, '#')}
              className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm cursor-pointer"
              aria-label={brand.name}
            >
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-8 md:h-9 w-auto object-contain" 
                />
              ) : (
                <span className="text-2xl font-bold tracking-tight text-white font-sans">
                  {brand.name}<span className="text-sky-400">.</span>
                </span>
              )}
            </a>

            <p className="font-serif italic text-sky-200 text-sm sm:text-base leading-relaxed">
              "{footer.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              {footer.description}
            </p>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/90">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleLinkClick(e, '#')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/90">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {contact.projectTypes.map((type) => (
                <li key={type}>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleLinkClick(e, '#contact')}
                    className="hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/90">
              Direct Contact
            </h4>
            
            <div className="space-y-2">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-sky-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{contact.email}</span>
              </a>

              {contact.phone && (
                <div>
                  <a
                    href={`tel:${contact.phone.replace(/[\s()-]/g, '')}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-sky-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            {footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="/privacy"
              onClick={handlePrivacyClick}
              className="hover:text-white/80 transition-colors cursor-pointer text-xs text-white/50"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">·</span>
            <a 
              href="/terms"
              onClick={handleTermsClick}
              className="hover:text-white/80 transition-colors cursor-pointer text-xs text-white/50"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
