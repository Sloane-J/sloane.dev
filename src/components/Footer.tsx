"use client";

import { memo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Sloane-J", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/sloanejnr", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/samueldorkey9a88901bb/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:samueldorkeyjr@gmail.com", label: "Email" },
];

const quickLinks = [
  { name: "About", href: "#about", num: "01" },
  { name: "Services", href: "#services", num: "02" },
  { name: "Projects", href: "#projects", num: "03" },
  { name: "Contact", href: "#contact", num: "04" },
];

function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080807] px-6 lg:px-10 pb-12 pt-4">
      {/* Structural Brutalist Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 border border-[#1a1a1a]">
        {/* Left Column — Brand Hero */}
        <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#FF5733]">
              007 / Brand
            </span>

            {/* Word-by-word typography match */}
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {["Sloane", "Design", "Studio."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="font-syne font-extrabold text-3xl lg:text-4xl text-white leading-none"
                >
                  {i === 0 ? (
                    <span className="text-[#FF5733]">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </div>

            <p className="font-mono text-sm text-[#555] leading-[1.85] max-w-sm mt-2">
              Crafting high-performance digital architecture that integrates
              structural programming with minimal, balanced aesthetics.
            </p>
          </div>

          <div className="mt-12 lg:mt-0">
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400 block mb-2">
              Status
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733] animate-pulse" />
              <span className="font-mono text-sm text-white">
                Available for new projects
              </span>
            </div>
          </div>
        </div>

        {/* Center Column — Quick Links Grid Section */}
        <div className="lg:col-span-3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
          <div className="p-6 border-b border-[#1a1a1a]">
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
              Navigation
            </span>
          </div>
          <div className="flex flex-col divide-y divide-[#1a1a1a] flex-1">
            {quickLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="group flex items-center justify-between p-5 hover:bg-[#0d0d0c] transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] text-zinc-400 group-hover:text-[#FF5733]/50 transition-colors">
                    {link.num}
                  </span>
                  <span className="font-syne font-bold text-sm text-white group-hover:text-[#FF5733] transition-colors">
                    {link.name}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#222] group-hover:text-[#FF5733]/60 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column — Social Links Matrix */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="p-6 border-b border-[#1a1a1a] flex items-center justify-between">
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
              Connect Ecosystem
            </span>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-[#1a1a1a] border-b border-[#1a1a1a] lg:border-b-0 flex-1">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onHoverStart={() => setHoveredSocial(i)}
                onHoverEnd={() => setHoveredSocial(null)}
                className="group relative flex flex-col justify-between p-6 hover:bg-[#0d0d0c] transition-colors overflow-hidden min-h-[110px]"
              >
                {/* Micro-shimmer on grid cell hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5733]/5 to-transparent -skew-x-12"
                  initial={{ x: "-200%" }}
                  animate={hoveredSocial === i ? { x: "200%" } : { x: "-200%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                <div className="flex items-center justify-between w-full">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a] group-hover:border-[#FF5733]/30 bg-[#080807] transition-colors rounded-sm">
                    <social.icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#FF5733] transition-colors" />
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#222] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <span className="font-mono text-sm text-[#555] group-hover:text-white transition-colors block mt-4">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Core Action Cell */}
          <button
            onClick={scrollToTop}
            className="group w-full p-5 bg-[#0d0d0c] hover:bg-[#121211] border-t border-[#1a1a1a] flex items-center justify-between transition-colors font-mono text-[12px] tracking-[0.2em] uppercase text-[#555] hover:text-[#FF5733]"
          >
            <span>Back to architecture apex</span>
            <div className="w-7 h-7 flex items-center justify-center border border-[#1a1a1a] group-hover:border-[#FF5733]/30 rounded-sm transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#FF5733] transition-colors" />
            </div>
          </button>
        </div>
      </div>

      {/* Ground-level Meta Information */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
        <p className="font-mono text-[12px] tracking-wide text-zinc-400">
          © {new Date().getFullYear()} Samuel Dorkey Jr
        </p>
        <div className="flex items-center gap-6 font-mono text-[12px]">
          <a
            href="#"
            className="text-zinc-400 hover:text-[#FF5733] transition-colors tracking-wide"
          >
            Privacy Context
          </a>
          <span className="text-[#1a1a1a] select-none">/</span>
          <a
            href="#"
            className="text-zinc-400 hover:text-[#FF5733] transition-colors tracking-wide"
          >
            Terms Protocol
          </a>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
