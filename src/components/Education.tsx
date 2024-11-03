'use client'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="mb-16 pt-20">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
          <h3 className="text-xl font-semibold">Post Graduate Certification in Data Analytics</h3>
          <p className="text-gray-400">Edubridge Learning, March 2022</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
          <h3 className="text-xl font-semibold">Bachelor's in Mechanical Engineering</h3>
          <p className="text-gray-400">RMD Sinhgad School of Engineering, Pune, March 2019</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
