import React from 'react'

const Footer = () => {
  return (
    <footer style={{ 
      background: '#24262d', 
      color: 'white', 
      padding: '3rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Ceylon Happy Laugh
          </h3>
          <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
            Your Perfect Escape in Ella, Sri Lanka
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            <div>
              <strong>📞 +94 76 255 8683</strong>
            </div>
            <div>
              <strong>📧 ceylonhappylaugh.ella@gmail.com</strong>
            </div>
          </div>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>
            © 2024 Ceylon Happy Laugh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer