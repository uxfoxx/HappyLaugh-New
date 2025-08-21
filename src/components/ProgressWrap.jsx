import React, { useEffect } from 'react';

const ProgressWrap = () => {
  useEffect(() => {
    console.log('ProgressWrap mounted');
    
    const initializeProgressWrap = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        
        const progressPath = document.querySelector('.progress-wrap path');
        if (progressPath) {
          const pathLength = progressPath.getTotalLength();
          progressPath.style.transition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = 'stroke-dashoffset 10ms linear';
          
          const updateProgress = function() {
            const scroll = $(window).scrollTop();
            const height = $(document).height() - $(window).height();
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          };
          
          updateProgress();
          $(window).scroll(updateProgress);
          
          $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
              $('.progress-wrap').addClass('active-progress');
            } else {
              $('.progress-wrap').removeClass('active-progress');
            }
          });
          
          $('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 550);
            return false;
          });
          
          console.log('ProgressWrap initialized');
        }
      }
    };

    setTimeout(initializeProgressWrap, 2000);
  }, []);

  return (
    <div className="progress-wrap">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default ProgressWrap;