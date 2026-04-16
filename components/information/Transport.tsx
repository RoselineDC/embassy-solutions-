'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Shield,
  MapPin,
  Clock,
  Users,
  Radio,
  Award,
  CheckCircle2,
  Navigation,
  Smartphone,
  Headphones,
  TrendingUp,
  Globe,
  Gauge,
  ArrowRight,
  X,
  Phone,
  Mail,
  AlertCircle,
} from 'lucide-react';
import Image from 'next/image';


// ============================================================================
// DATA LAYER - Separated for scalability and clarity
// ============================================================================

const STATS = [
  { icon: Globe, value: '50+', label: 'Countries Served' },
  { icon: Car, value: '200+', label: 'Armored Vehicles' },
  { icon: TrendingUp, value: '99.9%', label: 'On-Time Performance' },
  { icon: Award, value: 'Zero', label: 'Security Incidents' },
];

const SERVICES = [
  {
    icon: Car,
    title: 'Armored Vehicle Fleet',
    description: 'State-of-the-art armored vehicles providing maximum protection for diplomatic personnel.',
    features: ['B6/B7 Protection', 'GPS Tracking', 'Emergency Communications'],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663564530652/BYj5ACauk9YBxqUms6NPLg/hero-armored-vehicle-nh4K6HPSAGDVUJ9uVN2qBc.webp',
  },
  {
    icon: Users,
    title: 'Professional Chauffeurs',
    description: 'Highly trained, security-cleared drivers with extensive knowledge of diplomatic protocols.',
    features: ['Background Checked', 'Defensive Driving', 'Protocol Trained'],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663564530652/BYj5ACauk9YBxqUms6NPLg/professional-driver-ZpepnmQwWN77QJR5nqTKEB.webp',
  },
  {
    icon: MapPin,
    title: 'Route Security',
    description: 'Advanced route planning and real-time monitoring ensuring safe, efficient transportation.',
    features: ['Threat Assessment', 'Alternative Routes', 'Secure Corridors'],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663564530652/BYj5ACauk9YBxqUms6NPLg/command-center-b2R7TvLJSYKRngBH3y2NPM.webp',
  },
  {
    icon: Radio,
    title: 'Convoy Operations',
    description: 'Coordinated multi-vehicle movements for high-profile diplomatic missions and events.',
    features: ['Security Escorts', 'Communications Suite', 'Tactical Coordination'],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663564530652/BYj5ACauk9YBxqUms6NPLg/convoy-operations-JGboBHTkTwd6JEDB2pJSwv.webp',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock transportation services for emergency and scheduled diplomatic needs.',
    features: ['Immediate Response', 'Global Coverage', 'Always Ready'],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663564530652/BYj5ACauk9YBxqUms6NPLg/service-security-team-dZDz2cixNiQpX5cNTnqREN.webp',
  },
  {
    icon: Smartphone,
    title: 'Mobile Command Center',
    description: 'Advanced mobile platforms equipped with secure communications and coordination capabilities.',
    features: ['Secure Comms', 'Real-time Intel', 'Crisis Management'],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663564530652/BYj5ACauk9YBxqUms6NPLg/command-center-b2R7TvLJSYKRngBH3y2NPM.webp',
  },
];

const VEHICLE_TYPES = [
  { type: 'Executive Sedans', protection: 'B4-B6', capacity: '3-4 passengers' },
  { type: 'Armored SUVs', protection: 'B6-B7', capacity: '5-7 passengers' },
  { type: 'Luxury Vans', protection: 'B4-B6', capacity: '8-12 passengers' },
  { type: 'Mobile Command', protection: 'B7', capacity: '4-6 personnel' },
];

const FEATURES = [
  'Multi-lingual Drivers',
  'VIP Airport Services',
  'Emergency Medical Support',
  'Secure Parking',
  'Event Transportation',
  'Inter-city Transfers',
  'Protocol Coordination',
  'Fleet Maintenance',
];



// ============================================================================
// ANIMATION VARIANTS - Premium easing curves and stagger patterns
// ============================================================================

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

// ============================================================================
// SUBCOMPONENTS
// ============================================================================



/**
 * Hero Section
 * Premium headline, subheading, and icon with refined animations
 */
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">

      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/heroslide1.png"
          alt="Transport background"
          className="w-full h-full object-cover scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        {/* gradient depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/70 to-slate-950" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-8 relative shadow-lg shadow-blue-500/20"
          >
            <Car className="w-10 h-10 text-white" />

            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-orange-400 opacity-60"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-7xl font-light text-white mb-6 leading-tight tracking-tight"
          >
            Transport{" "}
            <span className="font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-8"
          >
            Secure, reliable, and professional transportation solutions ensuring the safe movement of diplomatic personnel with discretion, efficiency, and world-class service.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}

