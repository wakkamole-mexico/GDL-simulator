import React from 'react';
import '../assets/styles/components/Salas.scss';
import { BiPlayCircle } from 'react-icons/bi';
import SalaCreativa from './SalaCreativa';
import ResponsivePlayer from './ResponsivePlayer';

const Salas = () => (
  <section className='Salas-container'>
    <div className='salas-title__container'>
      <h2 className='title--salas'>
        Conoce las salas que usaremos
      </h2>
    </div>
    <div className='cards-container'>

      <SalaCreativa />
      <SalaCreativa />
      <SalaCreativa />
      <SalaCreativa />
      <SalaCreativa />
      <SalaCreativa />
      <SalaCreativa />
    </div>
  </section>
);

export default Salas;
