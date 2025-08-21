import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import RoomList from './pages/RoomList'
import Contacts from './pages/Contacts'
import DeluxeDoubleRoom from './pages/DeluxeDoubleRoom'
import DeluxeFamilyRoom from './pages/DeluxeFamilyRoom'
import DeluxeSingleRoom from './pages/DeluxeSingleRoom'
import MixedDormitory from './pages/MixedDormitory'
import NotFound from './pages/NotFound'

console.log('🏠 App component loading...')

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
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
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App