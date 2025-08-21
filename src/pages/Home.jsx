import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    console.log('🏠 Home page loaded')
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <small style={{ 
                fontSize: '1.1rem', 
                color: '#feb30c',
                fontWeight: '500',
                display: 'block',
                marginBottom: '1rem'
              }}>
                Welcome to Ceylon Happy Laugh
              </small>
              <h1>Your Perfect Escape in Ella</h1>
              <p>Experience the magic of Sri Lanka's hill country with breathtaking views, comfortable accommodations, and warm hospitality</p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/rooms" className="btn_1" style={{ marginRight: '1rem' }}>
                  Explore Rooms
                </Link>
                <a 
                  href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn_1"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img 
                src="/img/home_1.jpg" 
                alt="Ceylon Happy Laugh" 
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div className="col-lg-6" style={{ paddingLeft: '3rem' }}>
              <h2>About Ceylon Happy Laugh</h2>
              <p>
                Nestled in the picturesque hills of Ella, Sri Lanka, Ceylon Happy Laugh offers a serene retreat for travelers seeking comfort and adventure. Our establishment combines the warmth of Sri Lankan hospitality with the natural beauty of the region.
              </p>
              <p>
                Located at the 4th Mile Post, Yahalawela, Passara Road, our property provides easy access to Ella's renowned attractions, including the Demodara Nine Arch Bridge and Little Adam's Peak.
              </p>
              <Link to="/about" className="btn_1">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Accommodations</h2>
            <p>Choose from our variety of comfortable rooms designed for every type of traveler</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <img 
                  src="/img/rooms/1.jpg" 
                  alt="Deluxe Double Room" 
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
                <h3>Deluxe Double Room</h3>
                <p>Perfect for couples or two travelers, featuring comfortable bedding and stunning nature views.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#feb30c' }}>
                    From LKR 12,000/night
                  </span>
                  <Link to="/deluxe-double-room" className="btn_1">View Details</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <img 
                  src="/img/rooms/2_b.jpg" 
                  alt="Deluxe Family Room" 
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
                <h3>Deluxe Family Room</h3>
                <p>Spacious accommodation ideal for families or small groups seeking comfort and convenience.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#feb30c' }}>
                    From LKR 15,000/night
                  </span>
                  <Link to="/deluxe-family-room" className="btn_1">View Details</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/rooms" className="btn_1">View All Rooms</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Why Choose Ceylon Happy Laugh?</h2>
            <p>Experience the best of Ella with our premium amenities and services</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <h3>🏞️ Stunning Location</h3>
                <p>Located in the heart of Ella with easy access to famous attractions like Nine Arch Bridge and Little Adam's Peak.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <h3>🍽️ Authentic Cuisine</h3>
                <p>Enjoy traditional Sri Lankan dishes prepared with fresh, locally sourced ingredients at our on-site restaurant.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <h3>🚗 Free Parking</h3>
                <p>Convenient and secure parking facilities available for all guests at no additional cost.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <h3>📶 High-Speed WiFi</h3>
                <p>Stay connected with complimentary high-speed internet access throughout the property.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Ready to Experience Ella?</h2>
              <p>Contact us today to book your perfect getaway in the hills of Sri Lanka</p>
              <div style={{ marginTop: '2rem' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                  📞 <strong>+94 76 255 8683</strong>
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                  📧 ceylonhappylaugh.ella@gmail.com
                </p>
                <Link to="/contacts" className="btn_1">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home