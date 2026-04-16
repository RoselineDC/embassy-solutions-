"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
type Props = {
    content: React.ReactNode;
};

export default function ServicePageClient({ content }: Props) {
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
        <div>
            {/* Navbar */}
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
                        className={`cursor-pointer text-lg sm:text-lg leading-tights font-bold font-sans upercase tracking-wide transition-colors  ${
              scrolled ? "text-black/90" : "text-transparent "
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

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center gap-6 lg:hidden">
                    {sections.map((sec) => (
                        <button
                            key={sec}
                            onClick={() => handleScroll(sec)}
                            className="text-white text-2xl font-semibold"
                        >
                            {sec.charAt(0).toUpperCase() + sec.slice(1)}
                        </button>
                    ))}
                </div>
            )}

            {/* Page Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {content}
            </main>
            <Footer />
        </div>
    );
}