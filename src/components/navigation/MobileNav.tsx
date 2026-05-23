"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", num: "01" },
  { name: "About", num: "02" },
  { name: "Services", num: "03" },
  { name: "Projects", num: "04" },
  { name: "Testimonials", num: "05" },
  { name: "Contact", num: "06" },
];
function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - clean dark screen space mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "linear" }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Drawer Architecture Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-[300px] sm:w-[340px] bg-[#080807] border-l border-[#1a1a1a] z-55 lg:hidden flex flex-col justify-between overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Upper Frame Anchor Block */}
            <div>
              <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a] bg-[#0d0d0c]">
                <span className="font-mono text-[12px] tracking-[0.25em] uppercase text-neutral-200">
                  Menu Architecture
                </span>
                <button
                  onClick={onClose}
                  className="group w-8 h-8 flex items-center justify-center border border-[#1a1a1a] hover:border-[#FF5733]/40 bg-[#080807] transition-colors rounded-sm"
                  aria-label="Close navigation menu"
                >
                  <X className="w-3.5 h-3.5 text-[#555] group-hover:text-[#FF5733] transition-colors" />
                </button>
              </div>

              {/* Navigation Stack Matrices */}
              <nav className="flex flex-col divide-y divide-[#1a1a1a] border-b border-[#1a1a1a]">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.05,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                  >
                    <a
                      href={`#${item.name.toLowerCase()}`}
                      className="group flex items-center justify-between p-6 hover:bg-[#0d0d0c] transition-colors duration-150"
                      onClick={onClose}
                    >
                      <div className="flex items-center gap-5">
                        <span className="font-mono text-[12px] text-neutral-200 group-hover:text-[#FF5733]/50 transition-colors">
                          {item.num}
                        </span>
                        <span className="font-syne font-extrabold text-lg text-white group-hover:text-[#FF5733] transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#1a1a1a] group-hover:text-[#FF5733]/40 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                    </a>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Meta Interface Grid */}
            <div className="p-6 bg-[#0d0d0c] border-t border-[#1a1a1a] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-neutral-200">
                  Region Protocol
                </span>
                <span className="font-mono text-[12px] text-[#555]">
                  GMT+0 · Ho, GH
                </span>
              </div>
              <div className="h-[1px] bg-[#1a1a1a] w-full" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-neutral-200">
                  System Status
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#FF5733] animate-pulse" />
                  <span className="font-mono text-[12px] text-white">
                    Active Operational
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default memo(MobileNav);
