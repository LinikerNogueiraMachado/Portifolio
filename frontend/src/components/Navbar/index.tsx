import './style.css';

function Navbar() {
  return (
    <nav>
      <ul className="container">
        <div className="portifolio-nav-content">
          <h1>Liniker Nogueira Machado</h1>

          <a href="https://github.com/LinikerNogueiraMachado">
            <div className="portifolio-contact-container">
              <p className="portifolio-contact-link">GitHub</p>
            </div>
          </a>
        </div>
      </ul>
      <footer className="rodape">
        Portifólio desenvolvido por <a href="/Found/1"><em>Liniker Nogueira Machado</em></a> || São Paulo
        || &copy;2022 todos os direitos reservados
      </footer>
    </nav>
  )
}
export default Navbar;