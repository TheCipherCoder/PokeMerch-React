import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useThemeContext } from '../context/ThemeContext';
import '../estilos/misCompras.css';

function MisCompras() {
  const { carrito, agregarAlCarrito, quitarDelCarrito, limpiarCarrito } = useCart();
  const [notification, setNotification] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const handleCompra = () => {
    setNotification('Compra exitosa');
    setNotificationVisible(true);
    limpiarCarrito();
    setTimeout(() => setNotificationVisible(false), 3000);
  };
  const { contextTheme } = useThemeContext();
  return (
    <div className="mis-compras" id={contextTheme}>
    <div className="fondo-todo" id={contextTheme}></div>
      {notificationVisible && <div className={`notification ${notificationVisible ? 'show' : 'hide'}`}>{notification}</div>}
      <h2 className='misCompras-titulo'>Mis Compras</h2>
      {carrito.length === 0 ? (
        <p className='nulll'>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id} className="mis-compras-item">
                <img src={producto.imagen} alt={producto.titulo} className="mis-compras-item-imagen" />
                <div className="mis-compras-item-info">
                  <span>{producto.titulo} - ${producto.precio} x {producto.cantidad}</span>
                  <div className="mis-compras-cantidad-control">
                    <button onClick={() => quitarDelCarrito(producto.id)}>-</button>
                    <button onClick={() => agregarAlCarrito(producto)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mis-compras-total">
            <h3>Total: ${calcularTotal().toFixed(2)}</h3>
          </div>
          <button className="comprar-button" onClick={handleCompra}>Comprar</button>
        </div>
      )}
    </div>
  );
}

export default MisCompras;
