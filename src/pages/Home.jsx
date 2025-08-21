import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <small>Welcome to Ceylon Happy Laugh</small>
          <h1>Your Perfect Escape in Ella</h1>
          <p>Experience the magic of Sri Lanka's hill country with breathtaking views, comfortable accommodations, and warm hospitality</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/rooms" className="btn-primary">
              Explore Rooms
            </Link>
            <a 
              href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-white">
        <div className="container">
          <div className="row" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className="col-lg-6">
              <img 
                src="/img/home_1.jpg" 
                alt="Ceylon Happy Laugh" 
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </div>
            <div className="col-lg-6">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#24262d' }}>
                About Ceylon Happy Laugh
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.8' }}>
                Nestled in the picturesque hills of Ella, Sri Lanka, Ceylon Happy Laugh offers a serene retreat for travelers seeking comfort and adventure. Our establishment combines the warmth of Sri Lankan hospitality with the natural beauty of the region.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                Located at the 4th Mile Post, Yahalawela, Passara Road, our property provides easy access to Ella's renowned attractions, including the Demodara Nine Arch Bridge and Little Adam's Peak.
              </p>
              <Link to="/about" className="btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#24262d' }}>
              Our Accommodations
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Choose from our variety of comfortable rooms designed for every type of traveler
            </p>
          </div>
          <div className="row" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="col-lg-6">
              <div className="room-card">
                <img src="/img/rooms/1.jpg" alt="Deluxe Double Room" />
                <div className="room-card-content">
                  <h3>Deluxe Double Room</h3>
                  <p>Perfect for couples or two travelers, featuring comfortable bedding and stunning nature views.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="room-price">From LKR 12,000/night</span>
                    <Link to="/rooms" className="btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="room-card">
                <img src="/img/rooms/2_b.jpg" alt="Deluxe Family Room" />
                <div className="room-card-content">
                  <h3>Deluxe Family Room</h3>
                  <p>Spacious accommodation ideal for families or small groups seeking comfort and convenience.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="room-price">From LKR 15,000/night</span>
                    <Link to="/rooms" className="btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/rooms" className="btn-primary">View All Rooms</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#24262d' }}>
              Why Choose Ceylon Happy Laugh?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Experience the best of Ella with our premium amenities and services
            </p>
          </div>
          <div className="row" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="col-lg-6">
              <div className="feature-box">
                <div className="feature-icon">🏞️</div>
                <h3>Stunning Location</h3>
                <p>Located in the heart of Ella with easy access to famous attractions like Nine Arch Bridge and Little Adam's Peak.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-box">
                <div className="feature-icon">🍽️</div>
                <h3>Authentic Cuisine</h3>
                <p>Enjoy traditional Sri Lankan dishes prepared with fresh, locally sourced ingredients at our on-site restaurant.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-box">
                <div className="feature-icon">🚗</div>
                <h3>Free Parking</h3>
                <p>Convenient and secure parking facilities available for all guests at no additional cost.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-box">
                <div className="feature-icon">📶</div>
                <h3>High-Speed WiFi</h3>
                <p>Stay connected with complimentary high-speed internet access throughout the property.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#24262d' }}>
              Ready to Experience Ella?
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
              Contact us today to book your perfect getaway in the hills of Sri Lanka
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                📞 <strong>+94 76 255 8683</strong>
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                📧 ceylonhappylaugh.ella@gmail.com
              </p>
            </div>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home