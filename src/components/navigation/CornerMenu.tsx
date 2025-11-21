"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function CornerMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href, name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Corner Menu Button - All Screen Sizes */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed top-6 right-6 md:top-8 md:right-8 z-50 font-inter"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.button
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-xl border transition-all duration-300 ${
                isMenuOpen
                  ? "bg-white/10 border-white/20 shadow-2xl shadow-black/40"
                  : "bg-[#121212]/80 border-white/10 hover:bg-white/5 hover:border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="w-5 h-5 text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Subtle pulse animation */}
              <motion.div
                className="absolute inset-0 rounded-full border border-orange-400"
                animate={
                  isMenuOpen
                    ? {}
                    : { scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full sm:w-1/2 bg-[#121212]/95 backdrop-blur-xl border-l border-white/10 z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10">
                <motion.h2
                  className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                />
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 flex flex-col justify-center px-6 md:px-8 -mt-8">
                <nav className="space-y-4 md:space-y-6">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.name.toLowerCase();
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href, item.name)}
                        className="group flex items-center gap-6 md:gap-8 w-full text-left"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex-1 min-w-0">
                          <motion.h3
                            className={`text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 ${
                              isActive
                                ? "text-white"
                                : "text-gray-300 group-hover:text-white"
                            }`}
                            whileHover={{ scale: 1.02 }}
                          >
                            {item.name}
                          </motion.h3>

                          {/* Active indicator line */}
                          <motion.div
                            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1"
                            initial={false}
                            animate={{
                              scaleX: isActive ? 1 : 0,
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ originX: 0 }}
                          />
                        </div>

                        {/* Number indicator */}
                        <motion.div
                          className={`text-base md:text-lg font-light transition-colors ${
                            isActive
                              ? "text-blue-400"
                              : "text-gray-600 group-hover:text-gray-400"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.4,
                          }}
                        >
                          0{index + 1}
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Footer */}
              <motion.div
                className="p-6 md:p-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-gray-400 text-xs md:text-sm">
                  Use{" "}
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs">
                    ESC
                  </kbd>{" "}
                  to close
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
