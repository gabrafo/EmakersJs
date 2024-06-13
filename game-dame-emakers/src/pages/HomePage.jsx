import React from 'react';
import "../styles/pages/HomePage.css"
import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';
import Releases from "../components/Releases";

const HomePage = () => {
  return (
    <div className='full_homepage_panel'>
      <NavBar />
      <Carousel />
      <Releases />
    </div>
  )
}

export default HomePage