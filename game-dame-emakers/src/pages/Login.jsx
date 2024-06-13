import React from 'react';
import "../styles/pages/Login.css"
import RightPanel from '../components/RightPanel';
import ArrowButton from '../components/ArrowButton';

const Login = () => {
  return (
    <div className='full-panel'>

      <div className='left-panel'>

        <div className='login-title'>
          <h1 className='fine-text'>Login</h1>
        </div>

        <div className="login-forms">
          <input className="email" type="email" placeholder="E-mail"></input>
          <input className="senha" type="password" placeholder="Senha"></input>
        </div>

        <div className="indexPage">
          <a href="/homepage">
            <div className="arrow-div">
              <ArrowButton />
            </div>
          </a>
        </div>

        <div className="footer-div">
            <a href="/">
                Criar Conta
            </a>
            <br></br>
            <a href="/recovery">
                Esqueceu a Senha?
            </a>
        </div>

      </div>

      <RightPanel />
    </div>
  )
}

export default Login