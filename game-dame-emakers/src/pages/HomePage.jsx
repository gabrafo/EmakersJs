import React from 'react';
import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';
import Releases from "../components/Releases";

const HomePage = () => {
  return (
    <div className='full_panel'>
      <NavBar />
      <Carousel />
      <Releases />
    </div>
  )
}

export default HomePage