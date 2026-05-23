"use client";

import { useState, useEffect, memo, useRef } from "react";
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
  const { scrollY } = useScroll();
  const menuRef = useRef<HTMLDivElement>(null);

  // Monitor viewport travel distance
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Lock body viewport layout shifts when modal initializes
  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
}, [isMenuOpen]);

  // Trap keyboard escape listener
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
    
    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Structural Trigger Button Frame */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed top-6 right-6 md:top-8 md:right-8 z-60"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.button
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="navigation-matrix-panel"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.96 }}
              className={`group w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border rounded-sm transition-colors duration-200 bg-[#080807] ${
                isMenuOpen 
                  ? "border-[#FF5733] text-[#FF5733]" 
                  : "border-[#2a2a2a] text-zinc-100 hover:border-[#FF5733]"
              }`}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Menu Layout System */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Mask Plane */}
            <motion.div
              className="fixed inset-0 bg-black/85 backdrop-blur-xs z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel Architecture */}
            <motion.div
              id="navigation-matrix-panel"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Matrix"
              className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-[#080807] border-l border-[#2a2a2a] z-50 flex flex-col justify-between overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
            >
              {/* Context Block Header */}
              <div className="flex items-center justify-between p-6 bg-[#0d0d0c] border-b border-[#2a2a2a]">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-100 font-semibold">
                  Index / Navigation Matrix
                </span>
                <span className="font-mono text-xs text-zinc-400 select-none tracking-wider font-medium">
                  [ESC] CLOSE
                </span>
              </div>

              {/* Grid Link Stack */}
              <nav className="flex flex-col divide-y divide-[#2a2a2a] border-b border-[#2a2a2a] bg-[#080807]">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.name)}
                      className="group flex items-center justify-between p-6 w-full bg-transparent hover:bg-[#0d0d0c] transition-colors duration-150 text-decoration-none"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      <div className="flex items-center gap-5">
                        <span className={`font-mono text-xs font-normal tracking-wider transition-colors duration-200 ${
                          isActive ? "text-[#FF5733]" : "text-zinc-400 group-hover:text-[#FF5733]"
                        }`}>
                          {item.num}
                        </span>
                        <span className={`font-syne font-bold text-2xl transition-colors duration-200 ${
                          isActive ? "text-[#FF5733]" : "text-zinc-100 group-hover:text-[#FF5733]"
                        }`}>
                          {item.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {isActive && (
                          <span className="font-mono text-[10px] tracking-widest text-[#FF5733] bg-[#FF5733]/10 border border-[#FF5733]/30 px-2 py-1 rounded-xs font-normal uppercase">
                            Active
                          </span>
                        )}
                        <ArrowUpRight className={`w-5 h-5 transition-all duration-200 ${
                          isActive 
                            ? "text-[#FF5733]" 
                            : "text-zinc-500 group-hover:text-[#FF5733] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`} />
                      </div>
                    </motion.a>
                  );
                })}
              </nav>

              {/* Ground Architecture Meta Interface */}
              <div className="p-6 bg-[#0d0d0c] flex flex-col gap-4 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="tracking-[0.15em] text-zinc-400 uppercase font-semibold">Identity Link</span>
                  <span className="text-zinc-100 font-medium">Samuel Dorkey Jr.</span>
                </div>
                <div className="h-[1px] bg-[#2a2a2a]" />
                <div className="flex items-center justify-between">
                  <span className="tracking-[0.15em] text-zinc-400 uppercase font-semibold">System Execution</span>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733] animate-pulse" />
                    <span className="text-zinc-100 tracking-wider font-normal">ONLINE FRAME</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(CornerMenu);