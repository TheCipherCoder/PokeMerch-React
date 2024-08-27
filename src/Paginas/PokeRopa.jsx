import React, { useState } from 'react';
import Filtros from '../componentes/Filtros';
import { Productos } from '../componentes/Productos';
import { productos } from '../Json/productosRopa.json';
import { useThemeContext } from '../context/ThemeContext';

function PokeRopa() {
  const [filtros, setFiltros] = useState({
    categoria: 'todas',
    precioMinimo: 0,
  });

  const categoriasUnicas = [
    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  const filtrarProductos = () => {
    return productos.filter((producto) => {
      return (
        producto.precio >= filtros.precioMinimo &&
        (filtros.categoria === 'todas' || filtros.categoria === producto.categoria)
      );
    });
  };

  const productosFiltrados = filtrarProductos();
  const {contextTheme} = useThemeContext()
  return (
    <>
      <div className="fondo-todo" id={contextTheme}></div>
      <Filtros filtros={filtros} setFiltros={setFiltros} categorias={categoriasUnicas} titulo="PokeRopa" />
      {productosFiltrados.length > 0 ? (
        <Productos productos={productosFiltrados} />
      ) : (
        <div className='container-proximamente' id={contextTheme}>
          <div className='proximamente'>
            <div className='proximamente-img-container'> 
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEYs5bM1Qqw15s3PjGWZC7Pw_VYU-iyF8OQ&s" alt="" className='proximamente-img'/>
            </div>
            <h3>Próximamente</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default PokeRopa;
