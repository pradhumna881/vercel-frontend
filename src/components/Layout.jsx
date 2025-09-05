import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'
import AboutModal from './modals/AboutModal'
import ContactModal from './modals/ContactModal'

const Layout = ({ children }) => {
  const [showAboutModal, setShowAboutModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <>
      <Helmet>
        <title>My Rehab Centre - Best way to live life is free from addiction</title>
        <meta name="description" content="Comprehensive Care and Support for Mental Health and Substance Abuse" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Header 
          onAboutClick={() => setShowAboutModal(true)}
          onContactClick={() => setShowContactModal(true)}
        />
        
        <main className="relative">
          {children}
        </main>
        
        <Footer />
        
        {/* Modals */}
        <AboutModal 
          isOpen={showAboutModal}
          onClose={() => setShowAboutModal(false)}
        />
        
        <ContactModal 
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  )
}

export default Layout
