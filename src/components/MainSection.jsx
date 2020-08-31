import React from 'react';
import '../assets/styles/components/MainSection.scss';

const MainSection = () => (
  <section className='information--container'>
    <div className='information--hero__container'>
      <div className='informtation--title__container'>
        <h1>
          ¿Quiénes
          <br />
          Somos?
        </h1>
      </div>
      <div className='information--container__img'>
        <img className='container__img' src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Fcamera%403x.png?alt=media&token=dbed87a1-b52c-4943-b47b-03f8d76707e5' alt='' />
      </div>
    </div>
    <div className='description--container'>
      <div className='description--item__container'>
        <ul className='list--description'>
          <li>
            <div className='description--item'>
              <h2 className='description--numbers'>0000</h2>
              <p>Proyectos</p>
            </div>
          </li>
          <li>
            <div className='description--item'>
              <h2 className='description--numbers'>0000</h2>
              <p>Clientes satisfechos</p>
            </div>
          </li>
          <li>
            <div className='description--item'>
              <h2 className='description--numbers'>0000</h2>
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
          <img src='https://firebasestorage.googleapis.com/v0/b/wakkamole-61f7d.appspot.com/o/gdl-assets%2Flogo-black.svg?alt=media&token=0d892eca-e38c-4d67-bf00-fc08eb049f60' alt='' />
        </div>
      </div>
    </div>
  </section>
);

export default MainSection;
