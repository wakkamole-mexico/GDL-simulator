import React from 'react';
import '../assets/styles/components/ButtonCTAWhite.scss';
import { Link } from 'react-router-dom';

const ButtonCTAWhite = () => (

  <button type='button' className='button--containerw'>
    <Link to='/Quizz'>
      <a href='/Quizz' className='button-ctaw'>Entrar</a>
    </Link>
  </button>

);

export default ButtonCTAWhite;
