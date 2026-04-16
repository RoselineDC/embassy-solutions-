'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu,
  Shield,
  Network,
  Database,
  Cloud,
  Lock,
  Wifi,
  Server,
  Smartphone,
  MonitorSmartphone,
  Fingerprint,
  Eye,
  Radio,
  Headphones,
  Zap,
  TrendingUp
} from 'lucide-react';

const solutions = [
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Robust, secure network architecture supporting mission-critical diplomatic communications and operations.',
    features: ['High-Speed Connectivity', 'Redundant Systems', 'Fiber Optic Networks']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Multi-layered security protecting sensitive diplomatic data from evolving cyber threats.',
    features: ['Threat Detection', 'Data Encryption', '24/7 Monitoring']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure cloud infrastructure enabling flexible, scalable access to diplomatic resources.',
    features: ['Private Cloud', 'Disaster Recovery', 'Data Sovereignty']
  },
  {
    icon: MonitorSmartphone,
    title: 'Smart Building Systems',
    description: 'Integrated automation optimizing energy, security, and environmental controls.',
    features: ['IoT Integration', 'Energy Management', 'Automated Controls']
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure storage, backup, and management of critical diplomatic information.',
    features: ['Encrypted Storage', 'Automated Backups', 'Compliance Ready']
  },
  {
    icon: Radio,
    title: 'Communications Systems',
    description: 'Advanced communication platforms ensuring secure, reliable diplomatic correspondence.',
    features: ['Encrypted Comms', 'Video Conferencing', 'VoIP Systems']
  }
];

const technologies = [
  { icon: Lock, label: 'Advanced Encryption' },
  { icon: Fingerprint, label: 'Biometric Access' },
  { icon: Eye, label: 'AI Surveillance' },
  { icon: Server, label: 'Edge Computing' },
  { icon: Wifi, label: '5G Integration' },
  { icon: Smartphone, label: 'Mobile Security' }
];

const metrics = [
  { value: '99.99%', label: 'System Uptime', icon: TrendingUp },
  { value: '<1min', label: 'Incident Response', icon: Zap },
  { value: '256-bit', label: 'Encryption Standard', icon: Lock },
  { value: '24/7', label: 'Security Monitoring', icon: Eye }
];

export default function Technology() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated circuit pattern background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 0 50 L 25 50 L 25 25 L 75 25 L 75 75 L 50 75 L 50 100"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <circle cx="25" cy="50" r="3" fill="rgba(59, 130, 246, 0.5)" />
              <circle cx="75" cy="25" r="3" fill="rgba(59, 130, 246, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.07, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 mb-8 relative"
              >
                <Cpu className="w-10 h-10 text-white" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-blue-400"
                />
              </motion.div>

              <h1 className="text-6xl md:text-7xl font-light text-white mb-6">
                Technology <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h1>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge technology infrastructure powering secure, efficient, and resilient 
                diplomatic operations in an increasingly connected world.
              </p>
            </motion.div>

            {/* Metrics Grid */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
                    <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            >
              Comprehensive <span className="text-blue-400">Tech Stack</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <solution.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {solution.title}
                      </h3>

                      <p className="text-slate-300 leading-relaxed mb-6">
                        {solution.description}
                      </p>

                      <ul className="space-y-2">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-slate-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
            >
              Advanced <span className="text-blue-400">Technologies</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto"
            >
              Leveraging cutting-edge innovations to deliver superior security and performance
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
                >
                  <tech.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-slate-200">{tech.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            >
              {/* Animated background pattern */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1))',
                  backgroundSize: '40px 40px'
                }}
              />

              <div className="relative z-10">
                <Headphones className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Technology Consultation
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Our technology experts are ready to assess your infrastructure needs and design 
                  a customized solution for your diplomatic mission.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-2xl"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}