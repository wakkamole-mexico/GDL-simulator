import React from 'react';
import ButtonCTA from './ButtonCTA';
import '../assets/styles/components/Steps.scss';

const Steps = () => (
  <div className='steps--container'>
    <div className='steps--img__container'>
      <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fimage-form%403x.png?alt=media&token=5ad07475-2f9c-448a-988c-2159cc3a054d' alt='' />
    </div>
    <div className='steps--container__item'>
      <div className='steps--title__container'>
        <h2>¿Cómo funciona?</h2>
      </div>
      <div className='steps--description__hero'>
        <div className='steps--description__container'>
          <p className='steps--description__number'>1</p>
          <p className='steps--description__caption'>Selecciona tus requerimientos </p>
        </div>
        <div className='steps--description__container'>
          <p className='steps--description__number'>2</p>
          <p className='steps--description__caption'>Llena el formulario </p>
        </div>
        <div className='steps--description__container'>
          <p className='steps--description__number'>3</p>
          <p className='steps--description__caption'>¡Manos a la obra!</p>
        </div>
        <ButtonCTA />
      </div>
    </div>

  </div>
);

export default Steps;
