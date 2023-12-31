import React from 'react';
import Logo from './components/logo';
import Header from './components/Header';
import Formulario from './components/Formulario';
import fundoRoxo from './images/fundo-roxo.png';
import './App.css';

const App = () => (
  <section>
    <div className="tela">
      <Logo />
      <Header />
      <Formulario />
    </div>
    <div>
      <img src={fundoRoxo} alt="imagem com fundo roxo" className="roxa" />
    </div>
  </section>
);

export default App;