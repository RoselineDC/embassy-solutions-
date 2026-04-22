import * as React from "react";
import { motion } from "framer-motion";
import { Shield, Truck, Globe, Handshake } from "lucide-react";
import Image from "next/image";

const services = [
  { icon: Shield, label: "Security" },
  { icon: Truck, label: "Logistics" },
  { icon: Globe, label: "Visas" },
  { icon: Handshake, label: "Consulting" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/embassy_solutions_bg.png"
          alt="Embassy Solutions Team"
          fill
          priority
          className="object-cover"
        />
        {/* Top Gradient for Title Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent h-1/3" />
      </div>

      {/* Top Section: Title and Sub-services */}
      <div className="relative z-10 pt-16 text-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#B8860B]" />
            <div className="w-2 h-2 rotate-45 border border-[#B8860B]" />
            <div className="h-[1px] w-12 bg-[#B8860B]" />
          </div>

          {/* Sub-header Services List */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {services.map((service, index) => (
              <React.Fragment key={service.label}>
                <span className="text-[#0B3D91] font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
                  {service.label}
                </span>
                {index < services.length - 1 && (
                  <div className="w-1 h-1 rounded-full bg-[#B8860B]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Icon Bar (Compact) */}
      <div className="relative z-10 w-full">
        {/* Blue Bottom Bar Overlay */}
        <div className="absolute inset-0 bg-[#0B3D91]/90 backdrop-blur-sm border-t-4 border-[#B8860B]" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-3 md:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                {/* Circular Icon Container */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-[#0B3D91]" />
                  {/* Outer Ring Decoration */}
                  <div className="absolute inset-[-3px] rounded-full border border-white/30" />
                </div>
                
                {/* Label */}
                <span className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-[#38BDF8] transition-colors">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}