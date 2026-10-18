import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { content } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { contact } = content;
  const mapLink = contact.mapUrl || "https://www.google.com/maps/place/Simnosoft/@22.7311981,88.1579544,19.99z/data=!4m6!3m5!1s0x39f87d384d826c01:0xadef48229d5e1e69!8m2!3d22.7310597!4d88.152402!16s%2Fg%2F11zzhqn8kg?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" className="relative bg-[#060D1D] py-14 sm:py-16 lg:py-20 border-b border-white/10 overflow-hidden scroll-mt-20">
      {/* Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/15 blur-[160px] pointer-events-none animate-pulse-glow" 
        aria-hidden="true" 
      />

      <div className="relative max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with "Visit Our Office" Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <SectionHeading
            eyebrow="OUR LOCATION"
            title="Visit Our Office"
            subtitle="Explore our office location or open Google Maps for instant turn-by-turn navigation."
            className="mb-0"
          />

          {/* Clear "Visit Our Office" Button with Left-to-Right Radiant Animation */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-[0_8px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.45)] border border-sky-400/30 transition-all self-start md:self-auto shrink-0 group cursor-pointer"
          >
            {/* Left-to-right looping radiant beam animation */}
            <div
              className="pointer-events-none absolute -inset-y-4 w-3/4 -left-1/3 bg-gradient-to-r from-transparent via-white/35 via-sky-200/25 to-transparent blur-[2px] animate-card-glow"
              aria-hidden="true"
            />
            <MapPin className="relative z-10 w-5 h-5 text-sky-200 transition-transform group-hover:scale-110" />
            <span className="relative z-10">Visit Our Office</span>
            <ExternalLink className="relative z-10 w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Map Container */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 w-full h-[420px] sm:h-[500px] lg:h-[580px] relative bg-[#030816] shadow-2xl">
          {/* Google Maps Iframe */}
          <iframe
            title="Simnosoft Office Location"
            src={contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
