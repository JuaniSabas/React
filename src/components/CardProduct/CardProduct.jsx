import React from 'react'
import ReactDOM from 'react-dom'

export const CardProduct = ({props})=>{
    return(
        <div style={{border:"1px black",background:"gray",margin:"10px"}}>
            <p>Bicicleta: {props}</p>
        </div>
    )
}