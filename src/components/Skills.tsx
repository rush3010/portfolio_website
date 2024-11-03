'use client'
import { motion } from 'framer-motion'

interface SkillCategoryProps {
  title: string
  skills: string[]
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-1 hover:text-blue-400 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="mb-16 pt-32">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCategory title="Technical Skills" skills={[
          "Python (Pandas / Polars)", "SQL", "Advanced Excel", "PowerBI / Tableau",
          "Statistics", "Machine Learning", "NLP techniques",
          "GenAI frameworks (e.g., Hugging Face Transformers)", "Data Warehousing Concepts"
        ]} />
        <SkillCategory title="Soft Skills" skills={[
          "Leadership", "Critical Reasoning", "Communication",
          "Interpersonal Skills", "Adaptability", "Analytical Skills"
        ]} />
      </div>
    </section>
  )
}