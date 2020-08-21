import React from 'react';
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
      <iframe width='560' height='315' src='https://www.youtube.com/embed/BPoQuaTyt-U' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
    </div>

  </div>
);

export default Resultado;
