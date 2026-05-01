"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Our Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/60 backdrop-blur-xl px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="relative w-32 h-12 md:w-36 md:h-14">
              <div
                className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-rose-400"
                style={{
                  maskImage: 'url(/logo-without-word.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskImage: 'url(/logo-without-word.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center'
                }}
              />
            </div>
            <span className="sr-only">Raveact</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="#contact"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-sm font-medium text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow">
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/60 hover:text-white p-1">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 rounded-2xl border border-white/[0.08] bg-black/80 backdrop-blur-xl overflow-hidden"
            >
              <div className="p-4 space-y-3">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                    className="block text-sm text-white/50 hover:text-white py-2 transition-colors">
                    {link.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-sm font-medium text-white mt-2">
                  Book a Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
