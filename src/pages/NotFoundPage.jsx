import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - My Rehab Centre</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-display font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
