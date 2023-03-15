import React from 'react';
import Common from './Common'
import web from './images/hero.png';

function Home() {
  return (
    <Common 
    name='Hello Welcome to Ghazi World The Programmer' 
    imgsrc={web} 
    visit='./services' 
    btname='Get Started' 
    />
  )
}

export default Home;
