"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Advisory",
    label: "3-month minimum",
    price: "€2K – €5K",
    period: "/ month",
    description: "Best for leaders who need strategic clarity before committing to execution.",
    features: ["Weekly strategy sessions", "GTM, pricing, and positioning reviews", "KPI framework setup", "Tool stack audit & recommendations"],
    cta: "Apply for Advisory",
    icon: Star,
    popular: false,
  },
  {
    name: "Hands-on Consulting",
    label: "Most Popular",
    price: "€5K – €15K",
    period: "/ month",
    description: "Ideal for teams ready to implement—we build the systems, you own the outcomes.",
    features: ["Everything in Advisory", "CRM & automation setup", "Sales process documentation & enablement", "Custom dashboards & reporting", "Workflow design & team training"],
    cta: "Start Scaling",
    icon: Zap,
    popular: true,
  },
  {
    name: "Revenue Partnership",
    label: "Performance",
    price: "€3K – €10K",
    period: "base + 10% uplift*",
    description: "For leaders who want a true growth partner with aligned incentives.",
    features: ["Everything in Hands-on", "Revenue-share incentive model", "Quarterly business reviews", "Priority support & custom reporting"],
    cta: "Partner With Us",
    icon: Sparkles,
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 text-sm text-white/50">
            <Sparkles className="w-3.5 h-3.5" />
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Transparent Engagements. <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-indigo-300">No Surprises.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {tiers.map((tier, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }}
              className={cn("group relative rounded-2xl border p-8 transition-all duration-500", tier.popular ? "border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.08] to-transparent scale-[1.02] md:scale-105" : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04]")}>
              {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 text-xs font-medium text-white">{tier.label}</div>}
              <tier.icon className={cn("w-8 h-8 mb-4", tier.popular ? "text-indigo-400" : "text-white/40")} />
              <h3 className="text-lg font-semibold text-white mb-1">{tier.name}</h3>
              {!tier.popular && <span className="text-xs text-white/30 uppercase tracking-wider">{tier.label}</span>}
              <div className="my-6">
                <span className="text-3xl font-bold text-white">{tier.price}</span>
                <span className="text-white/40 text-sm ml-1">{tier.period}</span>
              </div>
              <p className="text-sm text-white/40 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                    <Check className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={cn("w-full py-3 px-6 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2", tier.popular ? "bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:shadow-lg hover:shadow-indigo-500/25" : "bg-white/[0.05] text-white/70 border border-white/[0.1] hover:bg-white/[0.08]")}>
                {tier.cta} <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-xs text-white/30 text-center mb-10">
          *Uplift calculated vs. prior 90-day baseline revenue, tracked via mutually agreed KPIs. Minimum 6-month engagement.
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Project-Based Engagements</h3>
            <p className="text-white/40 text-sm max-w-lg">For defined initiatives: GTM launch, automation overhaul, pricing redesign, or revenue audit.</p>
          </div>
          <div className="flex flex-col items-end gap-3 shrink-0">
            <div className="text-right">
              <span className="text-2xl font-bold text-white">€10K – €50K</span>
              <span className="text-white/40 text-sm ml-1">/ project</span>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="py-2 px-5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.08]">
                Discuss Your Project <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="text-center max-w-2xl mx-auto p-6 rounded-2xl bg-indigo-500/[0.05] border border-indigo-500/20">
          <p className="text-white/80 font-medium mb-4">💡 Not sure which tier fits?</p>
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 transition-colors">
            Book a free 30-min discovery call <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-white/50 text-sm ml-2">— we&apos;ll help you scope the right engagement.</span>
        </motion.div>
      </div>
    </section>
  );
}
