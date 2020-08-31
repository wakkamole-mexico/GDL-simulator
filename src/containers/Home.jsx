import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Divider from '../components/Divider';
import '../assets/styles/App.scss';

const Home = () => {
  return (
    <div className='App'>
      <Header />
      <Divider />
      <MainSection />
    </div>
  );
};

export default Home;
