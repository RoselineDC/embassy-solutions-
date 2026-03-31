"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Star, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Single Point of Contact",
    desc: "Simplifying service procurement through a one-stop-shop for all your embassy and consulate needs.",
  },
  {
    icon: Star,
    title: "Quality & Timeliness",
    desc: "Ensuring services are delivered on time with the highest quality standards every single time.",
  },
  {
    icon: Heart,
    title: "Long-term Partnerships",
    desc: "Building lasting relationships with diplomatic missions through reliability and trust.",
  },
  {
    icon: Eye,
    title: "Local Expertise",
    desc: "Understanding local regulations and compliance challenges to navigate them effectively.",
  },
];

const promises = [
  "Delivering services within strict timelines",
  "Utilizing skilled professionals for high-quality workmanship",
  "Regular assessment and improvement based on client feedback",
  "Customizable solutions for unique diplomatic requirements",
  "Comprehensive maintenance and handyman solutions",
  "Fostering reliability and consistency in every service",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#faf8f3]">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] mt-3 mb-5">
            Your Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#a88a3a]">
              Diplomatic Excellence
            </span>
          </h2>
          <p className="text-[#0a1628]/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Embassy Solutions is a dedicated service provider focused on meeting the unique needs of
            foreign embassies and consulates through a comprehensive suite of premium services.
          </p>
        </AnimatedSection>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatedSection direction="left">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#0a1628]/5 hover:shadow-lg transition-shadow duration-500 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a84c]/10 to-[#c9a84c]/5 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-[#c9a84c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1628] mb-3">Our Vision</h3>
              <p className="text-[#0a1628]/60 leading-relaxed">
                To be the leading service provider for embassies globally, recognized for our commitment
                to quality, reliability, and tailored solutions. We aim to foster long-term relationships
                with diplomatic missions, ensuring their operational efficiency through innovative and
                customized service offerings.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-[#0a1628] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-500 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/10 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-[#c9a84c]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/60 leading-relaxed">
                To deliver exceptional service solutions that enhance the operational capabilities of
                embassies and consulates. We provide a single point of contact for various service needs
                while ensuring timely and quality service delivery that adheres to the highest standards.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((val) => (
            <StaggerItem key={val.title}>
              <div className="bg-white rounded-xl p-6 border border-[#0a1628]/5 hover:border-[#c9a84c]/30 transition-all duration-300 group hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-lg bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/20 flex items-center justify-center mb-4 transition-colors duration-300">
                  <val.icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h4 className="text-lg font-bold text-[#0a1628] mb-2">{val.title}</h4>
                <p className="text-[#0a1628]/55 text-sm leading-relaxed">{val.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Quality Promise */}
        <AnimatedSection>
          <div className="relative bg-gradient-to-br from-[#0a1628] to-[#132038] rounded-2xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a84c]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <span className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase">Our Commitment</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-8">Quality Promise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {promises.map((promise, i) => (
                  <motion.div
                    key={promise}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm leading-relaxed">{promise}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
