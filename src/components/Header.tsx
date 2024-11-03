'use client'
import { motion } from 'framer-motion'

interface HeaderProps {
  opacity: any
  scale: any
  scrollToSection: (sectionId: string) => void
  activeSection: string
  scaleX: any
}

export default function Header({ opacity, scale, scrollToSection, activeSection, scaleX }: HeaderProps) {
  return (
    <motion.header
      style={{ opacity, scale }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-center mb-4">RUSHABH NALAWADE</h1>
        <nav>
          <ul className="flex justify-center space-x-4">
            {['skills', 'experience', 'projects', 'education', 'languages'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-blue-400 transition-colors ${activeSection === section ? 'text-blue-400' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <motion.div
        className="h-1 bg-blue-500 transform-origin-0"
        style={{ scaleX }}
      />
    </motion.header>
  )
}