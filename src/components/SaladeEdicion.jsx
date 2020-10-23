import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SaladeEdicion.scss';

const SaladeEdicion = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemDE'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/SALA%20DE%20EDICION.mp4?alt=media&token=7021e764-ac1d-4a8c-b53d-c42ab5a31778' />
      </div>
      <h3 className='title--sala'>Sala de Edición</h3>
    </div>
  );
};

export default SaladeEdicion;
