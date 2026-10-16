import React from 'react';
import { Quote } from 'lucide-react';
import { content } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Work() {
  const { work } = content;

  return (
    <section id="work" className="relative bg-[#0A0017] py-14 sm:py-16 lg:py-20 border-b border-white/10 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header matching About style */}
        <SectionHeading
          eyebrow="CLIENT REVIEWS"
          title="What leaders say about working with us."
          subtitle="Trusted by local businesses, founders, and operations leaders across India."
          className="mb-8 sm:mb-10"
        />

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {work.testimonials.map((testimonial) => {
            const initials = testimonial.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2);

            return (
              <div
                key={testimonial.name}
                className="group relative overflow-hidden rounded-[12px] bg-[#0F0221] border border-white/10 p-[28px] hover:border-purple-400/30 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(147,51,234,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top edge glow highlight on hover */}
                <div 
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover:via-purple-400/60 transition-all duration-500" 
                  aria-hidden="true" 
                />

                {/* Subtle decorative quotation mark in top-right */}
                <Quote 
                  className="w-8 h-8 text-white/[0.04] group-hover:text-purple-400/20 transition-colors duration-300 absolute top-6 right-6 select-none pointer-events-none" 
                  aria-hidden="true" 
                />

                <div className="relative z-10">
                  {/* Quote using Source Serif 4 font matching heading, reduced size */}
                  <p className="font-serif text-[17px] sm:text-[18px] lg:text-[19px] text-white/80 group-hover:text-white font-normal leading-[1.65] tracking-[-0.01em] mb-6 transition-colors duration-200">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author & Business Info */}
                <div className="relative z-10 flex items-center gap-3.5 pt-1">
                  {testimonial.logo ? (
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/[0.04] border border-white/10 group-hover:border-purple-400/40 group-hover:bg-white/[0.06] flex items-center justify-center overflow-hidden flex-shrink-0 transition-colors duration-300">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.name}
                        className={`transition-transform duration-300 group-hover:scale-105 ${
                          testimonial.logo.includes('mm_medical')
                            ? "w-full h-full object-cover"
                            : "w-full h-full object-contain p-1"
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-300 font-semibold text-xs flex-shrink-0 group-hover:border-purple-400/50 transition-colors">
                      {initials}
                    </div>
                  )}
                  <div className="min-w-0">
                    <span className="font-sans font-semibold text-white group-hover:text-purple-200 text-sm block truncate transition-colors duration-200">
                      {testimonial.name}
                    </span>
                    <div className="text-xs text-white/60 truncate">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
