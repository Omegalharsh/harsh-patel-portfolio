import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields before sending.');
      return;
    }

    // Trigger confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    // Direct mailto fallback as required
    const subject = encodeURIComponent(`Security Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setStatusMessage({
      type: 'success',
      text: 'Opening your default mail client to dispatch your message directly to valaniharsh11@gmail.com!'
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// ESTABLISH_UPLINK"
          title="Let's Connect"
          subtitle="Interested in cybersecurity, security testing, or professional opportunities? Feel free to get in touch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Verification */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Direct channels for recruitment, VAPT inquiries, and technical collaboration.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 group text-left min-w-0"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">EMAIL</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email to clipboard"
                  className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0 ml-2"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 group text-left min-w-0"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">PHONE</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone number to clipboard"
                  className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0 ml-2"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">LOCATION</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 group hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">LINKEDIN</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      Harsh Valani
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 group hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-slate-900 dark:group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">GITHUB</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      Omegalharsh
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/80 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  Dispatch Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your details below. Your default email client will launch with a pre-formatted message.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Security Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                    Message / Opportunity Scope *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 rounded-xl text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Transparent documentation note regarding backend configuration */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-start gap-2.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <Info className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>
                  Tip: Submissions trigger an authenticated direct mailto dispatch. To hook into an API relay (e.g. Formspree / EmailJS / Resend), you can plug your endpoint into <code className="text-cyan-600 dark:text-cyan-400 font-bold">src/sections/Contact.jsx</code>.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
