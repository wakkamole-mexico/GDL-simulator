import React from 'react';
import ResponsivePlayer from '../components/ResponsivePlayer';
import '../assets/styles/components/Resultado.scss';

const Resultado = () => (
  <div className='result-container'>
    <div className='result-container-title'>
      <h1>
        Así puede
        <br />
        verse tu
        <br />
        próximo
        <br />
        proyecto
      </h1>
    </div>
    <div className='result-container-video'>
      <ResponsivePlayer
      url="https://www.youtube.com/watch?v=BPoQuaTyt-U&t=9s"
      />
    </div>

  </div>
);

export default Resultado;
