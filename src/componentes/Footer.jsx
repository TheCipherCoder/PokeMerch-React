import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/footer.css';
import { useThemeContext } from '../context/ThemeContext';

function Footer() {
  const {contextTheme} = useThemeContext()
  return (
    <footer id={contextTheme}>
      <div className='footer-container' id={contextTheme}>
        <div className='footer-image-section'>
          <img 
            src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png" 
            alt="Pikachu Postman"
            className='footer-image'
          />
          <Link to="/formulario"><button className='email-updates'>REGISTRARME</button></Link>
          <div className='footer-location'>
            <i className="bi bi-globe"></i> Peru
          </div>
        </div>
        <div className='footer-links-section'>
          <div className='footer-column'>
            <h3>CATEGORIAS</h3>
            <ul >
              <li><Link to="/ropa" className='link-lista'>PokeRopa</Link></li>
              <li><Link to="/juegos" className='link-lista'>PokeJuegos</Link></li>
              <li><Link to="/accesorios" className='link-lista'>PokeAccesorios</Link></li>
              <li><Link to="/" className='link-lista'>PokeDex</Link></li>
            </ul>
          </div>
          <div className='footer-column'>
            <h3>DETALLES DE CONTACTO</h3>
            <ul>
              <li><a href="https://www.google.com/maps" className='link-lista'>Ubicanos</a></li>
              <li className='link-lista'>Contactanos: +369369369 </li>
            </ul>
          </div>
          <div className='footer-column'>
            <h3>INFORMACION</h3>
            <ul>
              <li><Link to="/acerca" className='link-lista'>Acerca de PokeMerch</Link></li>
              <li><Link to="/acerca" className='link-lista'>About Our PokeMerch</Link></li>
              <li><Link to="/acerca" className='link-lista'>日本版サイト</Link></li>
            </ul>
            <div className='social-icons'>
              <a href="https://www.facebook.com/" target='blank'><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/im_nix__/?igsh=eXF4cGNrYm53MXN0" target='blank'><i className="bi bi-instagram"></i></a>
              <a href="https://www.youtube.com/" target='blank'><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom' >
        <div>© 2024 PokeMerch</div>
      </div>
    </footer>
  )
}

export default Footer;
