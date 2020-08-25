import React from 'react';
import ResponsivePlayer from '../components/ResponsivePlayer';
import Salas from '../components/Salas';
import '../assets/styles/components/Resultado.scss';
import '../assets/styles/Animations.scss';

const Resultado = () => (
  <div>
    <div className='result-container'>
      <div className='result-container-main'>
        <div className='result-container-title fadeIn'>
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
            url='https://www.youtube.com/watch?v=BPoQuaTyt-U&t=9s'
          />
        </div>

      </div>
      <div className='scroll-container fadeInUp'>
        <p className='scroll-title'>scroll</p>
        <div className='c-scrolldown'>
          <div className='c-line' />
        </div>
      </div>

    </div>
    <Salas />
  </div>
);

export default Resultado;
