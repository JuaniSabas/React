import './Item.css';
import React from 'react';

import {Link} from "react-router-dom";

export const Item = ({item})=>{
    return (
        <div className="tarjeta-producto">
            <h4>{item.name}</h4>
            <img src={item.imagen} alt={item.name} class="w-50"/>
            <p className='precio-producto'>$ {item.precio}</p>
            <Link to={`/item/${item.id}`}>
                <button className= 'boton-ver mt-3'>Ver detalle</button>
            </Link>
        </div>
    )
}