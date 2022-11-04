import { waitForPendingWrites } from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import React from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert2';
import { BrowserRouter } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";



export const CartContainer = () => {
    const value = useContext(CartContext);
    const { productosCarrito, getTotalPrice, getTotalProducts, removeItem, clear, procesarCompra } = value;
    const [compraId, setCompraId] = useState("");




    const sendOrder = (evt) => {
        evt.preventDefault();
        const compra = {
            buyer: {
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value,
            },
            items: productosCarrito,
            total: getTotalPrice(),
            cantidad: getTotalProducts()
        }

        //crear la referencia donde voy a guardar la info en la base de datos.
        const queryRef = collection(db, "Compras");
        //agregar la informacion
        addDoc(queryRef, compra).then((resultado) => {
            console.log(resultado.id);
            setCompraId(resultado.id);

            //Borramos los datos del carrito una vez hecha la compra
            //{compraId && <p>Su compra fue realizada con el numero de orden {compraId}</p>}

            //swal.fire("Su compra fue realizada .ID de la orden: "+resultado.id);
            swal.fire({
                title: "Compra realizada",
                text: "La compra fue guardada con el ID " + resultado.id,
                confirmButtonText: "Aceptar",
            });

        })
        clear();
    }

    const updateProducto = () => {
        //creamos la referencia del documento que vamos a actualizar
        const queryRef = doc(db, "items", "FYTAXzqal7r3dHGQnWxt");
        //actualizamos el documento
        updateDoc(queryRef, { precio: 63000 }).then(() => console.log("Actualizado correctamente"))
            .catch((error) => console.log("Hubo un error"))

    }

    return (
        getTotalProducts() === 0 ?
            <div className='navegacion'>
               <h3 style={{ width: "100%", color: "white" }}> No hay productos en el carrito.</h3><Link to="/"><h3 style={{ height: "70px", color: "white" }}>¡Compra ahora!</h3></Link>
            </div>
            :
            <div>
                {compraId && <p>Su compra fue realizada con el numero de orden {compraId}</p>}
                <h2 style={{ width: "50%" ,color:"white"}}><strong>Carrito</strong></h2>
                <div style={{ width: "50%", margin: "30px", background: "grey", color: "white", padding: "1px" }}>
                    {


                        productosCarrito.map((producto) => (
                            <div style={{ border: "1px solid black", display: "inline-flex" }}>
                                <div style={{ width: "50%", margin: "15px" }}>
                                    <h3>{producto.name}</h3>
                                    <p>Precio por unidad: ${producto.precio}</p>
                                    <p>Cantidad :{producto.quantity}</p>
                                    <p>Precio por cantidad: ${producto.quantityPrice}</p>
                                    <button onClick={() => removeItem(producto.id)} className="boton-eliminar bg-secondary text-light">Eliminar</button>
                                </div>
                                <img src={producto.imagen} style={{ display: "flex", width: "35%", padding: "15px" }} />
                            </div>
                        ))
                    }

                    <p style={{ width: "100%", margin: "15px" }}><strong>Precio Total: </strong>${getTotalPrice()}</p>
                    <p style={{ width: "100%", margin: "15px" }}><strong>Total de productos: </strong>{getTotalProducts()}</p>
                    <button onClick={() => clear()} className="bg-danger mb-2">Vaciar carrito</button>
                    <br></br>



                    <form onSubmit={sendOrder} style={{padding:"20px"}}>
                        <label>Nombre</label>
                        <input type="text" placeholder="nombre" style={{margin:"15px"}} /><br></br>
                        <label>Telefono</label>
                        <input type="tel" placeholder="Telefono" style={{margin:"15px"}}/><br></br>
                        <label>Correo</label>
                        <input type="Correo" placeholder="Correo" style={{margin:"15px"}}/><br></br>
                        <button type="submit" className="bg-success">Procesar compra</button>
                    </form>

                </div>
                <button onClick={updateProducto}>Actualizar producto</button>
            </div>
    )
}