"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes—if you have a live product and early revenue. We focus on companies ready to systemize growth, not pre-revenue ideation.",
  },
  {
    question: "What tools do you specialize in?",
    answer: "We're platform-agnostic but have deep experience with HubSpot, Salesforce, Pipedrive, Zapier, Make, Looker Studio, and modern data stacks. We recommend tools based on your needs—not partnerships.",
  },
  {
    question: "How quickly will we see results?",
    answer: "Most clients see process improvements within 30 days (e.g., faster lead response, cleaner data). Revenue impact typically compounds over 90–180 days as systems mature.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Absolutely. We sign mutual NDAs before sharing sensitive business details.",
  },
  {
    question: "What if we need to pause or cancel?",
    answer: "Monthly engagements can be paused or canceled with 30 days' notice. Project scopes include clear milestones and exit criteria.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative py-24 md:py-32 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.02] to-transparent" />
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 text-sm text-white/50">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-amber-300">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-colors hover:border-white/[0.15]">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="text-lg font-medium text-white/90">{faq.question}</span>
                <ChevronDown className={cn("w-5 h-5 text-white/50 transition-transform duration-300", openIndex === i ? "rotate-180" : "")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-white/50 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
