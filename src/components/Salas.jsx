import React from 'react';
import '../assets/styles/components/Salas.scss';
import { BiPlayCircle } from 'react-icons/bi';

const Salas = () => (
  <section className='Salas-container'>
    <div className='salas-title__container'>
      <h2 className="title--salas">
        Conoce las salas que usaremos
      </h2>
    </div>
    <div className='cards-container'>
      <div className='card--item'>
        <img className='card--item__img' src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fimage-resultado%403x.png?alt=media&token=da32c8b5-332f-4d60-a033-a7999485817b' alt='' />
        <div className='card--button__container'>
          <button className='card--play__button'>
            <BiPlayCircle className='card--play__icon' />
          </button>
        </div>
        <div className='card--item__details'>
          <p className='card--item__details--title'>Sala de audio</p>
        </div>
      </div>
      <div className='card--item'>
        <img className='card--item__img' src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fcard-1%403x.png?alt=media&token=128879dd-5bab-4d76-a657-463ba057c397' alt='' />
        <div className='card--button__container'>
          <button className='card--play__button'>
            <BiPlayCircle className='card--play__icon' />
          </button>
        </div>
        <div className='card--item__details'>
          <p className='card--item__details--title'>Sala de audio</p>
        </div>
      </div>
      <div className='card--item'>
        <img className='card--item__img' src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fcard-1%403x.png?alt=media&token=128879dd-5bab-4d76-a657-463ba057c397' alt='' />
        <div className='card--button__container'>
          <button className='card--play__button'>
            <BiPlayCircle className='card--play__icon' />
          </button>
        </div>
        <div className='card--item__details'>
          <p className='card--item__details--title'>Sala de audio</p>
        </div>
      </div>
    </div>
  </section>
);

export default Salas;
