import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SaladeAudio.scss';

const SaladeAudio = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemSA'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/SALA%20DE%20AUDIO.mp4?alt=media&token=5ef7b9c0-c0bf-4b2b-89b6-4d6ad284ed8d' />
      </div>
      <h3 className='title--sala'>Sala de Audio</h3>
    </div>
  );
};

export default SaladeAudio;
