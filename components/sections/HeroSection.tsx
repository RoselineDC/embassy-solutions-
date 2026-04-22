"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Truck, Globe, Handshake, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── Config ──────────────────────────────────────────────────────────────────
// Centralise brand tokens. Change once, updates everywhere.
const BRAND = {
  navy: "#0B3D91",
  gold: "#B8860B",
  sky: "#38BDF8",
} as const;

const SERVICES: { icon: LucideIcon; label: string }[] = [
  { icon: Shield,    label: "Security"   },
  { icon: Truck,     label: "Logistics"  },
  { icon: Globe,     label: "Visas"      },
  { icon: Handshake, label: "Consulting" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
// Extracted so each piece is independently readable and testable.

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
}: {
  icon: LucideIcon;
  label: string;
  index: number;
  animate: boolean;
}) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 }  : false}
      transition={{ delay: 0.2 * index, duration: 0.5 }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
      // Accessibility: make each service a focusable, labelled landmark
      role="listitem"
      aria-label={label}
      tabIndex={0}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 focus-within:scale-110">
        {/* aria-hidden: the label below already describes this */}
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#0B3D91]" aria-hidden />
        <div className="absolute inset-[-3px] rounded-full border border-white/30" aria-hidden />
      </div>
      <span className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-[#38BDF8] transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection() {
  // Respect OS-level "reduce motion" preference — a11y best practice
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
   <section
  className="relative w-full flex flex-col items-center justify-between overflow-hidden"
  style={{ aspectRatio: "16/9", minHeight: "70vh"  }}
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

        {/* Top gradient: readability for text above the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent" />

        {/* Bottom gradient: feathers the image into the bottom bar */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#0B3D91]/90" />
      </div>

      {/* ── Top: Services header ── */}
      <div className="relative z-10 pt-16 text-center w-full px-4">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: -20 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 }  : false}
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

      {/* ── Bottom: Icon bar ── */}
      <div className="relative z-10 w-full">
        {/* Solid bar with blur — sits on top of the gradient above */}
        <div className="absolute inset-0 bg-[#0B3D91]/90 backdrop-blur-sm border-t-4 border-[#B8860B]" />

        <nav
          className="relative max-w-7xl mx-auto px-4 py-3 md:py-5"
          aria-label="Service categories"
        >
          <ul
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            role="list"
          >
            {SERVICES.map((service, index) => (
              <ServiceIcon
                key={service.label}
                icon={service.icon}
                label={service.label}
                index={index}
                animate={shouldAnimate}
              />
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}