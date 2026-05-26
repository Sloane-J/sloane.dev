// Navigation
export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

// Social Media Links
export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/Sloane-J",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/samueldorkey9a88901bb",
    icon: "Linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/@sloanejnr",
    icon: "Twitter",
  },
]

// Contact Information
export const CONTACT_INFO = {
  email: "samueldorkeyjr@gmail.com",
  phone: "+233 257 774 919",
  location: "Accra, Ghana",
}

// Section Metadata
export const SECTION_METADATA = {
  hero: {
    title: "Samuel Dorkey",
    subtitle: "Freelance Software Developer based in Accra, Ghana. Building cohesive, production-ready software for underserved markets.",
  },
  about: {
    title: "About Me",
    subtitle: "Software developer with 4+ years shipping across design and code",
  },
  services: {
    title: "Services",
    subtitle: "Production-ready solutions built for real-world problems",
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Some of my recent work — Legdr, Acadex, Expiro and more",
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What clients say about my work",
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Open to freelance and contract work. Let's build something together.",
  },
}

// Theme Configuration
export const THEME = {
  colors: {
    background: "#080807",
    card: "#111110",
    border: "#1f1f1e",
    primary: "#FFFFFF",
    accent: "#e85d26",
    muted: "#737373",
  },
  spacing: {
    section: {
      desktop: "py-20",
      mobile: "py-16",
    },
    container: {
      desktop: "px-4 max-w-7xl mx-auto",
      mobile: "px-4",
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
}

// Animation Settings
export const ANIMATION_SETTINGS = {
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
  },
  ease: [0.6, -0.05, 0.01, 0.99],
}

// Form Configuration
export const FORM_CONFIG = {
  maxLength: {
    name: 50,
    email: 100,
    message: 1000,
  },
  validation: {
    name: {
      required: true,
      minLength: 2,
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    message: {
      required: true,
      minLength: 10,
    },
  },
}