import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Initialize page-specific functionality
    const initializePage = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        
        // Initialize jarallax
        if (window.jarallax) {
          window.jarallax(document.querySelectorAll('[data-jarallax]'));
        }

        // Initialize scroll animations
        if (window.scrollCue) {
          window.scrollCue.init({
            percentage: 0.85
          });
        }

        // Initialize owl carousels
        $('.carousel_item_centered').owlCarousel({    
          loop: true,
          margin: 5,
          nav: true,
          dots: false,
          center: true,
          navText: ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 2 }
          }
        });

        // Opacity mask
        $('.opacity-mask').each(function(){
          $(this).css('background-color', $(this).attr('data-opacity-mask'));
        });

        // Data Background
        $('.background-image').each(function(){
          $(this).css('background-image', $(this).attr('data-background'));
        });
      }
    };

    setTimeout(initializePage, 100);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <div className="hero full-height jarallax" data-jarallax data-speed="0.2">
        <img className="jarallax-img kenburns" src="img/hero_home_1.jpg" alt="" />
        <div className="wrapper opacity-mask d-flex align-items-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <small className="slide-animated one">Welcome to Ceylon Happy Laugh</small>
                <h1 className="slide-animated two">Your Perfect Escape in Ella</h1>
                <p className="slide-animated three">Experience the magic of Sri Lanka's hill country</p>
                <div className="slide-animated four">
                  <Link to="/rooms" className="btn_1 me-2">Explore Rooms</Link>
                  <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" className="btn_1 outline">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mouse_wp slide-animated four">
            <a href="#first_section" className="btn_explore">
              <div className="mouse"></div>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg_white" id="first_section">
        <div className="container margin_120_95">
          <div className="row justify-content-between">
            <div className="col-lg-5" data-cue="slideInUp">
              <div className="title">
                <small>About Ceylon Happy Laugh</small>
                <h2>A Little Haven in the Hills</h2>
                <p>Nestled in the picturesque hills of Ella, Sri Lanka, Ceylon Happy Laugh offers a serene retreat for travelers seeking comfort and adventure. Our establishment combines the warmth of Sri Lankan hospitality with the natural beauty of the region.</p>
                <p>Located at the 4th Mile Post, Yahalawela, Passara Road, our property provides easy access to Ella's renowned attractions, including the Demodara Nine Arch Bridge and Little Adam's Peak.</p>
                <Link to="/about" className="btn_1 mt-3">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-6" data-cue="slideInUp" data-delay="200">
              <div className="pinned-image rounded_container pinned-image--medium">
                <div className="pinned-image__container">
                  <img src="img/home_1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="bg_white">
        <div className="container margin_120_95">
          <div className="row justify-content-center" data-cue="slideInUp">
            <div className="col-lg-8">
              <div className="title text-center">
                <small>Our Accommodations</small>
                <h2>Choose Your Perfect Stay</h2>
                <p>From cozy single rooms to spacious family accommodations, we have something for every traveler</p>
              </div>
            </div>
          </div>
          <div className="row" data-cues="zoomIn">
            <div className="col-lg-6 col-md-6">
              <div className="box_feat">
                <div className="wrapper">
                  <img src="img/rooms/1.jpg" alt="" className="img-fluid" />
                  <div className="content">
                    <h3>Deluxe Double Room</h3>
                    <p>Perfect for couples or two travelers, featuring comfortable bedding and stunning nature views.</p>
                    <span className="price">From LKR 12,000/night</span>
                    <Link to="/rooms" className="btn_1">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box_feat">
                <div className="wrapper">
                  <img src="img/rooms/2_b.jpg" alt="" className="img-fluid" />
                  <div className="content">
                    <h3>Deluxe Family Room</h3>
                    <p>Spacious accommodation ideal for families or small groups seeking comfort and convenience.</p>
                    <span className="price">From LKR 15,000/night</span>
                    <Link to="/rooms" className="btn_1">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <Link to="/rooms" className="btn_1 mt-4">View All Rooms</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg_white">
        <div className="container margin_120_95">
          <div className="row justify-content-center" data-cue="slideInUp">
            <div className="col-lg-8">
              <div className="title text-center">
                <small>Why Choose Us</small>
                <h2>Experience the Best of Ella</h2>
                <p>Discover what makes Ceylon Happy Laugh the perfect choice for your stay in Sri Lanka's hill country</p>
              </div>
            </div>
          </div>
          <div className="row" data-cues="slideInUp">
            <div className="col-lg-3 col-md-6">
              <div className="feature_home">
                <i className="icon-hotel-patio"></i>
                <h3>Stunning Location</h3>
                <p>Located in the heart of Ella with easy access to famous attractions like Nine Arch Bridge and Little Adam's Peak.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_home">
                <i className="customicon-breakfast"></i>
                <h3>Authentic Cuisine</h3>
                <p>Enjoy traditional Sri Lankan dishes prepared with fresh, locally sourced ingredients.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_home">
                <i className="customicon-private-parking"></i>
                <h3>Free Parking</h3>
                <p>Convenient and secure parking facilities available for all guests at no additional cost.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_home">
                <i className="customicon-wifi"></i>
                <h3>High-Speed WiFi</h3>
                <p>Stay connected with complimentary high-speed internet access throughout the property.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="call_section lazy" data-bg="url(img/home_2.jpg)">
        <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <div className="row justify-content-center" data-cue="slideInUp">
              <div className="col-lg-8">
                <h2>Ready to Experience Ella?</h2>
                <p>Contact us today to book your perfect getaway in the hills of Sri Lanka</p>
                <div className="phone_element">
                  <a href="tel:+94762558683"><i className="bi bi-telephone"></i><span>+94 76 255 8683</span></a>
                </div>
                <Link to="/contacts" className="btn_1 mt-3">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;