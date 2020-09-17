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
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fservices%2FProduccion%20Audiovisual%403x.png?alt=media&token=b196e25b-f4cc-49ff-9b56-6af6deab0e4c' alt='Produccion audiovisual' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fservices%2FMothion%20graphics%403x.png?alt=media&token=4c66e3e0-eda4-4a7f-a50b-fc81aae18607' alt='mothion graphics' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fservices%2FFotografia%403x.png?alt=media&token=4a2e1605-46d1-41e1-9326-b4c1efa3d47c' alt='fotografia' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fservices%2FGuion%403x.png?alt=media&token=24d1b7cd-8f2b-4231-96be-eb8743e63e2d' alt='guion' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fservices%2FFilmacion%403x.png?alt=media&token=9020bef5-6f1c-40e4-80de-7c8dbd38e5fc' alt='filmacion' />
      </div>
      <div className='cards--item'>
        <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fservices%2FCorreccion%20de%20color%403x.png?alt=media&token=e5ac7b4f-bb3c-4b1d-8538-ed1182e97e6f' alt='correcion' />
      </div>
    </div>
    <div className='services--cards__subtitle'>
      <h2>
        Entra a nuestro simulador y te mostraremos
        como puede verse tu proyecto.
      </h2>
      <ButtonCTABLack />
    </div>
  </div>
);

export default Services;
