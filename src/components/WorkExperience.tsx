'use client'
import { motion } from 'framer-motion'

export default function WorkExperience() {
  return (
    <section id="experience" className="mb-16 pt-20">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <h3 className="text-xl font-semibold">Associate Data Analyst</h3>
        <p className="text-gray-400">TellmeDigi Infotech Pvt. Ltd., Pune</p>
        <p className="text-gray-400 mb-4">Sept 2022 – Present</p>
        <ul className="list-disc list-inside">
          <li className="mb-2">Leveraged advanced data cleaning techniques using Python libraries like Pandas / Polars, along with SQL and Excel, to automate processes achieving an 85% reduction in processing time while enhancing data accuracy by 70-90%.</li>
          <li className="mb-2">Conducted comprehensive analysis on large datasets using Python and Power BI, uncovering critical business trends and patterns that informed strategic decision-making.</li>
          <li className="mb-2">Employed data scraping methodologies to extract valuable insights from diverse data sources.</li>
          <li>Led cross-functional teams on high-impact projects, such as a major NABARD initiative, delivering actionable data insights from remote surveys conducted across rural India.</li>
        </ul>
      </motion.div>
    </section>
  )
}