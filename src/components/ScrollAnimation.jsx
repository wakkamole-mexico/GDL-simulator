import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/ScrollAnimation.scss';

const ScrollAnimation = ({ isHome }) => {
  const scrollstyles = classNames('scroll-title', {
    isHome,
  });
  return (
    <div className='scroll-container fadeInUp'>
      <p className={scrollstyles}>scroll</p>
      <div className='c-scrolldown'>
        <div className='c-line' />
      </div>
    </div>
  );
};

export default ScrollAnimation;
