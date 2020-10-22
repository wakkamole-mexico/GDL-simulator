import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SalaCreativa.scss';

const SalaCreatvia = () => {
  return (
    <div className='card--itemSC'>
      <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2FSALA%20CREATIVA.mp4?alt=media&token=3d17cf52-e87f-4a93-b4d8-4cb5c0a1355e' />
    </div>
  );
};

export default SalaCreatvia;
