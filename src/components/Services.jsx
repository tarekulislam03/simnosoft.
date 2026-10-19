import React from 'react';
import { content } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="relative bg-[#060D1D] py-14 sm:py-16 lg:py-20 border-b border-white/10 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header matching About style */}
        <SectionHeading
          eyebrow={services.eyebrow || "OUR SERVICES"}
          title={services.heading || "Software & Digital Solutions."}
          subtitle={services.subtitle || "Custom software development, business automation, and digital design engineered for real daily operations."}
          className="mb-8 sm:mb-10"
        />

        {/* Clean Service Cards Grid: Heading & Big Serif Price with Rupee symbol and looping left-to-right glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5 mb-6 sm:mb-8">
          {services.items.map((item, idx) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[12px] bg-[#0B1528] border border-white/10 p-4 sm:p-5 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Left-to-right looping radiant glow beam */}
              <div
                className="pointer-events-none absolute -inset-y-6 w-3/4 -left-1/3 bg-gradient-to-r from-transparent via-sky-400/15 via-white/[0.08] to-transparent blur-sm animate-card-glow"
                style={{
                  animationDelay: `${(idx % 4) * 0.45}s`,
                }}
                aria-hidden="true"
              />

              {/* Service Heading */}
              <h3 className="relative z-10 font-sans font-bold text-base sm:text-lg lg:text-[19px] text-white mb-1 group-hover:text-sky-200 transition-colors leading-snug tracking-tight">
                {item.title}
              </h3>

              {/* Price in Big Section Heading Serif Font with Rupee sign */}
              <div className="relative z-10 mt-1">
                <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-white/40 block mb-1">
                  Starting from
                </span>
                <div className="flex items-baseline flex-wrap gap-x-2.5 gap-y-1">
                  {item.originalPrice && (
                    <span className="line-through text-white/40 font-serif text-sm sm:text-base">
                      {item.originalPrice}
                    </span>
                  )}
                  <span className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-medium text-white tracking-tight leading-none">
                    {item.price}
                  </span>
                  {!item.noGst && (
                    <span className="font-sans text-xs sm:text-sm font-semibold text-white/60 tracking-normal">
                      +18% GST
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Specialized Services from Business Card */}
        {services.additionalServices && services.additionalServices.length > 0 && (
          <div className="mb-5 sm:mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-2.5 sm:mb-3">
              Additional Specialized Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
              {services.additionalServices.map((addon, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-[12px] bg-[#0B1528] border border-white/10 p-4 sm:p-5 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Left-to-right looping radiant glow beam */}
                  <div
                    className="pointer-events-none absolute -inset-y-6 w-3/4 -left-1/3 bg-gradient-to-r from-transparent via-sky-400/15 via-white/[0.08] to-transparent blur-sm animate-card-glow"
                    style={{
                      animationDelay: `${((idx + 2) % 4) * 0.45}s`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Service Heading */}
                  <h3 className="relative z-10 font-sans font-bold text-base sm:text-lg lg:text-[19px] text-white mb-1 group-hover:text-sky-200 transition-colors leading-snug tracking-tight">
                    {addon.title}
                  </h3>

                  {/* Price in Big Section Heading Serif Font with Rupee sign */}
                  <div className="relative z-10 mt-1">
                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-white/40 block mb-1">
                      Starting from
                    </span>
                    <div className="flex items-baseline flex-wrap gap-x-2.5 gap-y-1">
                      {addon.originalPrice && (
                        <span className="line-through text-white/40 font-serif text-sm sm:text-base">
                          {addon.originalPrice}
                        </span>
                      )}
                      <span className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-medium text-white tracking-tight leading-none">
                        {addon.price}
                      </span>
                      {!addon.noGst && (
                        <span className="font-sans text-xs sm:text-sm font-semibold text-white/60 tracking-normal">
                          +18% GST
                        </span>
                      )}
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
