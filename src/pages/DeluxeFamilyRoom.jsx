import { useEffect } from 'react';

const DeluxeFamilyRoom = () => {
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
        <img className="jarallax-img kenburns" src="/img/rooms/1.jpg" alt="" />
        <div className="wrapper opacity-mask d-flex align-items-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <small className="slide-animated one">Ceylon Happy Laugh</small>
                <h1 className="slide-animated two">Deluxe Family Room</h1>
                <p className="slide-animated three">Create Memories with Your Loved Ones</p>
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
                <h2>Spacious & Comfortable for Families</h2>
                <p>Our Deluxe Family Sharing Room is ideal for families or small groups looking for a spacious and comfortable stay in Ella. Designed with convenience in mind, this room provides a king-size bed plus a single bed, making it perfect for a relaxing family retreat.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="room_facilities_list">
                <ul data-cues="slideInLeft">
                  <li><i className="icon-hotel-double_bed_2"></i> King-size bed + 1 single bed</li>
                  <li><i className="icon-hotel-tv"></i> 55-inch Smart TV</li>
                  <li><i className="icon-hotel-wifi"></i>Complimentary Wi-Fi</li>
                  <li><i className="icon-hotel-condition"></i> Air Conditioning</li>
                  <li><i className="icon-hotel-hairdryer"></i> Hair Dryer</li>
                  <li><i className="icon-hotel-patio"></i> Nature Views</li>
                  <li><i className="customicon-4-guests"></i> Spacious & Family-Friendly</li>
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
                <img src="/img/rooms/famil3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/rooms/famil2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/rooms/famil1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeluxeFamilyRoom;