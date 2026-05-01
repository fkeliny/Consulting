"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.03] to-transparent" />
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 text-sm text-white/50">
              <Send className="w-3.5 h-3.5" />
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Turn Growth Into a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-indigo-300">System?</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg">Let's discuss how we can automate your operations, clarify your GTM, and scale your revenue—without the guesswork.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/50 mb-2">Name</label>
                  <input id="name" type="text" placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/50 mb-2">Work Email</label>
                  <input id="email" type="email" placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm text-white/50 mb-2">Company & Website</label>
                <input id="company" type="text" placeholder="Your company & URL"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white/50 mb-2">What's your biggest growth challenge right now? (Short answer)</label>
                <textarea id="message" rows={4} placeholder="Tell us about your challenges..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all text-sm resize-none" />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow">
                Send Message <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-white/30">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@raveact.com</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Remote-First &middot; Serving Clients Globally</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
