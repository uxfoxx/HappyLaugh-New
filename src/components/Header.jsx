import React from 'react'

const Header = () => {
  console.log('Header component rendering')

  return (
    <header style={{ 
      background: '#24262d', 
      color: 'white', 
      padding: '20px', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 1000 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Ceylon Happy Laugh</h2>
        <nav>
          <a href="/" style={{ color: 'white', marginLeft: '20px' }}>Home</a>
        </nav>
      </div>
    </header>
  )
}

export default Header