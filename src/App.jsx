import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ProgressWrap from './components/ProgressWrap';
import Home from './pages/Home';
import About from './pages/About';
import RoomList from './pages/RoomList';
import Contacts from './pages/Contacts';
import DeluxeDoubleRoom from './pages/DeluxeDoubleRoom';
import DeluxeFamilyRoom from './pages/DeluxeFamilyRoom';
import DeluxeSingleRoom from './pages/DeluxeSingleRoom';
import MixedDormitory from './pages/MixedDormitory';
import NotFound from './pages/NotFound';

function App() {
  console.log('App component rendering');

  useEffect(() => {
    console.log('App useEffect running');
    
    // Initialize all jQuery plugins and functionality
    const initializePlugins = () => {
      console.log('Initializing plugins...');
      
      if (window.jQuery) {
        const $ = window.jQuery;
        console.log('jQuery available, initializing...');
        
        // Initialize opacity masks
        $('.opacity-mask').each(function(){
          $(this).css('background-color', $(this).attr('data-opacity-mask'));
        });

        // Initialize data backgrounds
        $('.background-image').each(function(){
          $(this).css('background-image', $(this).attr('data-background'));
        });

        // Initialize scroll animations
        if (window.scrollCue) {
          window.scrollCue.init({
            percentage: 0.85
          });
        }

        // Initialize jarallax
        if (window.jarallax) {
          window.jarallax(document.querySelectorAll('[data-jarallax]'));
        }

        // Initialize nice select
        $('.custom_select select').niceSelect();
        
        // Initialize all owl carousels
        $('.carousel_item_centered').owlCarousel({    
          loop: true,
          margin: 5,
          nav: true,
          dots: false,
          center: true,
          navText: ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 2 }
          }
        });

        $('.carousel_testimonials').owlCarousel({
          items: 1,
          loop: true,
          autoplay: false,
          animateIn: 'flipInX',
          margin: 40,
          stagePadding: 30,
          smartSpeed: 300,
          autoHeight: true,
          dots: true,
          responsiveClass: true,
          responsive: {
            600: { items: 1 },
            1000: { items: 1, nav: false }
          }
        });

        // Initialize other carousels
        $('.carousel_item_3').owlCarousel({    
          loop: false,
          margin: 15,
          nav: true,
          dots: false,
          center: false,
          navText: ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          }
        });

        // Initialize header functionality
        if ($("header.reveal_header").length) {
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

        // Footer reveal for larger screens
        if ($(window).width() >= 1024) {
          $('footer.revealed').footerReveal({
            shadow: false,
            opacity: 0.6,
            zIndex: 1
          });
        }
        
        console.log('Plugins initialized successfully');
      } else {
        console.error('jQuery not available!');
      }
    };

    // Initialize immediately and on route changes
    setTimeout(initializePlugins, 100);
    
    // Re-initialize on route changes
    const handleRouteChange = () => {
      setTimeout(initializePlugins, 100);
    };
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  console.log('App component about to return JSX');

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
  );
}

export default App;