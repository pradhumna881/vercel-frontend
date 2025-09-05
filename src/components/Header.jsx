import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'

const Header = ({ onAboutClick, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg group-hover:shadow-lg transition-shadow">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-gray-900 hidden sm:block">
              My Rehab Centre
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <button
              onClick={onAboutClick}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={onContactClick}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => {
                  onAboutClick()
                  setIsMenuOpen(false)
                }}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left py-2"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  onContactClick()
                  setIsMenuOpen(false)
                }}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
