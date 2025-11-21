"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {/* Main background color - glossy dark finish */}
      <div className="absolute inset-0" />

      {/* Animated Radial Background Gradient - moving orange glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(234, 88, 12, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(234, 88, 12, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(234, 88, 12, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(234, 88, 12, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
