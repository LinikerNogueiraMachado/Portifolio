import React from 'react';
import './style.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="portifolio-nav-content">
          <h1>Liniker Nogueira Machado</h1>
          <ul>
            <li>
              <NavLink  to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink  to='/Projetos/1'>Projetos</NavLink>
            </li>
            <li>
              <NavLink  to='/Sobre/1'>Sobre</NavLink>
            </li>
            <a href="https://github.com/LinikerNogueiraMachado">
              <div className="portifolio-contact-container">
                <p className="portifolio-contact-link">GitHub</p>
              </div>
            </a>
          </ul>
        </div>
      </div>
      <footer className="rodape">
        Portifólio desenvolvido por <a href="/Found/1"><em>Liniker Nogueira Machado</em></a> || São Paulo
        || &copy;2022 todos os direitos reservados
      </footer>
    </nav>
  )
}
export default Navbar;