import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  console.log('Home component rendering');

  useEffect(() => {
    console.log('Home useEffect running');
    
    // Initialize page-specific functionality
    const initializePage = () => {
      console.log('Initializing home page...');
      
      if (window.jQuery) {
        const $ = window.jQuery;
        console.log('jQuery available in home page');
        
        // Initialize jarallax for this page
        if (window.jarallax) {
          window.jarallax(document.querySelectorAll('[data-jarallax]'));
          console.log('Jarallax initialized');
        }

        // Initialize scroll animations
        if (window.scrollCue) {
          window.scrollCue.update();
          console.log('ScrollCue updated');
        }

        // Initialize owl carousel for testimonials
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
        });
        console.log('Owl carousel initialized');

        // Video Play on scroll
        var $win = $(window);
        var $sectionvideo = $('#section_video video');
        var elementTop, elementBottom, viewportTop, viewportBottom;

        function isScrolledIntoView(elem) {
          elementTop = $(elem).offset().top;
          elementBottom = elementTop + $(elem).outerHeight();
          viewportTop = $win.scrollTop();
          viewportBottom = viewportTop + $win.height();
          return (elementBottom > viewportTop && elementTop < viewportBottom);
        }
        
        if($sectionvideo.length){
          var loadVideo;

          $sectionvideo.each(function(){
            $(this).attr('webkit-playsinline', '');
            $(this).attr('playsinline', '');
            $(this).attr('muted', 'muted');
            $(this).attr('id','loadvideo');
            loadVideo = document.getElementById('loadvideo');
            loadVideo.load();
          });

          $win.scroll(function () {
            $sectionvideo.each(function(){
              if (isScrolledIntoView(this) == true) {
                  $(this)[0].play();
              } else {
                  $(this)[0].pause();
              }
            });
          });
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
        
        console.log('Home page initialized successfully');
      } else {
        console.error('jQuery not available in home page');
      }
    };

    setTimeout(initializePage, 100);
  }, []);

  console.log('Home about to return JSX');

  return (
    <main>
      <div className="hero full-height jarallax" data-jarallax data-speed="0.2">
        <img className="jarallax-img kenburns" src="/img/hero_home_1.jpg" alt="" />
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
        <div className="pinned-image pinned-image--medium">
          <div className="pinned-image__container" id="section_video">
            <video loop="loop" muted="muted" id="video_home">
              <source src="/video/swimming_pool_2.mp4" type="video/mp4" />
              <source src="/video/swimming_pool_2.webm" type="video/webm" />
              <source src="/video/swimming_pool_2.ogv" type="video/ogg" />
            </video>
            <div className="pinned-image__container-overlay"></div>
          </div>
          <div className="pinned_over_content">
            <div className="title white">
              <small data-cue="slideInUp" data-delay="200">Check in to Serenity</small>
              <h2 data-cue="slideInUp" data-delay="300">Views That Steal Your Breath<br />Moments That Stay Forever.</h2>
            </div>
          </div>
        </div>
      </div>

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

      <div className="marquee">
        <div className="track">
          <div className="content">&nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience</div>
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
                <h3>Authentic Sri Lankan Flavors at Our Local Restaurant</h3>
                <p>Savor the best of Sri Lankan cuisine at our in-house restaurant, offering a variety of flavorful dishes made with fresh, local ingredients. Whether you're in the mood for a traditional rice and curry meal or a delicious tropical fruit platter, we've got something for every taste!</p>
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
                <h3>Discover the Best of Ella with Ceylon Happy Laugh</h3>
                <p>Ella is a haven for nature lovers and adventure seekers. From hiking trails leading to breathtaking viewpoints to exploring tea plantations and waterfalls, there's something for everyone. Our team is always ready to assist you in planning your excursions to make the most of your visit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax_section_1 jarallax" data-jarallax data-speed="0.2">
        <img className="jarallax-img kenburns-2" src="/img/hero_home_1.jpg" alt="" />
        <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="title white">
                  <small className="mb-1">Real Experiences, Unforgettable Stays</small>
                  <h2>What Our Guests Say</h2>
                </div>
                <div className="carousel_testimonials owl-carousel owl-theme nav-dots-orizontal">
                  <div>
                    <div className="box_overlay">
                      <div className="pic">
                        <figure><img src="/img/testimonial_1.jpg" alt="" className="img-circle" /></figure>
                        <h4>NAROA SAN ANDRÉS<small>February</small></h4>
                      </div>
                      <div className="comment">
                        "The stay was really nice at Happy Laugh Hostel. Since I got there, the staff was really helpful. The room was nice and clean. The views amazing. There where beautiful birds visiting the terrace. And sounds of nature... Lovely sleep in the jungle."
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="box_overlay">
                      <div className="pic">
                        <figure><img src="/img/testimonial_1.jpg" alt="" className="img-circle" /></figure>
                        <h4>Stepan Vajtr<small>January</small></h4>
                      </div>
                      <div className="comment">
                        "good hostel with a beautiful view of the surroundings. the staff is very pleasant and willing to help with anything. the accommodation price includes free breakfast and they will give you excellent Ceylon tea at any time on request, I highly recommend it. a short distance from the accommodation is adams peak and nine arch bridge. very good location if you want to go to the sunrise to one of the viewpoints"
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="box_overlay">
                      <div className="pic">
                        <figure><img src="/img/testimonial_1.jpg" alt="" className="img-circle" /></figure>
                        <h4>Vanesa Romero Contreras<small>January</small></h4>
                      </div>
                      <div className="comment">
                        "It is a very beautiful place, to disconnect in the middle of the mountain. My room was very comfortable. The people who work there were always very kind to me. Gamini, the owner of the place, is also a very kind and supportive person. He took me to see very beautiful places in Ella and then invited me to lunch. The truth is I am super grateful for this place and this person. I recommend it, breakfast is included and it is abundant!"
                      </div>
                    </div>
                  </div>
                </div>
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
                <h2>Check Availability</h2>
              </div>
              <p>Reservations can be easily made through Booking.com or by phone—whichever option is most convenient for you. We look forward to welcoming you to Ceylon Happy Laugh, where comfort blends with nature, right in the heart of Ella.</p>
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

export default Home;