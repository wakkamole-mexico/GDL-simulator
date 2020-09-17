import React from 'react';
import '../assets/styles/components/RequestStart.scss';
import ButtonCTA from './ButtonCTA';

const RequestStart = () => (
  <div className='request-container'>
    <div className='request--title__hero'>
      <div className='request-container__title'>
        <h1>
          Queremos conocer los
          <br />
          requerimientos que
          <br />
          necesitas para tu proyecto.
        </h1>
      </div>
      <div className='button-request__container'>
        <ButtonCTA />
      </div>
    </div>
  </div>
);

export default RequestStart;
