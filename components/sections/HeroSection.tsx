"use client";

import { AnimatedSection, CountUp } from "../AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const stats = [
  { icon: Shield, value: 150, suffix: "+", label: "Diplomatic Missions Served" },
  { icon: Clock, value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: Award, value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern embassy building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a1628]/80 via-[#0a1628]/70 to-[#0a1628]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a1628]/50 to-transparent" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#c9a84c]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <AnimatedSection delay={0.2}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 mb-6"
              animate={{ borderColor: ["rgba(201,168,76,0.3)", "rgba(201,168,76,0.6)", "rgba(201,168,76,0.3)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-pulse" />
              <span className="text-[#c9a84c] text-sm font-medium">Trusted by Diplomatic Missions Worldwide</span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Elevating{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c9a84c] via-[#e2c772] to-[#c9a84c]">
                Diplomatic
              </span>
              <br />
              Excellence
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-8 leading-relaxed">
              Your trusted single point of contact for embassy and consulate services.
              Construction, IT, maintenance, security, and more — delivered with precision.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-[#c9a84c] to-[#e2c772] text-[#0a1628] font-bold text-sm rounded-lg hover:shadow-xl hover:shadow-[#c9a84c]/20 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Learn More
              </motion.a>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection delay={1} className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.3)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.15 }}
              >
                <stat.icon className="w-5 h-5 text-[#c9a84c] mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-[#c9a84c] rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}