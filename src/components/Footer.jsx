import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { content } from '../data/content';

export default function Footer() {
  const { brand, footer, navigation, contact } = content;

  // Social icon mapper
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'Github':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        );
      case 'Twitter':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-[#06000F] border-t border-white/10 text-white overflow-hidden">
      {/* Subtle Ambient Violet Gradient at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
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
              className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-sm"
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
                  {brand.name}<span className="text-purple-400">.</span>
                </span>
              )}
            </a>

            <p className="font-serif italic text-purple-200 text-sm sm:text-base leading-relaxed">
              "{footer.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              {footer.description}
            </p>

            {/* Global Reach Pill */}
            <div className="pt-2 flex items-center gap-2 text-xs text-white/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Serving clients across 🇮🇳 India, 🇺🇸 US, 🇬🇧 UK & 🇦🇪 UAE</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/90">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Home
                </a>
              </li>
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-purple-300 transition-colors">
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
                  <a href="#contact" className="hover:text-purple-300 transition-colors">
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
            
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>{contact.email}</span>
            </a>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-2.5">
                Connect
              </span>
              <div className="flex items-center gap-2.5">
                {footer.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400 hover:bg-purple-500/20 text-white/70 hover:text-white transition-all duration-200 flex items-center justify-center group"
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            {footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">·</span>
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms of Service
            </a>
            <span className="text-white/20">·</span>
            <a href="#" className="hover:text-white/80 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
