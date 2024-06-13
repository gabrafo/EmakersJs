import React from 'react';
import image from '../assets/image.png';
import "../styles/components/RightPanel.css";

const RightPanel = () => {
  return (
    <div className='right_panel'>
      <img src={image} alt="Artwork" id='img'/>
    </div>
  );
}

export default RightPanel;