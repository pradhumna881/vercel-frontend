import React from 'react'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl">My Rehab Centre</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Comprehensive Care and Support for Mental Health and Substance Abuse. 
              Your trusted partner in overcoming addiction and building a healthier future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#substance" className="hover:text-white transition-colors">
                  Substance Addictions
                </a>
              </li>
              <li>
                <a href="#behavioral" className="hover:text-white transition-colors">
                  Behavioral Addictions
                </a>
              </li>
              <li>
                <a href="#emotional" className="hover:text-white transition-colors">
                  Emotional Addictions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">myrehabcenter1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">Available 24/7 for support</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">Serving globally online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Rehab Centre. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Best way to live life is free from addiction. Seek professional help when needed.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
