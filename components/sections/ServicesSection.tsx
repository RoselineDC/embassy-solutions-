"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer, Wrench, Car, Trees, Sparkles, Droplets, Zap, Shield,
  Waves, Camera, Armchair, Monitor, ArrowRight, CheckCircle2,
  Lock, Building2, Briefcase, Truck, Cpu
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Building2,
    title: "Mission Infrastructure",
    desc: "Bespoke construction and structural renovation of diplomatic premises. We adhere to stringent international security and quality standards to modernize your official chanceries.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    category: "infrastructure",
    path: "/services/construction",
    features: ["Chancery Renovation", "Structural Modernization", "Secure Facility Build"]
  },
  {
    icon: Lock,
    title: "Security & Intelligence",
    desc: "Advanced protective solutions including high-tier CCTV integration, alarm systems, and automated access control, ensuring the absolute sanctity of sovereign territory.",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&q=80",
    category: "security",
    path: "/services/security",

    features: ["CCTV & Surveillance", "Access Control Systems", "Perimeter Protection"]
  },
  {
    icon: Truck,
    title: "Diplomatic Logistics",
    desc: "Elite chauffeur services and premium vehicle leasing for official delegations. We provide highly trained relief drivers and secure transport for high-level events.",
    image: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c322?w=800&q=80",
    category: "logistics",
    path: "/services/logistics",

    features: ["Official Delegations", "Chauffeur Services", "Secure Fleet Leasing"]
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    desc: "Comprehensive facility maintenance solutions ensuring operational excellence for diplomatic premises, including infrastructure upkeep, utilities, and sanitation.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    category: "maintenance",
    path: "/services/maintenance",

    features: [
      "Building Maintenance",
      "Electrical & Power Systems",
      "HVAC Systems",
      "Plumbing Services",
      "Security Systems",
      "Cleaning & Sanitation"
    ],
    subServices: [
      {
        title: "Building Maintenance",
        desc: "Repairs, painting, roofing, and flooring",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
      },
      {
        title: "Electrical & Power",
        desc: "Lighting, wiring, generators, backup systems",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
      },
      {
        title: "HVAC Systems",
        desc: "Air conditioning, ventilation, heating",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80"
      },
      {
        title: "Plumbing",
        desc: "Pipes, drainage, water systems",
        image: "https://images.unsplash.com/photo-1600566752227-8f3b0c0d5d9b?w=800&q=80"
      },
      {
        title: "Security Systems",
        desc: "CCTV, alarms, access control",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
      },
      {
        title: "Cleaning Services",
        desc: "Daily cleaning, deep cleaning, sanitation",
        image: "https://images.unsplash.com/photo-1581578017420-ec0f8c1b4b2c?w=800&q=80"
      }
    ]
  },
  {
    icon: Briefcase,
    title: "Strategic Consulting",
    desc: "Trade facilitation and bilateral business opportunity identification. We serve as a strategic bridge between nations to foster economic growth and cooperation.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    category: "consulting",
    path: "/services/consulting",
    features: ["Trade Facilitation", "Bilateral Opportunities", "Strategic Networking"]
  },
];

const categories = [
  { id: "all", label: "All Operations" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "security", label: "Security" },
  { id: "logistics", label: "Logistics" },
  { id: "maintenance", label: "Facility Management" },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();
  const filtered = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#051a44] overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#0B3D91]/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#B8860B]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B8860B] font-bold text-xs tracking-[0.3em] uppercase"
          >
            Service Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white mt-4 mb-6"
          >
            Diplomatic Support Pillars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed"
          >
            Precision-engineered solutions designed to meet the rigorous operational
            demands of sovereign missions and international delegations.
          </motion.p>
        </div>

        {/* Professional Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 border ${activeCategory === cat.id
                ? "bg-[#B8860B] text-[#051a44] border-[#B8860B] shadow-lg shadow-[#B8860B]/20"
                : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Professional Services Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div
                  onClick={() => router.push(service.path)}
                  className="group relative bg-[#0B3D91]/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#B8860B]/50 transition-all duration-500 flex flex-col h-full shadow-xl">
                  {/* Visual Element */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051a44] via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#051a44]/80 backdrop-blur-md border border-white/10 rounded-full">
                      <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-widest">{service.category}</span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#B8860B]/10 flex items-center justify-center group-hover:bg-[#B8860B] transition-colors duration-500">
                        <service.icon className="w-6 h-6 text-[#B8860B] group-hover:text-[#051a44]" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#B8860B] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
                      {service.desc}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                          <span className="text-xs font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5">
                      <motion.button
                        className="flex items-center gap-2 text-[#B8860B] text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push("/#contact");
                        }}
                      >
                        Request Consultation <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Support Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-gradient-to-r from-[#0B3D91] to-[#051a44] rounded-3xl border border-white/5 text-center shadow-2xl"
        >
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Require a Specialized Solution?</h3>
          <p className="text-white/60 max-w-xl mx-auto mb-8 font-medium">
            Our team is equipped to handle unique diplomatic requirements that may not be listed.
            Contact our strategic operations desk for a confidential assessment.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#B8860B] text-[#051a44] font-bold rounded-xl shadow-lg hover:shadow-[#B8860B]/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Operations Desk
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}