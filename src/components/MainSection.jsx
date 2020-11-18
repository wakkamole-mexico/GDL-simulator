import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/MainSection.scss';
import '../assets/styles/Animations.scss';


const MainSection = () => (
  <section className='information--container'>
    <div className='information--hero__container'>
      <div className='informtation--title__container'>
        <h1 className='information__title'>
          ¿Quiénes
          <br />
          Somos?
        </h1>
      </div>

      <div className='information--container__img'>

        <img className='container__img' src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Fimage-1%403x.png?alt=media&token=48b24d60-c539-4a97-8eff-9e9668940bb3' alt='' />

      </div>
    </div>
    <div className='description--container'>
      <div className='description--item__container'>
        <ul className='list--description'>
          <li>
            <div className='description--item'>
              <h2 className='description--numbers'>5069</h2>
              <p>Proyectos</p>
            </div>
          </li>
          <li>
            <div className='description--item'>
              <h2 className='description--numbers'>1026</h2>
              <p>Clientes satisfechos</p>
            </div>
          </li>
          <li>
            <div className='description--item'>
              <h2 className='description--numbers'>9830</h2>
              <p>Horas filmadas</p>
            </div>
          </li>

        </ul>
      </div>
      <div className='paragraph--container'>
        <p>
          Grupo de León es una casa productora y post productora fundada en 1979.
          <br />
          <br />
          Somos apasionados del cine. Nuestra trayectoria se basa en la fusión de lo
          clásico con lo innovador. Nos gusta contar historias de principio a fin.
          <br />
          <br />
          Amamos las sensaciones que provocan ciertas imágenes y sonidos, la conexión que existe con nuestra memoria y la relación de ambos elementos, los cuales nos hacen experimentar nuevas sensaciones.
        </p>
        <h3>
          Creamos publicidad, entretenimiento y experiencias.
        </h3>
        <p>
          Tenemos varios enfoques para ofrecerte siempre lo mejor.
          <br />
          Producción, Post producción, Publicidad, Video, Audio, Radio, Fotografía, Diseño y
          Difusión.
          <br />
          Esto es Grupo de León, te invitamos a ser parte de nuestra familia.
        </p>
        <div className='paragraph--container__img'>
          <img src='https://firebasestorage.googleapis.com/v0/b/gdl-9ecdf.appspot.com/o/assets%2Flogo-gdl.svg?alt=media&token=db9e327e-d06f-4064-9f30-797b09fdda62' alt='' />
        </div>
      </div>
    </div>
  </section>
);

export default MainSection;
