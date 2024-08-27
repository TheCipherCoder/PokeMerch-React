import React from 'react';
import '../estilos/filtros.css';
import { useThemeContext } from '../context/ThemeContext';

function Filtros({ filtros, setFiltros, categorias , titulo}) {
  const cambioPrecio = (e) => {
    setFiltros({ ...filtros, precioMinimo: Number(e.target.value) });
  };

  const cambioRegion = (e) => {
    setFiltros({ ...filtros, categoria: e.target.value });
  };

  const {contextTheme} = useThemeContext()
  return (
    <div className='filtros' id={contextTheme}>
      <h2 className='titulo-filtro'>{titulo}</h2>
      <div className='filtro-precio'>
        <label htmlFor='precio' className='precio'>Precio mínimo</label>
        <input
          id='precio'
          type='range'
          min='0'
          max='400'
          onChange={cambioPrecio}
          value={filtros.precioMinimo}
        />
        <span className='input-valor'>${filtros.precioMinimo}</span>
      </div>

      <div className='filtro-region'>
        <label htmlFor='categoria' className='categoria'>Categoría</label>
        <select id='categoria' onChange={cambioRegion} value={filtros.categoria}>
          <option value='todas'>Todas</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filtros;
