import React from 'react';
import '../assets/styles/components/ButtonCTA.scss';
import { Link } from 'react-router-dom';

const ButtonCTA = () => (

  <button type='button' className='button--container'>
    <Link to='/Quizz'>
      <a href='/Quizz' className='button-cta'>Entrar</a>
    </Link>
  </button>

);

export default ButtonCTA;
