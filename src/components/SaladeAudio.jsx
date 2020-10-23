import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SaladeAudio.scss';

const SaladeAudio = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemSA'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2FSALA%20DE%20AUDIO.mp4?alt=media&token=ed85b07c-616e-498b-b105-1d5f096852c7' />
      </div>
      <h3 className='title--sala'>Sala de Audio</h3>
    </div>
  );
};

export default SaladeAudio;
