"use client";
import React, { useState, useEffect, useMemo, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PhoneIncoming, ArrowDown } from "lucide-react";

// Optimized Button Component with variants
interface ButtonProps {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Button = memo(({ href, variant, children, icon }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 lg:gap-3 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 text-sm md:text-base font-medium transition-all duration-300 focus:outline-none w-auto";

  const variantClasses = {
    primary: "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-md hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-orange-500/70",
    secondary: "border border-gray-700 bg-black/40 text-gray-300 backdrop-blur-md hover:bg-black/60 hover:text-white hover:border-gray-500 hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-500/50"
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      <span className="font-inter whitespace-nowrap">{children}</span>
      {icon}
    </a>
  );
});

Button.displayName = "Button";

// Simplified RotatingText with fade animation only
interface RotatingTextProps {
  texts: string[];
  className?: string;
  rotationInterval?: number;
}

const RotatingText = memo(({ texts, className = "", rotationInterval = 3000 }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval, shouldReduceMotion]);

  return (
    <span className={`relative inline-block ${className}`}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rotating-text {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
      <span key={currentIndex} className="rotating-text">
        {texts[currentIndex]}
      </span>
    </span>
  );
});

RotatingText.displayName = "RotatingText";

// Cached profile image component
const profilePicSrc = "/images/Profile-Pic.jpg";

const ProfileImage = memo(({ size, className, priority = false }: { size: string; className: string; priority?: boolean }) => (
  <img
    src={profilePicSrc}
    alt="Samuel - Full Stack Developer"
    className={className}
    loading={priority ? "eager" : "lazy"}
    width={size === "small" ? "44" : "320"}
    height={size === "small" ? "44" : "320"}
  />
));

ProfileImage.displayName = "ProfileImage";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Memoized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: shouldReduceMotion ? "none" : "beforeChildren",
      },
    },
  }), [shouldReduceMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }), []);

  const imageVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }), []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#080807] relative"
      aria-labelledby="hero-heading"
    >
      {/* Logo Image (Top-Left) */}
      <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
        <ProfileImage
          size="small"
          className="w-10 h-10 lg:w-11 lg:h-11 object-cover rounded-full"
          priority={true}
        />
      </div>

      {/* Text (Top-Right) */}
      <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
        <h3 className="text-3xl lg:text-4xl font-saint mb-0 text-white">
          Sloane
        </h3>
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8 lg:space-y-12 text-center lg:text-left"
            variants={containerVariants}
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              {/* Available badge - hidden on mobile */}
              <div className="hidden lg:inline-block mb-8 px-4 py-2 bg-[#171717] rounded-full border border-gray-600/30">
                <span className="flex items-center gap-1 text-sm text-white font-medium">
                  Available for new works
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 lg:mb-8"
              >
                Hi, I am Samuel
              </h1>

              {/* Full Stack Dev + Rotating Text INLINE */}
              <div className="mb-6 lg:mb-8">
                <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-300">
                    Full Stack Developer Crafting
                  </span>
                  <RotatingText
                    texts={[
                      "Scalable Apps",
                      "Modern Websites",
                      "User Experiences",
                      "Digital Solutions",
                    ]}
                    className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-orange-500 drop-shadow-[0_2px_6px_rgba(234,88,12,0.6)]"
                    rotationInterval={3000}
                  />
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start items-center sm:items-start"
            >
              <Button
                href="#contact"
                variant="primary"
                icon={<PhoneIncoming className="w-4 h-4 md:w-5 md:h-5" />}
              >
                Take The First Step
              </Button>

              <Button
                href="#projects"
                variant="secondary"
                icon={<ArrowDown className="w-4 h-4 md:w-5 md:h-5" />}
              >
                Explore My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            animate="visible"
            transition={{ duration: 0.3}}
          >
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#171717] ring-offset-4 ring-offset-[#0C0E0C] transition-all duration-300 group-hover:ring-gray-600">
                <ProfileImage
                  size="large"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={true}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}