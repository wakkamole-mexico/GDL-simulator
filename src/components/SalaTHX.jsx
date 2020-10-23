import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SalaTHX.scss';

const SalaTHX = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemTX'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/SALA%20THX51.mp4?alt=media&token=7d0cd121-c5de-4fe1-85c0-99f2c3875ca4' />
      </div>
      <h3 className='title--sala'>Sala THX5.1</h3>
    </div>
  );
};

export default SalaTHX;
