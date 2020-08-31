import React from 'react';
import ScrollAnimationWhite from './ScrollAnimationWhite';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header>
    <div className='hero--container'>
      <div className='header--container'>
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Flogo.svg?alt=media&token=91aab9b4-5181-4f17-9419-3b26e95a0461' alt='' />
      </div>
      <div className='main--container'>
        <div className='title--container'>
          <img className='title--container__img' src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fmain-title.svg?alt=media&token=2b2960e8-a681-403c-833a-dba7b0231e73' alt='' />
        </div>
        <div className='subtitle--container'>
          <p>Somos narradores de historias de principio a fin, utilizando cualquier enfoque funcional para el despegue de todo tipo de proyecto.</p>
        </div>
        <button className='button--container'>
          <a href='#' className='button-cta'>CTA</a>
        </button>
        <ScrollAnimationWhite />
      </div>
    </div>
  </header>
);

export default Header;
