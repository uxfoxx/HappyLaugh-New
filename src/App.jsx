import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ProgressWrap from './components/ProgressWrap';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import RoomList from './pages/RoomList';
import Contact from './pages/Contact';
import Contacts from './pages/Contacts';
import DeluxeDoubleRoom from './pages/DeluxeDoubleRoom';
import DeluxeFamilyRoom from './pages/DeluxeFamilyRoom';
import DeluxeSingleRoom from './pages/DeluxeSingleRoom';
import MixedDormitory from './pages/MixedDormitory';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    // Initialize global functionality after app mounts
    const initializeApp = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        
        console.log('Initializing global app functionality...');

        // Initialize scroll animations globally
        if (window.scrollCue) {
          window.scrollCue.init({
            percentage: 0.85
          });
        }

        // Initialize footer reveal
        if ($(window).width() >= 1024 && $.fn.footerReveal) {
          $('footer.revealed').footerReveal({
            shadow: false,
            opacity: 0.6,
            zIndex: 1
          });
        }

        console.log('Global app functionality initialized');
      }
    };

    // Wait for all scripts to load
    setTimeout(initializeApp, 500);
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
          <Route path="/room-list" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
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