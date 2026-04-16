'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const services = [
  {
    title: 'New Embassy Construction',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156',
  },
  {
    title: 'Renovation & Modernization',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  },
  {
    title: 'Security Infrastructure',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
  },
  {
    title: 'Interior Fit-Out',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
  },
  {
    title: 'Design-Build',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
  },
  {
    title: 'Project Delivery',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
  },
];

type Props = {
  content: React.ReactNode;
};


export default function Construction() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sections = ["home", "services", "gallery", "contact"];

  // Handle scroll navigation
  const handleScroll = (id: string) => {
    setIsMobileOpen(false);

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  // Scroll + active section detection
  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 30);

      if (pathname === "/") {
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.getBoundingClientRect().top <= 120) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [pathname]);

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          setActive(hash);
        }, 100);
      }
    }
  }, []);
  return (
    <div className="bg-white text-gray-900">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-gray-200/50"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
            <span className="text-[#04142c] font-black text-sm tracking-tight">
              <Image
                src="/white-logo.png"
                alt="logo"
                width={60}
                height={16}
                className="object-contain"
                onClick={() => router.push("/")}
              />
            </span>
          </div>
          <div className="hidden sm:block">
            <p
              className={`cursor-pointer text-lg sm:text-lg leading-tights font-bold font-sans upercase tracking-wide transition-colors  ${scrolled ? "text-black/90" : "text-transparent "
                }`}
              onClick={() => router.push("/")}>
              Embassy Solutions
            </p>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {sections.map((sec) => {
              const isActive = active === sec;

              return (
                <button
                  key={sec}
                  onClick={() => handleScroll(sec)}
                  className="relative px-4 py-2 text-sm font-medium group"
                >
                  <span
                    className={`transition-colors duration-300 ${isActive
                      ? "text-[#051a44]"
                      : scrolled
                        ? "text-gray-600 group-hover:text-blue-500"
                        : "text-transparent "
                      }`}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </span>

                  {/* Animated underline */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 rounded-full bg-orange-500 transition-all duration-300 ${isActive ? "w-8" : "w-0 group-hover:w-6"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 transition-all ${scrolled ? "bg-black" : "bg-white"
                  }`}
              />
              <span
                className={`block h-0.5 transition-all ${scrolled ? "bg-black" : "bg-white"
                  }`}
              />
              <span
                className={`block h-0.5 transition-all ${scrolled ? "bg-black" : "bg-white"
                  }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Luxury Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Diplomatic
            <br /> Excellence
          </h1>
          <p className="text-white/90 max-w-2xl text-lg mb-8">
            World-class construction solutions designed for high-security, high-performance environments.
          </p>
          <a
            href="/#services"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            Explore Services <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                </div>

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <a >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-125 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Architecture"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Precision. Security. Excellence.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in delivering secure and sustainable infrastructure for diplomatic and government institutions.
            </p>

            <ul className="space-y-4">
              {[
                'Diplomatic-grade security standards',
                'Sustainable & LEED-ready builds',
                'Advanced structural engineering',
                'Seamless project delivery'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Build Something Exceptional
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Partner with a team that delivers excellence at every stage of construction.
        </p>

        <Link
          href="/#contact"
          className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition inline-block"
        >
          Request Proposal
        </Link>
      </section>

    </div>
  );
}