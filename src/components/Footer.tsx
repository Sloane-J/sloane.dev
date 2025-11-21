"use client";

import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp,
  ExternalLink,
  Heart,
  Code,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sloane-J",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/sloanejnr",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/samueldorkey9a88901bb/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: Mail,
      href: "mailto:samueldorkeyjr@gmail.com",
      label: "Email",
      color: "hover:text-orange-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="min-h-[50vh] flex flex-col relative overflow-hidden bg-[#080807]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
              {/* Left Section - Brand & Description */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-5 space-y-6"
              >
                <div>
                  <h3 className="text-4xl lg:text-5xl font-saint mb-4 text-white">
                    Sloane
                  </h3>
                  <p className="text-[#D1D1C7] font-inter text-lg lg:text-xl opacity-90 leading-relaxed mb-6">
                    Crafting digital experiences that inspire and engage. Let's
                    build something amazing together.
                  </p>
                </div>
              </motion.div>

              {/* Center Section - Quick Links */}
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <h4 className="text-xl font-semibold mb-6 text-[#D1D1C7]">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-[#D1D1C7] text-lg opacity-75 hover:opacity-100 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300 font-inter">
                          {link.name}
                        </span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right Section - Social Links & CTA */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-4 space-y-8"
              >
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-[#D1D1C7]">
                    Let's Connect
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 group  font-inter ${social.color}`}
                      >
                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium text-[#D1D1C7] group-hover:text-current transition-colors duration-300">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Section - Copyright */}
            <motion.div
              variants={itemVariants}
              className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-inter"
            >
              <p className="text-[#D1D1C7] opacity-60 text-sm">
                © {new Date().getFullYear()} Samuel Dorkey Jr. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#"
                  className="text-[#D1D1C7] opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-[#D1D1C7] opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
