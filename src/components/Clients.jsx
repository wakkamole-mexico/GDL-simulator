import React from 'react';
import '../assets/styles/components/Clients.scss';
import ButtonCTAWhite from './ButtonCTAWhite';

const Clients = () => (
  <div className='clients'>
    <div className='client__img'>
      <img className='client__img--item' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2FClients%403x.png?alt=media&token=f8fcb1f7-4082-4a0c-9c96-c210562a7456' alt='' />
    </div>
    <div className='clients__title--container'>
      <h1 className='clients__title'>
        OUR CLIENTS
        <br />
        LOVE WHAT WE DO
      </h1>
    </div>
    <div className='clients--marcas'>
      <div className='clients__images--container'>
        <div className='clients--img'>
          <img className='images--item' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogos%20marcas%2Fsamsung%403x.png?alt=media&token=755224fe-b06e-436d-8dc1-9d8fbcd4e56f' alt='' />
        </div>
        <div className='clients--img'>
          <img className='images--item' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogos%20marcas%2Fmazda%403x.png?alt=media&token=a545a8b6-3813-4e3f-a705-a2b845a80cf4' alt='' />
        </div>
        <div className='clients--img'>
          <img className='images--item' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogos%20marcas%2FAE%403x.png?alt=media&token=8a9d28b5-16ae-438c-92d9-8594297d3d49' alt='' />
        </div>
      </div>
      <div className='clients__images--container'>
        <div className='clients--img'>
          <img className='images--item' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogos%20marcas%2Fpesi%403x.png?alt=media&token=1f0fb3ed-e05c-461e-ae84-a1dc15f5f47e' alt='' />
        </div>
        <div className='clients--img'>
          <img className='images--item' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogos%20marcas%2Fpolo%403x.png?alt=media&token=49428acb-6a4a-49ad-a418-876f21c5bb6c' alt='' />
        </div>
        <div className='clients--img'>
          <img className='images--item' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogos%20marcas%2FLOre%CC%81al-Logo%403x.png?alt=media&token=ca9c6755-60fa-40ad-bc40-04f9b82c1dcc' alt='' />
        </div>
      </div>
      <div className='samsung--img'>
        <img className='images--item' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogos%20marcas%2Fchevrolet%403x.png?alt=media&token=0a7cf236-dee1-49cf-b1fe-96808a11d87b' alt='' />
      </div>
    </div>
    <div className='clients--subtitle__container'>
      <h2>"Testimonio clientes"</h2>
    </div>
    <div className='logo--container'>
      <img src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogo.svg?alt=media&token=4d3369cf-7626-46e0-bc96-31952bc16a2f' alt='' />
    </div>
    <div className='clients--subtitle__container'>
      <h2>¡COLABOREMOS!</h2>
    </div>
    <div className='button--containerwhite'>
      <ButtonCTAWhite />
    </div>
  </div>
);

export default Clients;
