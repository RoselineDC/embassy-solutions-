"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, ShieldCheck,
  Building2, ArrowRight, CheckCircle2
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 12 023 2125", "+27 67 150 7317"],
    href: "tel:+27671507317",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["ops@embassysolutions.co.za", "admin@embassysolutions.co.za"],
    href: "mailto:ops@embassysolutions.co.za",
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Pretoria, Gauteng", "South Africa"],
    href: "#",
    action: "View Map",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 07:00 - 17:00", "24/7 Emergency Support"],
    href: "#",
    action: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", organization: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#051a44] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#0B3D91]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B8860B] font-bold text-xs tracking-[0.3em] uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white mt-4 mb-6"
          >
            Partner with Embassy Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed"
          >
            Reach out to us for reliable construction, maintenance, transport,
            trade facilitation, and support services designed to meet the highest
            professional standards.
          </motion.p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#0B3D91]/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#B8860B]/50 transition-all duration-500 h-full shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#B8860B]/10 group-hover:bg-[#B8860B] flex items-center justify-center mb-6 transition-colors duration-500">
                <info.icon className="w-6 h-6 text-[#B8860B] group-hover:text-[#051a44]" />
              </div>
              <h4 className="text-white font-serif font-bold text-lg mb-4">{info.title}</h4>
              <div className="space-y-2 mb-6">
                {info.details.map((d, j) => (
                  <p key={j} className="text-white/50 text-sm font-medium leading-relaxed">{d}</p>
                ))}
              </div>
              {info.action && (
                <a
                  href={info.href}
                  className="inline-flex items-center gap-2 text-[#B8860B] text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all"
                >
                  {info.action} <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Form & Map Section */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0B3D91]/30 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-8 h-8 text-[#B8860B]" />
              <h3 className="text-2xl font-serif font-bold text-white">Request a Quote</h3>
            </div>

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-16 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-20 h-20 rounded-full bg-[#B8860B]/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#B8860B]" />
                </div>
                <h4 className="text-white font-serif font-bold text-2xl mb-2">Message Received!</h4>
                <p className="text-white/50 font-medium">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#B8860B]/50 focus:ring-1 focus:ring-[#B8860B]/20 transition-all placeholder:text-white/20"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#B8860B]/50 focus:ring-1 focus:ring-[#B8860B]/20 transition-all placeholder:text-white/20"
                      placeholder="Company / Embassy / Organization"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#B8860B]/50 focus:ring-1 focus:ring-[#B8860B]/20 transition-all placeholder:text-white/20"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#B8860B]/50 focus:ring-1 focus:ring-[#B8860B]/20 transition-all placeholder:text-white/20"
                      placeholder="+27 00 000 0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#B8860B]/50 focus:ring-1 focus:ring-[#B8860B]/20 transition-all appearance-none"
                  >
                    <option value="" className="bg-[#051a44]">Select a Service</option>
                    <option value="construction" className="bg-[#051a44]">Construction & Renovations</option>
                    <option value="ceilings" className="bg-[#051a44]">Ceilings, Bulkheads & Drywalling</option>
                    <option value="maintenance" className="bg-[#051a44]">Monthly Maintenance Services</option>
                    <option value="plumbing" className="bg-[#051a44]">Plumbing Services</option>
                    <option value="electrical" className="bg-[#051a44]">Electrical Services</option>
                    <option value="handyman" className="bg-[#051a44]">Handyman Services</option>
                    <option value="transport" className="bg-[#051a44]">Transport Services</option>
                    <option value="carpentry" className="bg-[#051a44]">Carpentry & Kitchen Solutions</option>
                    <option value="cleaning" className="bg-[#051a44]">Cleaning Services</option>
                    <option value="trade" className="bg-[#051a44]">Trade Department</option>
                    <option value="security" className="bg-[#051a44]">Security Systems Upgrades</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">How Can We Help?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#B8860B]/50 focus:ring-1 focus:ring-[#B8860B]/20 transition-all placeholder:text-white/20"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#B8860B] text-[#051a44] font-bold rounded-xl shadow-xl hover:shadow-[#B8860B]/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-[#051a44]/30 border-t-[#051a44] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Location & Quick Support */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Map */}
            <div className="bg-[#0B3D91]/20 rounded-3xl overflow-hidden border border-white/10 h-[300px] shadow-xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114981.80107507118!2d28.181481247747136!3d-25.764575064601043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955d95421be97f%3A0xd96334cb73a58387!2sEmbassy%20Solutions!5e0!3m2!1sen!2sza!4v1775649095108!5m2!1sen!2sza"
                className="w-full h-full border-0 grayscale contrast-125 opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-[#051a44]/50" />
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[#0B3D91]/40 to-[#051a44]/40 rounded-3xl p-8 border border-white/10 shadow-xl">
              <h4 className="text-white font-serif font-bold text-lg mb-6 flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#B8860B]" />
                Quick Contact
              </h4>
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/27671507317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-[#B8860B]/10 border border-white/5 hover:border-[#B8860B]/30 transition-all group"
                  whileHover={{ x: 6 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">WhatsApp Us</p>
                      <p className="text-white/40 text-xs">+27 67 150 7317</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#B8860B] transition-colors" />
                </motion.a>

                <motion.a
                  href="https://www.embassysolutions.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-[#B8860B]/10 border border-white/5 hover:border-[#B8860B]/30 transition-all group"
                  whileHover={{ x: 6 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#B8860B]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Visit Our Website</p>
                      <p className="text-white/40 text-xs">www.embassysolutions.co.za</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#B8860B] transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Commitment Note */}
            <div className="p-6 border border-[#B8860B]/20 rounded-2xl bg-[#B8860B]/5">
              <div className="flex gap-4">
                <Building2 className="w-6 h-6 text-[#B8860B] shrink-0" />
                <p className="text-white/60 text-xs font-medium leading-relaxed italic">
                  "Embassy Solutions is committed to providing professional, confidential,
                  and reliable support services. All enquiries are handled with the utmost
                  professionalism and discretion."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}