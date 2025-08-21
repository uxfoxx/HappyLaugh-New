import React from 'react'

const Contact = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="section">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '3rem', color: '#24262d' }}>
            Contact Us
          </h1>
          
          <div className="row" style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
            <div className="col-lg-6">
              <div className="contact-info">
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#24262d' }}>
                  Get in Touch
                </h2>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: '#24262d' }}>Address</h4>
                    <p>4th Mile Post, Yahalawela, Passara Road<br />Ella, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: '#24262d' }}>Phone</h4>
                    <p>
                      <a href="tel:+94762558683" style={{ color: '#feb30c', textDecoration: 'none' }}>
                        +94 76 255 8683
                      </a>
                      <br />
                      <small>24/7 Available</small>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: '#24262d' }}>Email</h4>
                    <p>
                      <a href="mailto:ceylonhappylaugh.ella@gmail.com" style={{ color: '#feb30c', textDecoration: 'none' }}>
                        ceylonhappylaugh.ella@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <a 
                    href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '1.1rem', padding: '15px 30px' }}
                  >
                    Book Now on Booking.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{ height: '500px', borderRadius: '10px', overflow: 'hidden' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.090747114574!2d81.06347697585825!3d6.879731193119168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465d24ff3a749%3A0x4d8c43d197bb3508!2sCeylon%20Happy%20Laugh%20-%20Ella!5e0!3m2!1sen!2slk!4v1742275057034!5m2!1sen!2slk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ceylon Happy Laugh Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact