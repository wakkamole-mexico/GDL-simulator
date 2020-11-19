import React from 'react';
import ButtonCTABLack from './ButtonCTABlack';
import '../assets/styles/components/Services.scss';

const Services = () => (
  <div className='services--container'>
    <div className='services--container__title'>
      <h1>SERVICIOS</h1>
    </div>
    <div className='services--cards--container'>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Fpa%402x.png?alt=media&token=2fcee55e-b5a9-41a8-915d-b57b713a3a13' alt='Produccion audiovisual' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2FMG%402x.png?alt=media&token=91260961-7396-4599-b72d-b68075f6b0b3' alt='mothion graphics' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2FFotografia%402x.png?alt=media&token=9348e209-b60b-448d-81fa-9265eca6bec1' alt='fotografia' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fservices%2FGuion%403x.png?alt=media&token=24d1b7cd-8f2b-4231-96be-eb8743e63e2d' alt='guion' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Ffilamacion%402x.png?alt=media&token=7ed21105-edbb-43e2-abed-584864f5e4b6' alt='filmacion' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fservices%2FCorreccion%20de%20color%403x.png?alt=media&token=e5ac7b4f-bb3c-4b1d-8538-ed1182e97e6f' alt='correcion' />
      </div>
    </div>
    <div className='services--cards__subtitle'>
      <h2 className="cards__subtitle--item">
        Entra a nuestro simulador y te mostraremos
        como puede verse tu proyecto.
      </h2>
      <ButtonCTABLack />
    </div>
  </div>
);

export default Services;
