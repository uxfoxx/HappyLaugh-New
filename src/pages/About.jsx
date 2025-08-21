import React, { useEffect } from 'react';

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
        <img className="jarallax-img" src="img/aboutuscover.jpg" alt="" />
        <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center animate_hero" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div className="container">
            <small className="slide-animated one">Luxury Hotel Experience</small>
            <h1 className="slide-animated two">About Ceylon Happy Laugh</h1>
          </div>
        </div>
      </div>

      <div className="bg_white" id="first_section">
        <div className="container margin_120_95">
          <div className="row justify-content-between">
            <div className="col-lg-5" data-cue="slideInUp">
              <div className="title">
                <small>Our Story</small>
                <h2>A Little Haven in the Hills</h2>
                <p>Nestled in the picturesque hills of Ella, Sri Lanka, Ceylon Happy Laugh offers a serene retreat for travelers seeking comfort and adventure. Our establishment is more than just a place to stay; it's an experience that combines the warmth of Sri Lankan hospitality with the natural beauty of the region.</p>
                <p>Located at the 4th Mile Post, Yahalawela, Passara Road, our property provides easy access to Ella's renowned attractions, including the Demodara Nine Arch Bridge and Little Adam's Peak. Whether you're a solo traveler, a couple, or a family, Ceylon Happy Laugh is designed to cater to your unique needs.</p>
              </div>
            </div>
            <div className="col-lg-6" data-cue="slideInUp" data-delay="200">
              <div className="pinned-image rounded_container pinned-image--medium">
                <div className="pinned-image__container">
                  <img src="img/home_2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg_white">
        <div className="container margin_120_95">
          <div className="row justify-content-center" data-cue="slideInUp">
            <div className="col-lg-8">
              <div className="title text-center">
                <small>Our Mission</small>
                <h2>Creating Memorable Experiences</h2>
                <p>We ensure a memorable stay amidst nature's splendors, where every guest feels at home while exploring the wonders of Ella. Our commitment to excellence and attention to detail makes us the preferred choice for travelers from around the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;