import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SaladeFilmacion.scss';

const SaladeFilmacion = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemDF'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/SALA%20DE%20FILMACION.mp4?alt=media&token=b767a47a-c0b9-4336-ac8e-6b7a97784fac' />
      </div>
      <h3 className='title--sala'>Sala de Filmación</h3>
    </div>
  );
};

export default SaladeFilmacion;
