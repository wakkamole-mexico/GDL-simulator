import React from 'react';
import ResponsivePlayer from '../components/ResponsivePlayer';
import ScrollAnimation from '../components/ScrollAnimation';
import Salas from '../components/Salas';
import Divider from '../components/Divider';
import ProjectsDone from '../components/ProjectsDone';
import '../assets/styles/components/Resultado.scss';
import '../assets/styles/Animations.scss';

const Resultado = () => (
  <div>
    <div className='result-container'>
      <div className='result-container-main'>
        <div className='result-container-title fadeIn'>
          <h1 className='title--result'>
            Así puede
            <br />
            verse tu
            <br />
            próximo
            <br />
            proyecto
          </h1>
          <h2 className='title-hide'>
            Así puede verse tu próximo proyecto
          </h2>
        </div>
        <div className='result-container-video'>
          <ResponsivePlayer
            url='https://www.youtube.com/watch?v=BPoQuaTyt-U&t=9s'
          />
        </div>

      </div>
      <ScrollAnimation />
    </div>
    <Divider />
    <Salas />
    <Divider />
    <ProjectsDone />
  </div>
);

export default Resultado;
