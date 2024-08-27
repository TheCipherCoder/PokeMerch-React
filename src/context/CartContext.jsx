// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            const existe = prevCarrito.find(item => item.id === producto.id);
            if (existe) {
                return prevCarrito.map(item =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } else {
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    };

    const quitarDelCarrito = (productoId) => {
        setCarrito(prevCarrito =>
            prevCarrito.map(item =>
                item.id === productoId ? { ...item, cantidad: item.cantidad - 1 } : item
            ).filter(item => item.cantidad > 0)
        );
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
