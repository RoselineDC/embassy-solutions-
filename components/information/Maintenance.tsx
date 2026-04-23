'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Wrench,
  Zap,
  Wind,
  Droplets,
  Camera,
  SprayCan,
  Building2,
  Shield,
  CheckCircle2,
  Clock,
  TrendingUp,
  Award,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Globe,
  Phone
} from 'lucide-react';
import ContactSection from '../sections/ContactSection';
import Footer from '../Footer';

/* ================= DATA ================= */

const SERVICES = [
  {
    icon: Building2,
    title: 'Building Maintenance',
    description: 'Comprehensive structural upkeep including repairs, painting, roofing, and flooring for diplomatic premises.',
    features: ['Structural Repairs', 'Painting & Finishing', 'Roofing & Flooring'],
    category: 'Structural',
  },
  {
    icon: Zap,
    title: 'Electrical & Power Systems',
    description: 'Full-spectrum electrical maintenance covering lighting, wiring, generators, and backup power systems.',
    features: ['Lighting & Wiring', 'Generator Maintenance', 'Backup Power Systems'],
    category: 'Electrical',
  },
  {
    icon: Wind,
    title: 'HVAC Systems',
    description: 'Expert installation, servicing, and maintenance of air conditioning, ventilation, and heating systems.',
    features: ['Air Conditioning', 'Ventilation Systems', 'Heating & Climate Control'],
    category: 'HVAC',
  },
  {
    icon: Droplets,
    title: 'Plumbing Services',
    description: 'Complete plumbing solutions encompassing pipe repair, drainage management, and water system upkeep.',
    features: ['Pipe Repair & Install', 'Drainage Management', 'Water Systems'],
    category: 'Plumbing',
  },
  {
    icon: Camera,
    title: 'Security Systems',
    description: 'Installation and maintenance of CCTV, alarm systems, and access control for secure premises management.',
    features: ['CCTV Maintenance', 'Alarm Systems', 'Access Control'],
    category: 'Security',
  },
  {
    icon: SprayCan,
    title: 'Cleaning & Sanitation',
    description: 'Professional daily cleaning, deep cleaning, and full sanitation services for diplomatic environments.',
    features: ['Daily Cleaning', 'Deep Cleaning', 'Sanitation Protocols'],
    category: 'Sanitation',
  },
];

const STATS = [
  { icon: Globe, value: '150+', label: 'Premises Maintained' },
  { icon: ShieldCheck, value: '99.9%', label: 'Uptime Reliability' },
  { icon: TrendingUp, value: '95%', label: 'Downtime Reduction' },
  { icon: Award, value: '100%', label: 'Compliance Rate' },
];

const SCOPE_SPECS = [
  { area: 'Structural & Civil Works', frequency: 'Scheduled & Emergency', coverage: 'Full Premises' },
  { area: 'Electrical & Power Systems', frequency: 'Preventive Monthly', coverage: 'All Systems' },
  { area: 'HVAC & Climate Systems', frequency: 'Quarterly Servicing', coverage: 'Full Coverage' },
  { area: 'Plumbing & Water Systems', frequency: 'On-Demand & Preventive', coverage: 'All Facilities' },
  { area: 'Security Tech Systems', frequency: 'Weekly Inspection', coverage: 'Perimeter & Interior' },
  { area: 'Cleaning & Sanitation', frequency: 'Daily / Deep Clean', coverage: 'All Zones' },
];

/* ================= PAGE ================= */

