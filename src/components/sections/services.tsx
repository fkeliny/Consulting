"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Database,
  Globe,
  LineChart,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Zap,
    title: "Automation & RevOps",
    description:
      "Stop managing tools. Start scaling systems. We connect your sales, marketing, and customer success stack so revenue operations run on autopilot.",
    features: [
      "CRM architecture & automation (HubSpot, Salesforce, Pipedrive)",
      "Lead routing, scoring, and nurture workflows",
      "Cross-tool integrations (Zapier, Make, native APIs)",
      "RevOps documentation & team enablement",
    ],
    outcome: "30–50% reduction in manual ops work; faster sales cycles.",
    gradient: "from-indigo-500 to-violet-600",
    delay: 0,
  },
  {
    icon: TrendingUp,
    title: "Revenue Strategy",
    description:
      "Turn intuition into a scalable revenue engine. Pricing, positioning, and pipeline design backed by data—not guesswork.",
    features: [
      "Pricing & packaging strategy (value-based, tiered, usage-based)",
      "Sales playbook: stages, exit criteria, forecasting model",
      "CAC/LTV optimization & unit economics review",
      "Revenue dashboards (MRR, churn, expansion, pipeline health)",
    ],
    outcome: "Clear path to 2–3x revenue growth with predictable metrics.",
    gradient: "from-rose-500 to-pink-600",
    delay: 0.1,
  },
  {
    icon: Target,
    title: "Go-To-Market Strategy",
    description:
      "Launch with confidence. Scale with clarity. Whether you're introducing a new product, entering a new segment, or repositioning your brand—we build GTM plans that convert.",
    features: [
      "ICP definition & messaging framework",
      "Channel strategy: PLG, sales-led, partner-led, or hybrid",
      "Launch roadmap: timelines, owners, success metrics",
      "Competitive positioning & differentiation strategy",
    ],
    outcome: "Faster time-to-revenue; higher win rates; clearer market fit.",
    gradient: "from-amber-500 to-orange-600",
    delay: 0.2,
  },
  {
    icon: BarChart3,
    title: "Data & Growth Analytics",
    description:
      "Make decisions with confidence—not hope. We help you track what matters and act on insights that move revenue.",
    features: [
      "Growth KPI framework (leading vs. lagging indicators)",
      "Custom dashboards (Looker Studio, Power BI, Metabase)",
      "Attribution modeling & conversion funnel analysis",
      "Data hygiene & pipeline infrastructure",
    ],
    outcome: "Faster decision cycles; fewer \"gut feel\" calls; measurable ROI.",
    gradient: "from-cyan-500 to-teal-600",
    delay: 0.3,
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  outcome,
  gradient,
  delay,
}: (typeof services)[0] & { outcome?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04]">
        {/* Gradient glow on hover */}
        <div
          className={cn(
            "absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20",
            `bg-gradient-to-br ${gradient}`
          )}
        />

        <div
          className={cn(
            "inline-flex p-3 rounded-xl bg-gradient-to-br mb-6",
            gradient
          )}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white/50 leading-relaxed mb-6 text-sm">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/40">
              <div className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {outcome && (
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] mb-6">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1 block">Outcome</span>
            <p className="text-sm text-white/80">{outcome}</p>
          </div>
        )}

        <motion.div
          className="mt-6 flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors cursor-pointer"
          whileHover={{ x: 5 }}
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.03] to-transparent" />

      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 text-sm text-white/50">
            <Settings className="w-3.5 h-3.5" />
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What We{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
              Deliver
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
