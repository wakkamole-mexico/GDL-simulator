import React from 'react';
import '../assets/styles/components/ButtonCTABlack.scss';
import { Link } from 'react-router-dom';

const ButtonCTABlack = () => (

  <button type='button' className='button--containerb'>
    <Link to='/Quizz'>
      <a href='/Quizz' className='button-ctab'>Entrar</a>
    </Link>
  </button>

);

export default ButtonCTABlack;
