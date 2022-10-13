import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    console.log(useParams());

    const { categoryId } = useParams();

    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(() => {
        promesa.then((response) => {
            if (categoryId) {
                //filtramos por categoria
                 const productsFiltered = response.filter(elm =>elm.categoria === categoryId);
                setProductos(productsFiltered);
            } else {
                //mostramos todos los productos
                setProductos(response)
            }
        })
    }, [categoryId])
    

    console.log("productos",productos);
    return (
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos} />
        </div>
    )

}