export interface ValidationRule {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    custom?: (value: any) => boolean | string
  }
  
  export interface ValidationRules {
    [key: string]: ValidationRule
  }
  
  export interface ValidationErrors {
    [key: string]: string
  }
  
  // Email validation regex
  export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  // URL validation regex
  export const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  
  // Phone validation regex
  export const phoneRegex = /^\+?[\d\s-]+$/
  
  // Common validation rules
  export const commonRules = {
    email: {
      required: true,
      pattern: emailRegex,
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
    },
    phone: {
      pattern: phoneRegex,
    },
    url: {
      pattern: urlRegex,
    },
  }
  
  // Validate a single field
  export const validateField = (value: any, rules: ValidationRule): string | null => {
    if (rules.required && !value) {
      return "This field is required"
    }
  
    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`
    }
  
    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`
    }
  
    if (rules.pattern && !rules.pattern.test(value)) {
      return "Invalid format"
    }
  
    if (rules.custom) {
      const customResult = rules.custom(value)
      if (typeof customResult === "string") {
        return customResult
      }
      if (!customResult) {
        return "Invalid value"
      }
    }
  
    return null
  }
  
  // Validate form data
  export const validateForm = (data: { [key: string]: any }, rules: ValidationRules): ValidationErrors => {
    const errors: ValidationErrors = {}
  
    Object.keys(rules).forEach((field) => {
      const error = validateField(data[field], rules[field])
      if (error) {
        errors[field] = error
      }
    })
  
    return errors
  }
  
  // Check if form has errors
  export const hasErrors = (errors: ValidationErrors): boolean => {
    return Object.keys(errors).length > 0
  }
  
  // Format validation error message
  export const formatError = (field: string, error: string): string => {
    return error.startsWith("This") ? error : `${field} ${error}`
  }
  
  