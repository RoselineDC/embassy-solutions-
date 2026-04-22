"use client";

import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Users, Globe, CheckCircle2, Building2 } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Sovereign Security",
    desc: "Unwavering commitment to the safety and sanctity of diplomatic missions through advanced protection protocols.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Adhering to international diplomatic norms and quality benchmarks across all service domains.",
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    desc: "Building enduring relationships based on mutual respect, discretion, and absolute reliability.",
  },
  {
    icon: Award,
    title: "Operational Excellence",
    desc: "Delivering precision-engineered solutions tailored to the unique demands of diplomatic operations.",
  },
];

const promises = [
  "Strict adherence to diplomatic protocols and international standards",
  "Dedicated account managers for seamless mission coordination",
  "24/7 rapid response for critical maintenance and security needs",
  "Full compliance with local and international regulations",
  "Uncompromising discretion and confidentiality in all operations",
  "Transparent reporting and accountability frameworks",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-30" />
      <div className="absolute -right-24 top-1/4 w-96 h-96 bg-[#0B3D91]/5 rounded-full blur-3xl" />
      <div className="absolute -left-24 bottom-1/4 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B8860B] font-semibold text-sm tracking-[0.2em] uppercase"
          >
            Established Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#0B3D91] mt-4 mb-6"
          >
            A Legacy of Diplomatic Support
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#0B3D91]/70 max-w-3xl mx-auto text-lg leading-relaxed font-medium"
          >
            Embassy Solutions stands as a premier partner for sovereign missions worldwide. 
            We specialize in bridging the gap between diplomatic requirements and operational 
            reality through a comprehensive suite of high-level support services.
          </motion.p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-10 shadow-xl shadow-[#0B3D91]/5 border border-[#0B3D91]/10 hover:border-[#B8860B]/30 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#0B3D91] rounded-l-2xl group-hover:bg-[#B8860B] transition-colors" />
            <div className="w-16 h-16 rounded-xl bg-[#0B3D91]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-[#0B3D91]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0B3D91] mb-4">Our Vision</h3>
            <p className="text-[#0B3D91]/60 leading-relaxed font-medium">
              To define the global benchmark for diplomatic facility management and support. 
              We envision a world where every sovereign mission operates with peak efficiency, 
              supported by a partner who understands the weight of their international responsibilities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-[#0B3D91] rounded-2xl p-10 shadow-2xl shadow-[#0B3D91]/20 border border-white/10 hover:border-[#B8860B]/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-[#B8860B] rounded-r-2xl" />
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-[#B8860B]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/70 leading-relaxed font-medium">
              To empower embassies and consulates through uncompromising service delivery. 
              We provide a single, trusted point of contact for complex operational needs, 
              ensuring that the physical and technical foundations of diplomacy remain unshakeable.
            </p>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((val, idx) => (
            <motion.div 
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-[#0B3D91]/5 hover:border-[#B8860B]/30 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0B3D91]/5 group-hover:bg-[#0B3D91] flex items-center justify-center mb-6 transition-colors duration-300">
                <val.icon className="w-6 h-6 text-[#0B3D91] group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#0B3D91] mb-3">{val.title}</h4>
              <p className="text-[#0B3D91]/60 text-sm leading-relaxed font-medium">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The Diplomatic Commitment */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#0B3D91] to-[#051a44] rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8860B]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="text-[#B8860B] font-bold text-xs tracking-[0.25em] uppercase mb-4 block">Our Commitment</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">The Diplomatic Quality Charter</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our operations are governed by a strict charter of quality, ensuring that every 
                interaction reflects the prestige of the missions we serve.
              </p>
              <div className="flex items-center gap-4 text-[#B8860B]">
                <Building2 className="w-10 h-10" />
                <div className="h-px w-20 bg-[#B8860B]/30" />
                <Globe className="w-10 h-10" />
              </div>
            </div>
            
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {promises.map((promise, i) => (
                <motion.div
                  key={promise}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="mt-1 bg-[#B8860B]/20 p-1 rounded-full group-hover:bg-[#B8860B] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] group-hover:text-[#0B3D91]" />
                  </div>
                  <span className="text-white/80 text-sm font-medium leading-relaxed">{promise}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}