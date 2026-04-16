"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060e1a] gradient-border">
      {/* Main Footer */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">            

              <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
                <span className="text-[#04142c] font-black text-sm tracking-tight">
                  <Image
                    src="/white-logo.png"
                    alt="logo"
                    width={60}
                    height={16}
                    className="object-contain"

                  />
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold text-lg leading-tight tracking-wide uppercase font-sans">Embassy Solutions</p>
              </div>

            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Your trusted single point of contact for comprehensive embassy and consulate services. Quality, reliability, and excellence in every detail.
            </p>
            <div className="flex gap-2">
              {["linkedin", "twitter", "facebook"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors border border-white/5"
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <span className="text-white/40 hover:text-orange-500 text-xs uppercase font-bold">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/40 hover:text-orange-500 text-sm transition-colors duration-200 animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Construction & Renovation",
                "Maintenance & Handyman",
                "Chauffeur Services",
                "IT Services",
                "Security Solutions",
                "Event Management",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo("#services"); }}
                    className="text-white/40 hover:text-orange-500 text-sm transition-colors duration-200 animated-underline"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-white/40 text-sm">Pretoria, Gauteng<br />South Africa</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:+27671507317" className="text-white/40 hover:text-orange-500 text-sm transition-colors">
                  +27 67 150 7317
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:embassysolutions01services@gmail.com" className="text-white/40 hover:text-orange-500 text-sm transition-colors break-all">
                  embassysolutions01<br className="sm:hidden" />@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Embassy Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/30 hover:text-white/50 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/50 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-gold/20"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
