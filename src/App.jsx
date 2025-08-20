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
  useEffect(() => {
    // Initialize jQuery plugins after component mount
    const initializePlugins = () => {
      if (window.jQuery) {
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

        // Initialize other plugins
        window.jQuery('.custom_select select').niceSelect();
        
        // Initialize owl carousel
        window.jQuery('.carousel_item_centered').owlCarousel({    
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

        window.jQuery('.carousel_testimonials').owlCarousel({
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
      }
    };

    // Delay initialization to ensure DOM is ready
    setTimeout(initializePlugins, 100);
  }, []);

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