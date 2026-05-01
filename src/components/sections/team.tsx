"use client";

import { motion } from "framer-motion";
import { Briefcase, Database, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Fady",
    role: "CEO / CTO",
    experience: [
      { icon: Briefcase, text: "6 years SaaS + DaaS experience" },
      { icon: Database, text: "2 years Data Management" },
    ],
    gradient: "from-indigo-500 to-violet-600",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "George",
    role: "COO / CRO",
    experience: [
      { icon: Award, text: "6 years SaaS Sales in GCC" },
      { icon: Briefcase, text: "Enterprise relationship expert" },
    ],
    gradient: "from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const stats = [
  { value: "12+", label: "Years Combined Experience" },
  { value: "50/50", label: "Equal Partnership" },
  { value: "GCC", label: "Regional Focus" },
  { value: "100%", label: "Client Success Commitment" },
];

export function TeamSection() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 text-sm text-white/50">
            <Award className="w-3.5 h-3.5" />
            The Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Revenue + Data{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">Expertise</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">Two co-founders with complementary skills: deep data expertise meets GCC sales mastery.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {team.map((member, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center transition-all duration-500 hover:border-white/[0.15]">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-white/20 transition-all">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                <div className={cn("absolute inset-0 bg-gradient-to-t opacity-30", member.gradient)} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className={cn("text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r mb-6", member.gradient)}>{member.role}</p>
              <div className="space-y-3">
                {member.experience.map((exp, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/50 justify-center">
                    <exp.icon className="w-4 h-4 text-white/30 shrink-0" />
                    {exp.text}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">{stat.value}</p>
              <p className="text-xs text-white/30 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
