'use client';

import React, { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence
} from 'framer-motion';

import {
  Wrench,
  Clock,
  Shield,
  CheckCircle2,
  Settings,
  Zap,
  TrendingUp,
  Phone,
  Calendar,
  Building,
  Gauge
} from 'lucide-react';

import { AnimatedSection, CountUp } from '../AnimatedSection';

/* ================= DATA ================= */

const heroImages = ['/3.png', '/6.png', '/9.png', '/12.png'];
type HeroProps = {
  index: number;
  heroY: any;
  contentY: any;
};

const services = [
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock critical support.',
    details: 'Rapid deployment teams handle urgent failures immediately.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789'
  },
  {
    icon: Settings,
    title: 'Preventive Maintenance',
    description: 'Scheduled system protection.',
    details: 'Predictive strategies reduce breakdowns and extend asset life.',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952'
  },
  {
    icon: Building,
    title: 'Infrastructure Management',
    description: 'Complete system oversight.',
    details: 'Full mechanical and electrical infrastructure control.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
  },
  {
    icon: Gauge,
    title: 'Performance Monitoring',
    description: 'Real-time optimisation.',
    details: 'Smart systems ensure peak operational efficiency.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  {
    icon: Zap,
    title: 'Energy Optimization',
    description: 'Cost reduction systems.',
    details: 'Reduce energy waste and improve sustainability.',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231'
  },
  {
    icon: Shield,
    title: 'Compliance Assurance',
    description: 'Global safety standards.',
    details: 'Ensures full regulatory compliance across systems.',
    image:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc'
  }
];

const stats = [
  { icon: TrendingUp, label: 'Reduced Downtime', value: 95, suffix: '%' },
  { icon: CheckCircle2, label: 'Reliability', value: 99.9, suffix: '%' },
  {
    icon: Calendar,
    label: 'Response Time',
    value: 2,
    suffix: 'hrs',
    prefix: '< '
  },
  { icon: Shield, label: 'Compliance', value: 100, suffix: '%' }
];

/* ================= HERO ================= */

function Hero({ index, heroY, contentY }: HeroProps) {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* IMAGE */}
      <motion.div className="absolute inset-0" style={{ y: heroY }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[index]}
            src={heroImages[index]}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* STRONG READABILITY LAYER */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-orange-500 rounded-2xl flex items-center justify-center">
          <Wrench className="w-10 h-10 text-black" />
        </div>

        <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
          Facility{' '}
          <span className="font-bold text-sky-400">Maintenance</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl font-medium">
          High-performance maintenance solutions ensuring reliability,
          safety, and efficiency.
        </p>
      </motion.div>
    </section>
  );
}

/* ================= STATS ================= */

function Stats() {
  return (
    <AnimatedSection className="relative z-10 -mt-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <stat.icon className="mx-auto mb-2 text-sky-400" />

            <div className="text-2xl font-bold text-white">
              {stat.prefix}
              <CountUp target={stat.value} suffix={stat.suffix} />
            </div>

            <div className="text-xs text-white/60 mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}

      </div>
    </AnimatedSection>
  );
}

/* ================= SERVICES ================= */

function Services() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-14 text-white">
        Our{' '}
        <span className="text-sky-400">Services</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="relative group rounded-2xl overflow-hidden min-h-[320px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <img
              src={s.image}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />

            <div className="relative p-6 h-full flex flex-col justify-end">

              <div className="w-10 h-10 mb-4 bg-orange-500 rounded-lg flex items-center justify-center">
                <s.icon className="w-5 h-5 text-black" />
              </div>

              <h3 className="text-white text-lg font-semibold">
                {s.title}
              </h3>

              <p className="text-white/70 text-sm">
                {s.description}
              </p>

              <div className="opacity-0 group-hover:opacity-100 transition mt-4 text-white/80 text-sm">
                {s.details}
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

/* ================= CTA ================= */

function CTA() {
  return (
    <AnimatedSection className="py-28 px-6 text-center">

      <div className="max-w-4xl mx-auto rounded-3xl p-10 bg-linear-to-br from-sky-900 to-slate-900 border border-white/10">

        <Phone className="mx-auto mb-4 text-sky-400" size={42} />

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          24/7 Emergency Support
        </h2>

        <p className="text-white/70 mb-8">
          Immediate response for all critical facility issues.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-white/80 mb-8">
          <span className="px-4 py-2 bg-black/30 rounded-full">
            +27 82 123 4567
          </span>
          <span className="px-4 py-2 bg-black/30 rounded-full">
            support@embassysolutions.co.za
          </span>
        </div>

        <a
          href="/#contact"
          className="inline-block bg-sky-400 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Request Service
        </a>

      </div>

    </AnimatedSection>
  );
}

/* ================= MAIN ================= */

export default function Maintenance() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentY = useTransform(scrollY, [0, 500], [0, -60]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((p) => (p + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#020617] text-white">

      <Hero index={index} heroY={heroY} contentY={contentY} />

      <Stats />

      <Services />

      <CTA />

    </div>
  );
}