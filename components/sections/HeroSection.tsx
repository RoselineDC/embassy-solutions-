"use client";

import * as React from "react";
import { AnimatedSection, CountUp } from "../AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Shield, value: 150, suffix: "+", label: "Diplomatic Missions Served" },
  { icon: Clock, value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: Award, value: 100, suffix: "%", label: "Client Satisfaction" },
];

const ANIMATION_DURATION = 8;

export default function HeroSection() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const [badgeTilt, setBadgeTilt] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;

    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;

    setMouse({ x, y });

    setBadgeTilt({
      x: (e.clientY / innerHeight - 0.5) * 10,
      y: (e.clientX / innerWidth - 0.5) * -10,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/unionbuilding.png"
          alt="Modern embassy building"
          fill
          style={{
            objectFit: "cover",
            transform: `translate(${mouse.x * 0.6}px, ${mouse.y * 0.6}px) scale(1.05)`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#020617]/10" />

        {/* Gradient depth */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0B3D91]/40 via-transparent to-transparent" />

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-100 h-100 bg-[#38BDF8]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-75 h-75 bg-[#FACC15]/15 blur-[120px] rounded-full" />
        </div>
      </div>
      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full"
        style={{
          transform: `translate(${mouse.x * 0.3}px, ${mouse.y * 0.3}px)`,
        }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <AnimatedSection delay={0.2}>
            <motion.div
              style={{
                rotateX: badgeTilt.x,
                rotateY: badgeTilt.y,
                transformPerspective: 1000,
              }}
              animate={{ rotate: 360 }}
              transition={{
                rotate: {
                  repeat: Infinity,
                  duration: ANIMATION_DURATION,
                  ease: "linear",
                },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
              }}
              className="relative inline-flex rounded-full p-px mb-6"
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(#0B3D91, #38BDF8, #ffffff, #FACC15, #0B3D91)`,
                }}
              />

            </motion.div>
          </AnimatedSection>

          {/* Heading */}
          <AnimatedSection delay={0.4}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Elevating{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-[#38BDF8] via-[#008591] to-[#38BDF8]">
                Diplomatic
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent"
                  style={{ mixBlendMode: "overlay" }}
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
              </span>
              <br />
              Excellence
            </h1>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.6}>
            <p className="text-lg sm:text-xl text-[#E2E8F0] max-w-xl mb-8 leading-relaxed">
              Your trusted single point of contact for embassy and consulate services.
              Construction, IT, maintenance, security, and more delivered with precision.
            </p>
          </AnimatedSection>

          {/* Buttons */}
          <AnimatedSection delay={0.8}>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1097d1] text-white font-bold text-sm rounded-lg hover:shadow-xl hover:shadow-[#38BDF8]/30 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 gradient-border-hover text-white font-semibold text-sm rounded-lg hover:bg-navy transition-all duration-300"
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
                className="text-center p-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/10 gradient-border-hover  hover:bg-navy transition-all"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.15 }}
              >
                <stat.icon className="w-5 h-5 text-[#38BDF8] mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</p>
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
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-orange-600 bg-navy rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-[#38BDF8] rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}