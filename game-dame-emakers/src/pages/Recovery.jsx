import React from 'react';
import "../styles/pages/Recovery.css"
import RightPanel from '../components/RightPanel';
import ArrowButton from '../components/ArrowButton';

const Recovery = () => {
  return (
    <div className='full_panel'>

      <div className='left_panel'>

        <div className='recovery_title'>
          <h1 className='fine_text'>Recuperar
            <br />
            Conta
          </h1>
        </div>

        <div className="recovery_forms">
          <input className="email" type="email" placeholder="E-mail"></input>
        </div>

        <div className="home">
          <a href="/home">
            <div className="arrow_div">
              <ArrowButton />
            </div>
          </a>
        </div>

        <div className="footer_recovery_div">
            <a href="/">
                Criar Conta
            </a>
            <br></br>
            <a href="/login">
                Fazer Login
            </a>
        </div>

      </div>

      <RightPanel />
  </div>
  )
}

export default Recovery