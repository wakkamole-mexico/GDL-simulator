import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SaladeImagen.scss';

const SaladeImagen = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemSI'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2FSALA%20DE%20IMAGEN.mp4?alt=media&token=c3b02a23-d25f-4306-bd62-82d465debd11' />
      </div>
      <h3 className='title--sala'>Sala de Imagen</h3>
    </div>
  );
};

export default SaladeImagen;
