"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Building2, Shield, Globe, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    images: [
  
      "/school.jpeg",
      "/school2.jpeg",
      "/school3.jpeg",
      "/school4.jpeg",
      "/school5.jpeg",
      "/construction1.jpeg",
      "/school6.jpeg"
    ],
    title: "Diplomatic Facility Construction",
    category: "Infrastructure",
    desc: "End-to-end construction of embassy and government facilities with secure structural systems and mission-ready infrastructure delivery.",
    icon: Building2
  },
  {
    images: [
      "/cupboars2.jpeg",
      "/cupboards3.jpeg",
      "/construction2.jpeg",
      "/construction3.jpeg",
    ],
    title: "Building Maintenance & Refurbishment",
    category: "Maintenance",
    desc: "Ongoing maintenance and refurbishment of diplomatic offices and residences to ensure operational efficiency and structural integrity.",
    icon: Briefcase
  },
  {
    images: [
      "/heroslide1.png",
      "/transport.jpg",
    ],
    title: "Secure Transport & Site Logistics",
    category: "Transport",
    desc: "Coordinated transport planning and logistics management for diplomatic sites, ensuring secure access and operational movement.",
    icon: Globe
  },
  {
    images: [
      "/camera.jpeg",
      "/6.png",
    ],
    title: "Government CCTV Surveillance Systems",
    category: "Infrastructure",
    desc: "Design and installation of integrated CCTV surveillance systems across government and embassy compounds for enhanced perimeter security.",
    icon: Shield
  },
  {
    images: [
      "/roof1.jpeg",
      "/roof2.jpeg",
      "/roof3.jpeg",
      "/roof4.jpeg",
      "/roof5.jpeg",
      "/roof6.jpeg",
      "/roof7.jpeg",


    ],
    title: "Diplomatic Facility Maintenance Operations",
    category: "Maintenance",
    desc: "Comprehensive maintenance operations for diplomatic facilities, including structural repairs, system upgrades, and preventive care to ensure mission readiness.",
    icon: Globe
  },
  {
    images: [
   "/track1.jpeg",
    ],
    title: "Secure Communications & Network Systems",
    category: "Transport",
    desc: "Deployment of secure communication and travel monitoring supporting diplomatic transport coordination and mission operations.",
    icon: Shield
  },
];

const categories = ["All Operations", "Infrastructure", "Maintenance", "Transport"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All Operations");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const filtered = activeCategory === "All Operations"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (itemIndex: number) => {
    setSelectedImage(itemIndex);
    setSlideIndex(0);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSlideIndex(0);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const total = galleryItems[selectedImage].images.length;
    setSlideIndex((prev) => (prev + 1) % total);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const total = galleryItems[selectedImage].images.length;
    setSlideIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />
      <div className="absolute -right-48 top-0 w-[600px] h-[600px] bg-[#0B3D91]/5 rounded-full blur-[120px]" />
      <div className="absolute -left-48 bottom-0 w-[600px] h-[600px] bg-[#B8860B]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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

        {/* Filter Buttons */}
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

        {/* Gallery Grid */}
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
                  onClick={() => openLightbox(galleryItems.indexOf(item))}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Image count badge */}
                    {item.images.length > 1 && (
                      <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-[10px] font-bold tracking-wider">
                        1 / {item.images.length}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91] via-[#0B3D91]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
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

      {/* Lightbox with Slideshow */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#051a44]/98 backdrop-blur-2xl p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 z-10"
              onClick={closeLightbox}
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
              {/* Slideshow Panel */}
              <div className="lg:w-2/3 relative h-[400px] lg:h-[600px] bg-black overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slideIndex}
                    src={galleryItems[selectedImage].images[slideIndex]}
                    alt={`${galleryItems[selectedImage].title} ${slideIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                  />
                </AnimatePresence>

                {/* Record Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-[#0B3D91]/90 backdrop-blur-md border border-white/20 rounded-full z-10">
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                    Official Record #{selectedImage + 1024}
                  </span>
                </div>

                {/* Slide Counter */}
                {galleryItems[selectedImage].images.length > 1 && (
                  <div className="absolute top-6 right-6 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full z-10">
                    <span className="text-white text-xs font-bold">
                      {slideIndex + 1} / {galleryItems[selectedImage].images.length}
                    </span>
                  </div>
                )}

                {/* Prev / Next Arrows */}
                {galleryItems[selectedImage].images.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all z-10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Dot Indicators */}
                {galleryItems[selectedImage].images.length > 1 && (
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
                    {galleryItems[selectedImage].images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setSlideIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === slideIndex ? "bg-white w-5" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                )}
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
                  onClick={closeLightbox}
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