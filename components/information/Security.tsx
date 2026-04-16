'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Radio,
  Fingerprint,
  AlertTriangle,
  Users,
  Camera,
  KeyRound,
  Siren,
  ShieldCheck,
  Target,
  Activity,
  Wifi,
  FileSearch,
  UserCheck
} from 'lucide-react';

// ============================================================================
// DATA LAYER - Separated from UI for scalability and maintainability
// ============================================================================

const SERVICES = [
  {
    icon: ShieldCheck,
    title: 'Physical Security',
    description: 'Comprehensive perimeter protection, access control, and facility hardening measures.',
    features: ['Perimeter Security', 'Blast Protection', 'Vehicle Barriers']
  },
  {
    icon: Camera,
    title: 'Surveillance Systems',
    description: 'Advanced CCTV and monitoring solutions providing 24/7 situational awareness.',
    features: ['HD Cameras', 'AI Detection', 'Remote Monitoring']
  },
  {
    icon: KeyRound,
    title: 'Access Control',
    description: 'Multi-layered access management ensuring authorized entry to sensitive areas.',
    features: ['Biometric Systems', 'Smart Cards', 'Zone Control']
  },
  {
    icon: Fingerprint,
    title: 'Identity Management',
    description: 'Secure credentialing and identity verification for personnel and visitors.',
    features: ['Background Checks', 'Credential Issuance', 'Visitor Management']
  },
  {
    icon: Radio,
    title: 'Communications Security',
    description: 'Encrypted communications protecting sensitive diplomatic correspondence.',
    features: ['Secure Networks', 'Encrypted Calls', 'Counter-Surveillance']
  },
  {
    icon: FileSearch,
    title: 'Threat Intelligence',
    description: 'Proactive threat assessment and intelligence gathering for informed security decisions.',
    features: ['Risk Analysis', 'Threat Monitoring', 'Security Briefings']
  }
];

const SECURITY_LAYERS = [
  { layer: 'Perimeter', icon: Target, description: 'Exterior barriers and surveillance' },
  { layer: 'Access Points', icon: Lock, description: 'Controlled entry with verification' },
  { layer: 'Interior Zones', icon: Shield, description: 'Layered internal security' },
  { layer: 'Response', icon: Siren, description: 'Rapid incident response teams' }
];

const CAPABILITIES = [
  'Armed Security Personnel',
  'K-9 Detection Units',
  'Emergency Response Teams',
  'Security Assessments',
  'Executive Protection',
  'Convoy Security',
  'Event Security',
  'Counter-Terrorism',
  'Cyber-Physical Security',
  'Crisis Management'
];

const METRICS = [
  { icon: Activity, value: '24/7', label: 'Monitoring' },
  { icon: Users, value: '1000+', label: 'Security Personnel' },
  { icon: Eye, value: '99.9%', label: 'Detection Rate' },
  { icon: ShieldCheck, value: 'Zero', label: 'Breaches (2023)' }
];

// ============================================================================
// ANIMATION VARIANTS - Centralized motion definitions for consistency
// ============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

// ============================================================================
// SUBCOMPONENTS - Modular, reusable UI components
// ============================================================================

/**
 * Hero Section Component
 * Displays the main heading, tagline, and metric cards
 * Design: Premium, centered layout with subtle animations
 */
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-blue-700 mb-8 relative"
          >
            <Shield className="w-10 h-10 text-white" />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl border-2 border-blue-400"
            />
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6 leading-tight">
            Security <span className="font-bold bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security solutions protecting diplomatic personnel, facilities, and 
            sensitive information against evolving threats in an increasingly complex world.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <MetricsGrid />
      </div>
    </section>
  );
};

/**
 * Metrics Grid Component
 * Displays key statistics in a responsive grid with hover effects
 */
const MetricsGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
    >
      {METRICS.map((metric) => (
        <motion.div
          key={metric.label}
          variants={itemVariants}
          className="group relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          
          {/* Card */}
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
            <metric.icon className="w-6 sm:w-8 h-6 sm:h-8 text-orange-400 mx-auto mb-3" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{metric.value}</div>
            <div className="text-xs sm:text-sm text-slate-400">{metric.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * Service Card Component
 * Premium interactive card with hover lift and glow effects
 * Accessibility: Focus states and semantic HTML
 */
interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="relative h-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-blue-400/50 transition-all duration-500 focus-within:ring-2 focus-within:ring-blue-400/50"
      >
        {/* Hover glow overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-blue-700/0 group-hover:from-blue-600/10 group-hover:to-blue-700/10 rounded-2xl transition-all duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon Container */}
          <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <div className="grow">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {service.description}
            </p>
          </div>

          {/* Features List */}
          <ul className="space-y-2 mt-auto">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start text-xs sm:text-sm text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-3 mt-1.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

/**
 * Services Section Component
 * Grid of service cards with staggered animations
 */
const ServicesSection = () => {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Integrated <span className="text-orange-400">Security Solutions</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Security Layers Component
 * Displays defense-in-depth strategy with connecting lines
 */
const SecurityLayersSection = () => {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white text-center mb-6"
        >
          Layered <span className="text-orange-400">Defense Strategy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto"
        >
          Multiple integrated security layers providing defense-in-depth protection
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SECURITY_LAYERS.map((layer, index) => {
            const LayerIcon = layer.icon;
            return (
              <motion.div
                key={layer.layer}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Connection line (hidden on mobile) */}
                {index < SECURITY_LAYERS.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                    className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-blue-500 to-transparent -z-10 origin-left"
                  />
                )}

                <div className="text-center">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-linear-to-br from-blue-600 to-blue-800 mb-6 relative border-2 border-blue-500/30">
                    <LayerIcon className="w-12 h-12 text-white" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{layer.layer}</h3>
                  <p className="text-sm text-slate-400">{layer.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * Capabilities Section Component
 * Two-column layout with capabilities grid
 */
const CapabilitiesSection = () => {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Elite <span className="text-orange-400">Security Teams</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Our security professionals bring extensive experience from military, law enforcement, 
              and intelligence backgrounds, trained to the highest international standards.
            </p>

            {/* Info Box */}
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Continuous Training</h4>
                  <p className="text-slate-300 text-sm">
                    Our personnel undergo regular training and certification in threat assessment, 
                    emergency response, and advanced security protocols.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Capabilities Grid */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {CAPABILITIES.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.04, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 group cursor-default"
                >
                  <UserCheck className="w-4 sm:w-5 h-4 sm:h-5 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm text-slate-200 block">{capability}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * CTA Section Component
 * High-conversion call-to-action banner with premium styling
 */
const CTASection = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative bg-linear-to-r from-blue-600 via-blue-700 to-blue-600 rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Animated border effect */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-20 pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-1 bg-linear-to-r from-transparent via-white to-transparent" />
          </motion.div>

          <div className="relative z-10">
            <ShieldCheck className="w-12 sm:w-16 h-12 sm:h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Security Assessment
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Request a comprehensive security evaluation of your diplomatic facility and receive 
              customized recommendations from our expert team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-slate-100 transition-colors shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-7000"
              aria-label="Request a security assessment"

            ><a href="/#contact" className="text-blue-600">
              Request Assessment
            </a></motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Background Effects Component
 * Decorative animated background elements
 */
const BackgroundEffects = () => {
  return (
    <>
      {/* Alert pattern background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-[800px]"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-0.5 bg-blue-500"
              style={{ transform: `rotate(${i * 45}deg)` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Glowing orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"
        />
      </div>
    </>
  );
};

// ============================================================================
// MAIN COMPONENT - Security Landing Page
// ============================================================================

/**
 * Security Landing Page Component
 * 
 * Design Philosophy: Apple-level polish + Stripe-style clarity
 * - Premium typography with intentional hierarchy
 * - Consistent spacing (8pt grid system)
 * - Subtle depth through gradients, overlays, and shadows
 * - Smooth, purposeful animations
 * - Enterprise SaaS aesthetic
 * 
 * Accessibility:
 * - Semantic HTML structure
 * - Focus states on interactive elements
 * - ARIA labels where appropriate
 * - Keyboard navigation support
 * - High contrast text
 */
export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Main Content */}
      <div className="relative">
        <HeroSection />
        <ServicesSection />
        <SecurityLayersSection />
        <CapabilitiesSection />
        <CTASection />
      </div>
    </div>
  );
}
