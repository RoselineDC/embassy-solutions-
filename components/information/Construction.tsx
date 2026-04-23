'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, Building2, ShieldCheck, Hammer, Ruler, HardHat, CheckCircle2, ArrowLeft, Armchair } from 'lucide-react';
import Footer from '../Footer';
import ContactSection from '../sections/ContactSection';

const constructionServices = [
  {
    title: 'Sovereign Chancery Construction',
    desc: 'Bespoke construction of official chanceries adhering to stringent international security protocols.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80',
    icon: Building2,
    category: 'Infrastructure'
  },
  {
    title: 'Mission Modernization',
    desc: 'Comprehensive structural renovation and technical modernization of existing diplomatic premises.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    icon: Hammer,
    category: 'Renovation'
  },
  {
    title: 'High-Tier Security Integration',
    desc: 'Specialized structural reinforcement and advanced security infrastructure for sovereign territory.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    icon: ShieldCheck,
    category: 'Security'
  },
  {
    title: 'Diplomatic Interior Fit-Out',
    desc: 'Premium interior design and fit-out services for official residences and diplomatic offices.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
    icon: Armchair, // Note: Replacing with Armchair if available, else Ruler
    category: 'Interiors'
  },
  {
    title: 'Strategic Design-Build',
    desc: 'Integrated architectural design and construction delivery for seamless project execution.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    icon: Ruler,
    category: 'Design'
  },
  {
    title: 'Mission-Critical Delivery',
    desc: 'Accountable project management and delivery ensuring operational continuity for the mission.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    icon: HardHat,
    category: 'Project Management'
  },
];

export default function ConstructionPage() {
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
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">Diplomatic Infrastructure Division</span>
          </div>
          <div className="w-24" /> {/* Balance */}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src="/embassy_construction_hero.png"
          alt="Prestigious Diplomatic Building"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#0B3D91] font-bold text-xs tracking-[0.4em] uppercase mb-6 drop-shadow-lg"
          >
            Sovereign Infrastructure
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl"
          >
            <span className="text-[#B8860B]">Diplomatic Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white max-w-2xl text-lg md:text-xl mb-12 font-medium leading-relaxed drop-shadow-lg"
          >
            World-class construction solutions engineered for high-security, high-performance 
            environments and the unique structural demands of sovereign missions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#expertise"
              className="bg-[#B8860B] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all"
            >
              Explore Expertise <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="expertise" className="py-32 px-6 relative bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#0B3D91] to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">Our Operational Domains</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Specialized infrastructure services tailored to the rigorous standards 
              of international diplomatic organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {constructionServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051a44] via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full">
                    <span className="text-[#0B3D91] text-[10px] font-bold uppercase tracking-widest">{service.category}</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#0B3D91]/10 flex items-center justify-center mb-6 group-hover:bg-[#0B3D91] transition-colors duration-500">
                    {service.icon && <service.icon className="w-6 h-6 text-[#0B3D91] group-hover:text-white" />}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 group-hover:text-[#0B3D91] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <button className="flex items-center gap-2 text-[#0B3D91] text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                    Mission Briefing <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Charter Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80"
              alt="Architectural Precision"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#051a44]/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0B3D91] font-bold text-xs tracking-[0.4em] uppercase mb-6 block">The Quality Charter</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-gray-900">
              Precision. Security. <br />
              <span className="text-[#0B3D91]">Operational Integrity.</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed font-medium">
              We specialize in delivering secure and sustainable infrastructure for diplomatic 
              and government institutions, ensuring every structural element meets the 
              highest standards of sovereign safety.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Diplomatic-grade security standards',
                'Sustainable & LEED-ready builds',
                'Advanced structural engineering',
                'Seamless mission delivery',
                'Bilateral compliance expertise',
                'Secure supply chain management'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-[#0B3D91]/10 flex items-center justify-center border border-[#0B3D91]/20 group-hover:bg-[#0B3D91] transition-all">
                    <CheckCircle2 className="w-3 h-3 text-[#0B3D91] group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-700">{item}</span>
                </div>
              ))}
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-gray-900">
            Initiate Your <br />
            <span className="text-[#0B3D91]">Infrastructure Mission</span>
          </h2>
          <p className="text-gray-600 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
            Partner with a team that delivers structural excellence and unwavering security 
            at every stage of the diplomatic construction lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => router.push('/#contact')}
              className="w-full sm:w-auto bg-[#0B3D91] text-white px-12 py-5 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-[#0B3D91]/30 transition-all flex items-center justify-center gap-3"
            >
              Request Secure Proposal <ArrowRight size={20} />
            </button>
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto bg-gray-100 text-gray-900 border border-gray-300 px-12 py-5 rounded-2xl font-bold hover:bg-gray-200 transition-all"
            >
              View Other Pillars
            </button>
          </div>
        </motion.div>
      </section>
      <ContactSection />
<Footer />
    </div>
  );
}
