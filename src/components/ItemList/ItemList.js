import { Item } from "../Item/Item"
import './ItemList.css';
import React from 'react';

export const ItemList = ({items}) =>{
    // (items)

    return(
        <div className="estilos-listado w-100">
            <div style={{width:"100%",}}>item list</div>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
            </div>
    )
}