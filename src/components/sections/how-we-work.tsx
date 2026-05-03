"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Cog, Search, PenTool, Rocket, BarChart } from "lucide-react";
import ElectricBorder from "@/components/ui/electric-border";

const steps = [
  {
    icon: Search,
    title: "Phase 1: Discovery & Audit (Week 1)",
    description: "We deep-dive into your current funnel, tech stack, and GTM assumptions. We identify bottlenecks, data gaps, and quick wins.",
    deliverable: "Prioritized Growth Roadmap",
  },
  {
    icon: PenTool,
    title: "Phase 2: Design & Architecture (Weeks 2–3)",
    description: "We map out your automation workflows, define your revenue model, and craft your GTM messaging framework. No code is written yet; we blueprint the perfect system.",
    deliverable: "System Architecture & Playbooks",
  },
  {
    icon: Rocket,
    title: "Phase 3: Build & Implement (Weeks 4–8)",
    description: "We configure your CRM, set up automations (Zapier/Make), build custom dashboards, and integrate your tools. You stay focused on your business while we handle the heavy lifting.",
    deliverable: "Fully Operational Revenue Engine",
  },
  {
    icon: BarChart,
    title: "Phase 4: Optimize & Scale (Ongoing)",
    description: "We review performance monthly, iterate on what’s working, and scale what’s profitable. We turn data into decisions.",
    deliverable: "Continuous Growth & Support",
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
            From discovery to deployment in <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">4 clear phases.</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg mb-12">
            Most consulting stops at advice. We go further: we build the systems that make growth repeatable. Here is exactly what happens when you partner with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-16">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <ElectricBorder
                  color="#6A3093"
                  speed={2}
                  chaos={0.12}
                  thickness={2}
                  style={{ borderRadius: 16 }}
                >
                  <div className="flex items-start gap-6 p-6 rounded-2xl bg-[#030303]/90 border border-white/[0.08]">
                    <div className="shrink-0 p-4 bg-white/[0.05] rounded-xl text-white/70">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-white/50 mb-4">{step.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm text-indigo-400 bg-indigo-400/10 px-3 py-1.5 rounded-lg font-medium border border-indigo-400/20">
                        {step.deliverable}
                      </div>
                    </div>
                  </div>
                </ElectricBorder>
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
