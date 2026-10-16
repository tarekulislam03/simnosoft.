import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Modal Box */}
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#0E0122] border border-white/15 rounded-2xl shadow-[0_25px_60px_-15px_rgba(147,51,234,0.35)] flex flex-col overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#090014]/60 backdrop-blur-md flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
                {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
              <p className="text-xs text-white/50">
                Last updated: October 2026 · Simnosoft
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors border border-white/10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 space-y-6 text-sm text-white/80 leading-relaxed font-sans scrollbar-thin scrollbar-thumb-purple-500/30">
          {isPrivacy ? (
            <>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">1. Overview & Commitment</h3>
                <p>
                  At <strong>Simnosoft</strong>, we value your privacy and trust. This Privacy Policy explains how we collect, use, safeguard, and disclose your personal and business data when you visit our website, communicate with our team, or utilize our software development and digital engineering services.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">2. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-white/75">
                  <li><strong>Contact Details:</strong> Your name, work email address (<code className="text-purple-300 bg-white/5 px-1 py-0.5 rounded">simnosoft@gmail.com</code>), phone number, and company name provided through our contact forms or direct communications.</li>
                  <li><strong>Project Requirements:</strong> Technical briefs, feature requests, system architecture notes, and workflow specifications you share with us.</li>
                  <li><strong>Usage Data:</strong> Anonymous analytical data such as browser type, IP address, device specifications, and page interactions to help improve website performance.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">3. How We Use Your Information</h3>
                <p>
                  We process your data solely for legitimate business purposes:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-white/75 mt-2">
                  <li>To review project scope, formulate technical proposals, and provide accurate cost estimates.</li>
                  <li>To build, deploy, and maintain custom web applications, ERPs, pharmacy systems, and mobile software.</li>
                  <li>To provide direct customer service, SLA support, and respond to inquiries.</li>
                  <li>To comply with statutory legal, taxation, and GST compliance obligations.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">4. Code & Client Data Confidentiality</h3>
                <p>
                  We maintain strict confidentiality concerning your proprietary business workflows, databases, and trade secrets. We never sell, lease, or monetize your customer records, billing databases, or source code to any third party.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">5. Data Security Standards</h3>
                <p>
                  We implement robust administrative, organizational, and technical safeguards including SSL/TLS encryption, secure cloud infrastructure (AWS, Supabase, Vercel), and restricted access control protocols to prevent unauthorized access or loss.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">6. Your Rights & Inquiries</h3>
                <p>
                  You have the right to request access to, correction of, or deletion of your contact data stored by Simnosoft at any time. For questions regarding this policy, contact us directly at <a href="mailto:simnosoft@gmail.com" className="text-purple-300 underline underline-offset-2 hover:text-white">simnosoft@gmail.com</a> or phone <a href="tel:+918101402916" className="text-purple-300 underline underline-offset-2 hover:text-white">+91 8101402916</a>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">1. Agreement to Terms</h3>
                <p>
                  By visiting our website or entering into a software development contract with <strong>Simnosoft</strong>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not access our services.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">2. Software Engineering Services</h3>
                <p>
                  Simnosoft provides custom software development, enterprise ERP systems, GST billing solutions, pharmacy software, mobile applications, and digital design services. All projects are delivered pursuant to agreed milestones, specifications, and scope documentation.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">3. Milestone Payments & Invoicing</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-white/75">
                  <li>Estimates and quotes are provided based on your specific requirements. Standard listed prices are baseline benchmarks.</li>
                  <li>Projects typically follow milestone billing (advance deposit, working demos, and final deployment milestone).</li>
                  <li>Invoices must be settled within the agreed timeframe before production deployment or final source code handover.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">4. Intellectual Property & Ownership</h3>
                <p>
                  Upon receipt of full payment for the agreed project milestones, all bespoke custom source code, designs, and deliverables produced specifically for the client become the exclusive intellectual property of the client, excluding open-source libraries or proprietary pre-existing components retained by Simnosoft.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">5. Warranty, Bug Fixes & Support</h3>
                <p>
                  Simnosoft delivers software with high technical rigor. We provide an initial warranty period post-deployment for critical bug fixing and stabilization, followed by optional SLA maintenance and technical support contracts.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">6. Limitation of Liability</h3>
                <p>
                  In no event shall Simnosoft be liable for any indirect, consequential, incidental, or loss-of-profit damages arising out of software usage, downtime, or third-party service provider outages.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">7. Jurisdiction & Contact</h3>
                <p>
                  These Terms are governed by and construed in accordance with the laws of India, subject to the jurisdiction of the courts of West Bengal, India.
                </p>
                <p className="mt-2 text-white/70">
                  Questions regarding these Terms can be addressed to <a href="mailto:simnosoft@gmail.com" className="text-purple-300 underline underline-offset-2 hover:text-white">simnosoft@gmail.com</a> or <a href="tel:+918101402916" className="text-purple-300 underline underline-offset-2 hover:text-white">+91 8101402916</a>.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#090014]/80 flex-shrink-0">
          <div className="text-xs text-white/50">
            Simnosoft Ltd · All rights reserved
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm transition-colors shadow-[0_4px_20px_rgba(147,51,234,0.3)] cursor-pointer"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
}
