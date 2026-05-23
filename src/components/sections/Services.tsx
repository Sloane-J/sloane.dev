"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Fast, accessible interfaces built for production — not just prototypes.",
    tools: ["React", "Astro", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "#FF5733",
  },
  {
    num: "02",
    title: "Full Stack Development",
    description:
      "End-to-end apps from database to UI, shipped and maintained in production.",
    tools: ["Node.js", "Supabase", "PostgreSQL", "Hono", "Laravel"],
    accent: "#2196F3",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "Cross-platform apps with offline support and native device integrations.",
    tools: ["React Native", "Expo", "PWA", "SQLite"],
    accent: "#E91E63",
  },
  {
    num: "04",
    title: "SEO & Deployment",
    description:
      "Structured data, sitemaps, Core Web Vitals, and zero-downtime deploys.",
    tools: ["Vercel", "Cloudflare", "Schema.org", "Search Console"],
    accent: "#4CAF50",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section id="services" className="bg-[#080807] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#FF5733] opacity-80 mb-4 font-mono">
            What I do
          </p>
          <h2 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none text-white">
            Services &<br />
            <span className="text-[#FF5733]">expertise</span>
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#222]">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-[#080807] hover:bg-[#111] transition-colors duration-200 p-10 flex flex-col gap-4 border-b border-r border-[#222]"
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: service.accent }}
                  role="presentation"
                  aria-label={`${service.title} indicator`}
                />                  className="w-2 h-2 rounded-full"
                  style={{ background: service.accent }}
                />
              </div>

              <h3 className="font-syne text-xl font-bold text-white leading-snug">
                {service.title}
              </h3>

              <p className="font-mono text-sm text-[#888] leading-relaxed">
                {service.description}
              </p>

              <div className="mt-auto pt-5 border-t border-[#1e1e1e] flex flex-wrap gap-1.5">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[12px] tracking-wide text-[#555] group-hover:text-[#888] border border-[#222] group-hover:border-[#333] px-2 py-1 rounded-sm transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FF5733] hover:opacity-85 transition-opacity text-white font-syne font-bold text-sm tracking-wide px-7 py-3.5 rounded-sm"
          >
            <Rocket className="w-4 h-4" />
            Start a project
          </a>
          <span className="font-mono text-[11px] tracking-widest text-zinc-400">
            Available for freelance work
          </span>
        </motion.div>
      </div>
    </section>
  );
}
