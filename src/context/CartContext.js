import { createContext, useState } from "react";
import React from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    //verificar si ya existe un producto en el carrito
    const isInCart = (id) => {
        const productExist = productosCarrito.some((elemento) => elemento.id === id);
        return productExist;
    }



    const addProduct = (item, quantity) => {
        const productosCarritoCopy = [...productosCarrito];
        //si el producto ya existe, modifico la propiedad quantity de ese objeto.
        if (isInCart(item.id)) {
            const posProduct = productosCarritoCopy.findIndex((elemento) => elemento.id === item.id);
            productosCarritoCopy[posProduct].quantity += quantity;
            productosCarritoCopy[posProduct].quantityPrice = productosCarritoCopy[posProduct].quantity * productosCarritoCopy[posProduct].precio;
            setProductosCarrito(productosCarritoCopy);
        } else {
            //sino agrego el nuevo producto al arreglo
            const newProduct = {
                ...item,
                quantity: quantity,
                quantityPrice: quantity * item.precio,
            };
            productosCarritoCopy.push(newProduct);
            setProductosCarrito(productosCarritoCopy);
        }
        
        
    }
   

    const getTotalPrice = () => {
        const precioTotal = productosCarrito.reduce((acc, curr) => acc + curr.quantityPrice, 0);
        return precioTotal;
    }

    const getTotalProducts = () => {
        const totalProducts = productosCarrito.reduce((acc, curr) => acc + curr.quantity, 0);
        return totalProducts;
    }

    const removeItem = (id) => {
        const newProducts = productosCarrito.filter((elemento) => elemento.id !== id);
        setProductosCarrito(newProducts);
    }

    const clear = () => {
        const clearCart = [];
        setProductosCarrito(clearCart)
    }



    return (
        <CartContext.Provider value={{ productosCarrito, addProduct, getTotalPrice, getTotalProducts, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}
