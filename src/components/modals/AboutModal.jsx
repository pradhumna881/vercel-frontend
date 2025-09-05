import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Shield, Users, Award } from 'lucide-react'

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-display font-bold text-gray-900">
              About My Rehab Centre
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                Welcome to <strong>My Rehab Centre</strong> — your trusted partner in overcoming addiction. 
                We understand the many forms addiction can take and how challenging it can be to break free. 
                Our mission is to provide compassionate support, expert guidance, and practical solutions 
                tailored to your recovery journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Compassionate Care</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We provide empathetic support with understanding and without judgment, 
                    recognizing that every journey is unique.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 p-3 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based Methods</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our strategies are grounded in proven, scientific approaches to 
                    addiction recovery and mental health support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Join a supportive community where you can share experiences and 
                    find encouragement from others on similar journeys.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Expertise</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Access to professional resources and guidance from experienced 
                    addiction recovery specialists.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                With evidence-based strategies and a supportive community, we help you regain control, 
                rebuild your life, and find hope for lasting change. You don't have to face addiction 
                alone — take the first step toward a healthier, happier future today.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AboutModal
