"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Building2, Shield, Globe, Briefcase } from "lucide-react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    title: "Embassy Chancery Modernization",
    category: "Infrastructure",
    desc: "A comprehensive structural and technical overhaul of a 5,000 sqm diplomatic facility, integrating advanced security and modern administrative suites.",
    icon: Building2
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    title: "Executive Diplomatic Suites",
    category: "Mission Support",
    desc: "Premium interior fit-out for ambassadorial offices, featuring secure communication infrastructure and bespoke ceremonial furnishings.",
    icon: Briefcase
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    title: "Residency Perimeter Landscaping",
    category: "Facility Management",
    desc: "Strategic landscape design for a diplomatic residency, balancing aesthetic prestige with high-level perimeter security requirements.",
    icon: Globe
  },
  {
    src: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=1200&q=80",
    title: "Compound Surveillance Integration",
    category: "Security",
    desc: "Deployment of an enterprise-grade CCTV and biometric access control network across a multi-building diplomatic compound.",
    icon: Shield
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80",
    title: "Bilateral State Reception",
    category: "Events",
    desc: "Strategic event management and secure catering for a high-level bilateral state dinner hosting international delegations.",
    icon: Globe
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    title: "Mission-Critical IT Infrastructure",
    category: "Technology",
    desc: "Establishment of a secure server environment and encrypted network infrastructure to support mission-critical diplomatic communications.",
    icon: Shield
  },
];

const categories = ["All Operations", "Infrastructure", "Security", "Technology", "Mission Support", "Events"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All Operations");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeCategory === "All Operations"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />
      <div className="absolute -right-48 top-0 w-[600px] h-[600px] bg-[#0B3D91]/5 rounded-full blur-[120px]" />
      <div className="absolute -left-48 bottom-0 w-[600px] h-[600px] bg-[#B8860B]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B8860B] font-bold text-xs tracking-[0.3em] uppercase"
          >
            Mission Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#0B3D91] mt-4 mb-6"
          >
            Excellence in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#0B3D91]/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed"
          >
            A visual record of our commitment to delivering high-precision support 
            and operational security for sovereign missions globally.
          </motion.p>
        </div>

        {/* Professional Filter System */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#0B3D91] text-white border-[#0B3D91] shadow-lg shadow-[#0B3D91]/20"
                  : "bg-white text-[#0B3D91]/60 border-[#0B3D91]/10 hover:bg-[#0B3D91]/5 hover:text-[#0B3D91]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Prestigious Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <motion.div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white shadow-xl shadow-[#0B3D91]/5 border border-[#0B3D91]/10 hover:border-[#B8860B]/50 transition-all duration-500"
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedImage(galleryItems.indexOf(item))}
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Sophisticated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91] via-[#0B3D91]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* View Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-4 h-4 text-[#B8860B]" />
                        <span className="text-[#B8860B] text-[10px] font-bold tracking-[0.2em] uppercase">{item.category}</span>
                      </div>
                      <h4 className="text-white font-serif font-bold text-xl">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Diplomatic Lightbox Experience */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#051a44]/98 backdrop-blur-2xl p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
              onClick={() => setSelectedImage(null)}
              whileHover={{ rotate: 90 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="lg:w-2/3 relative h-[400px] lg:h-[600px]">
                <img
                  src={galleryItems[selectedImage].src}
                  alt={galleryItems[selectedImage].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-[#0B3D91]/90 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                    Official Record #{selectedImage + 1024}
                  </span>
                </div>
              </div>

              {/* Detail Sidebar */}
              <div className="lg:w-1/3 p-10 flex flex-col justify-center bg-white border-l border-[#0B3D91]/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0B3D91]/5 flex items-center justify-center">
                    {(() => {
                      const Icon = galleryItems[selectedImage].icon;
                      return <Icon className="w-6 h-6 text-[#0B3D91]" />;
                    })()}
                  </div>
                  <span className="text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase">
                    {galleryItems[selectedImage].category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-[#0B3D91] mb-6">
                  {galleryItems[selectedImage].title}
                </h3>
                
                <div className="h-px w-20 bg-[#B8860B]/30 mb-6" />
                
                <p className="text-[#0B3D91]/70 text-lg leading-relaxed font-medium mb-10">
                  {galleryItems[selectedImage].desc}
                </p>

                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="w-full py-4 bg-[#0B3D91] text-white font-bold rounded-xl shadow-lg hover:shadow-[#0B3D91]/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Return to Portfolio
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}