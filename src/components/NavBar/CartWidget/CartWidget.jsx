import { IoCartSharp } from 'react-icons/io5';
import { IoLogIn } from "react-icons/io5";
import { useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import React from 'react'
import ReactDOM from 'react-dom'



export const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext);
    return(
        <div className='cart'>
            <IoCartSharp icon={IoLogIn} />
            <span><sub style={{color:"white",marginrigth:"20px"}}>({getTotalProducts()})</sub></span>
        </div>
    )
}