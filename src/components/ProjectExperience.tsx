'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

export default function ProjectExperience() {
  const projects = [
    {
      title: "Used Car Price Prediction",
      description: "Performed EDA, including handling outliers, converting categorical features, feature scaling, and data visualization. Trained and evaluated multiple regression models for accurate price prediction.",
      technologies: "Python Pandas and Machine Learning Techniques"
    },
    {
      title: "Bengaluru House Price Prediction",
      description: "Conducted extensive EDA and outlier handling to prepare data for accurate house price prediction using Linear Regression. Optimized model performance with K-fold cross-validation and hyperparameter tuning.",
      technologies: "Python Pandas and Machine Learning Techniques"
    },
    {
      title: "Chatbot using Dialogflow (ongoing)",
      description: "Designing and developing a conversational AI Chatbot for a food website using Dialogflow, Python, and Fast API. The chatbot will support two features: placing new orders and tracking existing orders.",
      technologies: "Dialogflow, Python, Fast API, MySQL"
    },
    {
      title: "Python Sentiment Analysis",
      description: "Developed a sentiment analysis system using NLTK with VADER, spaCy, and Hugging Face's RoBERTa. Implemented VADER for baseline sentiment scoring and used spaCy for advanced text processing. Leveraged RoBERTa to capture complex sentiments with high accuracy.",
      technologies: "Python, NLTK, spaCy, Hugging Face Transformers, RoBERTa, VADER"
    },
    {
      title: "Medical Chatbot using LLaMA2 (ongoing)",
      description: "Building a conversational AI chatbot for medical queries using LLaMA2, LangChain, and ChainLit. Integrating a custom knowledge base with 600+ pages of medical data. Optimizing for CPU-based processing to enable efficient and accurate responses.",
      technologies: "Python, Sentence Transformers, LLaMA2, ChainLit, FastAPI (upcoming)"
    }
  ]

  return (
    <section id="projects" className="mb-16 pt-20">
      <h2 className="text-3xl font-bold mb-4">Project Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500">Technologies: {project.technologies}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/rush3010"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
        >
          <Github className="w-5 h-5 mr-2" />
          View More on GitHub
        </a>
      </div>
    </section>
  )
}