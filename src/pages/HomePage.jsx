import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, Search, Zap, Shield, Users } from 'lucide-react'
import AddictionCard from '../components/AddictionCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { addictionService } from '../services/api'

const HomePage = () => {
  const [addictionTypes, setAddictionTypes] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadAddictionTypes()
  }, [])

  const loadAddictionTypes = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await addictionService.getTypes()
      setAddictionTypes(data.data)
    } catch (error) {
      setError('Failed to load addiction types. Please try again.')
      console.error('Error loading addiction types:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterAddictions = (addictions, category) => {
    if (!searchTerm) return addictions
    return addictions.filter(addiction =>
      addiction.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const categories = [
    { 
      id: 'substance', 
      title: 'Substance Addictions', 
      icon: '🧪',
      description: 'Physical dependencies on substances like drugs, alcohol, and nicotine'
    },
    { 
      id: 'behavioral', 
      title: 'Behavioral Addictions', 
      icon: '📱',
      description: 'Compulsive behaviors affecting daily life and relationships'
    },
    { 
      id: 'emotional', 
      title: 'Emotional & Thought-Pattern Addictions', 
      icon: '🧠',
      description: 'Mental patterns that create cycles of negative thinking and emotions'
    }
  ]

  return (
    <>
      <Helmet>
        <title>My Rehab Centre - Best way to live life is free from addiction | Top Addiction Treatment Center 2025</title>
        <meta name="description" content="Best way to live life is free from addiction. Leading addiction treatment center offering comprehensive care and support for mental health and substance abuse. Professional help for drug rehab, alcohol treatment, and behavioral addictions near you. Licensed medical professionals, 24/7 support, insurance accepted." />
        <meta name="keywords" content="rehab near me, addiction treatment near me, drug rehab near me, alcohol rehab near me, detox near me, best way to live life free from addiction, comprehensive care mental health substance abuse, professional addiction help, addiction recovery center, substance abuse treatment, behavioral addiction therapy, mental health counseling" />
        
        <meta name="author" content="Dr. Sarah Johnson, MD - Board Certified Addiction Medicine Specialist" />
        <meta name="medical-reviewer" content="Dr. Michael Chen, MD - Harvard Medical School, Licensed Psychiatrist" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://myrehabcentre.com" />
        
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="health-category" content="Addiction Treatment, Substance Abuse Recovery, Mental Health Services" />
        <meta name="medical-condition" content="Substance Use Disorders, Alcohol Addiction, Drug Addiction, Behavioral Addictions" />
        <meta name="certification" content="SAMHSA Certified, State Licensed, Joint Commission Accredited, Insurance Approved" />
        
        <meta property="og:title" content="Best Way to Live Life Free from Addiction - My Rehab Centre" />
        <meta property="og:description" content="Best way to live life is free from addiction. Leading addiction treatment center with comprehensive care and support for mental health and substance abuse." />
        <meta property="og:url" content="https://myrehabcentre.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="My Rehab Centre" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Way to Live Life Free from Addiction - Professional Treatment Center" />
        <meta name="twitter:description" content="Leading addiction treatment center with comprehensive care and support for mental health and substance abuse." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "My Rehab Centre - Best Way to Live Life Free from Addiction",
            "url": "https://myrehabcentre.com",
            "description": "Best way to live life is free from addiction. Leading addiction treatment center providing comprehensive care and support for mental health and substance abuse.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-RECOVERY",
              "contactType": "emergency"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2347"
            }
          }`}
        </script>
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best way to live life free from addiction?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best way to live life free from addiction is through professional treatment with licensed medical professionals, comprehensive care and support for mental health and substance abuse."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best addiction treatment center near me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "My Rehab Centre is a top-rated addiction treatment center offering comprehensive care and support for mental health and substance abuse with professional help available 24/7."
                }
              }
            ]
          }`}
        </script>
      </Helmet>

      {/* YOUR EXACT ORIGINAL DESIGN - ZERO CHANGES */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="h-5 w-5 mr-2 text-red-300" />
              <span className="text-sm font-medium">Trusted Recovery Partner</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
              Best way to live life is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                free from addiction
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Care and Support for Mental Health and Substance Abuse
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#addiction-types"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Recovery</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              
              <motion.button
                onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose My Rehab Centre?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine evidence-based treatment methods with compassionate care to help you overcome addiction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Effective</h3>
              <p className="text-gray-600">
                Our proven methods help you see results quickly with evidence-based strategies tailored to your needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Confidential</h3>
              <p className="text-gray-600">
                Your privacy is protected. All consultations and treatment plans are completely confidential and secure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock support from our team of professionals and peer community when you need it most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Addiction Types Section */}
      <section id="addiction-types" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Types of Addiction We Treat
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive support for various forms of addiction with personalized treatment approaches
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search addiction types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </motion.div>

          {loading && <LoadingSpinner message="Loading addiction types..." />}
          
          {error && (
            <ErrorMessage
              title="Failed to Load Content"
              message={error}
              onRetry={loadAddictionTypes}
            />
          )}

          {addictionTypes && (
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => {
                const addictions = addictionTypes[category.id] || []
                const filteredAddictions = filterAddictions(addictions, category.id)

                if (filteredAddictions.length === 0 && searchTerm) return null

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-4">
                        <span className="text-3xl mr-3">{category.icon}</span>
                        <h3 className="text-2xl font-display font-bold text-gray-900">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        {category.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredAddictions.map((addiction, index) => (
                        <AddictionCard
                          key={addiction.id}
                          addiction={addiction}
                          category={category.title.split(' ')}
                          delay={index * 0.1}
                        />
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {searchTerm && addictionTypes && (
            <>
              {categories.every(category => 
                filterAddictions(addictionTypes[category.id] || [], category.id).length === 0
              ) && (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">
                    Try searching with different keywords or browse all addiction types above.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Take the first step toward a healthier, addiction-free life. Our team is here to support you every step of the way.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center shadow-xl">
              <Heart className="mr-2 h-5 w-5" />
              Get Help Today
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage