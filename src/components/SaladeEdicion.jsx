import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SaladeEdicion.scss';

const SaladeEdicion = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemDE'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2FSALA%20DE%20EDICION.mp4?alt=media&token=341dc7a9-f7d1-4768-89b5-fdac216fcc32' />
      </div>
      <h3 className='title--sala'>Sala de Edición</h3>
    </div>
  );
};

export default SaladeEdicion;
