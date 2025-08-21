import React from 'react'

const About = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="section">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem', color: '#24262d' }}>
            About Ceylon Happy Laugh
          </h1>
          <div className="row" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <div className="col-lg-6">
              <img 
                src="/img/home_2.jpg" 
                alt="About Ceylon Happy Laugh" 
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </div>
            <div className="col-lg-6">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#24262d' }}>
                A Little Haven in the Hills
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Nestled in the picturesque hills of Ella, Sri Lanka, Ceylon Happy Laugh offers a serene retreat for travelers seeking comfort and adventure. Our establishment is more than just a place to stay; it's an experience that combines the warmth of Sri Lankan hospitality with the natural beauty of the region.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Located at the 4th Mile Post, Yahalawela, Passara Road, our property provides easy access to Ella's renowned attractions, including the Demodara Nine Arch Bridge and Little Adam's Peak. Whether you're a solo traveler, a couple, or a family, Ceylon Happy Laugh is designed to cater to your unique needs.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                We ensure a memorable stay amidst nature's splendors, where every guest feels at home while exploring the wonders of Ella.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About