"use client";

import { motion } from "framer-motion";
import { Globe2, Landmark, Rocket, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const profiles = [
  {
    icon: Rocket,
    title: "Growth-Stage SaaS (Series A–C)",
    description:
      "You've found product-market fit—but scaling feels messy. We help you systemize revenue, automate operations, and build a repeatable growth engine.",
    gradient: "from-indigo-500/20 to-violet-500/20",
    borderGlow: "group-hover:shadow-indigo-500/10",
  },
  {
    icon: Globe2,
    title: "Companies Expanding into New Markets",
    description:
      "Launching in a new region, vertical, or customer tier? We de-risk expansion with localized GTM strategy, pricing adaptation, and partnership frameworks.",
    gradient: "from-rose-500/20 to-pink-500/20",
    borderGlow: "group-hover:shadow-rose-500/10",
  },
  {
    icon: Landmark,
    title: "Traditional Businesses Going Digital",
    description:
      "Banks, logistics firms, enterprises adopting subscription or SaaS models. We bridge legacy operations with modern revenue systems.",
    gradient: "from-amber-500/20 to-orange-500/20",
    borderGlow: "group-hover:shadow-amber-500/10",
  },
];

export function ICPSection() {
  return (
    <section id="clients" className="relative py-24 md:py-32 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.02] to-transparent" />

      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 text-sm text-white/50">
            <Target className="w-3.5 h-3.5" />
            Who We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for B2B Companies{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-amber-300">
              Ready to Scale
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {profiles.map((profile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={cn(
                "group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/[0.15]",
                profile.borderGlow,
                "hover:shadow-2xl"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  profile.gradient
                )}
              />

              <div className="relative">
                <profile.icon className="w-10 h-10 text-white/70 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {profile.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {profile.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        </div>
    </section>
  );
}
