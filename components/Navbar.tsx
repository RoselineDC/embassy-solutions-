"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#0a1628]/95 backdrop-blur-xl shadow-lg shadow-black/20 py-3" : "bg-transparent py-5"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#c9a84c] to-[#e2c772] flex items-center justify-center">
                <span className="text-[#0a1628] font-black text-sm tracking-tight">ES</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold text-sm leading-tight tracking-wide">EMBASSY</p>
                <p className="text-[#c9a84c] text-[10px] font-semibold tracking-[0.25em] uppercase">Solutions</p>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${activeSection === link.href.replace("#", "") ? "text-[#e5ebed]" : "text-white/80 hover:text-blue"}`}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gold rounded-full"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <motion.a href="tel:+27671507317" className="flex items-center gap-2 text-white hover:text-[#e4ec09] text-sm transition-colors" whileHover={{ scale: 1.02 }}>
                <Phone className="w-4 h-4" />
                <span>+27 67 150 7317</span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#0B3D91] to-[#38BDF8] text-white font-bold text-sm rounded-lg hover:shadow-xl hover:shadow-[#38BDF8]/30 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}

              >
                Get a Quote
              </motion.a>
            </div>

            <motion.button className="lg:hidden text-white p-2" onClick={() => setIsMobileOpen(!isMobileOpen)} whileTap={{ scale: 0.9 }}>
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a1628]/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 pt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-2xl font-semibold transition-colors ${activeSection === link.href.replace("#", "") ? "text-[#c9a84c]" : "text-white/80 hover:text-white"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="mt-4 px-8 py-3 bg-linear-to-r from-[#c9a84c] to-[#e2c772] text-[#0a1628] font-bold text-lg rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
