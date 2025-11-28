"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    company: "Leading innovative startup solutions in San Francisco",
    content:
      "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations. The attention to detail and innovative solutions provided were beyond what we imagined possible.",
    image: "/images/Profile-Pic.jpg",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Marketing Solutions Inc.",
    content:
      "The attention to detail and creative solutions provided were exceptional. Highly recommended! Their understanding of our brand and market positioning was impressive, leading to outstanding results.",
    image: "/images/Profile-Pic.jpg",
  },
  {
    name: "Emma Davis",
    role: "Product Manager",
    company: "Tech Innovations Ltd",
    content:
      "Outstanding work on our web application. The final product was exactly what we envisioned. The team's ability to translate our requirements into a functional and beautiful product was remarkable.",
    image: "/images/Profile-Pic.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload adjacent images
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

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex]
  );

  return (
    <section
      id="testimonials"
      className="min-h-screen py-12 sm:py-16 lg:py-20 bg-[#080807] overflow-hidden flex flex-col"
    >
      <div className="container mx-auto px-4 mb-8 sm:mb-12 lg:mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#D1D1C7]">
            Testimonials
          </h2>
          <p className="text-[#D1D1C7] text-base sm:text-lg font-inter">
            What clients say about my work
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Image Section - Left on Desktop */}
            <div className="w-full flex items-center justify-center lg:justify-end order-1">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                <div className="relative aspect-square sm:aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: isTransitioning ? 0.5 : 1 }}
                    loading="lazy"
                    width="600"
                    height="720"
                  />

                  {/* Mobile Navigation Buttons (Overlayed on Image) */}
                  <div className="absolute inset-0 flex items-center justify-between px-2 sm:hidden">
                    <button
                      onClick={prevTestimonial}
                      className="p-1 bg-black/40 rounded-full hover:bg-black/60 transition-colors"
                      aria-label="Previous testimonial"
                      disabled={isTransitioning}
                    >
                      <ChevronLeft className="w-5 h-5 text-white opacity-80" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-1 bg-black/40 rounded-full hover:bg-black/60 transition-colors"
                      aria-label="Next testimonial"
                      disabled={isTransitioning}
                    >
                      <ChevronRight className="w-5 h-5 text-white opacity-80" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Right on Desktop */}
            <div className="w-full order-2 flex items-center">
              <div
                className="space-y-6 sm:space-y-8 text-center lg:text-left px-4 sm:px-0 max-w-xl lg:max-w-none transition-opacity duration-500"
                style={{ opacity: isTransitioning ? 0.5 : 1 }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-[#D1D1C7] leading-relaxed">
                  "{currentTestimonial.content}"
                </p>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#D1D1C7]">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-[#D1D1C7] text-sm sm:text-base">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-[#D1D1C7] text-xs sm:text-sm">
                    {currentTestimonial.company}
                  </p>
                </div>

                {/* Navigation Controls - Visible on larger screens */}
                <div className="hidden sm:flex justify-center lg:justify-start items-center gap-6 pt-4">
                  <div className="flex gap-3 sm:gap-4">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 sm:p-3 bg-white/10 rounded-full transition-colors hover:bg-white/20"
                      aria-label="Previous testimonial"
                      disabled={isTransitioning}
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#D1D1C7]" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 sm:p-3 bg-white/10 rounded-full transition-colors hover:bg-white/20"
                      aria-label="Next testimonial"
                      disabled={isTransitioning}
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#D1D1C7]" />
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex gap-2 sm:gap-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (!isTransitioning) {
                            setIsTransitioning(true);
                            setActiveIndex(index);
                            setTimeout(() => setIsTransitioning(false), 500);
                          }
                        }}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                          index === activeIndex ? "bg-white" : "bg-white/30"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        disabled={isTransitioning}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
