"use client";

import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer, Wrench, Car, Trees, Sparkles, Droplets, Zap, Shield,
  Waves, Camera, Armchair, Monitor, ArrowRight, CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Hammer,
    title: "Construction & Renovation",
    desc: "Tailored services to meet strict quality and timeline requirements. We specialize in high-quality construction and renovation services to enhance and modernize your offices and facilities.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    category: "construction",
  },
  {
    icon: Wrench,
    title: "Maintenance & Handyman",
    desc: "Comprehensive maintenance and handyman solutions to keep your property in top condition. From minor repairs to general upkeep, we provide reliable, efficient service.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    category: "maintenance",
  },
  {
    icon: Car,
    title: "Chauffeur & Car Hiring",
    desc: "Professional chauffeur services, including car and relief drivers, as well as the provision of premium vehicles for official delegations and special events.",
    image: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c322?w=600&q=80",
    category: "transport",
  },
  {
    icon: Trees,
    title: "Landscaping Services",
    desc: "Expert landscaping solutions with flexible weekly or monthly garden maintenance plans. We design and maintain outdoor spaces that are aesthetically pleasing and sustainable.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    category: "outdoor",
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    desc: "Thorough cleaning solutions for diplomatic residences and official premises. We offer both major and routine cleaning services, ensuring spotless and hygienic environments.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    category: "maintenance",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    desc: "Professional plumbing solutions, including installations, repairs, and maintenance for residential and commercial properties. Jojo Tank installations and outdoor showers.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    category: "maintenance",
  },
  {
    icon: Monitor,
    title: "IT Services",
    desc: "Reliable IT support, specializing in hardware diagnostics, repair, and maintenance to keep your systems operating smoothly and securely.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    category: "technology",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    desc: "Comprehensive electrical services for installations, maintenance, and emergency repairs. We ensure safety and compliance with all industry standards.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    category: "construction",
  },
  {
    icon: Shield,
    title: "Security Services",
    desc: "Advanced security solutions including CCTV installation and maintenance, alarm systems, gate and garage motor repairs, ensuring safety and peace of mind.",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&q=80",
    category: "security",
  },
  {
    icon: Waves,
    title: "Swimming Pool Construction",
    desc: "Design and construction of high-quality swimming pools, tailored to your specifications and built to the highest standards for residential and commercial use.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=600&q=80",
    category: "construction",
  },
  {
    icon: Armchair,
    title: "Event Management",
    desc: "Full-service event management including professional catering solutions for corporate functions, delegations, and private events.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80",
    category: "events",
  },
  {
    icon: Camera,
    title: "Trade Facilitation",
    desc: "We serve as a strategic link between countries, identifying business opportunities and fostering bilateral trade relationships to promote economic growth.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
    category: "business",
  },
];

const categories = [
  { id: "all", label: "All Services" },
  { id: "construction", label: "Construction" },
  { id: "maintenance", label: "Maintenance" },
  { id: "technology", label: "Technology" },
  { id: "security", label: "Security" },
  { id: "transport", label: "Transport" },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-navy">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            Comprehensive{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-[#38BDF8] via-[#008591] to-[#38BDF8]">
              Service Solutions
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            From construction to IT, security to event management — we provide every service your embassy needs under one roof.
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                ? "bg-[#38BDF8] shadow-lg shadow-gold/20 border border-orange-500"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/50"
                }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Services Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="group relative bg-navy-light rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30sition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-light via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-orange-500/90 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-navy" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r from-[#38BDF8] via-[#008591] to-[#38BDF8] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-1">{service.desc}</p>
                    <Link href={`/services/${service.category}`}>
                      <motion.div className="mt-4 flex items-center gap-2 text-orange-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-14">
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center text-white gap-2 px-8 py-3.5 bg-linear-to-r from-[#38BDF8] via-[#008591] to-[#38BDF8] transition-colors duration-300
                      {service.title} font-bold rounded-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Request a Service
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
