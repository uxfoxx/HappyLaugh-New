import React from 'react';

const Footer = () => {
  return (
    <footer className="revealed">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <h3 data-bs-target="#collapse_1">Quick Links</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_1">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/rooms">Rooms</a></li>
                <li><a href="/contacts">Contacts</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ms-auto">
            <h3 data-bs-target="#collapse_2">Contacts</h3>
            <div className="collapse dont-collapse-sm contacts" id="collapse_2">
              <ul>
                <li><i className="bi bi-geo-alt"></i>4th Mile Post, Yahalawela<br />Passara Road, Ella, Sri Lanka</li>
                <li><i className="bi bi-telephone"></i>+94 76 255 8683</li>
                <li><i className="bi bi-envelope"></i><a href="mailto:ceylonhappylaugh.ella@gmail.com">ceylonhappylaugh.ella@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_3">Book Direct</h3>
            <div className="collapse dont-collapse-sm" id="collapse_3">
              <div className="follow_us">
                <p>Book your stay directly through our official booking partner</p>
                <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" className="btn_1" target="_blank" rel="noopener noreferrer">
                  Book on Booking.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row add_bottom_25">
          <div className="col-lg-6">
            <ul className="footer-selector clearfix">
              <li><img src="img/logo.png" width="165" height="35" alt="" /></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="additional_links">
              <li><span>© 2024 Ceylon Happy Laugh</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;