import React from 'react';
import { Quote, Star, Phone, MapPin } from 'lucide-react';
import { content } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Work() {
  const { work } = content;

  return (
    <section id="work" className="relative bg-[#060D1D] py-14 sm:py-16 lg:py-20 border-b border-white/10 scroll-mt-20 overflow-hidden">
      {/* Ambient background pulsing glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] rounded-full bg-blue-600/12 blur-[150px] animate-pulse-glow"
        aria-hidden="true" 
      />

      <div className="relative max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header matching About style */}
        <SectionHeading
          eyebrow="CLIENT REVIEWS"
          title="What leaders say about working with us."
          subtitle="Trusted by local businesses, founders, and operations leaders across India."
          className="mb-8 sm:mb-10"
        />

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {work.testimonials.map((testimonial, idx) => {
            return (
              <div
                key={testimonial.name}
                className="group relative overflow-hidden rounded-[16px] bg-[#0B1528] border border-white/10 p-4 sm:p-5 hover:border-sky-400/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(2,132,199,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Looping radiant glow beam across card */}
                <div
                  className="pointer-events-none absolute -inset-y-6 w-3/4 -left-1/3 bg-gradient-to-r from-transparent via-sky-400/15 via-white/[0.08] to-transparent blur-sm animate-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    animationDelay: `${idx * 0.5}s`,
                  }}
                  aria-hidden="true"
                />

                {/* Subtle top edge neon gradient highlight on hover */}
                <div 
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/0 to-transparent group-hover:via-sky-400/80 transition-all duration-500" 
                  aria-hidden="true" 
                />

                <div className="relative z-10">
                  {/* Top Row: Dynamic Stars Rating & Floating Decorative Quote Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, starIdx) => {
                          const rating = testimonial.rating || 5;
                          const starValue = starIdx + 1;
                          const isFull = starValue <= Math.floor(rating);
                          const isHalf = !isFull && starIdx < rating;

                          if (isFull) {
                            return (
                              <Star
                                key={starIdx}
                                className="w-3.5 h-3.5 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.35)] group-hover:scale-110 transition-transform duration-200"
                                style={{ transitionDelay: `${starIdx * 35}ms` }}
                              />
                            );
                          }

                          if (isHalf) {
                            return (
                              <div
                                key={starIdx}
                                className="relative w-3.5 h-3.5 inline-block group-hover:scale-110 transition-transform duration-200"
                                style={{ transitionDelay: `${starIdx * 35}ms` }}
                              >
                                <Star className="w-3.5 h-3.5 text-white/20 fill-white/[0.04]" />
                                <div className="absolute inset-0 overflow-hidden w-[50%]">
                                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.35)]" />
                                </div>
                              </div>
                            );
                          }

                          return (
                            <Star
                              key={starIdx}
                              className="w-3.5 h-3.5 text-white/20 fill-white/[0.04] transition-transform duration-200"
                              style={{ transitionDelay: `${starIdx * 35}ms` }}
                            />
                          );
                        })}
                      </div>
                      <span className="text-xs font-semibold text-amber-400/90 font-mono">
                        {(testimonial.rating || 5).toFixed(1)}
                      </span>
                    </div>

                    <Quote 
                      className="w-6 h-6 text-white/[0.06] group-hover:text-sky-400/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 select-none pointer-events-none" 
                      aria-hidden="true" 
                    />
                  </div>

                  {/* Quote using Source Serif 4 font */}
                  <p className="font-serif text-[14.5px] sm:text-[15.5px] text-white/80 group-hover:text-white font-normal leading-[1.6] tracking-[-0.01em] mb-3.5 transition-colors duration-200">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Client Info & Contact Details */}
                <div className="relative z-10 pt-2 mt-auto space-y-2">
                  <div>
                    <h4 className="font-sans font-bold text-lg sm:text-xl text-white group-hover:text-sky-200 transition-colors duration-200 tracking-tight leading-snug">
                      {testimonial.name}
                    </h4>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 block mt-0.5">
                      {testimonial.role}
                    </span>
                  </div>

                  {/* Contact details for the client */}
                  <div className="pt-0.5 flex flex-col gap-1">
                    {testimonial.phone && (
                      <a
                        href={`tel:${testimonial.phone.replace(/[\s()-]/g, '')}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-sky-200 hover:text-white transition-colors group/tel w-fit"
                        title={`Call ${testimonial.name}`}
                      >
                        <Phone className="w-3 h-3 text-sky-400 group-hover/tel:scale-110 transition-transform" />
                        <span className="font-medium font-mono">{testimonial.phone}</span>
                      </a>
                    )}
                    <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-white/60">
                      <MapPin className="w-3 h-3 text-sky-400/80 flex-shrink-0" />
                      <span className="truncate">{testimonial.location || testimonial.company}</span>
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
