import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "mb-12 sm:mb-16",
}) {
  return (
    <div className={className}>
      {/* Eyebrow & Underline matching About style */}
      <div className="mb-6 sm:mb-8">
        <span className="font-sans text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-white/90 block mb-3">
          {eyebrow}
        </span>
        <div className="flex items-center w-full">
          <div className="h-[2px] w-28 sm:w-36 bg-sky-400 flex-shrink-0" />
          <div className="h-[1px] flex-1 bg-white/15" />
        </div>
      </div>

      {/* Static Solid White Heading (No letter-by-letter animation) */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.2] sm:leading-[1.15] text-white select-none mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="font-sans text-[15px] sm:text-[17px] text-white/70 max-w-2xl leading-[1.6]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
