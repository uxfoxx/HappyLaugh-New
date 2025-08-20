import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  console.log('Header component rendering');
  const location = useLocation();

  useEffect(() => {
    console.log('Header useEffect running');
    
    // Initialize header functionality after component mount
    const initializeHeader = () => {
      console.log('Initializing header...');
      
      if (window.jQuery) {
        const $ = window.jQuery;
        console.log('jQuery available in header');
        
        // Sticky Header
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 1) {
            $('.fixed_header').addClass("sticky");
          } else {
            $('.fixed_header').removeClass("sticky");
          }
        });
        $(window).scroll();

        // Menu sidebar panel v2
        $('.open_close_menu').on("click", function () {
          $('.main-menu').toggleClass('show');
          $('.layer').toggleClass('layer-is-visible');
        });

        // Menu v4 + submenu
        $('a.show-submenu').on("click", function () {
          $(this).toggleClass("show_normal");
        });
        
        console.log('Header initialized successfully');
      } else {
        console.error('jQuery not available in header');
      }
    };

    setTimeout(initializeHeader, 100);
  }, []);

  console.log('Header about to return JSX');

  return (
    <header className="fixed_header menu_v4 submenu_version">
      <div className="layer"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <Link to="/" className="logo_normal">
              <img src="/img/logo.png" height="45" alt="" />
            </Link>
            <Link to="/" className="logo_sticky">
              <img src="/img/logo_sticky.png" width="135" height="45" alt="" />
            </Link>
          </div>
          <div className="col-9">
            <div className="main-menu">
              <a href="#0" className="closebt open_close_menu">
                <i className="bi bi-x"></i>
              </a>
              <div className="logo_panel">
                <img src="/img/logo_sticky.png" width="135" height="45" alt="" />
              </div>
              <nav id="mainNav">
                <ul>
                  <li className="submenu">
                    <Link to="/" className="show-submenu">Home</Link>
                  </li>
                  <li className="submenu">
                    <Link to="/rooms" className="show-submenu">Rooms & Suites</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                  <li>
                    <a href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html?aid=2127705&label=metagha-link-LULK-hotel-3472413_dev-desktop_los-1_bw-44_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-dg_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20250501_ppt-G-Share-1DFAr4%401742274467-Share-VvDrq7%401742793378&sid=b57110447b5f104916fb637fc100f6d0&all_sr_blocks=347241343_389473659_0_41_0%2C347241343_389473659_0_41_0&checkin=2025-05-01&checkout=2025-05-02&dest_id=-2216722&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=347241343_389473659_0_41_0%2C347241343_389473659_0_41_0&hpos=1&matching_block_id=347241343_389473659_0_41_0&no_rooms=2&req_adults=2&req_children=0&room1=A&room2=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=347241343_389473659_0_41_0__1080%2C347241343_389473659_0_41_0__1080&srepoch=1742793389&srpvid=96f325145274036e&type=total&ucfs=1&" className="btn_1">
                      Book Now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hamburger_2 open_close_menu float-end">
              <div className="hamburger__box">
                <div className="hamburger__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;