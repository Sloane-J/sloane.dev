"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.4,
          delay: shouldReduceMotion ? 0 : i * 0.08,
          ease: "easeOut",
        },
      }),
    }),
    [shouldReduceMotion],
  );

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex flex-col bg-[#080807] px-6 lg:px-10"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between py-7 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5733]" />
          <span className="font-syne font-bold text-sm text-white tracking-wide">
            Samuel Dorkey
          </span>{" "}
        </div>
        <div className="flex items-center gap-2 font-mono text-[12px] tracking-[0.12em] uppercase text-[#555]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
          Available for work
        </div>
      </div>

      {/* Main Structural Frame */}
      <div className="flex-1 flex flex-col justify-center border-x border-[#1a1a1a] py-20">
        <div className="max-w-5xl w-full mx-auto flex flex-col gap-10 px-4 lg:px-8">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial={false}
            animate="visible"
            className="flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-[#FF5733]"
          >
            <div className="w-10 h-px bg-[#333]" />
            001 / Introduction
          </motion.span>

          {/* Single line name layout */}
          <motion.h1
            id="hero-heading"
            custom={1}
            variants={fadeUp}
            initial={false}
            animate="visible"
            className="font-syne font-extrabold text-[clamp(2.2rem,6vw,5.5rem)] leading-none text-white tracking-tight"
          >
            Samuel <span className="text-[#FF5733]">Dorkey</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial={false}
            animate="visible"
            className="flex items-center gap-4 w-full max-w-2xl"
          >
            <span className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#777] sm:whitespace-nowrap">
              Software Developer
            </span>
            <div className="flex-1 h-px bg-[#1e1e1e]" />
            <span className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#777] sm:whitespace-nowrap">
              Ghana
            </span>
          </motion.div>

          {/* Expanded layout text width to balance the missing image */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial={false}
            animate="visible"
            className="font-mono text-sm text-zinc-400 leading-[1.8] max-w-xl"
          >
            Software developer with 4+ years shipping across design and code —
            from educational platforms and management systems to indie web
            systems.
            <br />
            <br />
            Currently freelance. Building cohesive, production-ready software
            for underserved markets: financial tools, educational platforms, and
            retail systems. Open-source work includes Legdr, Acadex, Expiro — and more.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial={false}
            animate="visible"
            className="flex flex-wrap gap-3 pt-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FF5733] hover:opacity-85 transition-opacity text-white font-syne font-bold text-sm tracking-wide px-6 py-3.5 rounded-sm"
            >
              Start a project →
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-[#222] hover:border-[#444] hover:text-white transition-colors text-[#555] font-mono text-[12px] tracking-[0.1em] px-6 py-3.5 rounded-sm"
            >
              Explore work ↓
            </a>
          </motion.div>

          {/* Sub-meta metrics replacing original profile details */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial={false}
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#1a1a1a]"
          >
            {[
              { label: "Based in", value: "Accra, Ghana" },
              {
                label: "Specialisation",
                value: "Laravel · React · Supabase . AstroJS",
              },
              { label: "Status", value: "Open to freelance & contracts" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-4000">
                  {item.label}
                </span>
                <span className="font-mono text-sm text-[#777]">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between py-5 border-t border-[#1a1a1a]">
        <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-zinc-400">
          <div className="w-10 h-px bg-[#333]" />
          Scroll to explore
        </div>
        <div className="flex flex-wrap gap-2">
          {["React", "Astro", "TypeScript", "Supabase"].map((tag) => (
            <span
              key={tag}
              className="font-mono text-[12px] tracking-wide text-zinc-400 border border-[#1e1e1e] px-2.5 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
