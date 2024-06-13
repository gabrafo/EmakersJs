import React from 'react';
import "../styles/NavBar.css"
import icon from "../assets/icon.png"
import separator from "../assets/separator.png";
import magnifier from "../assets/lupa.png"

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={icon} alt="Ícone" id='icon'/>
        <nav>
            <ul>
                <li><a href="#">Lançamentos</a></li>
                <img src={separator} alt="" />
                <li><a href="#">Populares</a></li>
                <img src={separator} alt="" />
                <li><a href="#">Gêneros</a></li>
                <img src={separator} alt="" />
                <li><a href="#">Promoções</a></li>
                <img src={separator} alt="" />
                <li><a href="#">Conta</a></li>
            </ul>
            <div className="search-box">
                <input type="text" id="search"/>
                <button type="submit" id='search-button'>
                  <img src={magnifier} alt="" />
                </button>
            </div>
        </nav>
    </div>
    
  )
}

export default NavBar