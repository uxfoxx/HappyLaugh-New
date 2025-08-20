import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ProgressWrap from './components/ProgressWrap'
import Home from './pages/Home'
import About from './pages/About'
import RoomList from './pages/RoomList'
import Contacts from './pages/Contacts'
import DeluxeDoubleRoom from './pages/DeluxeDoubleRoom'
import DeluxeFamilyRoom from './pages/DeluxeFamilyRoom'
import DeluxeSingleRoom from './pages/DeluxeSingleRoom'
import MixedDormitory from './pages/MixedDormitory'
import NotFound from './pages/NotFound'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('App component mounted')
    
    // Initialize jQuery plugins after a short delay
    const initializePlugins = () => {
      console.log('Initializing plugins...')
      
      if (typeof window.jQuery !== 'undefined') {
        const $ = window.jQuery
        console.log('jQuery is available')
        
        try {
          // Initialize opacity masks
          $('.opacity-mask').each(function(){
            $(this).css('background-color', $(this).attr('data-opacity-mask'))
          })

          // Initialize data backgrounds
          $('.background-image').each(function(){
            $(this).css('background-image', $(this).attr('data-background'))
          })

          // Initialize scroll animations
          if (window.scrollCue) {
            window.scrollCue.init({
              percentage: 0.85
            })
            console.log('ScrollCue initialized')
          }

          // Initialize jarallax
          if (window.jarallax) {
            window.jarallax(document.querySelectorAll('[data-jarallax]'))
            console.log('Jarallax initialized')
          }

          console.log('All plugins initialized successfully')
        } catch (error) {
          console.error('Error initializing plugins:', error)
        }
      } else {
        console.warn('jQuery not available yet, retrying...')
        setTimeout(initializePlugins, 500)
      }
    }

    // Set loading to false after a brief moment
    setTimeout(() => {
      setIsLoading(false)
      console.log('App loading complete')
    }, 100)

    // Initialize plugins after DOM is ready
    setTimeout(initializePlugins, 200)
  }, [])

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif'
      }}>
        Loading Ceylon Happy Laugh...
      </div>
    )
  }

  console.log('App rendering main content')

  return (
    <Router>
      <div className="App">
        <Preloader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/deluxe-double-room" element={<DeluxeDoubleRoom />} />
          <Route path="/deluxe-family-room" element={<DeluxeFamilyRoom />} />
          <Route path="/deluxe-single-room" element={<DeluxeSingleRoom />} />
          <Route path="/mixed-dormitory" element={<MixedDormitory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ProgressWrap />
      </div>
    </Router>
  )
}

export default App