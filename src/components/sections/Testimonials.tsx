"use client";

import { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart",
    content:
      "They delivered our project on time and exceeded expectations. The attention to detail and innovative solutions were beyond what we imagined possible.",
    image: "/images/Profile-Pic.jpg",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Marketing Solutions",
    content:
      "Exceptional attention to detail and creative solutions. Their understanding of our brand and market positioning led to outstanding results.",
    image: "/images/Profile-Pic.jpg",
  },
  {
    name: "Emma Davis",
    role: "Product Manager",
    company: "Tech Innovations Ltd",
    content:
      "Outstanding work on our web application. The ability to translate requirements into a functional, beautiful product was remarkable.",
    image: "/images/Profile-Pic.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    const prevIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    preloadImage(testimonials[nextIndex].image);
    preloadImage(testimonials[prevIndex].image);
  }, [activeIndex]);

  const navigate = (dir: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(dir);
    setActiveIndex(
      (prev) => (prev + dir + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const goTo = (index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const current = useMemo(() => testimonials[activeIndex], [activeIndex]);

  return (
    <section id="testimonials" className="bg-[#080807] px-6 lg:px-10 py-20">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between pb-6 border-b border-[#1a1a1a] mb-12">
        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#FF5733]">
          004 / Testimonials
        </span>
        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 border border-[#1a1a1a]">
        {/* Left — photo */}
        <div className="relative overflow-hidden min-h-[360px] lg:min-h-[520px] border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={current.image}
              alt={current.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x800/111111/333333?text=Photo";
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent" />

          {/* Mobile nav */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 lg:hidden">
            <button
              onClick={() => navigate(-1)}
              disabled={isTransitioning}
              aria-label="Previous"
              className="w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-sm transition-colors"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => navigate(1)}
              disabled={isTransitioning}
              aria-label="Next"
              className="w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-sm transition-colors"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Right — content */}
        <div className="flex flex-col">
          {/* Quote block */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center gap-8">
            {/* Opening mark */}
            <span className="font-syne font-extrabold text-[5rem] leading-none text-[#FF5733]/10 select-none -mb-6">
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col gap-8"
              >
                <p className="font-mono text-sm text-[#888] leading-[1.9]">
                  {current.content}
                </p>

                <div className="flex flex-col gap-1">
                  <span className="font-syne font-bold text-base text-white">
                    {current.name}
                  </span>
                  <span className="font-mono text-[12px] text-[#555] tracking-wide">
                    {current.role} — {current.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav row */}
          <div className="flex items-center justify-between px-8 lg:px-10 py-6 border-t border-[#1a1a1a]">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  disabled={isTransitioning}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-0.5 rounded-none transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-[#FF5733]"
                      : "w-2 bg-[#333] hover:bg-[#555]"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="hidden lg:flex gap-2">
              <button
                onClick={() => navigate(-1)}
                disabled={isTransitioning}
                aria-label="Previous testimonial"
                className="w-9 h-9 flex items-center justify-center border border-[#222] hover:border-[#444] text-[#555] hover:text-white transition-colors rounded-sm"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => navigate(1)}
                disabled={isTransitioning}
                aria-label="Next testimonial"
                className="w-9 h-9 flex items-center justify-center border border-[#222] hover:border-[#444] text-[#555] hover:text-white transition-colors rounded-sm"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
