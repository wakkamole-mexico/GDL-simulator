import React from 'react';
import '../assets/styles/components/Salas.scss';
import SalaCreativa from './SalaCreativa';
import { BiPlayCircle } from 'react-icons/bi';
import ResponsivePlayer from './ResponsivePlayer';

const Salas = () => (
  <section className='Salas-container'>
    <div className='salas-title__container'>
      <h2 className='title--salas'>
        Conoce las salas que usaremos
      </h2>
    </div>
    <div className='cards-container'>

      <SalaCreativa/>
      <div className='card--item'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2F_INSTALACIONES%20ULISES%20C.COLOR_REDES.mp4?alt=media&token=bda2edbe-26ec-46a2-9aca-4856147ff75a' />
      </div>
      <div className='card--item'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2F_INSTALACIONES%20ULISES%20C.COLOR_REDES.mp4?alt=media&token=bda2edbe-26ec-46a2-9aca-4856147ff75a' />
      </div>
      <div className='card--item'>
        <ResponsivePlayer url='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gld-videos%2F_INSTALACIONES%20ULISES%20C.COLOR_REDES.mp4?alt=media&token=bda2edbe-26ec-46a2-9aca-4856147ff75a' />
      </div>
    </div>
  </section>
);

export default Salas;
