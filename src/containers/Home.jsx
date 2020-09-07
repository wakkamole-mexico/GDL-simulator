import React, { useState, useEffect } from 'react';
import RequestStart from '../components/RequestStart';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Divider from '../components/Divider';
import Services from '../components/Services';
import Steps from '../components/Steps';
import '../assets/styles/App.scss';

const Home = () => {
  return (
    <div className='App'>
      <RequestStart />
      <Header />
      <Divider />
      <MainSection />
      <Divider />
      <Services />
      <Divider />
      <Steps />
    </div>
  );
};

export default Home;
