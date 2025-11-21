export interface Service {
    id: string
    title: string
    description: string
    longDescription?: string
    icon: string
    features: string[]
    technologies: string[]
    deliverables: string[]
    timeline?: string
    price?: {
      starting: number
      currency: string
    }
    featured: boolean
    category: "development" | "design" | "consulting"
  }
  
  export const services: Service[] = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
      longDescription: `Full-stack web development services focusing on creating scalable, 
      performant, and user-friendly applications. Utilizing modern technologies and 
      frameworks to deliver exceptional digital experiences.`,
      icon: "Laptop",
      features: [
        "Responsive design implementation",
        "Frontend and backend development",
        "Database design and optimization",
        "API development and integration",
        "Performance optimization",
        "SEO implementation",
      ],
      technologies: ["React/Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "REST/GraphQL"],
      deliverables: ["Source code", "Documentation", "Deployment setup", "Training sessions", "Maintenance guide"],
      timeline: "6-12 weeks",
      price: {
        starting: 5000,
        currency: "USD",
      },
      featured: true,
      category: "development",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience.",
      longDescription: `Comprehensive UI/UX design services focused on creating intuitive 
      and engaging user experiences. From wireframes to high-fidelity prototypes, 
      we ensure your product meets user needs and business goals.`,
      icon: "PenTool",
      features: [
        "User research and analysis",
        "Wireframing and prototyping",
        "Visual design",
        "Interaction design",
        "Usability testing",
        "Design system creation",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Zeplin"],
      deliverables: ["Design files", "Prototypes", "Design system", "Style guide", "Asset library"],
      timeline: "4-8 weeks",
      price: {
        starting: 3000,
        currency: "USD",
      },
      featured: true,
      category: "design",
    },
    {
      id: "technical-consulting",
      title: "Technical Consulting",
      description: "Expert guidance on technology strategy and implementation.",
      longDescription: `Strategic technical consulting services to help businesses 
      make informed decisions about their technology stack, architecture, and 
      development processes.`,
      icon: "LineChart",
      features: [
        "Technology stack assessment",
        "Architecture planning",
        "Performance optimization",
        "Security audit",
        "Code review",
        "Team training",
      ],
      technologies: [
        "Cloud platforms",
        "DevOps tools",
        "Security frameworks",
        "Monitoring solutions",
        "Testing frameworks",
      ],
      deliverables: ["Technical documentation", "Recommendations report", "Implementation roadmap", "Training materials"],
      timeline: "2-4 weeks",
      price: {
        starting: 2000,
        currency: "USD",
      },
      featured: true,
      category: "consulting",
    },
  ]
  
  export const getFeaturedServices = () => {
    return services.filter((service) => service.featured)
  }
  
  export const getServicesByCategory = (category: Service["category"]) => {
    return services.filter((service) => service.category === category)
  }
  
  export const getServiceById = (id: string) => {
    return services.find((service) => service.id === id)
  }
  
  export const getAllCategories = () => {
    return Array.from(new Set(services.map((service) => service.category)))
  }
  
  