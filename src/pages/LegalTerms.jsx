import React, { useEffect } from 'react';
import { content } from '../data/content';

export default function LegalTerms() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Terms of Service | Simnosoft';
    return () => {
      document.title = 'Simnosoft - Web & Mobile Apps Engineered with Precision';
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
            Terms & Conditions
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4 leading-tight">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
            Standard operating terms, engineering deliverables, milestone payment schedules, intellectual property ownership, and client warranties.
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
              1. Agreement to Terms
            </h2>
            <p className="mb-3">
              By visiting our website or entering into a professional software development contract with <strong className="text-white font-semibold">Simnosoft</strong>, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.
            </p>
            <p>
              If you do not agree with any part of these terms, please do not access our website or engage our custom software engineering services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              2. Software Engineering Services
            </h2>
            <p className="mb-3">
              Simnosoft provides custom web application engineering, enterprise ERP systems, GST billing software, pharmacy management systems, and cross-platform mobile applications.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li>
                <strong className="text-white">Scope & Milestones:</strong> All client projects are executed pursuant to written Statements of Work (SOW), mutually agreed milestones, and technical specifications.
              </li>
              <li>
                <strong className="text-white">Change Requests:</strong> Additions or revisions requested outside the original scope are quoted separately as supplemental milestones with appropriate timeline adjustments.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              3. Milestone Payments & Invoicing
            </h2>
            <p className="mb-3">
              We operate under transparent, structured milestone-based billing to ensure alignment at every development stage:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li>
                <strong className="text-white">Baseline Pricing:</strong> Listed prices on our website serve as standard baseline starting estimates. Customized enterprise requirements receive an itemized proposal prior to commencement.
              </li>
              <li>
                <strong className="text-white">Milestone Structure:</strong> Projects typically follow standard milestones: an initial deposit upon project kickoff, progress demonstrations during development, and the final payment upon production deployment or delivery.
              </li>
              <li>
                <strong className="text-white">Taxes & GST:</strong> Applicable taxes including Indian GST% or international transaction fees are itemized on official commercial invoices.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              4. Intellectual Property & Code Ownership
            </h2>
            <p className="mb-3">
              Upon full settlement of all agreed milestone invoices, all bespoke source code, database architectures, graphics, and customized deliverables created specifically for your project become your exclusive intellectual property.
            </p>
            <p>
              Simnosoft retains rights only to pre-existing reusable core libraries, standard developer tooling, and third-party open-source packages (such as React and Tailwind CSS) integrated into the solution.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              5. Warranty, Bug Fixes & Ongoing Support
            </h2>
            <p className="mb-3">
              We engineer software with high technical rigor and standard quality assurance testing:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li>
                <strong className="text-white">Stabilization Warranty:</strong> We provide an initial warranty period following production deployment during which bugs or deviations from agreed scope specifications are corrected at no additional charge.
              </li>
              <li>
                <strong className="text-white">Maintenance Contracts:</strong> Following the warranty window, clients can transition to dedicated Service Level Agreements (SLAs) for server monitoring, dependency updates, automated backups, and incremental feature development.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              6. Limitation of Liability
            </h2>
            <p className="mb-3">
              To the fullest extent permitted by law, Simnosoft and its officers, engineers, and contractors shall not be liable for any indirect, incidental, special, or consequential damages, including loss of revenue, profits, or data.
            </p>
            <p>
              This limitation applies to disruptions caused by third-party hosting providers (e.g. AWS, Vercel), telecom network downtimes, payment gateway delays, or cyber incidents outside our reasonable control.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
              7. Governing Law & Contact
            </h2>
            <p className="mb-3">
              These Terms of Service and any contractual disputes arising from them shall be governed by and interpreted in accordance with the laws of the Republic of India. All legal actions shall be subject to the exclusive jurisdiction of the competent courts of West Bengal, India.
            </p>
            <p className="mb-4">
              For legal inquiries, contract reviews, or custom enterprise agreements, please get in touch with our team:
            </p>
            <p className="text-white/90">
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
