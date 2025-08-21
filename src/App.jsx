import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

console.log('App component loading...')

function App() {
  console.log('App component rendering...')

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={
            <main style={{ padding: '100px 20px', textAlign: 'center' }}>
              <h1>Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App