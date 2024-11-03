'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Header from '@/components/Header'
import Firefly from '@/components/Firefly'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import ProjectExperience from '@/components/ProjectExperience'
import Certifications from '@/components/Certifications'
import Education from '@/components/Education'
import Languages from '@/components/Languages'
import Footer from '@/components/Footer'

export default function Portfolio() {
  const targetRef = useRef(null)
  const [activeSection, setActiveSection] = useState('')
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['skills', 'experience', 'projects', 'education', 'languages']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden" ref={targetRef}>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-800 opacity-50"></div>
      <motion.div 
        className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"
        style={{ y }}
        initial={{ opacity: 0.05 }}
        animate={{ opacity: 0.05 }}
      ></motion.div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.8)_100%)]"></div>
      
      {/* Glowing light effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 left-3/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Firefly effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Firefly key={i} />
        ))}
      </div>

      <div className="relative z-10">
        <Header 
          opacity={opacity} 
          scale={scale} 
          scrollToSection={scrollToSection} 
          activeSection={activeSection} 
          scaleX={scaleX} 
        />
        <main className="container mx-auto px-4 py-16">
          <Skills />
          <WorkExperience />
          <ProjectExperience />
          <Certifications />
          <Education />
          <Languages />
        </main>
        <Footer />
      </div>
    </div>
  )
}
