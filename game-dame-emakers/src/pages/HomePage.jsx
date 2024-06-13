import React from 'react';
import "../styles/pages/HomePage.css"
import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';

const HomePage = () => {
  return (
    <div className='full-panel'>
      <NavBar />
      <Carousel />
    </div>
  )
}

export default HomePage