"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HardHat, Wrench, Car, Zap, Shield, Droplets, Sparkles,
  Handshake, Hammer, Trees, Truck, ArrowRight, CheckCircle2,
  Building2, PanelTop, ChefHat
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Building2,
    title: "Construction & Renovations",
    desc: "We offer complete construction and renovation solutions for residential, commercial, and diplomatic properties. Quality workmanship, modern finishes, and efficient project management from start to completion.",
    image: "/infrastructure.jpeg",
    category: "construction",
    path: "/services/construction",
    features: [
      "Major and minor renovations",
      "Waterproofing solutions",
      "Roofing installations and repairs",
      "Interior and exterior painting",
      "Professional tiling",
      "Structural repairs and upgrades",
      "Property refurbishments",
      "Office and residence upgrades",
    ],
  },
  {
    icon: PanelTop,
    title: "Ceilings, Bulkheads & Drywalling",
    desc: "We design and install modern ceiling systems that enhance both functionality and aesthetics for offices, residences, and commercial properties.",
    image: "/infrastructure.jpeg",
    category: "construction",
    path: "/services/construction",
    features: [
      "Suspended ceilings",
      "Decorative bulkheads",
      "Drywall partitioning",
      "Office partition systems",
      "Ceiling repairs and replacements",
      "Acoustic ceiling solutions",
    ],
  },
  {
    icon: ChefHat,
    title: "Carpentry & Kitchen Solutions",
    desc: "Custom woodwork and cabinetry designed to combine functionality with modern aesthetics. Quality craftsmanship tailored to each client's needs.",
    image: "/infrastructure.jpeg",
    category: "construction",
    path: "/services/construction",
    features: [
      "Kitchen cupboards",
      "Wardrobes",
      "Kitchen renovations and upgrades",
      "Custom cabinetry",
      "Office furniture",
      "Shelving solutions",
      "Wood repairs and restorations",
    ],
  },
  {
    icon: Wrench,
    title: "Monthly Maintenance Services",
    desc: "Scheduled maintenance programs to ensure properties remain in excellent condition throughout the year. Flexible packages for embassies, offices, guest houses, and residential properties.",
    image: "/maintenance.jpeg",
    category: "maintenance",
    path: "/services/maintenance",
    features: [
      "General repairs",
      "Electrical maintenance",
      "Plumbing maintenance",
      "Painting touch-ups",
      "Roof inspections",
      "Preventative maintenance",
      "Facility inspections",
      "Property upkeep",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    desc: "Professional plumbing solutions for new projects, repairs, and upgrades. Reliable, compliant, and efficient plumbing systems.",
    image: "/maintenance.jpeg",
    category: "maintenance",
    path: "/services/maintenance",
    features: [
      "New plumbing installations",
      "Leak detection and repairs",
      "Blocked drain solutions",
      "Geyser installations and repairs",
      "Bathroom renovations and upgrades",
      "Pipe replacements",
      "Water pressure solutions",
      "General plumbing maintenance",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    desc: "Reliable electrical services delivered by qualified professionals. Safety, efficiency, and compliance remain our top priorities.",
    image: "/maintenance.jpeg",
    category: "maintenance",
    path: "/services/maintenance",
    features: [
      "New electrical installations",
      "Electrical repairs",
      "DB board upgrades",
      "Lighting installations",
      "Backup power solutions",
      "Fault finding and diagnostics",
      "Plug and switch installations",
      "Electrical maintenance",
    ],
  },
  {
    icon: Hammer,
    title: "Handyman Services",
    desc: "Reliable day-to-day repair and maintenance solutions. Fast, efficient, and dependable support when you need it most.",
    image: "/maintenance.jpeg",
    category: "maintenance",
    path: "/services/maintenance",
    features: [
      "General repairs",
      "Door and lock repairs",
      "Shelving installations",
      "Curtain and blind installations",
      "Furniture assembly",
      "Minor plumbing and electrical work",
      "Property touch-ups",
      "Office maintenance support",
    ],
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    desc: "Professional cleaning solutions for homes, offices, embassies, and commercial spaces. High standards of hygiene, professionalism, and attention to detail.",
    image: "/maintenance.jpeg",
    category: "maintenance",
    path: "/services/maintenance",
    features: [
      "Routine cleaning",
      "Deep cleaning",
      "Post-construction cleaning",
      "Office cleaning",
      "Residential cleaning",
      "Move-in and move-out cleaning",
      "Window cleaning",
      "Sanitization services",
    ],
  },
  {
    icon: Shield,
    title: "Security Systems Upgrades",
    desc: "Advanced security solutions for residential, commercial, and diplomatic properties. Reliable systems designed to improve safety and peace of mind.",
    image: "/maintenance.jpeg",
    category: "maintenance",
    path: "/services/security",
    features: [
      "CCTV installations and upgrades",
      "Alarm systems",
      "Gate motor installations and repairs",
      "Access control systems",
      "Electric fencing",
      "Intercom systems",
      "Security monitoring solutions",
      "System maintenance and upgrades",
    ],
  },
  {
    icon: Truck,
    title: "Transport Services",
    desc: "Professional transport solutions for diplomats, executives, visitors, and corporate clients. Punctuality, professionalism, comfort, and safety are our priorities.",
    image: "/diplomaticTransport.jpeg",
    category: "transport",
    path: "/services/logistics",
    features: [
      "Shuttle services",
      "Chauffeur services",
      "Airport transfers",
      "Relief drivers",
      "VIP transport solutions",
      "Corporate transport",
      "Furniture removals",
      "Local and long-distance transport",
    ],
  },
  {
    icon: Handshake,
    title: "Trade Department",
    desc: "Building strategic business connections between local businesses and international markets. Strengthening economic cooperation between South Africa and the sending country.",
    image: "/infrastructure.jpeg",
    category: "trade",
    path: "/services/consulting",
    features: [
      "Connecting businesses with embassy networks",
      "Facilitating trade opportunities",
      "Business matchmaking",
      "Investor introductions",
      "Supplier sourcing",
      "Cross-border business support",
      "Market entry assistance",
      "Strategic partnership facilitation",
    ],
  },
];

const categories = [
  { id: "all",          label: "All Services"  },
  { id: "construction", label: "Construction"  },
  { id: "maintenance",  label: "Maintenance"   },
  { id: "transport",    label: "Transport"     },
  { id: "trade",        label: "Trade"         },
];

// Instant jump — no visible scroll
const goToContact = () => {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "instant" });
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#051a44] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#0B3D91]/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#B8860B]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed"
          >
            Professional construction, maintenance, transport, trade facilitation,
            and support services tailored for embassies, diplomatic residences,
            international organizations, corporate clients, and private clients.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 border ${
                activeCategory === cat.id
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

        {/* Services Grid */}
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
                {/* Card — no onClick navigation, removed router.push on card */}
                <div className="group relative bg-[#0B3D91]/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#B8860B]/50 transition-all duration-500 flex flex-col h-full shadow-xl">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051a44] via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#051a44]/80 backdrop-blur-md border border-white/10 rounded-full">
                      <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-widest">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
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

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                          <span className="text-xs font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5">
                      <motion.button
                        className="flex items-center gap-2 text-[#B8860B] text-xs font-bold uppercase tracking-[0.2em] hover:gap-4 transition-all"
                        onClick={goToContact}
                      >
                        Get a Quote <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-gradient-to-r from-[#0B3D91] to-[#051a44] rounded-3xl border border-white/5 text-center shadow-2xl"
        >
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-white/60 max-w-xl mx-auto mb-8 font-medium">
            Our team is equipped to handle unique requirements that may not be listed above.
            Contact us for a professional assessment tailored to your needs.
          </p>
          <motion.button
            onClick={goToContact}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#B8860B] text-[#051a44] font-bold rounded-xl shadow-lg hover:shadow-[#B8860B]/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}