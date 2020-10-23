import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SalaCreativa.scss';

const SalaCreatvia = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemSC'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/SALA%20CREATIVA.mp4?alt=media&token=fb1a5aa9-bd5f-4ac1-b79b-b82fd602eea5' />
      </div>
      <h3 className='title--sala'>Sala Creativa</h3>
    </div>
  );
};

export default SalaCreatvia;
