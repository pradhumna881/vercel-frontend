import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

const ErrorMessage = ({ 
  title = 'Something went wrong',
  message = 'An error occurred while loading the content.',
  onRetry,
  showRetry = true
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-red-100 p-3 rounded-full mb-4">
        <AlertTriangle className="h-8 w-8 text-red-600" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
        {message}
      </p>
      
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
