"use client";

import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Globe, Building2, } from "lucide-react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook  }  from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "instant" });
  };

  return (
    <footer className="relative bg-[#051a44] overflow-hidden">
      {/* Diplomatic Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0B3D91]/20 rounded-full blur-[100px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-[100px]" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#1097d1] flex items-center justify-center shadow-lg border border-white/10">
                <Image
                  src="/white-logo.png"
                  alt="Embassy Solutions Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-xl leading-tight uppercase tracking-wide">
                  Embassy Solutions
                </h3>
                <p className="text-[#B8860B] text-[10px] font-bold tracking-[0.2em] uppercase">
                  Global Diplomatic Services
                </p>
              </div>
            </motion.div>
            
            <p className="text-white/50 text-sm leading-relaxed mb-8 font-medium max-w-sm">
              Providing premier strategic support and operational excellence for sovereign missions 
              and international delegations worldwide. Our commitment to discretion and 
              quality remains unshakeable.
            </p>

            <div className="flex gap-3">
              {[
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaXTwitter, label: "Twitter" },
                { icon: FaFacebook, label: "Facebook" }
              ].map((social, idx) => (
                <motion.a
                  key={social.label}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#B8860B] flex items-center justify-center transition-all duration-300 border border-white/10 group"
                  whileHover={{ y: -4 }}
                >
                  <social.icon className="w-4 h-4 text-white/40 group-hover:text-[#051a44] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-serif font-bold text-lg mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Mission Home", href: "#home" },
                { label: "Our Legacy", href: "#about" },
                { label: "Service Pillars", href: "#services" },
                { label: "Official Portfolio", href: "#gallery" },
                { label: "Operations Desk", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/40 hover:text-[#B8860B] text-sm font-semibold transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-[#B8860B] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif font-bold text-lg mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
              Strategic Pillars
            </h4>
            <ul className="space-y-4">
              {[
                "Mission Infrastructure",
                "Security & Intelligence",
                "Diplomatic Logistics",
                "Secure Technology",
                "Facility Management",
                "Strategic Consulting",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo("#services"); }}
                    className="text-white/40 hover:text-[#B8860B] text-sm font-semibold transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-[#B8860B] group-hover:w-3 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Secretariat Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif font-bold text-lg mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
              Official Contact
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#B8860B]/10 transition-colors">
                  <MapPin className="w-4 h-4 text-[#B8860B]" />
                </div>
                <p className="text-white/50 text-sm font-medium leading-relaxed">
                  Pretoria, Gauteng<br />
                  South Africa
                </p>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#B8860B]/10 transition-colors">
                  <Phone className="w-4 h-4 text-[#B8860B]" />
                </div>
                <a href="tel:+27671507317" className="text-white/50 hover:text-white text-sm font-bold transition-colors">
                  +27 67 150 7317
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#B8860B]/10 transition-colors">
                  <Mail className="w-4 h-4 text-[#B8860B]" />
                </div>
                <a href="mailto:ops@embassysolutions.co.za" className="text-white/50 hover:text-white text-sm font-bold transition-colors break-all">
                  ops@embassysolutions.co.za
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Security Footer Bar */}
      <div className="border-t border-white/5 bg-[#04142c]/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Embassy Solutions. All Rights Reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/30 hover:text-[#B8860B] text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Protocol</a>
                <a href="#" className="text-white/30 hover:text-[#B8860B] text-[10px] font-bold uppercase tracking-widest transition-colors">Service Charter</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Secure Diplomatic Channel Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Secretariat Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B3D91] to-[#1097d1] text-white flex items-center justify-center shadow-2xl border border-white/10"
        whileHover={{ scale: 1.1, y: -4, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}