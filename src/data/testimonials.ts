export interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    image: string
    content: string
    rating: 1 | 2 | 3 | 4 | 5
    featured: boolean
    date: string
    socialLinks?: {
      linkedin?: string
      twitter?: string
      website?: string
    }
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Solutions",
      image: "/placeholder.svg",
      content: `Working with this team was an absolute pleasure. Their attention to detail 
      and technical expertise transformed our vision into reality. The final product 
      exceeded our expectations in terms of both functionality and design.`,
      rating: 5,
      featured: true,
      date: "2024-01",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: "testimonial-2",
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Digital",
      image: "/placeholder.svg",
      content: `The attention to detail and creative solutions provided were exceptional. 
      Their ability to understand our needs and deliver a product that perfectly aligned 
      with our brand was impressive.`,
      rating: 5,
      featured: true,
      date: "2023-12",
      socialLinks: {
        linkedin: "https://linkedin.com",
        website: "https://example.com",
      },
    },
    {
      id: "testimonial-3",
      name: "Emma Davis",
      role: "Product Manager",
      company: "InnovateTech",
      image: "/placeholder.svg",
      content: `Outstanding work on our web application. The final product was exactly 
      what we envisioned, and the development process was smooth and professional. 
      Would definitely recommend!`,
      rating: 5,
      featured: true,
      date: "2023-11",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ]
  
  export const getFeaturedTestimonials = () => {
    return testimonials.filter((testimonial) => testimonial.featured)
  }
  
  export const getTestimonialById = (id: string) => {
    return testimonials.find((testimonial) => testimonial.id === id)
  }
  
  export const getTestimonialsByRating = (rating: number) => {
    return testimonials.filter((testimonial) => testimonial.rating >= rating)
  }
  
  export const getLatestTestimonials = (count = 3) => {
    return [...testimonials].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
  }
  
  