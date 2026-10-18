import React, { useEffect, useRef, useState, useMemo } from 'react';
import { content } from '../data/content';

export default function About() {
  const { about } = content;
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const statementText = about.statement || 
    "Through strategic consulting and purposeful design we partner with companies to build lasting competitive advantage. Our approach is rooted in data and focused entirely on your long-term growth.";

  // Pre-calculate words and characters with global indices
  const { words, totalChars } = useMemo(() => {
    const rawWords = statementText.split(' ');
    let charCounter = 0;

    const parsedWords = rawWords.map((word) => {
      const chars = word.split('').map((char) => ({
        char,
        charIndex: charCounter++,
      }));
      // Account for the trailing space between words
      charCounter++;
      return { chars };
    });

    return { words: parsedWords, totalChars: charCounter };
  }, [statementText]);

  // Fast-paced scroll listener (natural scroll, non-fixed)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Natural scroll window: starts when entering bottom 85% of screen,
      // completes fast when reaching upper 28% of screen.
      const startY = windowHeight * 0.85;
      const endY = windowHeight * 0.28;
      const totalDistance = startY - endY;

      if (totalDistance <= 0) return;

      const current = (startY - rect.top) / totalDistance;
      const clamped = Math.max(0, Math.min(1, current));
      setProgress(clamped);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Compute character color style with fast-paced transition window
  const getCharStyle = (charIndex) => {
    if (totalChars === 0) return { color: '#ffffff' };

    // Advance slightly faster so 100% fill completes swiftly
    const effectiveProgress = Math.min(1, progress * 1.05);
    const charPos = charIndex / totalChars;
    const windowSize = 0.018; // Crisp, fast-paced transition per letter

    if (effectiveProgress <= charPos) {
      // Inactive: muted blue-gray matching reference aesthetic
      return {
        color: 'rgba(255, 255, 255, 0.2)',
      };
    }

    if (effectiveProgress >= charPos + windowSize) {
      // Active: solid high-contrast white
      return {
        color: '#ffffff',
      };
    }

    // Fast-paced interpolation during transition window
    const factor = (effectiveProgress - charPos) / windowSize;
    const alpha = 0.2 + factor * 0.8;
    return {
      color: `rgba(255, 255, 255, ${alpha.toFixed(3)})`,
    };
  };

  return (
    <section
      id="about"
      className="relative bg-[#060D1D] py-14 sm:py-16 lg:py-20 border-b border-white/10 overflow-hidden scroll-mt-20"
    >
      {/* Ambient Blue Diffusion matching Website Theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] sm:h-[600px] rounded-full bg-blue-600/12 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Eyebrow & Horizontal Rule */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <span className="font-sans text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-white/90 block mb-3">
            {about.eyebrow || 'WHO WE ARE'}
          </span>

          {/* Split underline: prominent active bar + subtle continuation line */}
          <div className="flex items-center w-full">
            <div className="h-[2px] w-28 sm:w-36 bg-sky-400 flex-shrink-0" />
            <div className="h-[1px] flex-1 bg-white/15" />
          </div>
        </div>

        {/* Large Editorial Headline with Fast-Paced Letter-by-Letter Scroll Fill (No Fixed Section) */}
        <h2
          ref={textRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-medium tracking-[-0.025em] leading-[1.25] sm:leading-[1.18] lg:leading-[1.14] select-none"
        >
          {words.map((wordObj, wIdx) => (
            <React.Fragment key={wIdx}>
              <span className="inline-block whitespace-nowrap">
                {wordObj.chars.map((c) => (
                  <span
                    key={c.charIndex}
                    style={getCharStyle(c.charIndex)}
                    className="transition-colors duration-100"
                  >
                    {c.char}
                  </span>
                ))}
              </span>
              {wIdx < words.length - 1 && (
                <span className="inline text-white/20">{' '}</span>
              )}
            </React.Fragment>
          ))}
        </h2>
      </div>
    </section>
  );
}
