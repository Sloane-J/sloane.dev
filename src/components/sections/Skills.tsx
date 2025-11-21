"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2, Palette, Globe2, Terminal } from "lucide-react"

const skills = [
  {
    title: "Web Development",
    icon: Code2,
    description: "Building responsive and performant web applications using modern technologies.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100/20" // Light blue background
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive and beautiful user interfaces with attention to detail.",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"],
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100/20" // Light purple background
  },
  {
    title: "Full Stack",
    icon: Globe2,
    description: "End-to-end development from database design to frontend implementation.",
    technologies: ["PostgreSQL", "MongoDB", "Express", "REST APIs"],
    iconColor: "text-green-500",
    bgColor: "bg-green-100/20" // Light green background
  },
  {
    title: "CI/CLI Tooling",
    icon: Terminal,
    description: "Automating development workflows and managing infrastructure as code.",
    technologies: ["GitHub Actions", "Jenkins", "Docker", "Terraform"],
    iconColor: "text-amber-500",
    bgColor: "bg-amber-100/20" // Light amber background
  },
]

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: "CI/CLI Tools",
    skills: [
      { name: "GitHub Actions", level: 88 },
      { name: "Jenkins", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Terraform", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 88 },
      { name: "AWS", level: 78 },
      { name: "Figma", level: 85 },
      { name: "Jest/Testing", level: 80 },
    ],
  },
]

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
  
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.9 // Delay cards until after profile content
      }
    }
  }
  
  // Updated card variants to come from left side
  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-20 bg-[#080807]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>

        {/* Profile Section with Image Left, Text Right */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Clean Profile Image with Animation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/profile-image.jpg"
                alt="Developer Profile"
                className="w-full h-auto rounded-xl object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x600/2a2a2a/white?text=Developer+Profile";
                }}
              />
            </motion.div>

            {/* Right - Text Content with Staggered Animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Creative Developer & Designer
              </motion.h3>
              
              <motion.p variants={itemVariants} className="text-gray-300 text-lg">
                With over 5 years of experience in web development and design, I blend technical expertise with creative vision to build digital experiences that stand out.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-gray-400">
                My journey began with a passion for solving problems through code, evolving into a multidisciplinary approach that encompasses both development and design. I believe great products emerge at the intersection of technical excellence and thoughtful user experience.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                <a href="#contact" className="inline-block bg-orange-700 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors">
                  Contact Me
                </a>
                <a href="/resume.pdf" className="px-6 py-3 bg-white/10 rounded-md font-medium text-white hover:bg-white/15 transition-colors">
                  View Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Skills Section - Cards on Left, Description on Right */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-bold text-center mb-12"
        >
          Core Competencies
        </motion.h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          {/* Left Side - Skill Cards (7 columns on md screens) */}
          <motion.div 
            className="md:col-span-7 grid sm:grid-cols-2 gap-6"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                className="bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/10 hover:shadow-lg"
              >
                <div className={`mb-4 ${skill.bgColor} p-3 rounded-lg w-fit`}>
                  <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="bg-white/5 text-xs px-2 py-1 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Skills Description & Proficiency Levels (5 columns on md screens) */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-orange-400">Technical Proficiency</h3>
              <p className="text-gray-300 mb-8">
                I'm committed to continuous growth across all aspects of web development. With a focus on delivering complete solutions, I've developed expertise in both frontend interfaces and backend systems, along with the modern CI/CLI tooling needed for efficient delivery.
              </p>
              
              {/* Skill Proficiency Bars */}
              <div className="space-y-6">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={category.title} className="mb-6">
                    <h4 className="text-lg font-medium mb-4">{category.title}</h4>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300 text-sm">{skill.name}</span>
                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${
                                categoryIndex === 0 ? "bg-blue-500" :
                                categoryIndex === 1 ? "bg-green-500" :
                                categoryIndex === 2 ? "bg-amber-500" : "bg-purple-500"
                              }`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}