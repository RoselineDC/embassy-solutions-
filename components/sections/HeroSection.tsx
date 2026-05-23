"use client";

import * as React from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { HardHat, Wrench, Truck, Handshake, X, ArrowRight, type LucideIcon } from "lucide-react";
import Image from "next/image";

type ServiceDetail = { label: string; href: string };

const SERVICES: {
  icon: LucideIcon;
  label: string;
  description: string;
  items: ServiceDetail[];
}[] = [
  {
    icon: HardHat,
    label: "Construction & Renovations",
    description: "Complete construction and renovation solutions for residential, commercial, and diplomatic properties.",
    items: [
      { label: "Major & Minor Renovations",       href: "#services" },
      { label: "Waterproofing Solutions",          href: "#services" },
      { label: "Roofing Installations & Repairs",  href: "#services" },
      { label: "Interior & Exterior Painting",     href: "#services" },
      { label: "Professional Tiling",              href: "#services" },
      { label: "Structural Repairs & Upgrades",    href: "#services" },
      { label: "Ceilings, Bulkheads & Drywalling", href: "#services" },
      { label: "Carpentry & Kitchen Solutions",    href: "#services" },
    ],
  },
  {
    icon: Wrench,
    label: "Maintenance Services",
    description: "Scheduled and on-demand maintenance to keep your property in excellent condition year-round.",
    items: [
      { label: "Monthly Maintenance Packages", href: "#services" },
      { label: "Plumbing Services",            href: "#services" },
      { label: "Electrical Services",          href: "#services" },
      { label: "Handyman Services",            href: "#services" },
      { label: "Cleaning Services",            href: "#services" },
      { label: "Security Systems Upgrades",    href: "#services" },
      { label: "Roof Inspections",             href: "#services" },
      { label: "Preventative Maintenance",     href: "#services" },
    ],
  },
  {
    icon: Truck,
    label: "Transport",
    description: "Professional transport solutions for diplomats, executives, and corporate clients.",
    items: [
      { label: "Chauffeur Services",              href: "#services" },
      { label: "Airport Transfers",               href: "#services" },
      { label: "Shuttle Services",                href: "#services" },
      { label: "VIP Transport Solutions",         href: "#services" },
      { label: "Relief Drivers",                  href: "#services" },
      { label: "Corporate Transport",             href: "#services" },
      { label: "Furniture Removals",              href: "#services" },
      { label: "Local & Long-Distance Transport", href: "#services" },
    ],
  },
  {
    icon: Handshake,
    label: "Trade Facilitation",
    description: "Building strategic business connections between local businesses and international markets.",
    items: [
      { label: "Business Matchmaking",                href: "#services" },
      { label: "Connecting with Embassy Networks",    href: "#services" },
      { label: "Investor Introductions",              href: "#services" },
      { label: "Supplier Sourcing",                   href: "#services" },
      { label: "Cross-Border Business Support",       href: "#services" },
      { label: "Market Entry Assistance",             href: "#services" },
      { label: "Strategic Partnership Facilitation",  href: "#services" },
      { label: "Trade Opportunity Facilitation",      href: "#services" },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 mb-6" aria-hidden>
      <div className="h-px w-12 bg-[#B8860B]" />
      <div className="w-2 h-2 rotate-45 border border-[#B8860B]" />
      <div className="h-px w-12 bg-[#B8860B]" />
    </div>
  );
}

function ServicePill({ label, isLast }: { label: string; isLast: boolean }) {
  return (
    <>
      <span className="text-[#0B3D91] font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
        {label}
      </span>
      {!isLast && (
        <div className="w-1 h-1 rounded-full bg-[#B8860B]" aria-hidden />
      )}
    </>
  );
}

function ServiceIcon({
  icon: Icon,
  label,
  index,
  animate,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  index: number;
  animate: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ delay: 0.2 * index, duration: 0.5 }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
      role="listitem"
      aria-label={label}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 focus-within:scale-110">
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#0B3D91]" aria-hidden />
        <div className="absolute inset-[-3px] rounded-full border border-white/30" aria-hidden />
      </div>
      <span className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-[#B8860B] transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const [activeService, setActiveService] = React.useState<number | null>(null);

  const goToContact = () => {
  setActiveService(null); 
  const el = document.getElementById("contact");

  if (el) {
    el.scrollIntoView({ behavior: "instant" });
  }
};

  const goToSection = (href: string) => {
    setActiveService(null);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "instant" });
  };

  return (
    <>
      <section
        id="home"
        className="relative w-full flex flex-col items-center justify-between overflow-hidden"
        style={{ aspectRatio: "16/9", minHeight: "70vh" }}
      >
        {/* ── Background Image ── */}
        <div className="absolute inset-0">
          <Image
            src="/diplomatic_team_hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#0B3D91]/90" />
        </div>

        {/* ── Top: Service Pills ── */}
        <div className="relative z-10 pt-16 text-center w-full px-4">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: -20 } : false}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.8 }}
          >
            <GoldDivider />
            <div
              className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
              role="list"
              aria-label="Our services"
            >
              {SERVICES.map((service, index) => (
                <React.Fragment key={service.label}>
                  <ServicePill
                    label={service.label}
                    isLast={index === SERVICES.length - 1}
                  />
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: Icon Bar ── */}
        <div className="relative z-10 w-full">
          <div className="absolute inset-0 bg-[#0B3D91]/90 backdrop-blur-sm border-t-4 border-[#B8860B]" />
          <nav
            className="relative max-w-7xl mx-auto px-4 py-3 md:py-5"
            aria-label="Service categories"
          >
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" role="list">
              {SERVICES.map((service, index) => (
                <ServiceIcon
                  key={service.label}
                  icon={service.icon}
                  label={service.label}
                  index={index}
                  animate={shouldAnimate}
                  onClick={() => setActiveService(index)}
                />
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ── Service Popup Modal ── */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#051a44]/80 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
              className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-br from-[#0B3D91] to-[#051a44] p-8 pb-6">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#B8860B]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                {/* Close Button */}
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#B8860B]/20 border border-[#B8860B]/30 flex items-center justify-center">
                    {React.createElement(SERVICES[activeService].icon, {
                      className: "w-7 h-7 text-[#B8860B]",
                    })}
                  </div>
                  <div>
                    <p className="text-[#B8860B] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                      Our Services
                    </p>
                    <h3 className="text-white font-serif font-bold text-xl leading-tight">
                      {SERVICES[activeService].label}
                    </h3>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {SERVICES[activeService].description}
                </p>
              </div>

              {/* Service List */}
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {SERVICES[activeService].items.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() => goToSection(item.href)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left text-[#0B3D91] font-medium text-sm hover:bg-[#0B3D91]/5 hover:text-[#0B3D91] border border-transparent hover:border-[#0B3D91]/10 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0" />
                          {item.label}
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={goToContact}
                  className="w-full py-3.5 bg-gradient-to-r from-[#0B3D91] to-[#1097d1] text-white font-bold rounded-xl shadow-lg hover:shadow-[#0B3D91]/20 transition-all flex items-center justify-center gap-2"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}