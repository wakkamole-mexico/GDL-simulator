import React from 'react';
import '../assets/styles/components/RequestStart.scss';
import ButtonCTA from './ButtonCTA';
import '../assets/styles/Animations.scss';

const RequestStart = () => (
  <div className='request-container'>
    <div className='request--title__hero'>
      <div className='request-container__title fadeIn'>
        <h1 className='title--main'>
          Queremos conocer los
          <br />
          requerimientos que
          <br />
          necesitas para tu proyecto.
        </h1>
      </div>
      <div className='button-request__container fadeInUp'>
        <ButtonCTA />
      </div>
    </div>
  </div>
);

export default RequestStart;
