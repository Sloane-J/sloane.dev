"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  ArrowRight,
  Clock,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactCard() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Function to open Cal.com popup
  const openCalPopup = () => {
    if (typeof window.Cal !== "undefined") {
      Cal("init", {
        calLink: "sloane-jnr/project-discussion",
        config: {
          layout: "month_view",
          theme: "dark",
        },
      });
      Cal("ui", {
        styles: { branding: { brandColor: "#ea580c" } },
        hideEventTypeDetails: false,
      });
      Cal("open");
    } else {
      console.log("Cal.com embed script not loaded yet");
      window.open("https://cal.com/sloane-jnr/project-discussion", "_blank");
    }
  };

  // Staggered text animation for heading
  const headingWords = "Ready To Build Something Extraordinary?".split(" ");

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden bg-[#080807]"
    >
      {/* Animated gradient background with CSS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 animate-gradient-slow" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-4 md:px-8 lg:px-20 max-w-7xl w-full mx-auto text-center flex flex-col items-center justify-center"
      >
        {/* Sparkle icon with CSS animations */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            delay: 0.2,
          }}
          className="mb-6"
        >
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center animate-spin-slow">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse-scale" />
            </div>

            {/* Glow effect with CSS */}
            <div className="absolute inset-0 rounded-full bg-orange-500 blur-xl -z-10 animate-glow" />
          </div>
        </motion.div>

        {/* Heading with word-by-word animation */}
        <div className="mb-6 md:mb-8 overflow-hidden">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08 + 0.3,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="text-3xl md:text-5xl lg:text-7xl font-bold text-white inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 md:mb-16 px-4 font-inter"
        >
          Let's turn your vision into reality. Schedule a call and let's discuss
          how we can work together.
        </motion.p>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 w-full max-w-4xl"
        >
          {[
            {
              icon: Calendar,
              text: "Choose Your Time",
              color: "from-orange-600 to-orange-500",
            },
            {
              icon: Clock,
              text: "30 Min Discussion",
              color: "from-orange-500 to-orange-400",
            },
            {
              icon: MessageSquare,
              text: "Share Your Vision",
              color: "from-orange-600 to-orange-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 1.1 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-orange-500/30 overflow-hidden">
                {/* Hover gradient effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, rgba(234, 88, 12, 0.1) 0%, transparent 100%)`,
                  }}
                />

                <div className={`inline-flex bg-gradient-to-br ${item.color} p-4 rounded-xl mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <p className="text-gray-200 text-base md:text-lg font-medium relative z-10">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 1.4,
            type: "spring",
            stiffness: 150,
          }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          className="relative w-full max-w-md"
        >
          <motion.button
            onClick={openCalPopup}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-inter relative w-full py-5 md:py-6 px-8 md:px-10 rounded-full font-bold flex items-center justify-center gap-4 text-xl md:text-2xl transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 text-white group overflow-hidden shadow-2xl shadow-orange-500/20"
          >
            {/* Shimmer effect with CSS */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 ${isHovering ? 'animate-shimmer' : '-translate-x-full'}`} />

            <div className={`flex-shrink-0 relative z-10 transition-transform duration-300 ${isHovering ? 'animate-phone-ring' : ''}`}>
              <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
            </div>

            <span className="relative z-10 font-semibold text-sm sm:text-base">
              Book Your Call Now
            </span>

            <div className={`flex-shrink-0 relative z-10 transition-transform duration-300 ${isHovering ? 'animate-arrow-bounce' : ''}`}>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
            </div>

            {/* Button glow with CSS */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 blur-xl opacity-50 animate-button-glow -z-10" />
          </motion.button>

          {/* Pulsing rings with CSS */}
          {isHovering && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 border-2 border-orange-500 rounded-full animate-ping-ring" style={{ animationDelay: '0s' }} />
              <div className="absolute inset-0 border-2 border-orange-500 rounded-full animate-ping-ring" style={{ animationDelay: '0.3s' }} />
              <div className="absolute inset-0 border-2 border-orange-500 rounded-full animate-ping-ring" style={{ animationDelay: '0.6s' }} />
            </div>
          )}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 text-gray-500 text-sm md:text-base font-inter"
        >
          No commitment required · Free consultation · Let's explore
          possibilities
        </motion.p>
      </motion.div>

      <style>{`
        @keyframes gradient-slow {
          0%, 100% {
            background: radial-gradient(circle at 20% 50%, rgba(234, 88, 12, 0.08) 0%, transparent 50%);
          }
          33% {
            background: radial-gradient(circle at 80% 50%, rgba(234, 88, 12, 0.08) 0%, transparent 50%);
          }
          66% {
            background: radial-gradient(circle at 50% 80%, rgba(234, 88, 12, 0.08) 0%, transparent 50%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-200%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        @keyframes phone-ring {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }

        @keyframes arrow-bounce {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes button-glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }

        @keyframes ping-ring {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .animate-gradient-slow {
          animation: gradient-slow 15s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 0.8s ease-in-out;
        }

        .animate-phone-ring {
          animation: phone-ring 0.5s ease-in-out;
        }

        .animate-arrow-bounce {
          animation: arrow-bounce 0.6s ease-in-out infinite;
        }

        .animate-button-glow {
          animation: button-glow 1.5s ease-in-out infinite;
        }

        .animate-ping-ring {
          animation: ping-ring 2s ease-out infinite;
        }
      `}</style>
    </section>
  );
}
