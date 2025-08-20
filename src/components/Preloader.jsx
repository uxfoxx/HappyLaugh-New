import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    // Initialize preloader functionality
    const initializePreloader = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        
        $(window).on('load', function () {
          $('[data-loader="circle-side"]').fadeOut();
          $('#preloader').addClass('loaded');
          $('.animate_hero').addClass('is-transitioned');
        });
      }
    };

    setTimeout(initializePreloader, 100);
  }, []);

  return (
    <div id="preloader">
      <div data-loader="circle-side"></div>
    </div>
  );
};

export default Preloader;