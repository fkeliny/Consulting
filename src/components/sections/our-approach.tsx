"use client";

import { motion } from "framer-motion";
import { Compass, Brain, Cog, TrendingUp } from "lucide-react";
import ElectricBorder from "@/components/ui/electric-border";

const steps = [
  {
    number: "1",
    title: "Data-First Diagnosis",
    description: "We don’t guess. We audit your current funnel, tech stack, and unit economics to identify exactly where revenue is leaking. We start with facts, not assumptions.",
    icon: Brain,
  },
  {
    number: "2",
    title: "Systemic Automation",
    description: "Manual processes don’t scale. We design automated workflows that connect your marketing, sales, and success tools, removing human error and freeing your team to sell.",
    icon: Cog,
  },
  {
    number: "3",
    title: "Iterative Optimization",
    description: "Growth isn’t a one-time launch. We implement feedback loops and dashboards that allow us to test, measure, and refine your strategy every month for compounding results.",
    icon: TrendingUp,
  },
];

export function OurApproachSection() {
  return (
    <section id="approach" className="relative py-24 md:py-32 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 text-sm text-white/50">
            <Compass className="w-3.5 h-3.5" />
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Strategy + Systems + <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-amber-300">Execution.</span><br />
            We don’t just advise, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">We build.</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            We believe sustainable revenue comes from aligning three core pillars. This is how we think about every engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="h-full">
              <ElectricBorder
                color="#6A3093"
                speed={1.2}
                chaos={0.09}
                thickness={2}
                style={{ borderRadius: 16 }}
                className="h-full"
              >
                <div className="relative h-full p-8 rounded-2xl border border-white/[0.08] bg-[#030303]/90 hover:bg-white/[0.04] transition-colors group">
                  <div className="p-3 bg-white/[0.05] rounded-xl w-fit mb-6 text-indigo-400">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
