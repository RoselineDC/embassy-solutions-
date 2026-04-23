'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Car,
  Shield,
  MapPin,
  Clock,
  Users,
  Radio,
  Award,
  CheckCircle2,
  Globe,
  TrendingUp,
  Smartphone,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Navigation,
  Zap
} from 'lucide-react';
import ContactSection from '../sections/ContactSection';
import Footer from '../Footer';

const SERVICES = [
  {
    icon: Car,
    title: 'Sovereign Fleet Operations',
    description: 'High-tier armored vehicle deployments providing maximum structural protection for diplomatic personnel.',
    features: ['Armored Vehicles', 'GPS Tactical Tracking', 'Secure Communications'],
    category: 'Fleet'
  },
  {
    icon: Users,
    title: 'Elite Security Drivers',
    description: 'Vetted security-cleared personnel trained in defensive driving and international diplomatic protocols.',
    features: ['Vetted Personnel', 'Protocol Integration', 'Tactical Response'],
    category: 'Personnel'
  },
  {
    icon: MapPin,
    title: 'Strategic Route Security',
    description: 'Advanced tactical planning and real-time monitoring ensuring secure movement across high-risk corridors.',
    features: ['Threat Assessment', 'Dynamic Routing', 'Secure Corridors'],
    category: 'Intelligence'
  },
  {
    icon: Radio,
    title: 'Convoy Tactical Support',
    description: 'Coordinated multi-vehicle movements for high-profile missions and state delegation requirements.',
    features: ['Security Escort Teams', 'Encrypted Comms', 'Tactical Coordination'],
    category: 'Tactical'
  },
  {
    icon: Clock,
    title: '24/7 Mission Readiness',
    description: 'Constant operational availability for immediate deployment in emergency or scheduled diplomatic contexts.',
    features: ['Rapid Response Desk', 'Global Support Network', 'Operational Readiness'],
    category: 'Operations'
  },
  {
    icon: Smartphone,
    title: 'Mobile Operations Command',
    description: 'Integrated mobile command platforms equipped with secure intelligence and crisis management suites.',
    features: [ 'Real-time Intel', 'Crisis Management'],
    category: 'Technology'
  },
];

const STATS = [
  { icon: Globe, value: '50+', label: 'Sovereign Missions' },
  { icon: ShieldCheck, value: '200+', label: 'Secure Assets' },
  { icon: TrendingUp, value: '99.9%', label: 'Mission Reliability' },
  { icon: Award, value: 'Zero', label: 'Security Breaches' },
];

const FLEET_SPECS = [
  { type: 'Executive Diplomatic Sedans', protection: 'B4-B6', capacity: '3-4 Personnel' },
  { type: 'Armored Mission SUVs', protection: 'B6-B7', capacity: '5-7 Personnel' },
  { type: 'Secure Delegation Vans', protection: 'B4-B6', capacity: '8-12 Personnel' },
  { type: 'Mobile Tactical Command', protection: 'B7', capacity: '4-6 Officers' },
];

export default function LogisticsTransport() {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-white/95 backdrop-blur-md py-4 border-gray-200/50 shadow-lg" : "bg-transparent py-6 border-transparent"
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
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">Diplomatic Logistics & Transport</span>
          </div>
          <div className="w-24" />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src="/transport.jpg"
          alt="Diplomatic Transport & Logistics"
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
            Logistics & Transport
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-3xl md:text-8xl font-serif font-bold  leading-tight drop-shadow-2xl"
          >
           
            <span className="text-[#B8860B]">Transport Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white max-w-2xl text-lg md:text-xl mb-8 font-medium leading-relaxed drop-shadow-lg"
          >
            Elite, high-security transportation services engineered for the safe movement 
            of diplomatic personnel, ensuring discretion, efficiency, and unwavering protection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#services"
              className="bg-[#0B3D91] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#0B3D91]/30 transition-all"
            >
              Explore Services <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative z-20 -mt-5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center group hover:border-[#0B3D91] transition-all"
            >
              <stat.icon className="w-8 h-8 text-[#B8860B] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-[#0B3D91] mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 relative bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">Integrated Logistics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Strategic protection and secure movement engineered for the unique 
              requirements of international diplomatic missions.
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
                <button className="flex items-center gap-2 text-[#0B3D91] text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                  Mission Briefing <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Specifications */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">Strategic Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Advanced vehicle specifications engineered for diplomatic protection and mission success.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h3 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-4">
                <ShieldCheck className="w-7 h-7 text-[#0B3D91]" />
                Fleet Specifications
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-8 py-5 text-[#0B3D91] text-xs font-bold uppercase tracking-widest">Vehicle Configuration</th>
                    <th className="px-8 py-5 text-[#0B3D91] text-xs font-bold uppercase tracking-widest">Protection Level</th>
                    <th className="px-8 py-5 text-[#0B3D91] text-xs font-bold uppercase tracking-widest">Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {FLEET_SPECS.map((spec, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-8 py-5 text-gray-900 font-bold text-sm group-hover:text-[#0B3D91] transition-colors">{spec.type}</td>
                      <td className="px-8 py-5 text-gray-600 font-medium text-sm">
                        <span className="px-3 py-1 bg-[#0B3D91]/10 rounded-lg border border-[#0B3D91]/20 text-[#0B3D91] text-[10px] font-bold">
                          {spec.protection}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-gray-600 font-medium text-sm">{spec.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0B3D91]/5 rounded-full blur-[160px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Zap className="w-12 h-12 text-[#B8860B] mx-auto mb-6" />
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-gray-900">
            Require Immediate <br />
            <span className="text-[#0B3D91]">Tactical Transport?</span>
          </h2>
          <p className="text-gray-600 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
            Our strategic operations desk is available 24/7 to facilitate emergency deployments 
            and secure delegation movement across international territories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => router.push('/#contact')}
              className="w-full sm:w-auto bg-[#0B3D91] text-white px-12 py-5 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-[#0B3D91]/30 transition-all flex items-center justify-center gap-3"
            >
              Contact Operations Desk <ArrowRight size={20} />
            </button>
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto bg-gray-100 text-gray-900 border border-gray-300 px-12 py-5 rounded-2xl font-bold hover:bg-gray-200 transition-all"
            >
              View Other Services
            </button>
          </div>
        </motion.div>
      </section>
      <ContactSection />
      <Footer />
      
    </div>
  );
}