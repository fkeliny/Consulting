"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Map, Cog, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call (Free)",
    description: "Share your goals and challenges. We'll assess fit and outline next steps.",
  },
  {
    icon: Map,
    title: "Strategy Sprint (Week 1)",
    description: "Deep dive: audit your funnel, tools, and GTM assumptions. Deliver a prioritized roadmap.",
  },
  {
    icon: Cog,
    title: "Build & Implement (Weeks 2–8)",
    description: "We configure systems, document processes, and train your team—while you stay focused on your business.",
  },
  {
    icon: TrendingUp,
    title: "Review & Scale (Ongoing)",
    description: "Monthly performance reviews, iterative optimizations, and support as you grow.",
  },
];

const guarantees = [
  "Fixed-scope deliverables",
  "Clear communication cadence",
  "No long-term lock-in (except Revenue Partnership)",
  "All work documented & handed over",
];

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="relative py-24 md:py-32 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 text-sm text-white/50">
            <Cog className="w-3.5 h-3.5" />
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            No fluff. <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">Just results.</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-16">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="shrink-0 p-4 bg-white/[0.05] rounded-xl text-white/70">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {guarantees.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70 text-sm p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
