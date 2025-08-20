import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Initialize page-specific functionality
    const initializePage = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        
        // Initialize jarallax for this page
        if (window.jarallax) {
          window.jarallax(document.querySelectorAll('[data-jarallax]'));
        }

        // Initialize scroll animations
        if (window.scrollCue) {
          window.scrollCue.update();
        }

        // Button scroll to
        $('a[href^="#"].btn_scrollto').on('click', function (e) {
          e.preventDefault();
          var target = this.hash;
          var $target = $(target);
          $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60
          }, 300, 'swing', function () {
            window.location.hash = target;
          });
        });
      }
    };

    setTimeout(initializePage, 100);
  }, []);

  return (
    <main>
      <div className="hero medium-height jarallax" data-jarallax data-speed="0.2">
        <img className="jarallax-img" src="/img/aboutuscover.jpg" alt="" />
        <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <small className="slide-animated one">A Little Haven in the Hills</small>
            <h1 className="slide-animated two">About Ceylon Happy Laugh</h1>
          </div>
        </div>
      </div>

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
                  <small>Ceylon Happy Laugh</small>
                  <h2>About Us</h2>
                </div>
                <p className="lead">Nestled in the picturesque hills of Ella, Sri Lanka, Ceylon Happy Laugh offers a serene retreat for travelers seeking comfort and adventure.</p>
                <p>Our establishment is more than just a place to stay; it's an experience that combines the warmth of Sri Lankan hospitality with the natural beauty of the region.</p>
                <p>Located at the 4th Mile Post, Yahalawela, Passara Road, our property provides easy access to Ella's renowned attractions, including the Demodara Nine Arch Bridge and Little Adam's Peak. Whether you're a solo traveler, a couple, or a family, Ceylon Happy Laugh is designed to cater to your unique needs, ensuring a memorable stay amidst nature's splendors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_120_95">
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

      <div className="bg_white">
        <div className="container margin_120_95">
          <div className="row justify-content-between d-flex align-items-center add_bottom_90">
            <div className="col-lg-6">
              <div className="pinned-image rounded_container pinned-image--small mb-4">
                <div className="pinned-image__container">
                  <img src="/img/food.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="title">
                <small>Dining</small>
                <h3>Authentic Sri Lankan Flavors</h3>
                <p>Experience the rich culinary heritage of Sri Lanka at our in-house restaurant. Our skilled chefs prepare traditional dishes using fresh, locally sourced ingredients, offering you an authentic taste of the island's diverse flavors.</p>
                <p>From aromatic rice and curry meals to refreshing tropical fruit platters, every dish tells a story of Sri Lankan culture and tradition.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between d-flex align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="pinned-image rounded_container pinned-image--small mb-4">
                <div className="pinned-image__container">
                  <img src="/img/ravana.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-lg-1">
              <div className="title">
                <small>Explore Ella</small>
                <h3>Gateway to Adventure</h3>
                <p>Ella is a paradise for nature enthusiasts and adventure seekers. From scenic hiking trails that lead to breathtaking viewpoints to exploring lush tea plantations and cascading waterfalls, there's something magical waiting around every corner.</p>
                <p>Our knowledgeable team is always ready to help you plan your excursions and discover the hidden gems of this enchanting hill country destination.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_120_95">
        <div className="row justify-content-between d-flex align-items-center add_bottom_90">
          <div className="col-lg-6">
            <div className="pinned-image rounded_container pinned-image--small mb-4">
              <div className="pinned-image__container">
                <img src="/img/rooms/image1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="title">
              <small>Accommodation</small>
              <h3>Rooms Designed for Every Journey</h3>
              <p>From intimate single retreats perfect for solo adventurers to spacious family accommodations that bring loved ones together, our diverse room collection caters to every type of traveler. Each space has been thoughtfully designed to provide the perfect balance of comfort and connection with Ella's stunning natural landscape.</p>
              <p>Whether you're seeking a romantic getaway, a family adventure, or a budget-friendly backpacker experience, we have the ideal accommodation waiting for you. Every room features modern amenities while preserving the authentic charm that makes Ceylon Happy Laugh special.</p>
              <p><Link to="/rooms" className="btn_1 outline mt-2">Discover Our Rooms</Link></p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between d-flex align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="pinned-image rounded_container pinned-image--small mb-4">
              <div className="pinned-image__container">
                <img src="/img/rooms/2_b.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-1">
            <div className="title">
              <small>Room Features</small>
              <h3>Where Comfort Meets Nature</h3>
              <p>Each accommodation at Ceylon Happy Laugh tells its own story through carefully curated details. Wake up to misty mountain panoramas from private balconies, enjoy your morning Ceylon tea while listening to the gentle sounds of the surrounding forest, and fall asleep under a canopy of stars.</p>
              <p>Our rooms range from cozy single sanctuaries with stunning valley views to spacious family suites that accommodate groups, and budget-friendly dormitories perfect for meeting fellow travelers. Every space reflects Sri Lankan craftsmanship and our commitment to sustainable hospitality.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg_white">
        <div className="container margin_120_95">
          <div className="title text-center mb-5">
            <small data-cue="slideInUp">What Makes Us Special</small>
            <h2 data-cue="slideInUp" data-delay="100">Signature Experiences & Amenities</h2>
          </div>
          <div className="row mt-4">
            <div className="col-xl-4 col-md-6">
              <div className="box_facilities" data-cue="slideInUp">
                <i className="customicon-breakfast"></i>
                <h3>Mountain-Fresh Breakfast</h3>
                <p>Start each day with a hearty Sri Lankan breakfast featuring farm-fresh ingredients sourced from local hill country gardens, prepared with traditional recipes passed down through generations.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="box_facilities" data-cue="slideInUp" data-delay="100">
                <i className="icon-hotel-patio"></i>
                <h3>Scenic Observation Decks</h3>
                <p>Multiple elevated viewing areas strategically positioned to capture Ella's most breathtaking vistas, perfect for sunrise meditation, sunset photography, or simply soaking in the mountain serenity.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="box_facilities" data-cue="slideInUp" data-delay="200">
                <i className="customicon-luggage"></i>
                <h3>Local Adventure Guidance</h3>
                <p>Our passionate local team provides insider knowledge about hidden hiking trails, secret viewpoints, and authentic cultural experiences that only locals know about in the Ella region.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="box_facilities" data-cue="slideInUp" data-delay="300">
                <i className="customicon-laundry"></i>
                <h3>Eco-Conscious Services</h3>
                <p>All our housekeeping and laundry services use environmentally friendly products and sustainable practices, helping preserve the pristine natural environment that makes Ella so special.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="box_facilities" data-cue="slideInUp" data-delay="400">
                <i className="icon-hotel-coffee"></i>
                <h3>Premium Ceylon Tea Service</h3>
                <p>Complimentary access to the finest Ceylon tea varieties throughout your stay, featuring locally grown leaves and traditional brewing methods that showcase Sri Lanka's world-renowned tea heritage.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="box_facilities" data-cue="slideInUp" data-delay="500">
                <i className="customicon-reception"></i>
                <h3>Round-the-Clock Hospitality</h3>
                <p>Our dedicated team is available 24/7 to assist with everything from travel arrangements to local recommendations, ensuring your Ella experience exceeds every expectation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_120_95" id="booking_section">
        <div className="row justify-content-center">
          <div className="col-xl-6 text-center">
            <div data-cue="slideInUp">
              <div className="title">
                <small>Ceylon Happy Laugh</small>
                <h2>Experience the Magic of Ella</h2>
              </div>
              <p>Join us at Ceylon Happy Laugh and discover why Ella is considered one of Sri Lanka's most captivating destinations. Let us be your home away from home as you create unforgettable memories in this mountain paradise.</p>
              <p className="phone_element no_borders d-flex align-items-center justify-content-center">
                <a href="tel://423424234" className="d-flex align-items-center gap-2">
                  <i className="bi bi-telephone"></i>
                  <span><em>Info and bookings</em> +94 76 255 8683</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;