"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    title: "Embassy Headquarters Renovation",
    category: "Construction",
    desc: "Complete renovation of a 5,000 sqm embassy facility including modern offices and conference halls.",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "Modern Office Interiors",
    category: "Renovation",
    desc: "Premium interior design and fit-out for diplomatic office spaces with state-of-the-art furnishings.",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    title: "Ambassador Residence Landscaping",
    category: "Landscaping",
    desc: "Complete garden redesign with indigenous plants, irrigation systems, and outdoor entertainment areas.",
  },
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
    title: "Olympic-Size Pool Construction",
    category: "Pool Construction",
    desc: "Custom-built swimming pool with heating systems, safety features, and landscaping integration.",
  },
  {
    src: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&q=80",
    title: "Security System Installation",
    category: "Security",
    desc: "Comprehensive CCTV and alarm system deployment across a diplomatic compound.",
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    title: "State Gala Dinner",
    category: "Events",
    desc: "Full event management and catering for a presidential delegation dinner hosting 200+ guests.",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    title: "Electrical Infrastructure Upgrade",
    category: "Electrical",
    desc: "Complete electrical overhaul including generator systems and UPS installations for embassy buildings.",
  },
  {
    src: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c322?w=800&q=80",
    title: "Diplomatic Fleet Service",
    category: "Chauffeur",
    desc: "Premium vehicle fleet management and professional chauffeur services for diplomatic missions.",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    title: "IT Infrastructure Deployment",
    category: "IT Services",
    desc: "Enterprise-grade network setup, server rooms, and cybersecurity systems for embassy operations.",
  },
];

const categories = ["All", "Construction", "Renovation", "Landscaping", "Pool Construction", "Security", "Events", "Electrical", "Chauffeur", "IT Services"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#faf8f3]">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase">Our Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] mt-3 mb-5">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c9a84c] to-[#a88a3a]">
              Gallery
            </span>
          </h2>
          <p className="text-[#0a1628]/60 max-w-2xl mx-auto text-lg">
            Explore our completed projects across diplomatic missions — showcasing the quality and precision we bring to every engagement.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#0a1628] text-[#c9a84c] shadow-lg"
                  : "bg-white text-[#0a1628]/50 hover:bg-[#0a1628]/5 border border-[#0a1628]/10"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Gallery Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <motion.div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(i)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[#c9a84c] text-xs font-semibold tracking-wider uppercase">{item.category}</span>
                      <h4 className="text-white font-bold text-lg mt-1">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a1628]/95 backdrop-blur-xl p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="max-w-4xl w-full bg-[#132038] rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-96">
                <img
                  src={galleryItems[selectedImage].src}
                  alt={galleryItems[selectedImage].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[#c9a84c] text-xs font-semibold tracking-wider uppercase">{galleryItems[selectedImage].category}</span>
                <h3 className="text-white font-bold text-xl mt-1">{galleryItems[selectedImage].title}</h3>
                <p className="text-white/50 text-sm mt-2">{galleryItems[selectedImage].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}