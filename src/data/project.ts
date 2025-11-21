export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    image: string
    tags: string[]
    category: "frontend" | "fullstack" | "mobile" | "design"
    links: {
      github?: string
      live?: string
      demo?: string
    }
    features?: string[]
    technologies: string[]
    date: string
    featured: boolean
  }
  
  export const projects: Project[] = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      longDescription: `
        A comprehensive e-commerce platform built with Next.js and TypeScript.
        Features include real-time inventory tracking, secure payment processing,
        and an intuitive admin dashboard for managing products and orders.
      `,
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      category: "fullstack",
      links: {
        github: "https://github.com",
        live: "https://example.com",
        demo: "https://demo.example.com",
      },
      features: [
        "Real-time inventory management",
        "Secure payment processing with Stripe",
        "Admin dashboard for product management",
        "Order tracking and history",
        "Customer reviews and ratings",
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
      date: "2024-01",
      featured: true,
    },
    {
      id: "ai-content-generator",
      title: "AI Content Generator",
      description: "An AI-powered application that generates high-quality content.",
      longDescription: `
        Leveraging OpenAI's GPT models, this application helps users generate
        various types of content including blog posts, social media updates,
        and marketing copy with advanced customization options.
      `,
      image: "/placeholder.svg",
      tags: ["React", "Python", "OpenAI", "Flask"],
      category: "fullstack",
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      features: [
        "Multiple content type generation",
        "Custom tone and style settings",
        "Content history and favorites",
        "Export to various formats",
        "Team collaboration features",
      ],
      technologies: ["React", "Python", "Flask", "OpenAI API", "MongoDB", "Redis"],
      date: "2023-12",
      featured: true,
    },
    {
      id: "task-management",
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates.",
      longDescription: `
        A modern task management application built for teams. Features real-time
        updates, collaborative tools, and intuitive project organization with
        advanced filtering and sorting capabilities.
      `,
      image: "/placeholder.svg",
      tags: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
      category: "frontend",
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      features: [
        "Real-time collaboration",
        "Task dependencies and timeline",
        "File attachments and sharing",
        "Team chat and comments",
        "Custom workflow automation",
      ],
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Express", "Redis"],
      date: "2023-11",
      featured: true,
    },
  ]
  
  export const getProjectsByCategory = (category: Project["category"]) => {
    return projects.filter((project) => project.category === category)
  }
  
  export const getFeaturedProjects = () => {
    return projects.filter((project) => project.featured)
  }
  
  export const getProjectById = (id: string) => {
    return projects.find((project) => project.id === id)
  }
  
  export const getAllTags = () => {
    const tags = new Set<string>()
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags)
  }
  
  