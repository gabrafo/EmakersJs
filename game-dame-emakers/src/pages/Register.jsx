import React from 'react';
import "../styles/pages/Register.css";
import RightPanel from '../components/RightPanel';
import ArrowButton from '../components/ArrowButton';

const Register = () => {
  return (
    <div className='full_panel'>

      <div className='left_panel'>

        <div className='register_title'>
          <h1 className='fine_text'>Registrar</h1>
        </div>

        <div className="forms">
          <input className="nome" type="text" placeholder="Nome de Usuário"></input>
          <input className="emailReg" type="email" placeholder="E-mail"></input>
          <input className="cpf" type="text" placeholder="CPF"></input>
          <input className="senhaReg" type="password" placeholder="Senha"></input>
          <input className="confirmar" type="password" placeholder="Confirmar Senha"></input>
        </div>

        <div className="login">
          <a href="/login">
            <div className="arrow_div">
              <ArrowButton />
            </div>
          </a>
        </div>

        <div className="login_div">
          <a href="/login">
            <div className="login_container">Fazer Login</div>
          </a>
        </div>

      </div>

      <RightPanel />
  </div>
  )
}

export default Register