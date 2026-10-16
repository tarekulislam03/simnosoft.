import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { content } from '../data/content';

export default function Hero() {
  const { hero } = content;

  // Typewriter effect looping through key value words
  const words = ["Results.", "actually works.", "Impact.", "Scale."];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="relative overflow-hidden bg-[#0A0017]">
      {/* 1. ATMOSPHERIC PURPLE GLOW BACKGROUND */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 30%, rgba(139, 92, 246, 0.45) 0%, rgba(109, 40, 217, 0.25) 40%, rgba(10, 0, 23, 0) 75%)',
        }}
        aria-hidden="true"
      />
      
      {/* Secondary subtle center core glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] pointer-events-none rounded-full blur-[110px] bg-purple-500/25"
        aria-hidden="true"
      />

      {/* 2. MAIN HERO CONTENT */}
      <div className="relative pt-32 pb-14 md:pt-40 md:pb-16 max-w-[1200px] mx-auto px-6 text-center">
        {/* Top Eyebrow: Overlapping Circular Flags & USP */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex items-center -space-x-1.5 mb-2.5">
            {/* India Flag */}
            <span className="w-6 h-6 rounded-full overflow-hidden border-2 border-[#0A0017] shadow-sm inline-flex items-center justify-center bg-slate-900 text-xs">
              🇮🇳
            </span>
            {/* US Flag */}
            <span className="w-6 h-6 rounded-full overflow-hidden border-2 border-[#0A0017] shadow-sm inline-flex items-center justify-center bg-slate-900 text-xs">
              🇺🇸
            </span>
            {/* UK Flag */}
            <span className="w-6 h-6 rounded-full overflow-hidden border-2 border-[#0A0017] shadow-sm inline-flex items-center justify-center bg-slate-900 text-xs">
              🇬🇧
            </span>
            {/* UAE Flag */}
            <span className="w-6 h-6 rounded-full overflow-hidden border-2 border-[#0A0017] shadow-sm inline-flex items-center justify-center bg-slate-900 text-xs">
              🇦🇪
            </span>
            {/* EU Flag */}
            <span className="w-6 h-6 rounded-full overflow-hidden border-2 border-[#0A0017] shadow-sm inline-flex items-center justify-center bg-slate-900 text-xs">
              🇪🇺
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-white/80 tracking-wide">
            {hero.eyebrow}
          </p>
        </div>

        {/* Headline: Mix of Modern Sans Bold + Elegant Italic Serif */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
          We <span className="font-serif italic font-normal text-purple-200">Develop</span> Products <br className="hidden sm:inline" />
          That Drive{' '}
          <span className="font-serif italic font-normal text-purple-200 inline-flex items-baseline">
            <span>{displayText}</span>
            <span 
              className="inline-block w-[3px] md:w-[4px] h-[0.78em] bg-purple-300 ml-1.5 animate-pulse translate-y-[2px]" 
              aria-hidden="true" 
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mt-5 leading-relaxed">
          {hero.subtext}
        </p>

        {/* Call to Actions with Decorative Elements */}
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-5">
          {/* Hand-drawn curved arrow pointing to the button (Left) */}
          <div className="hidden lg:block absolute -left-16 sm:-left-24 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <svg 
              width="80" 
              height="45" 
              viewBox="0 0 80 45" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/60 -rotate-12"
            >
              <path 
                d="M5 38C25 42 55 35 68 12M68 12L58 10M68 12L72 22" 
                stroke="currentColor" 
                strokeWidth="1.75" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          {/* Primary Button: White Pill with Black Arrow Circle */}
          <a
            href={hero.primaryCta?.href || "#services"}
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-slate-950 font-semibold text-sm sm:text-[15px] shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:bg-slate-100 hover:scale-[1.03] transition-all duration-200"
          >
            <span>Start a Project</span>
            <span className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          {/* Secondary Button: Discuss on WhatsApp */}
          <a
            href={hero.secondaryCta?.href || "https://wa.me/918101402916"}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm sm:text-[15px] transition-colors duration-200 px-4 py-2"
          >
            <svg 
              className="w-4 h-4 text-emerald-400 fill-current group-hover:scale-110 transition-transform" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Discuss on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </a>

          {/* Floating 3D Notification Bell Element (Right) */}
          <div className="hidden md:flex absolute -right-6 lg:-right-20 top-1/2 -translate-y-1/2 pointer-events-none select-none animate-[bounce_4s_ease-in-out_infinite]">
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-300 p-0.5 shadow-xl shadow-purple-500/30 rotate-12">
              <div className="w-full h-full bg-[#0A0017]/40 backdrop-blur-md rounded-[14px] flex items-center justify-center text-white">
                <span className="text-2xl filter drop-shadow">🔔</span>
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-[#0A0017] flex items-center justify-center text-[9px] font-bold text-slate-900">
                1
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PARTNERS LOGO STRIP BELOW HERO (Infinite Looping Single-Row Marquee) */}
      <div className="relative bg-[#070012] border-t border-b border-white/10 py-7 sm:py-8 overflow-hidden select-none">
        {/* Left & Right Gradient Fade Masks */}
        <div 
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#070012] to-transparent z-10" 
          aria-hidden="true"
        />
        <div 
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#070012] to-transparent z-10" 
          aria-hidden="true"
        />

        {/* Continuous Looping Single Row for Mobile and Desktop */}
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 flex-shrink-0">
            {hero.partners.map((partner, idx) => (
              <div 
                key={`p1-${partner.name}-${idx}`}
                className="flex items-center justify-center flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-6 sm:h-7 w-auto max-w-[120px] object-contain brightness-0 invert group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless infinite loop */}
          <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 flex-shrink-0" aria-hidden="true">
            {hero.partners.map((partner, idx) => (
              <div 
                key={`p2-${partner.name}-${idx}`}
                className="flex items-center justify-center flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-6 sm:h-7 w-auto max-w-[120px] object-contain brightness-0 invert group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
