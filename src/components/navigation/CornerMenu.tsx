"use client";

import { useState, useEffect, memo } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", num: "01" },
  { name: "About", href: "#about", num: "02" },
  { name: "Services", href: "#services", num: "03" },
  { name: "Projects", href: "#projects", num: "04" },
  { name: "Testimonials", href: "#testimonials", num: "05" },
  { name: "Contact", href: "#contact", num: "06" },
];

function CornerMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const handleNavClick = (href: string, name: string) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const overlayRoot = typeof document !== "undefined" ? document.body : null;

  return (
    <>
      {/* Trigger Button (stays in normal DOM) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed top-6 right-6 md:top-8 md:right-8 z-50"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
          >
            <motion.button
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.96 }}
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border rounded-sm bg-[#080807] border-[#1a1a1a] text-white"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PORTAL LAYER (fix for all overlay bugs) */}
      {mounted &&
        isMenuOpen &&
        overlayRoot &&
        createPortal(
          <AnimatePresence>
            {/* Backdrop Layer */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              style={{ zIndex: 9990 }}
            />

            {/* Drawer Layer */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#080807] border-l border-[#1a1a1a] flex flex-col justify-between overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              style={{ zIndex: 9991 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-[#0d0d0c] border-b border-[#1a1a1a]">
                <span className="font-mono text-[12px] tracking-[0.25em] uppercase text-zinc-400">
                  Index / Navigation Matrix
                </span>
                <span className="font-mono text-[12px] text-zinc-400">
                  [ESC] CLOSE
                </span>
              </div>

              {/* Nav */}
              <nav className="flex flex-col divide-y divide-[#1a1a1a] border-b border-[#1a1a1a]">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.name.toLowerCase();

                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href, item.name)}
                      className="flex items-center justify-between p-6 w-full text-left hover:bg-[#0d0d0c]"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <div className="flex items-center gap-5">
                        <span
                          className={`font-mono text-[12px] ${
                            isActive ? "text-[#FF5733]" : "text-[#2a2a29]"
                          }`}
                        >
                          {item.num}
                        </span>
                        <span
                          className={`text-xl font-bold ${
                            isActive ? "text-[#FF5733]" : "text-white"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                    </motion.button>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="p-6 bg-[#0d0d0c] text-[12px] font-mono text-zinc-400">
                SYSTEM ONLINE
              </div>
            </motion.div>
          </AnimatePresence>,
          overlayRoot,
        )}
    </>
  );
}

export default memo(CornerMenu);
