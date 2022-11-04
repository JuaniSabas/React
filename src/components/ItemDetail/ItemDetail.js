import './ItemDetail.css';
import { Count } from '../ItemCount/ItemCount';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import React from 'react'
import ReactDOM from 'react-dom'

export const ItemDetail = ({item}) => {
    const {addProduct} = useContext(CartContext);

    const agregarProducto = (quantity) => {
        // console.log(quantity);
        addProduct(item,quantity);
    }

    return (
        <div className='detail-container'>
            <p style={{ width: "100%" }}>Item Detail</p>
            <div className='img-container'>
                <img src={item.imagen} className="card-img-top w-50" alt={item.name} />
            </div>
            <div className='img-container'>
                <h4>{item.name}</h4>
                <h5>$ {item.precio}</h5>
                <hr></hr>
            </div>
            <Count stock={5} initial={1} onAdd={agregarProducto} />
        </div>
    )
}