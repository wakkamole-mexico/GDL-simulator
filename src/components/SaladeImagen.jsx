import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SaladeImagen.scss';

const SaladeImagen = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemSI'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/SALA%20DE%20IMAGEN.mp4?alt=media&token=7f6552ef-2053-4cf5-8888-8e3b37a3b47f' />
      </div>
      <h3 className='title--sala'>Sala de Imagen</h3>
    </div>
  );
};

export default SaladeImagen;
