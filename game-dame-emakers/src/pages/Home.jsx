import React from 'react';
import "../styles/pages/Home.css"
import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';
import Releases from "../components/Releases";

const Home = () => {
  return (
    <div className='full_home_panel'>
      <NavBar />
      <Carousel />
      <Releases />
    </div>
  )
}

export default Home