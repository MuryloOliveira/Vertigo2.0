import React, { useState } from 'react';
import eye from '../images/eye.png';
import eyeOff from '../images/eye-off.png';
import '../Formulario.css';

const Formulario = () => {
  const [formState, setFormState] = useState({
    email: '',
    senha: '',
    inputSenha: 'text'
  });

  const handleAlterarInput = (event) => {
    const { id, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleEntrar = () => {
    const { email, senha } = formState;
    alert(`Email: ${email}\nSenha: ${senha}`);
    setFormState({
      email: '',
      senha: '',
      inputSenha: 'text'
    });
  };

  const handleInputSenha = () => {
    setFormState((prevState) => ({
      ...prevState,
      inputSenha: prevState.inputSenha === 'text' ? 'password' : 'text'
    }));
  };

  return (
    <div className="formulario">
      <form action="" id="form-inicial">
        <div className="div-label">
          <label htmlFor="email" className="cinza-escuro">E-mail</label>
        </div>
        <div className="div-input">
          <input
            id="email"
            type="text"
            placeholder="Digite seu e-mail"
            value={formState.email}
            onChange={handleAlterarInput}
          />
        </div>

        <div className="div-label esqueceu">
          <label htmlFor="senha" className="cinza-escuro">Senha</label>
          <button type="button" className="botao-label">Esqueceu a senha?</button>
        </div>
        <div className="div-input">
          <input
            id="senha"
            type={formState.inputSenha}
            placeholder="Digite sua senha"
            value={formState.senha}
            onChange={handleAlterarInput}
          />
          <button type="button" onClick={handleInputSenha} className="on-off">
            <img src={formState.inputSenha === 'text' ? eye : eyeOff} alt="ícone de esconder" />
          </button>
        </div>
      </form>

      <div>
        <button type="button" className="entrar" onClick={handleEntrar}>Entrar</button>
      </div>

      <div className="div-sem-conta">
        <p className="cinza">Ainda não tem uma conta?</p>
        <button type="button" className="inscrever">Inscreva-se</button>
      </div>
    </div>
  );
};

export default Formulario;
