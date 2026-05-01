"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Automation & RevOps", href: "#services" },
    { label: "Revenue Strategy", href: "#services" },
    { label: "GTM Consulting", href: "#services" },
    { label: "Data & Analytics", href: "#services" },
  ],
  company: [
    { label: "How We Work", href: "#how-we-work" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.05]">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative w-36 h-16 md:w-44 md:h-20">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-rose-400"
                  style={{
                    maskImage: 'url(/logo-with-word.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'left center',
                    WebkitMaskImage: 'url(/logo-with-word.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'left center'
                  }}
                />
              </div>
              <span className="sr-only">Raveact</span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm mb-6">
              We help B2B companies automate operations, optimize revenue, and execute go-to-market strategies that scale. Turning complexity into predictable growth.
            </p>
            <p className="text-white/20 text-xs">© 2026 Raveact. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/60 mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}><a href={link.href} className="text-sm text-white/30 hover:text-white/60 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/60 mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}><a href={link.href} className="text-sm text-white/30 hover:text-white/60 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/40 hover:text-white hover:bg-white/[0.1] transition-all z-50 backdrop-blur-sm">
        <ArrowUp className="w-4 h-4" />
      </motion.a>
    </footer>
  );
}
