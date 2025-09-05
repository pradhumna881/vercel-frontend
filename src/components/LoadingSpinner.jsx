import React from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = ({ size = 'md', message = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-8">
      <motion.div
        className={`${sizeClasses[size]} border-3 border-primary-200 border-t-primary-600 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      {message && (
        <p className="text-gray-600 text-sm font-medium text-center px-4">
          {message}
        </p>
      )}
    </div>
  )
}

export default LoadingSpinner