export default function MaintenancePage() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">

      {/* ── Nav Bar ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
            ? 'bg-white/95 backdrop-blur-md py-4 border-gray-200/50 shadow-lg'
            : 'bg-transparent py-6 border-transparent'
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
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              Facility Maintenance Services
            </span>
          </div>
          <div className="w-24" />
        </div>
      </motion.nav>

      {/* ── Hero ── */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80&fit=crop"
          alt="Facility Maintenance Services"
          fill
          className="object-cover opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#B8860B] font-bold text-xs tracking-[0.4em] uppercase mb-6 drop-shadow-lg"
          >
            Facility Maintenance Division
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-3xl md:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl"
          >
            <span className="text-[#B8860B]">Maintenance Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white max-w-2xl text-lg md:text-xl mb-12 font-medium leading-relaxed drop-shadow-lg"
          >
            Comprehensive facility maintenance ensuring operational excellence for
            diplomatic premises — from infrastructure upkeep to sanitation and
            security systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#services"
              className="bg-[#0B3D91] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3
                         hover:scale-105 hover:shadow-2xl hover:shadow-[#0B3D91]/30 transition-all"
            >
              Explore Services <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative z-20 -mt-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center group hover:border-[#0B3D91] transition-all"
            >
              <stat.icon className="w-8 h-8 text-[#B8860B] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-[#0B3D91] mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section id="services" className="py-32 px-6 relative bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#B8860B] text-xs font-bold uppercase tracking-[0.35em] mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
              Integrated Maintenance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end facility care engineered for the unique requirements of
              diplomatic premises and international missions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8
                           hover:shadow-2xl transition-all duration-500"
              >
                {/* Gold top border reveal on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#B8860B] scale-x-0 group-hover:scale-x-100
                                transition-transform duration-500 origin-left rounded-t-[2rem]" />

                <div className="w-14 h-14 rounded-2xl bg-[#0B3D91]/5 flex items-center justify-center mb-8
                                group-hover:bg-[#0B3D91] transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-[#0B3D91] group-hover:text-white transition-colors duration-500" />
                </div>

                <div className="text-[#B8860B] text-[10px] font-bold uppercase tracking-widest mb-4">
                  {service.category}
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 group-hover:text-[#0B3D91] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-xs font-bold text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-[#0B3D91]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-[#0B3D91] text-xs font-bold uppercase tracking-[0.2em]
                                   group-hover:gap-4 transition-all">
                  Service Details <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scope Table ── */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#B8860B] text-xs font-bold uppercase tracking-[0.35em] mb-4 block">
              Service Scope
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Maintenance Coverage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Structured service schedules and full-premises coverage across every
              maintenance discipline.
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
                <Wrench className="w-7 h-7 text-[#0B3D91]" />
                Service Schedule Overview
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-8 py-5 text-[#0B3D91] text-xs font-bold uppercase tracking-widest">Service Area</th>
                    <th className="px-8 py-5 text-[#0B3D91] text-xs font-bold uppercase tracking-widest">Frequency</th>
                    <th className="px-8 py-5 text-[#0B3D91] text-xs font-bold uppercase tracking-widest">Coverage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {SCOPE_SPECS.map((spec, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-8 py-5 text-gray-900 font-bold text-sm group-hover:text-[#0B3D91] transition-colors">
                        {spec.area}
                      </td>
                      <td className="px-8 py-5 text-gray-600 font-medium text-sm">
                        <span className="px-3 py-1 bg-[#0B3D91]/10 rounded-lg border border-[#0B3D91]/20
                                         text-[#0B3D91] text-[10px] font-bold">
                          {spec.frequency}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-gray-600 font-medium text-sm">{spec.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-40 px-6 text-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px]
                        bg-[#0B3D91]/5 rounded-full blur-[160px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Phone className="w-12 h-12 text-[#B8860B] mx-auto mb-6" />
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-gray-900">
            Need Immediate <br />
            <span className="text-[#0B3D91]">Maintenance Support?</span>
          </h2>
          <p className="text-gray-600 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
            Our facility management desk is available 24/7 to dispatch technicians
            and coordinate emergency maintenance across your diplomatic premises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => router.push('/#contact')}
              className="w-full sm:w-auto bg-[#0B3D91] text-white px-12 py-5 rounded-2xl font-bold
                         hover:scale-105 hover:shadow-2xl hover:shadow-[#0B3D91]/30 transition-all
                         flex items-center justify-center gap-3"
              
            >
              Contact Maintenance Desk <ArrowRight size={20} />
            </button>
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto bg-gray-100 text-gray-900 border border-gray-300 px-12 py-5
                         rounded-2xl font-bold hover:bg-gray-200 transition-all"
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