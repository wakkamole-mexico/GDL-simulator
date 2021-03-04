import React from 'react';
import ResponsivePlayer from '../components/ResponsivePlayer';
import ScrollAnimation from '../components/ScrollAnimation';
import Salas from '../components/Salas';
import Divider from '../components/Divider';
import ProjectsDone from '../components/ProjectsDone';
import '../assets/styles/components/Resultado.scss';
import '../assets/styles/Animations.scss';
import SalaCreativa from '../components/SalaCreativa';
import SaladeAudio from '../components/SaladeAudio';
import SalaCorreccionColor from '../components/SalaCorreccionColor';
import SaladeEdicion from '../components/SaladeEdicion';
import SaladeFilmacion from '../components/SaladeFilmacion';
import SaladeImagen from '../components/SaladeImagen';
import SalaTHX from '../components/SalaTHX';

const ResultadoV63 = () => (
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
          <div className='img--title__result'>
            <img src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Fcarita%20feliz.svg?alt=media&token=89c5ccd6-18e5-416c-b5d8-25f60acf9fb3' alt='' />
          </div>
        </div>
        <div className='result-container-video'>
          <ResponsivePlayer
            url='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/videos-resultado%2Fpolo-ralph-lauren.mp4?alt=media&token=499e5715-8350-43f2-8ea2-54a38319d3ef'
          />
        </div>

      </div>
      <ScrollAnimation />
    </div>
    <Divider />
    <section className='Salas-container'>
      <div className='salas-title__container'>
        <h2 className='title--salas'>
          Conoce la Sala
          <br />
          que usaremos
        </h2>
      </div>
      <div className='cards-container'>
        <SalaCorreccionColor />
      </div>
    </section>
    <Divider />

  </div>
);

export default ResultadoV63;
