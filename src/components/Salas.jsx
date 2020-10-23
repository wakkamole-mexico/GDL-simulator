import React from 'react';
import '../assets/styles/components/Salas.scss';
import { BiPlayCircle } from 'react-icons/bi';
import SalaCreativa from './SalaCreativa';
import SaladeAudio from './SaladeAudio';
import SalaCorreccionColor from './SalaCorreccionColor';
import SaladeEdicion from './SaladeEdicion';
import SaladeFilmacion from './SaladeFilmacion';
import SaladeImagen from './SaladeImagen';
import SalaTHX from './SalaTHX';
import ResponsivePlayer from './ResponsivePlayer';

const Salas = () => (
  <section className='Salas-container'>
    <div className='salas-title__container'>
      <h2 className='title--salas'>
        Conoce las salas
        <br />
        que usaremos
      </h2>
    </div>
    <div className='cards-container'>

      <SalaCreativa />
      <SaladeAudio />
      <SalaCorreccionColor />
      <SaladeEdicion />
      <SaladeFilmacion />
      <SaladeImagen />
      <SalaTHX />
    </div>
  </section>
);

export default Salas;
