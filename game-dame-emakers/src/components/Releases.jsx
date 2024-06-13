import React from 'react';
import "../styles/components/Releases.css"
import bobesponja from "../assets/bobesponja.png"
import deliverus from "../assets/deliver.png"
import spellforce from "../assets/spellforce.png"
import deathstranding from "../assets/loveukojima.png"
import perish from '../assets/perish.png'
import cart from '../assets/cart.png'

const Releases = () => {
  return (
    <div className="releases_panel">
        <p id='releases_txt'>Lançamentos</p>
        <img src={bobesponja} alt="SpongeBob Squarepants: Battle for Bikini Bottom" id='bobimg'/>
        <img src={deliverus} alt="Deliver Us Mars" id='deliverusimg'/>
        <img src={spellforce} alt="Spellforce 3" id='spellforceimg'/>
        <img src={deathstranding} alt="Death Stranding" id='deathimg'/>
        <img src={perish} alt="Perish" id='perishimg'/>
        <div className='price_bobesponja'>
          R$ 299,00
        </div>
        <div className='price_deliverus'>
          R$ 299,00
        </div>
        <div className='price_spellforce'>
          R$ 299,00
        </div>
        <div className='price_death'>
          R$ 299,00
        </div>
        <div className='price_perish'>
          R$ 299,00
        </div>
        <div className='shopping_cart'>
          <img src={cart} alt="" />
        </div>
    </div>
  )
}

export default Releases
