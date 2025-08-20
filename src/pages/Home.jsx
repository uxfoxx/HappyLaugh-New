import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  console.log('Home component rendering')

  useEffect(() => {
    console.log('Home page mounted')
    
    // Initialize page-specific functionality
    const initializePage = () => {
      if (typeof window.jQuery !== 'undefined') {
        const $ = window.jQuery
        console.log('Initializing home page with jQuery')
        
        try {
          // Initialize jarallax for this page
          if (window.jarallax) {
            window.jarallax(document.querySelectorAll('[data-jarallax]'))
          }

          // Initialize scroll animations
          if (window.scrollCue) {
            window.scrollCue.update()
          }

          // Initialize owl carousel for testimonials
          if ($.fn.owlCarousel) {
            $('.carousel_testimonials').owlCarousel({
              items: 1,
              loop: true,
              autoplay: false,
              animateIn: 'flipInX',
              margin: 40,
              stagePadding: 30,
              smartSpeed: 300,
              autoHeight: true,
              dots: true,
              responsiveClass: true,
              responsive: {
                600: { items: 1 },
                1000: { items: 1, nav: false }
              }
            })
          }

          // Button scroll to
          $('a[href^="#"].btn_scrollto').on('click', function (e) {
            e.preventDefault()
            var target = this.hash
            var $target = $(target)
            if ($target.length) {
              $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 60
              }, 300, 'swing')
            }
          })
          
          console.log('Home page initialized successfully')
        } catch (error) {
          console.error('Error initializing home page:', error)
        }
      }
    }

    setTimeout(initializePage, 300)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <div className="hero full-height jarallax" data-jarallax data-speed="0.2">
        <img className="jarallax-img kenburns" src="/img/hero_home_1.jpg" alt="Ceylon Happy Laugh" />
        <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <h3 className="slide-animated two">Welcome To <br />Ceylon Happy Laugh<br /></h3>
            <small className="slide-animated one"> Your Perfect Escape in Ella! </small>
            <div className="slide-animated three">
              <Link className="btn_1 outline white mt-3" to="/rooms">View More</Link>
            </div>
          </div>
          <div className="mouse_wp slide-animated four">
            <a href="#first_section" className="btn_scrollto">
              <div className="mouse"></div>
            </a>
          </div>
        </div>
      </div>

      {/* First Section */}
      <div className="pattern_2">
        <div className="container margin_120_95" id="first_section">
          <div className="row justify-content-between flex-lg-row-reverse align-items-center">
            <div className="col-lg-5">
              <div className="parallax_wrapper">
                <img src="/img/home_2.jpg" alt="" className="img-fluid rounded-img" />
                <div data-cue="slideInUp" className="img_over">
                  <span data-jarallax-element="-30">
                    <img src="/img/home_1.jpg" alt="" className="rounded-img" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="intro">
                <div className="title">
                  <small>Home</small>
                  <h2>Welcome to Ceylon Happy Laugh – Your Perfect Escape in Ella!</h2>
                </div>
                <p className="lead">Ella, where misty mornings, lush green hills and unforgettable moments come together.</p>
                <p>Nestled in the lush green hills of Ella, Ceylon Happy Laugh offers a cozy and nature-inspired getaway for travelers seeking relaxation and adventure. Whether you're here to explore breathtaking hiking trails, immerse yourself in Sri Lanka's vibrant culture, or simply unwind in a serene environment, we have the perfect stay for you.</p>
                <p><em>A Paradise Awaits!</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="container margin_120_95">
        <div className="title mb-3">
          <small data-cue="slideInUp">Luxury experience</small>
          <h2 data-cue="slideInUp" data-delay="200">Rooms & Rates</h2>
        </div>
        <div className="row justify-content-center add_bottom_90" data-cues="slideInUp" data-delay="300">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <Link to="/deluxe-double-room" className="box_cat_rooms">
              <figure>
                <div className="background-image" data-background="url(/img/rooms/1.jpg)"></div>
                <div className="info">
                  <small>From LKR 12,000/night</small>
                  <h3>Deluxe Double Sharing Room</h3>
                  <span>Read more</span>
                </div>
              </figure>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <Link to="/deluxe-family-room" className="box_cat_rooms">
              <figure>
                <div className="background-image" data-background="url(/img/rooms/2.jpg)"></div>
                <div className="info">
                  <small>From LKR 15,000/night</small>
                  <h3>Deluxe Family Sharing Room</h3>
                  <span>Read more</span>
                </div>
              </figure>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <Link to="/mixed-dormitory" className="box_cat_rooms">
              <figure>
                <div className="background-image" data-background="url(/img/rooms/3.jpg)"></div>
                <div className="info">
                  <small>From LKR 3,000/night</small>
                  <h3>Mixed Dormitory</h3>
                  <span>Read more</span>
                </div>
              </figure>
            </Link>
          </div>
          <p className="text-end">
            <Link to="/rooms" className="btn_1 outline mt-2">View all Rooms</Link>
          </p>
        </div>

        {/* Facilities Section */}
        <div className="title text-center mb-5">
          <small data-cue="slideInUp">An Enhanced Stay</small>
          <h2 data-cue="slideInUp" data-delay="100">Main Facilities</h2>
        </div>
        <div className="row mt-4">
          <div className="col-xl-3 col-md-6">
            <div className="box_facilities no-border" data-cue="slideInUp">
              <i className="customicon-private-parking"></i>
              <h3>Private Parking</h3>
              <p>Convenient and secure parking facilities are available for all guests.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="box_facilities" data-cue="slideInUp">
              <i className="customicon-wifi"></i>
              <h3>High Speed Wifi</h3>
              <p>Stay connected with complimentary high-speed internet access throughout the property.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="box_facilities" data-cue="slideInUp">
              <i className="customicon-cocktail"></i>
              <h3>Restaurant</h3>
              <p>Savor authentic Sri Lankan cuisine prepared with fresh, local ingredients at our on-site restaurant.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="box_facilities" data-cue="slideInUp">
              <i className="icon-hotel-tv"></i>
              <h3>In-room Smart TV</h3>
              <p>Enjoy your favorite shows and streaming on our in-room Smart TV.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container margin_120_95" id="booking_section">
        <div className="row justify-content-center">
          <div className="col-xl-6 text-center">
            <div data-cue="slideInUp">
              <div className="title">
                <small>Ceylon Happy Laugh</small>
                <h2>Check Availability</h2>
              </div>
              <p>Reservations can be easily made through Booking.com or by phone—whichever option is most convenient for you. We look forward to welcoming you to Ceylon Happy Laugh, where comfort blends with nature, right in the heart of Ella.</p>
              <p className="phone_element no_borders d-flex align-items-center justify-content-center">
                <a href="tel:+94762558683" className="d-flex align-items-center gap-2">
                  <i className="bi bi-telephone"></i>
                  <span><em>Info and bookings</em> +94 76 255 8683</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home