import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SalaTHX.scss';

const SalaTHX = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemTX'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2FSALA%20CREATIVA.mp4?alt=media&token=3d17cf52-e87f-4a93-b4d8-4cb5c0a1355e' />
      </div>
      <h3 className='title--sala'>Sala THX5.1</h3>
    </div>
  );
};

export default SalaTHX;
