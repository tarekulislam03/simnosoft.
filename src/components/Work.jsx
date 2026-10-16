import React from 'react';
import { Quote, Star, Phone, MapPin } from 'lucide-react';
import { content } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Work() {
  const { work } = content;

  return (
    <section id="work" className="relative bg-[#0A0017] py-14 sm:py-16 lg:py-20 border-b border-white/10 scroll-mt-20 overflow-hidden">
      {/* Ambient background pulsing glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] rounded-full bg-purple-600/10 blur-[150px] animate-pulse-glow"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {work.testimonials.map((testimonial, idx) => {
            return (
              <div
                key={testimonial.name}
                className="group relative overflow-hidden rounded-[16px] bg-[#0F0221] border border-white/10 p-[28px] hover:border-purple-400/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Looping radiant glow beam across card */}
                <div
                  className="pointer-events-none absolute -inset-y-6 w-3/4 -left-1/3 bg-gradient-to-r from-transparent via-purple-500/15 via-white/[0.08] to-transparent blur-sm animate-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    animationDelay: `${idx * 0.5}s`,
                  }}
                  aria-hidden="true"
                />

                {/* Subtle top edge neon gradient highlight on hover */}
                <div 
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover:via-purple-400/80 transition-all duration-500" 
                  aria-hidden="true" 
                />

                <div className="relative z-10">
                  {/* Top Row: Dynamic Stars Rating & Floating Decorative Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
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
                                className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.35)] group-hover:scale-110 transition-transform duration-200"
                                style={{ transitionDelay: `${starIdx * 35}ms` }}
                              />
                            );
                          }

                          if (isHalf) {
                            return (
                              <div
                                key={starIdx}
                                className="relative w-4 h-4 inline-block group-hover:scale-110 transition-transform duration-200"
                                style={{ transitionDelay: `${starIdx * 35}ms` }}
                              >
                                <Star className="w-4 h-4 text-white/20 fill-white/[0.04]" />
                                <div className="absolute inset-0 overflow-hidden w-[50%]">
                                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.35)]" />
                                </div>
                              </div>
                            );
                          }

                          return (
                            <Star
                              key={starIdx}
                              className="w-4 h-4 text-white/20 fill-white/[0.04] transition-transform duration-200"
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
                      className="w-7 h-7 text-white/[0.06] group-hover:text-purple-400/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 select-none pointer-events-none" 
                      aria-hidden="true" 
                    />
                  </div>

                  {/* Quote using Source Serif 4 font */}
                  <p className="font-serif text-[16px] sm:text-[17px] lg:text-[18px] text-white/80 group-hover:text-white font-normal leading-[1.65] tracking-[-0.01em] mb-6 transition-colors duration-200">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Client Info & Contact Details (Bigger Client Name + Phone + Location) */}
                <div className="relative z-10 pt-5 mt-auto border-t border-white/10 group-hover:border-purple-400/30 transition-colors duration-300 space-y-3">
                  <div>
                    {/* Substantially bigger client name */}
                    <h4 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-purple-200 transition-colors duration-200 tracking-tight leading-snug">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mt-1">
                      {testimonial.role}
                    </span>
                  </div>

                  {/* Contact details for the client */}
                  <div className="pt-2 flex flex-col gap-1.5 border-t border-white/[0.07]">
                    {testimonial.phone && (
                      <a
                        href={`tel:${testimonial.phone.replace(/[\s()-]/g, '')}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-purple-200 hover:text-white transition-colors group/tel w-fit"
                        title={`Call ${testimonial.name}`}
                      >
                        <Phone className="w-3.5 h-3.5 text-purple-400 group-hover/tel:scale-110 transition-transform" />
                        <span className="font-medium font-mono">{testimonial.phone}</span>
                      </a>
                    )}
                    <div className="inline-flex items-center gap-2 text-xs text-white/60">
                      <MapPin className="w-3.5 h-3.5 text-purple-400/80 flex-shrink-0" />
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
