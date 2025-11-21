"use client";

import { motion } from "framer-motion";
import { Laptop, Search, Rocket, PenTool, Database } from "lucide-react";

const services = [
  {
    title: "Front-End Web Development",
    icon: Laptop,
    iconColor: "#FF5733", // Orange
    description:
      "Custom web applications built with modern frameworks and best practices.",
    tools: "React, Astrojs, TypeScript, Tailwind CSS, Framer Motion, Hugo",
  },
  {
    title: "SEO Optimization",
    icon: Search,
    iconColor: "#4CAF50", // Green
    description:
      "Improve your website's visibility and ranking in search engines.",
    tools: "Google Analytics, SEMrush, Ahrefs",
  },
  {
    title: "Wireframe Design",
    icon: PenTool,
    iconColor: "#E91E63", // Pink
    description: "User-centered design solutions that enhance user experience.",
    tools: "Figma",
  },
  {
    title: "Full-Stack Development",
    icon: Database,
    iconColor: "#2196F3", // Blue
    description: "Robust and scalable backend solutions for your applications.",
    tools: "Nodejs, Laravel, PHP, MySql, Adonisjs, Supabase, Inertia, Livewire",
  },
];

export default function Services() {
  // Animation variants for staggered card animation from left
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for text content from right
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="min-h-screen bg-[#080807] flex flex-col">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Services
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-inter">
              Comprehensive solutions for your digital needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[600px]">
            {/* Left side - Service Cards (7 columns) */}
            <motion.div
              className="lg:col-span-7 grid sm:grid-cols-2 gap-5 lg:gap-6"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gradient-to-br from-[#232323] to-[#1a1a1a] rounded-lg p-5 hover:from-[#2a2a2a] hover:to-[#232323] transition-all duration-300 border border-gray-800 hover:border-gray-700 shadow-lg"
                >
                  <div
                    className="mb-4 inline-flex p-3 rounded-lg"
                    style={{ backgroundColor: `${service.iconColor}15` }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: service.iconColor }}
                    />
                  </div>
                  <h3 className="text-lg lg:text-xl text-white font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm mb-3 opacity-90 leading-relaxed font-inter">
                    {service.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-700 font-inter">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white mb-1 opacity-80">
                      Tools & Technologies
                    </p>
                    <p className="text-white text-xs opacity-75 leading-relaxed ">
                      {service.tools}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right side - Text content (5 columns) */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:space-y-8"
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={textItemVariants}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
              >
                Elevate Your Digital Presence
              </motion.h3>

              <motion.p
                variants={textItemVariants}
                className="text-white text-base lg:text-lg opacity-90 leading-relaxed font-inter"
              >
                In today's competitive landscape, your digital presence is more
                important than ever. I provide end-to-end solutions that help
                businesses stand out and achieve their goals.
              </motion.p>

              <motion.p
                variants={textItemVariants}
                className="text-white text-base lg:text-lg opacity-90 leading-relaxed font-inter"
              >
                From conceptualization to deployment, I handle every aspect of
                the development process with meticulous attention to detail and
                a focus on delivering exceptional results.
              </motion.p>

              <motion.p
                variants={textItemVariants}
                className="text-white text-base lg:text-lg opacity-90 leading-relaxed font-inter"
              >
                Every project is approached with a strategic mindset, ensuring
                that the solutions I provide not only meet your immediate needs
                but also support your long-term business objectives.
              </motion.p>
              <motion.div
                variants={textItemVariants}
                className="pt-4 flex justify-center"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-400 text-white px-5 py-2.5 rounded-full font-semibold text-sm md:text-base hover:from-orange-400 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Start Your Project
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