/**
 * Stats Grid Component
 * Premium stat cards with hover effects and staggered animations
 */
function StatsGrid() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
    >
      {STATS.map((stat) => (
        <motion.div
          key={stat.label}
          variants={scaleIn}
          className="group relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

          {/* Card */}
          <div className="relative bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-center hover:bg-white/[0.12] hover:border-blue-400/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
            </motion.div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
            <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * Service Card Component
 * Premium interactive card with image zoom, glow, and depth effects
 */
function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/15 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10"
      >
        {/* Image Container */}
        {service.image && (
          <div className="relative h-48 overflow-hidden bg-slate-900">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        )}

        {/* Animated glow background on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 rounded-2xl"
        />

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Icon Container */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            <service.icon className="w-7 h-7 text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed mb-6 text-sm font-light">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-3 mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Services Section
 * Grid of premium service cards with section title
 */
function ServicesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="text-blue-400">Transport Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Our full suite of services designed to meet every diplomatic transportation need
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Vehicle Fleet Component
 * Premium vehicle type cards with specs
 */
function VehicleFleet() {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Fleet</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            A diverse range of armored vehicles tailored to different security requirements and group sizes
          </p>
        </motion.div>

        {/* Vehicle Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VEHICLE_TYPES.map((vehicle) => (
            <motion.div
              key={vehicle.type}
              variants={scaleIn}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/15 rounded-xl p-6 hover:border-blue-400/50 hover:bg-white/[0.12] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                <Gauge className="w-10 h-10 text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-4">{vehicle.type}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                    <Shield className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="font-medium">{vehicle.protection}</span>
                  </div>
                  <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                    <Users className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="font-medium">{vehicle.capacity}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Features Section
 * Two-column layout with features grid and highlighted callout
 */
function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Service <span className="text-blue-400">Excellence</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
              Our transport services combine advanced security measures with five-star hospitality, ensuring diplomatic personnel travel safely and comfortably.
            </p>

            {/* Highlighted Callout */}
            <motion.div
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.5)', backgroundColor: 'rgba(59, 130, 246, 0.08)' }}
              transition={{ duration: 0.3 }}
              className="bg-blue-900/10 border border-blue-700/30 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <Navigation className="w-6 h-6 text-blue-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Advanced Route Planning</h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Our operations center monitors traffic, weather, and security conditions in real-time, dynamically adjusting routes to ensure optimal safety and efficiency.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-4"
          >
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-orange-500/0 group-hover:from-blue-500/10 group-hover:to-orange-500/10 rounded-lg transition-all duration-300" />

                {/* Card */}
                <div className="relative bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/[0.08] hover:border-blue-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/5">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-slate-200 font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * CTA Section
 * High-conversion call-to-action banner with animated accents
 */
function CTASection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-navy-700 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl shadow-blue-500/20"
        >
          {/* Animated top accent line */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />

          {/* Animated bottom accent line */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="inline-block mb-6"
            >
              <Headphones className="w-16 h-16 text-white" />
            </motion.div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Book Your Transport
            </h2>

            {/* Description */}
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Experience the difference of professional diplomatic transportation. Our team is ready to coordinate secure, reliable transport for your mission.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl inline-flex items-center space-x-2 group"
            >
              <a href="/#contact" className="text-blue-600 hover:text-blue-700">
                Request Quote
              </a>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Background Elements
 * Animated gradient orbs and subtle patterns for depth
 */
function BackgroundElements() {
  return (
    <>
      {/* Road pattern background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 45px, rgba(16, 185, 129, 0.5) 45px, rgba(16, 185, 129, 0.5) 50px, transparent 50px, transparent 95px, rgba(16, 185, 129, 0.5) 95px, rgba(16, 185, 129, 0.5) 100px),
              repeating-linear-gradient(0deg, transparent, transparent 45px, rgba(16, 185, 129, 0.5) 45px, rgba(16, 185, 129, 0.5) 50px, transparent 50px, transparent 95px, rgba(16, 185, 129, 0.5) 95px, rgba(16, 185, 129, 0.5) 100px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
      </div>
    </>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* <BackgroundElements /> */}

      <div className="relative">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-6">
          <StatsGrid />
        </div>
        <ServicesSection />
        <VehicleFleet />
        <FeaturesSection />
        <CTASection />
      </div>
    </div>
  );
}
