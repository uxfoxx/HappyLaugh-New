import { useEffect } from 'react';

const MixedDormitory = () => {
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

        // Initialize owl carousel
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
      }
    };

    setTimeout(initializePage, 100);
  }, []);

  return (
    <main>
      <div className="hero full-height jarallax" data-jarallax data-speed="0.2">
        <img className="jarallax-img kenburns" src="/img/rooms/dorm1.jpg" alt="" />
        <div className="wrapper opacity-mask d-flex align-items-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <small className="slide-animated one">Ceylon Happy Laugh</small>
                <h1 className="slide-animated two">Mixed Dormitory</h1>
                <p className="slide-animated three">Adventure Awaits in the hills</p>
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

      <div className="bg_white" id="first_section">
        <div className="container margin_120_95">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="title">
                <h2>Budget-Friendly Stay for Backpackers & Solo Explorers</h2>
                <p>Our Mixed Dormitory is the perfect choice for travelers looking for an affordable yet comfortable place to stay while meeting like-minded adventurers. This shared space is designed for convenience, offering individual beds with private power supply for your gadgets.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="room_facilities_list">
                <ul data-cues="slideInLeft">
                  <li><i className="customicon-single-bed"></i> Individual Beds</li>
                  <li><i className="icon-hotel-wifi"></i>Complimentary Wi-Fi</li>
                  <li><i className="bi bi-plug"></i>Individual Power Sockets</li>
                  <li><i className="customicon-4-guests"></i>Shared Space</li>
                  <li><i className="customicon-breakfast"></i>Complimentary Breakfast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg_white add_bottom_120">
        <div className="container-fluid p-lg-0">
          <div data-cues="zoomIn">
            <div className="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
              <div className="item">
                <img src="/img/rooms/dorm3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/rooms/dorm2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/rooms/dorm1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MixedDormitory;