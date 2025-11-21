export interface Skill {
    name: string
    level: number // 0-100
    category: "frontend" | "backend" | "design" | "tools"
    icon?: string
    color?: string
    featured: boolean
  }
  
  export interface SkillCategory {
    name: string
    description: string
    skills: Skill[]
  }
  
  export const skills: SkillCategory[] = [
    {
      name: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        {
          name: "React",
          level: 90,
          category: "frontend",
          icon: "react",
          color: "#61DAFB",
          featured: true,
        },
        {
          name: "TypeScript",
          level: 85,
          category: "frontend",
          icon: "typescript",
          color: "#3178C6",
          featured: true,
        },
        {
          name: "Next.js",
          level: 88,
          category: "frontend",
          icon: "nextjs",
          color: "#000000",
          featured: true,
        },
        {
          name: "Tailwind CSS",
          level: 92,
          category: "frontend",
          icon: "tailwind",
          color: "#38B2AC",
          featured: true,
        },
        {
          name: "Vue.js",
          level: 80,
          category: "frontend",
          icon: "vue",
          color: "#4FC08D",
          featured: false,
        },
      ],
    },
    {
      name: "Backend Development",
      description: "Creating robust and scalable server-side applications",
      skills: [
        {
          name: "Node.js",
          level: 85,
          category: "backend",
          icon: "nodejs",
          color: "#339933",
          featured: true,
        },
        {
          name: "Python",
          level: 80,
          category: "backend",
          icon: "python",
          color: "#3776AB",
          featured: true,
        },
        {
          name: "PostgreSQL",
          level: 82,
          category: "backend",
          icon: "postgresql",
          color: "#336791",
          featured: true,
        },
        {
          name: "MongoDB",
          level: 85,
          category: "backend",
          icon: "mongodb",
          color: "#47A248",
          featured: true,
        },
      ],
    },
    {
      name: "Design Tools",
      description: "Creating beautiful and intuitive user interfaces",
      skills: [
        {
          name: "Figma",
          level: 85,
          category: "design",
          icon: "figma",
          color: "#F24E1E",
          featured: true,
        },
        {
          name: "Adobe XD",
          level: 80,
          category: "design",
          icon: "xd",
          color: "#FF61F6",
          featured: false,
        },
        {
          name: "Photoshop",
          level: 75,
          category: "design",
          icon: "photoshop",
          color: "#31A8FF",
          featured: false,
        },
      ],
    },
    {
      name: "Development Tools",
      description: "Tools and technologies for efficient development",
      skills: [
        {
          name: "Git",
          level: 88,
          category: "tools",
          icon: "git",
          color: "#F05032",
          featured: true,
        },
        {
          name: "Docker",
          level: 75,
          category: "tools",
          icon: "docker",
          color: "#2496ED",
          featured: true,
        },
        {
          name: "AWS",
          level: 78,
          category: "tools",
          icon: "aws",
          color: "#232F3E",
          featured: true,
        },
      ],
    },
  ]
  
  export const getFeaturedSkills = () => {
    return skills.map((category) => ({
      ...category,
      skills: category.skills.filter((skill) => skill.featured),
    }))
  }
  
  export const getSkillsByCategory = (category: Skill["category"]) => {
    return skills.flatMap((skillCategory) => skillCategory.skills).filter((skill) => skill.category === category)
  }
  
  export const getAllSkills = () => {
    return skills.flatMap((category) => category.skills)
  }
  
  export const getSkillByName = (name: string) => {
    return getAllSkills().find((skill) => skill.name === name)
  }
  
  