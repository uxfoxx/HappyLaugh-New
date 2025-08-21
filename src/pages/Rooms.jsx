import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
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

        // Opacity mask
        $('.opacity-mask').each(function(){
          $(this).css('background-color', $(this).attr('data-opacity-mask'));
        });
      }
    };

    setTimeout(initializePage, 100);
  }, []);

  return (
    <main>
      <div className="hero medium-height jarallax" data-jarallax data-speed="0.2">
        <img className="jarallax-img" src="img/rooms/rooms.png" alt="" />
        <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <small className="slide-animated one">Wakeup to the clouds & Dine under the Stars</small>
            <h1 className="slide-animated two">Find your Stay</h1>
          </div>
        </div>
      </div>

      <div className="container margin_120_95 pb-0" id="first_section">
        <div className="row_list_version_1">
          <div className="pinned-image rounded_container pinned-image--medium">
            <div className="pinned-image__container">
              <img src="img/rooms/1.jpg" alt="" />
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-lg-8">
              <div className="box_item_info" data-jarallax-element="-30">
                <small>From LKR 12,000/night</small>
                <h2>Deluxe Double Sharing Room</h2>
                <p>A cozy retreat for couples or two travelers looking for a comfortable stay with a stunning view of Ella's natural beauty.
                  <ul>
                    <li>Spacious & well-furnished</li> 
                    <li>Comfortable double bed </li>
                    <li>Peaceful nature surroundings</li>
                  </ul>
                </p>
                <div className="box_item_footer d-flex align-items-center justify-content-between">
                  <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" className="btn_4 learn-more" target="_blank" rel="noopener noreferrer">
                    <span className="circle">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Book Now</span>
                  </a>
                  <Link to="/deluxe-double-room" className="animated_link">
                    <strong>Read more</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row_list_version_1">
          <div className="pinned-image rounded_container pinned-image--medium">
            <div className="pinned-image__container">
              <img src="img/rooms/2_b.jpg" alt="" />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-8">
              <div className="box_item_info float-lg-end" data-jarallax-element="-30">
                <small>From LKR 15,000/night</small>
                <h2>Deluxe Family Sharing Room</h2>
                <p>Perfect for families or small groups, this spacious room provides everything you need for a relaxing and enjoyable stay.
                  <ul>
                    <li>Large room with multiple bedding options</li> 
                    <li>Ideal for families & small groups</li>
                    <li>Scenic views & modern amenities</li>
                  </ul>
                </p>
                <div className="box_item_footer d-flex align-items-center justify-content-between">
                  <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" className="btn_4 learn-more" target="_blank" rel="noopener noreferrer">
                    <span className="circle">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Book Now</span>
                  </a>
                  <Link to="/deluxe-family-room" className="animated_link">
                    <strong>Read more</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row_list_version_1">
          <div className="pinned-image rounded_container pinned-image--medium">
            <div className="pinned-image__container">
              <img src="img/rooms/single.png" alt="" />
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-lg-8">
              <div className="box_item_info" data-jarallax-element="-30">
                <small>From LKR 9,000/night</small>
                <h2>Deluxe Single Room</h2>
                <p>Designed for solo travelers seeking comfort and privacy, our Deluxe Single Room is a cozy retreat in the heart of Ella.
                  <ul>
                    <li>Private & peaceful setting</li> 
                    <li>Cozy and well-equipped</li>
                    <li>Perfect for business or leisure trips</li>
                  </ul>
                </p>
                <div className="box_item_footer d-flex align-items-center justify-content-between">
                  <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" className="btn_4 learn-more" target="_blank" rel="noopener noreferrer">
                    <span className="circle">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Book Now</span>
                  </a>
                  <Link to="/deluxe-single-room" className="animated_link">
                    <strong>Read more</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row_list_version_1">
          <div className="pinned-image rounded_container pinned-image--medium">
            <div className="pinned-image__container">
              <img src="img/rooms/4.jpg" alt="" />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-8">
              <div className="box_item_info float-lg-end" data-jarallax-element="-30">
                <small>From LKR 3,000/night </small>
                <h2>Mixed Dormitory</h2>
                <p>A budget-friendly option for backpackers and solo adventurers who love to meet fellow travelers.
                  <ul>
                    <li>Shared accommodation at an affordable price</li> 
                    <li>Comfortable beds & common facilities</li>
                    <li>Great for socializing & making new friends</li>
                  </ul>
                </p>
                <div className="box_item_footer d-flex align-items-center justify-content-between">
                  <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" className="btn_4 learn-more" target="_blank" rel="noopener noreferrer">
                    <span className="circle">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Book Now</span>
                  </a>
                  <Link to="/mixed-dormitory" className="animated_link">
                    <strong>Read more</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rooms;