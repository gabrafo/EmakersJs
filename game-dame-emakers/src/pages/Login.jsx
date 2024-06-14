import React from 'react';
import "../styles/pages/Login.css"
import RightPanel from '../components/RightPanel';
import ArrowButton from '../components/ArrowButton';

const Login = () => {
  return (
    <div className='full_panel'>

      <div className='left_panel'>

        <div className='login_title'>
          <h1 className='fine_text'>Login</h1>
        </div>

        <div className="login_forms">
          <input className="email" type="email" placeholder="E-mail"></input>
          <input className="senha" type="password" placeholder="Senha"></input>
        </div>

        <div className="home">
          <a href="/home">
            <div className="arrow_div">
              <ArrowButton />
            </div>
          </a>
        </div>

        <div className="footer_div">
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