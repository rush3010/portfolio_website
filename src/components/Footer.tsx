'use client'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/rush3010" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
