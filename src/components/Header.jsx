import React from 'react';
import '../styles/Header.css';
import starwars from '../img/starwars.png';

function Header() {
  const tempo = 8000;
  setTimeout(() => {
    const a = document.getElementById('div-teste');

    a.style = 'display:none';
  }, tempo);

  return (
    <header>
      <h3>

        <img src={ starwars } alt="nome" width={ 700 } />
      </h3>
      <h2 id="div-teste">
        Projeto
        <br />
        desenvolvido
        por
        <br />
        Alan Foster
        <br />
        Utilizando Conntext Api
        <br />
        Reac Hook
        <br />
        E testes cobrindo
        100% da aplicação
        VQV!
      </h2>

    </header>
  );
}

export default Header;
