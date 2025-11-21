"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Globe2, ArrowDown, ExternalLink } from "lucide-react";

const skills = [
  {
    title: "Web Development",
    icon: Code2,
    description:
      "Building responsive and performant web applications using modern technologies.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Creating intuitive and beautiful user interfaces with attention to detail.",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"],
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    title: "Full Stack",
    icon: Globe2,
    description:
      "End-to-end development from database design to frontend implementation.",
    technologies: ["PostgreSQL", "MongoDB", "Express", "REST APIs"],
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
];

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="min-h-screen bg-[#080807] flex flex-col">
      {/* Header Section */}
      <div className="flex-shrink-0 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#D1D1C7]">
              About
            </h2>
            <p className="text-[#D1D1C7] text-lg md:text-xl max-w-2xl mx-auto opacity-80">
              Passionate developer crafting digital experiences
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 w-full">
          {/* Profile Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Profile Image with Enhanced Styling */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                  <img
                    src="/images/Profile-Pic.jpg"
                    alt="Samuel Dorkey Jr - Developer Profile"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/600x600/2a2a2a/white?text=Samuel+Dorkey+Jr";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Right - Enhanced Text Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Hi, I'm{" "}
                    <span className="font-playfair">Samuel Dorkey Jr</span>
                  </h3>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-[#D1D1C7] text-lg lg:text-xl leading-relaxed opacity-90 font-inter"
                >
                  Driven by a passion for design and development, I transform
                  ideas into live projects, ensuring a seamless journey that
                  delivers a powerful, positive impact on the digital world and
                  your business.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-[#D1D1C7] text-base lg:text-lg leading-relaxed opacity-80 font-inter"
                >
                  My core mission is crafting exceptional web experiences that
                  resonate with users, thanks to a keen eye for detail and a
                  commitment to user-centric principles. Beyond development, I
                  share insights through my blog and unwind with mobile gaming
                  on YouTube.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-400 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
                  >
                    Ready to get started?
                    <ArrowDown className="w-5 h-5" />
                  </a>
                  {/*  <a
                    href="/resume.pdf"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
                  >
                    View Resume
                    <ExternalLink className="w-5 h-5" />
                  </a>*/}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
