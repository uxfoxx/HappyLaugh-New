import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  useEffect(() => {
    console.log('Header mounted')
    
    const initializeHeader = () => {
      if (window.jQuery) {
        const $ = window.jQuery
        
        // Sticky Header
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 1) {
            $('.fixed_header').addClass("sticky")
          } else {
            $('.fixed_header').removeClass("sticky")
          }
        })

        // Menu toggle
        $('.open_close_menu').on("click", function () {
          $('.main-menu').toggleClass('show')
          $('.layer').toggleClass('layer-is-visible')
        })

        // Submenu toggle
        $('a.show-submenu').on("click", function () {
          $(this).toggleClass("show_normal")
        })
        
        console.log('Header initialized')
      }
    }

    setTimeout(initializeHeader, 500)
  }, [location])

  return (
    <header className="fixed_header menu_v4 submenu_version">
      <div className="layer"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <Link to="/" className="logo_normal">
              <img src="/img/logo.png" height="45" alt="Ceylon Happy Laugh" />
            </Link>
            <Link to="/" className="logo_sticky">
              <img src="/img/logo_sticky.png" width="135" height="45" alt="Ceylon Happy Laugh" />
            </Link>
          </div>
          <div className="col-9">
            <div className="main-menu">
              <a href="#0" className="closebt open_close_menu">
                <i className="bi bi-x"></i>
              </a>
              <div className="logo_panel">
                <img src="/img/logo_sticky.png" width="135" height="45" alt="Ceylon Happy Laugh" />
              </div>
              <nav id="mainNav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/rooms">Rooms & Suites</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                  <li>
                    <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" className="btn_1">
                      Book Now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hamburger_2 open_close_menu float-end">
              <div className="hamburger__box">
                <div className="hamburger__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header