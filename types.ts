import type React from "react"
import type { LucideIcon, ImagesIcon as Icons } from "lucide-react"

// Icon types
export type IconName = keyof typeof Icons
export type Icon = LucideIcon

// Theme types
export interface ThemeConfig {
  colors: {
    primary: ColorConfig
    secondary: ColorConfig
    accent: AccentConfig
    muted: ColorConfig
  }
  fonts: FontConfig
  spacing: SpacingConfig
  animation: AnimationConfig
}

interface ColorConfig {
  background: string
  foreground: string
}

interface AccentConfig {
  default: string
  hover: string
}

interface FontConfig {
  heading: string
  body: string
  mono: string
}

interface SpacingConfig {
  container: {
    default: string
    sm: string
    lg: string
  }
  section: {
    sm: string
    default: string
    lg: string
  }
}

interface AnimationConfig {
  duration: {
    fast: number
    default: number
    slow: number
  }
  timing: string
}

// Site metadata types
export interface SiteMetadata {
  title: string
  description: string
  keywords: string[]
  author: string
  themeColor: string
  language: string
  ogImage: string
  twitterHandle: string
}

// Component common props
export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface WithClassName {
  className?: string
}

// Form types
export interface FormField {
  name: string
  label: string
  type: string
  placeholder?: string
  required?: boolean
  validation?: ValidationRule[]
}

export interface ValidationRule {
  type: "required" | "email" | "minLength" | "maxLength" | "pattern"
  value?: any
  message: string
}

// Animation variants
export interface AnimationVariants {
  initial: object
  animate: object
  exit?: object
}

