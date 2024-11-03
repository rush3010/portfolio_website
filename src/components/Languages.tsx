'use client'
import { motion } from 'framer-motion'

export default function Languages() {
  const languages = ["English", "Hindi", "Marathi", "Kannada", "German (Beginner)"]
  
  return (
    <section id="languages" className="mb-16 pt-20">
      <h2 className="text-3xl font-bold mb-4">Languages</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {languages.map((language, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg font-semibold">{language}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
