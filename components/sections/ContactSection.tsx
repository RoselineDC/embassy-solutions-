"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 12 023 2125", "+27 67 150 7317", "+27 66 593 9627"],
    href: "tel:+27671507317",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["embassysolutions01services@gmail.com", "embassysolutions02services@gmail.com"],
    href: "mailto:embassysolutions01services@gmail.com",
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Pretoria, Gauteng", "South Africa"],
    href: "#",
    action: "Get Directions",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 07:00 - 17:00", "Sat: 08:00 - 13:00"],
    href: "#",
    action: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-navy">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-gold-light">
              Us
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Ready to discuss how we can serve your diplomatic mission? Reach out to us today for a free consultation.
          </p>
        </AnimatedSection>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {contactInfo.map((info, i) => (
            <AnimatedSection key={info.title} delay={i * 0.1}>
              <motion.div
                className="bg-navy-light rounded-xl p-5 border border-white/5 hover:border-gold/30 transition-all duration-300 group h-full"
                whileHover={{ y: -3 }}
              >
                <div className="w-11 h-11 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-3 transition-colors">
                  <info.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{info.title}</h4>
                {info.details.map((d, j) => (
                  <p key={j} className="text-white/45 text-xs leading-relaxed">{d}</p>
                ))}
                {info.action && (
                  <a
                    href={info.href}
                    className="inline-flex items-center gap-1 text-gold text-xs font-medium mt-3 hover:underline"
                  >
                    {info.action}
                  </a>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Form & Map */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="bg-navy-light rounded-2xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-green-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Message Sent Successfully!</h4>
                  <p className="text-white/50 text-sm mt-2">We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-[#c9a84c]/25 transition-all"
                        placeholder="john@embassy.gov"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition-all"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition-all appearance-none"
                      >
                        <option value="" className="bg-navy-light">Select a service</option>
                        <option value="construction" className="bg-navy-light">Construction & Renovation</option>
                        <option value="maintenance" className="bg-navy-light">Maintenance & Handyman</option>
                        <option value="chauffeur" className="bg-navy-light">Chauffeur & Car Hiring</option>
                        <option value="landscaping" className="bg-navy-light">Landscaping</option>
                        <option value="cleaning" className="bg-navy-light">Cleaning</option>
                        <option value="it" className="bg-navy-light">IT Services</option>
                        <option value="electrical" className="bg-navy-light">Electrical Services</option>
                        <option value="security" className="bg-navy-light">Security Services</option>
                        <option value="pool" className="bg-navy-light">Swimming Pool</option>
                        <option value="events" className="bg-navy-light">Event Management</option>
                        <option value="other" className="bg-navy-light">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-linear-to-r from-gold to-gold-light text-navy font-bold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Side Info */}
          <AnimatedSection direction="right" className="lg:col-span-2 flex flex-col gap-6">
            {/* Map */}
            <div className="bg-navy-light rounded-2xl overflow-hidden border border-white/5 flex-1 min-h-55">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57243.28633848732!2d28.1544076!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561b2e4f5c7a7%3A0x3f5a0f1d6c7a9b4!2sPretoria%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full min-h-55 border-0 grayscale contrast-110 opacity-70"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Links */}
            <div className="bg-navy-light rounded-2xl p-6 border border-white/5">
              <h4 className="text-white font-semibold text-sm mb-4">Quick Connect</h4>
              <div className="space-y-3">
                <motion.a
                  href="https://wa.me/27671507317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white text-sm font-medium">WhatsApp</p>
                    <p className="text-white/40 text-xs">+27 67 150 7317</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://www.embassysolutions.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gold/10 hover:bg-gold/20 border border-gold/20 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <Globe className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-white text-sm font-medium">Website</p>
                    <p className="text-white/40 text-xs">www.embassysolutions.co.za</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}