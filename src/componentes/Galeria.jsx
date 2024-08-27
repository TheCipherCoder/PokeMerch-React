import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import img1 from '../assets/galeria-gift/img1.gif';
import img2 from '../assets/galeria-gift/img2.jpg';
import img3 from '../assets/galeria-gift/img3.jpg';
import img4 from '../assets/galeria-gift/img4.jpg';

import smallImg1 from '../assets/galeria-gift/responsive-gif-1.gif';
import smallImg2 from '../assets/galeria-gift/responsive-img-2.jpg';
import smallImg3 from '../assets/galeria-gift/responsive-gif-3.gif';
import smallImg4 from '../assets/galeria-gift/responsive-img-4.jpg';
import '../estilos/galeria.css';

function Galeria() {
  const {contextTheme} = useThemeContext()
  return (
    <div className='galeria-imgs'>
        <div className="fondo-todo" id={contextTheme}></div>
        <div className='galeria-img-seccion'>
          <div className='img-galeria-contenedor'>
            <img src={smallImg1} alt="PokeColeccion" className='galeria-imagen small'/>
            <img src={img1} alt="PokeColeccion" className='galeria-imagen regular'/>
            <div className='contenido-galeria'>
              <div className='titulo-galeria-imagen'>PokeRopa</div>
              <div className='descripcion-galeria'>Descubre la mejor colección de productos Pokémon.</div>
            </div>
          </div>
        </div>

        <div className='galeria-img-seccion'>
          <div className='img-galeria-contenedor'>
            <img src={smallImg2} alt="PokeJuegos" className='galeria-imagen small'/>
            <img src={img2} alt="PokeJuegos" className='galeria-imagen regular'/>
            <div className='contenido-galeria'>
              <div className='titulo-galeria-imagen'>PokeJuegos</div>
              <div className='descripcion-galeria'>Explora los juegos más divertidos de Pokémon.</div>
            </div>
          </div>
        </div>

        <div className='galeria-img-seccion'>
          <div className='img-galeria-contenedor'>
            <img src={smallImg3} alt="PokeAccesorios" className='galeria-imagen small'/>
            <img src={img3} alt="PokeAccesorios" className='galeria-imagen regular'/>
            <div className='contenido-galeria'>
              <div className='titulo-galeria-imagen'>PokeAccesorios</div>
              <div className='descripcion-galeria'>Los mejores accesorios para los fans de Pokémon.</div>
            </div>
          </div>
        </div>

        <div className='galeria-img-seccion'>
          <div className='img-galeria-contenedor'>
            <img src={smallImg4} alt="PokeDex" className='galeria-imagen small'/>
            <img src={img4} alt="PokeDex" className='galeria-imagen regular'/>
            <div className='contenido-galeria'>
              <div className='titulo-galeria-imagen'>PokeDex</div>
              <div className='descripcion-galeria'>Conoce todos los Pokémon en la Pokédex.</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Galeria;
