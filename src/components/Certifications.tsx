'use client'
import { motion } from 'framer-motion'

export default function Certifications() {
  return (
    <section className="mb-16 pt-20">
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="list-disc list-inside"
      >
        <motion.li 
          className="mb-2 hover:text-blue-400 transition-colors cursor-pointer" 
          whileHover={{ scale: 1.05 }}
        >
          Google Data Analytics Professional Program – Google
        </motion.li>
        <motion.li 
          className="hover:text-blue-400 transition-colors cursor-pointer" 
          whileHover={{ scale: 1.05 }}
        >
          Data Warehousing – The Ultimate Guide - Udemy
        </motion.li>
      </motion.ul>
    </section>
  )
}