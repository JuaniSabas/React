import { useState } from "react"
import './ItemCount.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import swal from 'sweetalert2';


export const Count = ({stock, initial, onAdd}) => {
    const [cant, setCant] = useState(initial)

    const sumarCant = ()=>{
        if(cant<stock){
            setCant(cant + 1)
        } 
    }  
    
    const restarCant = ()=>{
        if(cant > 1 ){
            setCant(cant - 1)
        }   
    }   
    
    const agregarSweetAlert=()=>{
        return(swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          }))
    }
  return (
        <div>
            <p>Stock disponible: {stock} </p>
            <div className="d-flex align-items-center">
            <h6 className="card-title h4 text-black p-2 rounded">Cantidad </h6>
                <i className="btn bi bi-arrow-left-square-fill text-danger fs-4 h1 bg-white rounded-circle border border-success " onClick={restarCant}>-</i>               
                <p className=" mt-2 ">{cant}</p>
                <i className="btn bi bi-arrow-right-square-fill text-danger fs-4 h1 bg-white rounded-circle border border-success" onClick={sumarCant}>+</i> 
            </div>
            <button disabled={stock===0} className="botonAgregar bg-success" 
             onClick={() => {
                //function expression
                 const funcion1 = onAdd(cant);
                 const funcion2 = agregarSweetAlert();
                 
              }}>
            Agregar al carrito</button>
        </div>
  )
}