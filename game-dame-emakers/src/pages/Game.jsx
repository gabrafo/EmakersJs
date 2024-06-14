import React from 'react';
import "../styles/pages/Game.css"
import NavBar from '../components/NavBar';
import gow from "../assets/gow.png"
import cart2 from '../assets/cart.png'
import square_cart from "../assets/square_cart.png"
import square_refund_cart from "../assets/square_refund_cart.png"
import ellipse_gow from "../assets/ellipse_gow.png"

const Game = () => {
  return (
    <div className='full_game_panel'>
        <NavBar />
        <div className='rectangle' id="rectangle_game">
            <img src={gow} alt="God of War" id="gow_game_img"/>
            <h1 id='gow_title'>God of War</h1>
            <p id='gow_text'>
            Com a vingança contra os 
            deuses do Olimpo em um 
            passado distante, Kratos 
            agora vive como um mortal
            no reino dos deuses e 
            monstros nórdicos. É nesse 
            mundo duro e implacável 
            que ele deve lutar para 
            sobreviver... e ensinar 
            seu filho a fazer o mesmo.
            </p>
            <hr id='line_game'/>
        </div>
        <div>
            <img src={square_cart} alt="" id='square_cart'/>
            <img src={square_refund_cart} alt="" id='square_refund_cart'/>
            <img src={ellipse_gow} alt="" id='ellipse_gow'/>
        </div>
        <div id='price_gow_game'>
            95%
        </div>
        <div className='shopping_cart2'>
          <img src={cart2} alt="" />
        </div>
    </div>
  )
}

export default Game