import React, { useState } from 'react';
import '../estilos/productos.css';
import '../estilos/carrito.css';
import { useCart } from '../context/CartContext';
import { useThemeContext } from '../context/ThemeContext';

export function Productos({ productos }) {
    const [hoveredImageId, setHoveredImageId] = useState(null);
    const [selectedRating, setSelectedRating] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const { carrito, agregarAlCarrito, quitarDelCarrito, limpiarCarrito } = useCart();
    const { contextTheme } = useThemeContext();

    const handleImageMouseOver = (id) => {
        setHoveredImageId(id);
    };

    const handleImageMouseOut = () => {
        setHoveredImageId(null);
    };

    const handleStarClick = (productoId, value) => {
        setSelectedRating(prev => ({
            ...prev,
            [productoId]: value
        }));
    };

    const handleStarMouseOver = (productoId, value) => {
        setSelectedRating(prev => ({
            ...prev,
            [`hover${productoId}`]: value
        }));
    };

    const handleStarMouseOut = (productoId) => {
        setSelectedRating(prev => {
            const { [`hover${productoId}`]: removed, ...rest } = prev;
            return rest;
        });
    };

    const openPopup = (producto) => {
        setCurrentProduct(producto);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='padre-super-carrito-productos'>
            <div className='productos-wrapper'>
                <div className={`overlay ${showPopup ? 'show' : ''}`} onClick={closePopup}></div>
                <div className='contenedor'>
                    {productos.map((producto) => (
                        <div key={producto.id} className='producto'>
                            <div
                                className='img-contenedor'
                                onMouseOver={() => handleImageMouseOver(producto.id)}
                                onMouseOut={handleImageMouseOut}
                            >
                                <img
                                    className='imagen-product'
                                    src={producto.imagen}
                                    alt={producto.titulo}
                                    style={{
                                        transform: hoveredImageId === producto.id ? 'scale(1.1)' : 'scale(1)',
                                        filter: hoveredImageId === producto.id ? 'brightness(60%)' : 'brightness(100%)',
                                    }}
                                />
                                {hoveredImageId === producto.id && (
                                    <button
                                        className='info-boton'
                                        onClick={() => openPopup(producto)}
                                    >
                                        Más Información
                                    </button>
                                )}
                            </div>
                            <div className='informacion'>
                                <p>{producto.titulo}</p>
                                <div className="container">
                                    <div className="card" data-card-id={producto.id}>
                                        <div className="stars">
                                            {[1, 2, 3, 4, 5].map(value => (
                                                <span
                                                    key={value}
                                                    className={`star ${selectedRating[producto.id] >= value ? 'selected' : ''} ${selectedRating[`hover${producto.id}`] >= value ? 'hover' : ''}`}
                                                    data-value={value}
                                                    onClick={() => handleStarClick(producto.id, value)}
                                                    onMouseOver={() => handleStarMouseOver(producto.id, value)}
                                                    onMouseOut={() => handleStarMouseOut(producto.id)}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="precio">${producto.precio}</p>
                                <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                            </div>
                        </div>
                    ))}

                    {showPopup && currentProduct && (
                        <div className='popup show'>
                            <div className='popup-content'>
                                <button className='popup-close' onClick={closePopup}>&times;</button>
                                <div className='popup-image'>
                                    <img src={currentProduct.imagen} alt={currentProduct.titulo} />
                                </div>
                                <div className='popup-details'>
                                    <h2>{currentProduct.titulo}</h2>
                                    <p className='precio'>Precio: ${currentProduct.precio}</p>
                                    <div className='popup-valoracion'>
                                        {[1, 2, 3, 4, 5].map(value => (
                                            <span
                                                key={value}
                                                className={`star ${selectedRating[currentProduct.id] >= value ? 'selected' : ''}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <p className='descripcion'>
                                        {currentProduct.descripcion}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                <div className='padre-carrito-smal' >
                <div className='carrito-compras' id={contextTheme}>
                    <h2 className='titulo-carrito'>Carrito de Compras</h2>
                    {carrito.length === 0 ? (
                        <p className='carritoNull'>El carrito está vacío</p>
                    ) : (
                        <div className='contendero-carrito-detalles'>
                            <ul>
                                {carrito.map((producto, index) => (
                                    <li key={index}>
                                        <div className='carrito-compra-item'>
                                            <span>{producto.titulo} - ${producto.precio}</span>
                                            <div className='carrito-compra-cantidad-control'>
                                                <button onClick={() => quitarDelCarrito(producto.id)}>-</button>
                                                <span>{producto.cantidad}</span>
                                                <button onClick={() => agregarAlCarrito(producto)}>+</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={limpiarCarrito} className='carrito-compra-limpiar-carrito'>Limpiar Carrito</button>
                        </div>
                    )}
                </div>
                </div>
                
            </div>
        </div>
    );
}
