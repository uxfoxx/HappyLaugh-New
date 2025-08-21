import React from 'react'

const Footer = () => {
  console.log('Footer component rendering')

  return (
    <footer style={{ 
      background: '#24262d', 
      color: 'white', 
      padding: '40px 20px', 
      textAlign: 'center' 
    }}>
      <p>© Ceylon Happy Laugh - Your Perfect Escape in Ella</p>
    </footer>
  )
}

export default Footer