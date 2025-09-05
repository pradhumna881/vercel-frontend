import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, Clock, Globe } from 'lucide-react'

const ContactModal = ({ isOpen, onClose }) => {
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
              Contact Us
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
                We're here to support you on your recovery journey. Reach out to us for any queries, 
                support, or guidance you need. Our team is committed to helping you find the path to healing.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900">Email Support</h3>
                  <p className="text-primary-600 font-medium break-all">
                    myrehabcenter1@gmail.com
                  </p>
                  <p className="text-gray-600 text-sm">Send us your questions anytime</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-green-600 font-medium">Always Available</p>
                  <p className="text-gray-600 text-sm">We're here when you need us most</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Online Services</h3>
                  <p className="text-blue-600 font-medium">Global Reach</p>
                  <p className="text-gray-600 text-sm">Serving clients worldwide through digital platforms</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                Crisis Support
              </h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                If you're experiencing a mental health crisis, please contact your local emergency services 
                or a crisis helpline immediately. Your safety is our top priority.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}  
              className="btn-primary"
            >
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactModal
