import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize header functionality after component mounts
    const initializeHeader = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        
        // Header reveal on scroll (from original)
        if (window.Headroom && $("header.reveal_header").length) {
          $("header.reveal_header").headroom({
            "offset": 50,
            "tolerance": 5,
            "classes": {
              "initial": "animated",
              "pinned": "slideDown",
              "unpinned": "slideUp"
            }
          });
        }

        // Sticky header (from original)
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 1) {
            $('.fixed_header').addClass("sticky");
          } else {
            $('.fixed_header').removeClass("sticky");
          }
        });
        $(window).scroll();
      }
    };

    setTimeout(initializeHeader, 100);
  }, []);

  return (
    <header className="fixed_header reveal_header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main_nav">
              <div id="logo">
                <Link to="/">
                  <img src="img/logo_sticky.png" width="165" height="35" alt="" className="logo_sticky" />
                  <img src="img/logo.png" width="165" height="35" alt="" className="logo_normal" />
                </Link>
              </div>
              <nav id="menu">
                <ul>
                  <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                  <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                  <li><Link to="/rooms" className={location.pathname === '/rooms' ? 'active' : ''}>Rooms</Link></li>
                  <li><Link to="/contacts" className={location.pathname === '/contacts' ? 'active' : ''}>Contacts</Link></li>
                </ul>
              </nav>
              <div className="hamburger_2 open_close_menu">
                <div className="hamburger hamburger--spin" id="hamburger">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;