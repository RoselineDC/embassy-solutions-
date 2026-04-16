'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Wrench, 
  Cpu, 
  Building2, 
  Lock, 
  Car,
  ChevronRight,
  Star,
  Award,
  Clock,
  Globe
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Facility Maintenance',
    description: 'Comprehensive maintenance solutions ensuring optimal functionality and longevity of diplomatic infrastructure.',
    features: ['24/7 Emergency Response', 'Preventive Maintenance', 'Infrastructure Management'],
    link: '/services/maintenance',
    color: 'from-amber-500 to-yellow-600'
  },
  {
    icon: Cpu,
    title: 'Technology Solutions',
    description: 'Advanced technology integration for secure, efficient, and modern diplomatic operations.',
    features: ['Smart Building Systems', 'Cybersecurity', 'Network Infrastructure'],
    link: '/services/technology',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Building2,
    title: 'Construction Services',
    description: 'Expert construction and renovation services adhering to international diplomatic standards.',
    features: ['Embassy Construction', 'Renovations', 'Project Management'],
    link: '/services/construction',
    color: 'from-slate-600 to-slate-800'
  },
  {
    icon: Lock,
    title: 'Security Services',
    description: 'Comprehensive security solutions protecting personnel, assets, and sensitive information.',
    features: ['Physical Security', 'Access Control', 'Threat Assessment'],
    link: '/services/security',
    color: 'from-red-600 to-rose-800'
  },
  {
    icon: Car,
    title: 'Transport Services',
    description: 'Secure and reliable transportation solutions for diplomatic missions and personnel.',
    features: ['Armored Vehicles', 'Professional Drivers', 'Route Security'],
    link: '/services/transport',
    color: 'from-emerald-600 to-teal-700'
  }
];

const stats = [
  { icon: Globe, value: '50+', label: 'Countries Served' },
  { icon: Award, value: '200+', label: 'Projects Completed' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
  { icon: Star, value: '98%', label: 'Client Satisfaction' }
];

export default function AllServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-navy-900 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-32 pb-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-light text-white mb-6">
                Our <span className="font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions tailored for diplomatic missions, delivering excellence 
                across infrastructure, security, and operational support.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-slate-400">
                            <ChevronRight className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <motion.a
                        href={service.link}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center text-amber-400 font-medium group-hover:text-amber-300 transition-colors"
                      >
                        Learn More
                        <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pb-32 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Elevate Your Diplomatic Operations?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Partner with Embassy Solutions for world-class service delivery tailored to your mission's unique requirements.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-colors inline-flex items-center"
                >
                  Contact Us Today
                  <ChevronRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}