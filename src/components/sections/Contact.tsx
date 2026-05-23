"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Calendar,
  Clock,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  { icon: Calendar, num: "01", label: "Choose your time" },
  { icon: Clock, num: "02", label: "30 min discussion" },
  { icon: MessageSquare, num: "03", label: "Share your vision" },
];

function ContactCard() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const openCalPopup = () => {
    const globalCal = (window as any).Cal;
    if (typeof globalCal !== "undefined") {
      globalCal("init", {
        calLink: "sloane-jnr/project-discussion",
        config: { layout: "month_view", theme: "dark" },
      });
      globalCal("ui", {
        styles: { branding: { brandColor: "#FF5733" } },
        hideEventTypeDetails: false,
      });
      globalCal("open");
    } else {
      window.open("https://cal.com/sloane-jnr/project-discussion", "_blank");
    }
  };

  return (
    <section id="contact" className="bg-[#080807] px-6 lg:px-10 py-20">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between pb-6 border-b border-[#1a1a1a] mb-12">
        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
          006 / Contact
        </span>
        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
          Book a call
        </span>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 border border-[#1a1a1a]">
        {/* Left — heading + CTA */}
        <div className="flex flex-col justify-between p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400"
            >
              006 / Let's talk
            </motion.span>

            {/* Word-by-word heading kept from original */}
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {["Ready to", "build something", "extraordinary?"].map(
                (word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="font-syne font-extrabold text-3xl lg:text-4xl xl:text-5xl text-white leading-tight"
                  >
                    {i === 1 ? (
                      <>
                        <span className="text-[#FF5733]">{word}</span>
                      </>
                    ) : (
                      word
                    )}
                  </motion.span>
                ),
              )}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="font-mono text-sm text-[#555] leading-[1.85] max-w-sm"
            >
              Schedule a free 30-minute call and let's discuss how we can work
              together to bring your project to life.
            </motion.p>
          </div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-12"
          >
            <motion.button
              onClick={openCalPopup}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 bg-[#FF5733] hover:opacity-90 transition-opacity text-white font-syne font-bold text-sm tracking-wide px-8 py-4 rounded-sm overflow-hidden w-full sm:w-auto justify-center"
            >
              {/* Shimmer on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                initial={{ x: "-200%" }}
                animate={isHovering ? { x: "200%" } : { x: "-200%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              <motion.span
                animate={isHovering ? { rotate: [0, -10, 10, -5, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <PhoneCall className="w-4 h-4" />
              </motion.span>

              <span className="relative z-10">Book your call</span>

              <motion.span
                animate={isHovering ? { x: [0, 4, 0] } : {}}
                transition={{
                  duration: 0.4,
                  repeat: isHovering ? Infinity : 0,
                }}
                className="relative z-10"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </motion.button>

            <p className="font-mono text-[12px] tracking-[0.12em] uppercase text-zinc-400 mt-4">
              No commitment required · Free consultation
            </p>
          </motion.div>
        </div>

        {/* Right — steps */}
        <div className="flex flex-col divide-y divide-[#1a1a1a]">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="group flex items-center gap-6 p-8 lg:p-10 hover:bg-[#0d0d0c] transition-colors duration-200 cursor-default"
            >
              {/* Number */}
              <span className="font-syne font-extrabold text-4xl text-[#FF5733]/10 group-hover:text-[#FF5733]/20 transition-colors duration-200 select-none w-12 flex-shrink-0">
                {step.num}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center border border-[#222] group-hover:border-[#FF5733]/30 transition-colors duration-200 rounded-sm flex-shrink-0">
                <step.icon className="w-4 h-4 text-zinc-400 group-hover:text-[#FF5733]/70 transition-colors duration-200" />
              </div>

              {/* Label */}
              <div className="flex flex-col gap-1">
                <span className="font-syne font-bold text-base text-white leading-none">
                  {step.label}
                </span>
                <span className="font-mono text-[12px] tracking-[0.15em] uppercase text-zinc-400">
                  Step {step.num}
                </span>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="w-3.5 h-3.5 text-[#222] group-hover:text-[#FF5733]/40 transition-colors duration-200 ml-auto flex-shrink-0" />
            </motion.div>
          ))}

          {/* Bottom meta cell */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="p-8 lg:p-10 flex items-center justify-between mt-auto"
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
                Response time
              </span>
              <span className="font-mono text-sm text-[#FF5733]">
                Within 24 hours
              </span>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
                Timezone
              </span>
              <span className="font-mono text-sm text-[#777]">
                GMT+0 · Accra, Ghana
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactCard);
