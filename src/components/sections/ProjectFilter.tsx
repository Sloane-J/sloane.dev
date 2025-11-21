"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  image: string
}

interface ProjectFilterProps {
  projects: Project[]
  onFilter: (filtered: Project[]) => void
}

export default function ProjectFilter({ projects, onFilter }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  // Get unique tags from all projects
  const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))]

  const handleFilter = (tag: string) => {
    setActiveFilter(tag)
    if (tag === "All") {
      onFilter(projects)
    } else {
      const filtered = projects.filter((project) => project.tags.includes(tag))
      onFilter(filtered)
    }
  }

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === tag ? "bg-white text-[#121212]" : "bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]"
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      {/* Optional: Show active filter indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-4 text-gray-400">
        Showing: {activeFilter}
      </motion.div>
    </div>
  )
}

