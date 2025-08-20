import { useEffect } from 'react';

const DeluxeDoubleRoom = () => {
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
        <img className="jarallax-img kenburns" src="/img/rooms/image2.jpg" alt="" />
        <div className="wrapper opacity-mask d-flex align-items-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <small className="slide-animated one">Ceylon Happy Laugh</small>
                <h1 className="slide-animated two">Deluxe Double Room</h1>
                <p className="slide-animated three">Find your Bliss in the hills</p>
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
                <h2>Cozy Retreat for Two</h2>
                <p>Escape into the tranquility of Ella with our Deluxe Double Sharing Room, designed for couples or two travelers seeking comfort and relaxation. This elegantly furnished space offers a king-size bed or two single beds, ensuring a restful night's sleep amidst the serene surroundings of nature</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="room_facilities_list">
                <ul data-cues="slideInLeft">
                  <li><i className="icon-hotel-double_bed_2"></i> King-size bed or two single beds</li>
                  <li><i className="icon-hotel-tv"></i> 55-inch Smart TV</li>
                  <li><i className="icon-hotel-wifi"></i>Complimentary Wi-Fi</li>
                  <li><i className="icon-hotel-condition"></i> Air Conditioning</li>
                  <li><i className="icon-hotel-hairdryer"></i> Hair Dryer</li>
                  <li><i className="icon-hotel-patio"></i> Nature Views</li>
                  <li><i className="customicon-breakfast"></i> Complimentary Breakfast</li>
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
                <img src="/img/rooms/image1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/rooms/image2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/rooms/image3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/rooms/image4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeluxeDoubleRoom;