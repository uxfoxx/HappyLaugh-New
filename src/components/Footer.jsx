const Footer = () => {
  return (
    <footer className="revealed">
      <div className="footer_bg">
        <div className="gradient_over"></div>
        <div className="background-image" data-background="url(/img/rooms/3.jpg)"></div>
      </div>
      <div className="container">
        <div className="row move_content">
          <div className="col-lg-4 col-md-12">
            <h5>Contacts</h5>
            <ul>
              <li>4th Mile Post, Yahalawela, Passara Road<br />Ella, Sri Lanka</li>
              <li>
                <strong>
                  <a href="#0">ceylonhappylaugh.ella@gmail.com</a>
                </strong>
              </li>
              <li>
                <strong>
                  <a href="#0">+94 76 255 8683</a>
                </strong>
              </li>
            </ul>
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.instagram.com/happylaugh_ella?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61570061638818">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ms-lg-auto">
            <h5>Explore</h5>
            <div className="footer_links">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/rooms">Rooms & Suites</a></li>
                <li><a href="/contacts">Contacts</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div id="newsletter">
              <h5>Newsletter</h5>
              <div id="message-newsletter"></div>
              <form method="post" action="#" name="newsletter_form" id="newsletter_form">
                <div className="form-group">
                  <input
                    type="email"
                    name="email_newsletter"
                    id="email_newsletter"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <button type="submit" id="submit-newsletter">
                    <i className="bi bi-send"></i>
                  </button>
                </div>
              </form>
              <p>Receive latest offers and promos without spam. You can cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <div className="container">
          © Ceylon Happy Laugh - by <a href="#">Naveen</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;