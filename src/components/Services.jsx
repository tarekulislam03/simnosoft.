import React from 'react';
import { content } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="relative bg-[#0A0017] py-14 sm:py-16 lg:py-20 border-b border-white/10 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header matching About style */}
        <SectionHeading
          eyebrow={services.eyebrow || "OUR SERVICES"}
          title={services.heading || "Software & Digital Solutions."}
          subtitle={services.subtitle || "Custom software development, business automation, and digital design engineered for real daily operations."}
          className="mb-8 sm:mb-10"
        />

        {/* Clean Service Cards Grid: Heading & Big Serif Price with Rupee symbol and looping left-to-right glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {services.items.map((item, idx) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[12px] bg-[#0F0221] border border-white/10 p-5 sm:p-6 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Left-to-right looping radiant glow beam */}
              <div
                className="pointer-events-none absolute -inset-y-6 w-3/4 -left-1/3 bg-gradient-to-r from-transparent via-purple-500/15 via-white/[0.08] to-transparent blur-sm animate-card-glow"
                style={{
                  animationDelay: `${(idx % 4) * 0.45}s`,
                }}
                aria-hidden="true"
              />

              {/* Service Heading */}
              <h3 className="relative z-10 font-sans font-semibold text-base sm:text-lg text-white mb-3 group-hover:text-purple-200 transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Price in Big Section Heading Serif Font with Rupee sign (larger on mobile) */}
              <div className="relative z-10">
                <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-white/40 block mb-1">
                  Starting from
                </span>
                <div className="font-serif text-[32px] sm:text-4xl lg:text-[38px] font-normal sm:font-medium text-white tracking-tight leading-none">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Specialized Services from Business Card */}
        {services.additionalServices && services.additionalServices.length > 0 && (
          <div className="mb-5 sm:mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-3 sm:mb-4">
              Additional Specialized Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.additionalServices.map((addon, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-[12px] bg-[#0F0221] border border-white/10 p-5 sm:p-6 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Left-to-right looping radiant glow beam */}
                  <div
                    className="pointer-events-none absolute -inset-y-6 w-3/4 -left-1/3 bg-gradient-to-r from-transparent via-purple-500/15 via-white/[0.08] to-transparent blur-sm animate-card-glow"
                    style={{
                      animationDelay: `${((idx + 2) % 4) * 0.45}s`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Service Heading */}
                  <h3 className="relative z-10 font-sans font-semibold text-base sm:text-lg text-white mb-3 group-hover:text-purple-200 transition-colors leading-snug">
                    {addon.title}
                  </h3>

                  {/* Price in Big Section Heading Serif Font with Rupee sign */}
                  <div className="relative z-10">
                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-white/40 block mb-1">
                      Starting from
                    </span>
                    <div className="font-serif text-[32px] sm:text-4xl lg:text-[38px] font-normal sm:font-medium text-white tracking-tight leading-none">
                      {addon.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Disclaimer Note (Moved below all pricing cards) */}
        <p className="text-xs sm:text-sm text-white/50 font-sans leading-relaxed">
          * {services.pricingDisclaimer}
        </p>
      </div>
    </section>
  );
}
