'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  LockKeyhole
} from 'lucide-react';
import Footer from '../Footer';
import ContactSection from '../sections/ContactSection';

const SERVICES = [
  {
    icon: ShieldCheck,
    title: 'Physical Security',
    description: 'Comprehensive perimeter protection, blast mitigation, and facility hardening measures for sovereign territory.',
    features: ['Perimeter Fortification', 'Blast Protection', 'Bullet-Resistant Solutions'],
    category: 'Infrastructure'
  },
  {
    icon: Camera,
    title: 'Advanced Surveillance',
    description: 'High-definition CCTV and monitoring solutions providing 24/7 situational awareness.',
    features: ['Alarm Systems', 'Remote Monitoring Centers',  'Facial Recognition'],
    category: 'Intelligence'
  },
  {
    icon: LockKeyhole,
    title: 'Access Management',
    description: 'Multi-layered access control ensuring authorized entry to sensitive diplomatic zones.',
    features: ['Biometric Verification', 'Smart Credentialing', 'Visitor Management'],
    category: 'Operations'
  },
  {
    icon: Fingerprint,
    title: 'Identity Verification',
    description: 'Secure credentialing and vetting protocols for mission personnel and visitors.',
    features: ['Background Screening', 'Credential Issuance', 'Visitor Protocols'],
    category: 'Vetting'
  },
  {
    icon: Radio,
    title: 'Communications Security',
    description: 'Encrypted network solutions protecting sensitive diplomatic correspondence and data.',
    features: ['Secure Networks', 'Counter-Surveillance', 'Data Encryption'],
    category: 'Intelligence'
  },
  {
    icon: Target,
    title: 'Threat Assessment',
    description: 'Proactive intelligence gathering and risk analysis for informed security decision-making.',
    features: ['Risk Modeling', 'Threat Monitoring', 'Strategic Briefings'],
    category: 'Strategy'
  }
];

const METRICS = [
  { icon: Activity, value: '24/7', label: 'Surveillance' },
  { icon: Users, value: '150+', label: 'Specialized Agents' },
  { icon: Eye, value: '99%', label: 'Incident Response' },
  { icon: ShieldCheck, value: 'Zero', label: 'Breach Record' }
];

export default function SecurityServices() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">

      {/* Back Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/95 backdrop-blur-md py-4 border-gray-200/50 shadow-lg" : "bg-transparent py-6 border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#0B3D91] font-bold hover:text-gray-700 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest">Back to Services</span>
          </button>
          <div className="hidden md:block">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">Diplomatic Security & Intelligence</span>
          </div>
          <div className="w-24" />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src="/securityes.jpg"
          alt="Embassy Security Operations"
          fill
          className="object-cover opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#0B3D91] font-bold text-xs tracking-[0.4em] uppercase mb-6 drop-shadow-lg"
          >
            Security & Intelligence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-2xl md:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl"
          >
            <span className="text-[#B8860B]">Protection Protocols</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/85 max-w-2xl text-lg md:text-xl mb-12 font-medium leading-relaxed drop-shadow-lg"
          >
            Comprehensive security solutions protecting diplomatic personnel, facilities, and
            sensitive information against evolving threats in an increasingly complex world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#solutions"
              className="bg-[#0B3D91] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#0B3D91]/30 transition-all"
            >
              Explore Solutions <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="relative z-20 -mt-5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center group hover:border-[#0B3D91] transition-all"
            >
              <metric.icon className="w-8 h-8 text-[#B8860B] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-[#0B3D91] mb-1">{metric.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-32 px-6 relative bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">Integrated Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Strategic protection measures engineered to the rigorous standards
              of international diplomatic organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B3D91]/5 flex items-center justify-center mb-8 group-hover:bg-[#0B3D91] transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-[#0B3D91] group-hover:text-white" />
                </div>
                <div className="text-[#B8860B] text-[10px] font-bold uppercase tracking-widest mb-4">{service.category}</div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 group-hover:text-[#0B3D91] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-xs font-bold text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-[#0B3D91]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-[#0B3D91] text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push("/#contact");
                  }}
                >
                  Request Briefing <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-gray-900 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#B8860B] font-bold text-xs tracking-[0.4em] uppercase mb-6 block">Diplomatic Discretion</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Unwavering Vigilance. <br />
              <span className="text-[#B8860B]">Absolute Privacy.</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              We understand that diplomatic security is as much about discretion as it is
              about protection. Our protocols are designed to be effective yet unobtrusive,
              ensuring the sanctity of the mission remains uncompromised.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#B8860B] text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/#contact");
                }}
              >
                Security Consultation
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all">
                Download Charter
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10"
          >
            <Image
              src="/embassy_security_hero.png"
              alt="Security Operations Center"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>
      <ContactSection />
      <Footer />

    </div>
  );
}