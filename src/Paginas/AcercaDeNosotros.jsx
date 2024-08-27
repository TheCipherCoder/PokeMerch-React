import React from 'react';
import '../estilos/acercaDeNosotros.css';
import { useThemeContext } from '../context/ThemeContext';
function AcercaDeNosotros() {
  const {contextTheme} = useThemeContext()
  return (
    <div className='acerca-container'>
      <div className="fondo-todo" id={contextTheme}></div>
      <div className='acerca-image-section'>
        <img 
          src="https://i.blogs.es/18d22e/fkf_pfbxkaaacor/1366_2000.jpeg" 
          alt="Acerca de Nosotros"
          className='acerca-image'
        />
      </div>
      <div className='acerca-content'>
        <h1>Acerca de Nosotros</h1>
        <p>
          En <strong>PokeMerch</strong>, nos apasiona todo lo relacionado con el mundo de Pokémon. 
          Desde la ropa más exclusiva, los juegos más emocionantes hasta los accesorios más geniales. 
          Nos esforzamos por traer los productos de Pokémon más auténticos y de alta calidad para nuestros fans.
        </p>
        <p>
          Creemos en el poder de la comunidad Pokémon y trabajamos para ser el mejor destino para todos los entrenadores Pokémon. 
          Ya sea que estés buscando tu próximo accesorio o algo único para tu colección, en <strong>PokeMerch</strong> te tenemos cubierto.
        </p>
        <p>
          ¡Únete a nosotros en esta aventura y sé parte del universo Pokémon!
        </p>
      </div>
    </div>
  );
}

export default AcercaDeNosotros;
