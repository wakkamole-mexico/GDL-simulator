import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SalaCorreccionColor.scss';

const SalaCorreccionColor = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemCC'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2FSALA%20DE%20CORREACION%20DE%20COLOR.mp4?alt=media&token=09115912-bbc9-470e-a5b8-fdc843e5641d' />
      </div>
      <h3 className='title--sala'>Sala de Corrección de Color</h3>
    </div>
  );
};

export default SalaCorreccionColor;
