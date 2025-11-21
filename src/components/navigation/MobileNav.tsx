"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const menuItems = ["Home", "About", "Services", "Testimonials", "Contact"]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-[250px] bg-[#080807] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>

            <nav className="mt-8">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-lg text-gray-300 hover:text-white transition-colors block py-2"
                      onClick={onClose}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

