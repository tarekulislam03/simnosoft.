import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { content } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { contact } = content;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide brief project details';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // =========================================================================
    // PLUG IN YOUR API ENDPOINT, FORMSPREE, RESEND, OR EMAILJS HERE:
    //
    // Example:
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // =========================================================================

    // Simulated API submission latency:
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative bg-[#0A0017] py-14 sm:py-16 lg:py-20 border-b border-white/10 overflow-hidden scroll-mt-20">
      {/* Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/15 blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header matching About style */}
        <SectionHeading
          eyebrow="START A CONVERSATION"
          title="Let's build your next breakthrough."
          subtitle={contact.description || "Book an audit call or leave your specifications. Our senior technical team reviews every inquiry personally."}
          className="mb-8 sm:mb-10"
        />

        {/* One Rounded Container (Split Layout) */}
        <div className="rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Form with Validation & Success State */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="py-12 px-6 sm:px-8 text-center flex flex-col items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Request Received Successfully!
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Our senior technical team is reviewing your project requirements and will reach out to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Verma / Alex Smith"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border ${
                          errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-purple-400'
                        } text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Work Email <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border ${
                          errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-purple-400'
                        } text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Meridian / FinTech Pvt Ltd"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Project Overview <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you're building, key technical challenges, or target timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border ${
                        errors.message ? 'border-rose-500/70' : 'border-white/10'
                      } text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Full-width Violet "Request a call" Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 active:bg-purple-700 disabled:bg-purple-900/50 text-white font-semibold text-base shadow-[0_8px_30px_rgba(147,51,234,0.35)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.5)] border border-purple-400/30 transition-all flex items-center justify-center gap-2 mt-2 group cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Request a call'}</span>
                    {!isSubmitting && (
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Google Maps Iframe */}
            <div className="lg:col-span-5 h-full flex flex-col">
              <div className="rounded-[16px] overflow-hidden border border-white/10 w-full min-h-[380px] sm:min-h-[440px] lg:h-full relative bg-[#090014]">
                <iframe
                  title="Simnosoft Office Location"
                  src={contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full min-h-[380px] sm:min-h-[440px]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
