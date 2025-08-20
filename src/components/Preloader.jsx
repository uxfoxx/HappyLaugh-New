import React, { useEffect } from 'react'

const Preloader = () => {
  useEffect(() => {
    console.log('Preloader mounted')
    
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader')
      const loader = document.querySelector('[data-loader="circle-side"]')
      
      if (loader) {
        loader.style.display = 'none'
      }
      if (preloader) {
        preloader.classList.add('loaded')
      }
      
      // Add hero animation
      const heroElements = document.querySelectorAll('.animate_hero')
      heroElements.forEach(el => {
        el.classList.add('is-transitioned')
      })
      
      console.log('Preloader finished')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="preloader">
      <div data-loader="circle-side"></div>
    </div>
  )
}

export default Preloader