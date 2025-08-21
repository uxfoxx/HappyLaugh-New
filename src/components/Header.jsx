import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 0',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#24262d',
            textDecoration: 'none'
          }}>
            Ceylon Happy Laugh
          </Link>
          
          <nav style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link 
              to="/" 
              style={{
                color: location.pathname === '/' ? '#feb30c' : '#24262d',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              style={{
                color: location.pathname === '/about' ? '#feb30c' : '#24262d',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              About
            </Link>
            <Link 
              to="/rooms" 
              style={{
                color: location.pathname === '/rooms' ? '#feb30c' : '#24262d',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Rooms
            </Link>
            <Link 
              to="/contact" 
              style={{
                color: location.pathname === '/contact' ? '#feb30c' : '#24262d',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Contact
            </Link>
            <a 
              href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '10px 20px',
                fontSize: '0.9rem',
                borderRadius: '5px'
              }}
            >
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header