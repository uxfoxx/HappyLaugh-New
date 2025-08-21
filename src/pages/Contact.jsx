import React, { useEffect } from 'react';

const Contact = () => {
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
            <h1 className="slide-animated two">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="container margin_120_95">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-5 order-lg-2">
            <div className="contact_info">
              <ul className="clearfix">
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <h4>Address</h4>
                  <div>4th Mile Post, Yahalawela, Passara Road<br />Ella, Sri Lanka</div>
                </li>
                <li>
                  <i className="bi bi-envelope-paper"></i>
                  <h4>Email address</h4>
                  <p>
                    <a href="mailto:ceylonhappylaugh.ella@gmail.com">ceylonhappylaugh.ella@gmail.com</a>
                  </p>
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  <h4>Telephone</h4>
                  <div>+94 76 255 8683<br /><small>24/7 Available</small></div>
                </li>
              </ul>
              <div className="text-center mt-4">
                <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" className="btn_1" target="_blank" rel="noopener noreferrer">
                  Book Now on Booking.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 order-lg-1">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.090747114574!2d81.06347697585825!3d6.879731193119168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465d24ff3a749%3A0x4d8c43d197bb3508!2sCeylon%20Happy%20Laugh%20-%20Ella!5e0!3m2!1sen!2slk!4v1742275057034!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;