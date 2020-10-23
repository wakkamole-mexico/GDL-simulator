import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SaladeFilmacion.scss';

const SaladeFilmacion = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemDF'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2FSALA%20DE%20FILMACION.mp4?alt=media&token=8986c4a2-f037-47e4-b525-7cfa8f16c954' />
      </div>
      <h3 className='title--sala'>Sala de Filmación</h3>
    </div>
  );
};

export default SaladeFilmacion;
