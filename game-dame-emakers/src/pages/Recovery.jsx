import React from 'react';
import "../styles/pages/Recovery.css"
import RightPanel from '../components/RightPanel';
import ArrowButton from '../components/ArrowButton';

const Recovery = () => {
  return (
    <div className='full-panel'>

      <div className='left-panel'>

        <div className='recovery-title'>
          <h1 className='fine-text'>Recuperar
            <br />
            Conta
          </h1>
        </div>

        <div className="recovery-forms">
          <input className="email" type="email" placeholder="E-mail"></input>
        </div>

        <div className="indexPage">
          <a href="/homepage">
            <div className="arrow-div">
              <ArrowButton />
            </div>
          </a>
        </div>

        <div className="footer-recovery-div">
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