import React from 'react';
import image from '../assets/image.png';
import "../styles/RightPanel.css";

const RightPanel = () => {
  return (
    <div className='right-panel'>
      <img src={image} alt="Artwork" id='img'/>
    </div>
  );
}

export default RightPanel;