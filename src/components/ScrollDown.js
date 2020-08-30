import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const ScrollDown = () => (
  <div
    className="scroll-down-button"
    onClick={() =>
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      })
    }
  >
    <div className="arrow-down"></div>
  </div>
);

export default ScrollDown;
