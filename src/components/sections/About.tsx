"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: "easeOut" },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay } },
});

const meta = [
  { label: "Focus", value: "Full stack & Mobile" },
  {
    label: "Status",
    value: (
      <>
        <span className="text-[#FF5733]">Open</span> to work
      </>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#080807] px-6 lg:px-10 py-20">
      {/* Top bar */}
      <div className="flex items-center justify-between pb-6 border-b border-[#1a1a1a] mb-12 max-w-6xl mx-auto">
        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
          003 / About me
        </span>
        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
          Samuel Dorkey
        </span>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 border border-[#1a1a1a]">
        {/* Left — photo */}
        <motion.div
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden min-h-[400px] lg:min-h-[560px]"
        >
          <img
            src="/images/Profile-Pic.jpg"
            alt="Samuel Dorkey Jr — Software Developer"
            className="w-full h-full object-cover object-top absolute inset-0"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x800/111111/333333?text=Samuel";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent" />
          <span className="absolute bottom-5 left-5 font-mono text-[12px] tracking-[0.15em] uppercase text-[#555]">
            Samuel D. Jr — Accra, Ghana
          </span>
        </motion.div>

        {/* Right — content */}
        <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-[#1a1a1a]">
          {/* Bio block */}
          <div className="flex flex-col gap-5 p-8 lg:p-10 border-b border-[#1a1a1a]">
            <motion.span
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400"
            >
              003 / About
            </motion.span>

            <motion.h2
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-syne font-extrabold text-3xl lg:text-4xl text-white leading-none"
            >
              Software
              <span className="text-[#FF5733]"> Developer</span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-mono text-sm text-zinc-400 leading-[1.85]"
            >
              I build full stack web apps, mobile applications, and
              production-ready digital products. I care about clean
              architecture, fast performance, and shipping things that actually
              work.
            </motion.p>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 flex-1">
            {meta.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(0.28 + i * 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-col gap-1.5 p-6 lg:p-8
                  ${i % 2 === 0 ? "border-r border-[#1a1a1a]" : ""}
                  ${i < 2 ? "border-b border-[#1a1a1a]" : ""}
                `}
              >
                <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
                  {item.label}
                </span>
                <span className="font-mono text-sm text-[#777]">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <motion.div
            variants={fadeUp(0.45)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-3 p-8 lg:p-10 border-t border-[#1a1a1a]"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FF5733] hover:opacity-85 transition-opacity text-white font-syne font-bold text-sm tracking-wide px-6 py-3.5 rounded-sm"
            >
              Start a project →
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-[#222] hover:border-[#444] hover:text-white transition-colors text-[#555] font-mono text-[12px] tracking-[0.08em] px-6 py-3.5 rounded-sm"
            >
              See my work ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
