import React, { useEffect } from 'react';
import { content } from '../data/content';

export default function LegalNotice() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Privacy Policy | Simnosoft';
    return () => {
      document.title = 'Simnosoft - Best Software Development & Digital Service Agency';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060D1D] text-white pt-28 pb-24 font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[380px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37, 99, 235, 0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-12 pb-8 border-b border-white/10">
          <span className="text-xs uppercase tracking-widest font-semibold text-sky-400 block mb-3">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
            How Simnosoft collects, uses, safeguards, and handles personal information, business requirements, and proprietary software project data.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/50">
            <span>Last Updated: October 2026</span>
            <span className="text-white/20">·</span>
            <span>Simnosoft Technologies</span>
            <span className="text-white/20">·</span>
            <span>West Bengal, India</span>
          </div>
        </header>

        {/* Paragraph & Point-wise Content */}
        <div className="space-y-10 text-white/80 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              1. Overview & Commitment
            </h2>
            <p className="mb-3">
              At <strong className="text-white font-semibold">Simnosoft</strong>, we value your privacy and trust above all else. This Privacy Policy outlines how we collect, store, protect, and process personal and commercial data when you visit our website, communicate with our engineering team, or commission custom software development services from us.
            </p>
            <p>
              Whether we are building web applications, enterprise ERPs, billing solutions, or mobile apps, we operate strictly under principles of data minimization, transparent processing, and enterprise-grade confidentiality.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect only the essential information necessary to formulate proposals, build custom software solutions, and provide ongoing technical maintenance:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li>
                <strong className="text-white">Contact & Company Details:</strong> Your name, official work email address (<code className="text-sky-300 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">simnosoft@gmail.com</code>), phone number, and company name provided via direct messages or inquiries.
              </li>
              <li>
                <strong className="text-white">Project Scope & Specifications:</strong> Technical briefs, feature requests, workflow diagrams, database structures, and wireframes shared during discovery consultations.
              </li>
              <li>
                <strong className="text-white">Technical Usage Data:</strong> Anonymous telemetry such as browser type, operating system version, IP address, and high-level interaction metrics collected to verify site stability and monitor cyber security risks.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              We process your data exclusively for legitimate engineering and operational purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li>To evaluate project scopes, prepare architectural recommendations, and provide itemized fixed-price quotes.</li>
              <li>To design, code, test, deploy, and maintain custom web applications, pharmacy systems, and mobile software.</li>
              <li>To deliver developer support, respond to emergency bug notices, and uphold agreed SLA maintenance commitments.</li>
              <li>To satisfy statutory accounting, GST tax compliance, and commercial contract law obligations in India.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              4. Code & Client Data Confidentiality
            </h2>
            <p className="mb-3">
              We maintain strict confidentiality concerning your proprietary business workflows, databases, and trade secrets. We never sell, lease, rent, trade, or monetize your customer records, billing databases, or source code to third-party data brokers or AI training datasets.
            </p>
            <p>
              All code repositories, API keys, and staging database secrets remain strictly compartmentalized. We routinely execute Non-Disclosure Agreements (NDAs) before reviewing sensitive internal procedures or proprietary codebases.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              5. Data Security Standards
            </h2>
            <p className="mb-3">
              We implement comprehensive technical and organizational safeguards to protect your personal and business data against accidental loss, unauthorized access, or disclosure:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li>Enforced SSL/TLS 1.3 encryption across all network communication channels and AES-256 encryption for data at rest.</li>
              <li>Hosting on SOC 2 and ISO 27001 compliant cloud infrastructure providers including AWS, Supabase, Vercel, and Cloudflare.</li>
              <li>Strict role-based access control and mandatory multi-factor authentication (MFA) across all internal developer accounts and production keys.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              6. Your Rights & Inquiries
            </h2>
            <p className="mb-3">
              You retain full rights under applicable data protection regulations regarding the personal information we maintain:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75 mb-4">
              <li>The right to inspect and receive a copy of your personal data stored in our systems.</li>
              <li>The right to request immediate correction of inaccurate or outdated contact information.</li>
              <li>The right to request the permanent deletion of your inquiry details and communication history.</li>
            </ul>
            <p>
              For any questions, requests, or concerns regarding our privacy practices, please contact us directly:
            </p>
            <p className="mt-3 text-white/90">
              Email:{' '}
              <a 
                href={`mailto:${content.contact.email}`} 
                className="text-sky-300 underline underline-offset-4 hover:text-white transition-colors"
              >
                {content.contact.email}
              </a>
              <span className="mx-3 text-white/30">|</span>
              Phone:{' '}
              <a 
                href={`tel:${content.contact.phone.replace(/[\s()-]/g, '')}`} 
                className="text-sky-300 underline underline-offset-4 hover:text-white transition-colors"
              >
                {content.contact.phone}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
