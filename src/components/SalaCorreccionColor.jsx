import React from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import '../assets/styles/components/SalaCorreccionColor.scss';

const SalaCorreccionColor = () => {
  return (
    <div className='sala--item'>
      <div className='card--itemCC'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/SALA%20DE%20CORREACION%20DE%20COLOR.mp4?alt=media&token=72511614-02f4-49d6-a38f-eb994d93ac23' />
      </div>
      <h3 className='title--sala'>Sala de Corrección de Color</h3>
    </div>
  );
};

export default SalaCorreccionColor;
