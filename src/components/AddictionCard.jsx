import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const AddictionCard = ({ addiction, category, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Link to={`/solution/${addiction.id}`} className="block h-full">
        <div className="card group-hover:shadow-2xl group-hover:border-primary-200 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl" role="img" aria-label={addiction.name}>
              {addiction.emoji}
            </span>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
          </div>
          
          <h3 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
            {addiction.name}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            Learn effective strategies and get professional support for overcoming {addiction.name.toLowerCase()} addiction.
          </p>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs text-primary-600 font-medium uppercase tracking-wide">
              {category} addiction
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default AddictionCard
