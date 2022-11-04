import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import React from 'react';
import ReactDOM from 'react-dom';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const categoryIdd = "hombre";
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getData = async () => {
            //crear referencia del punto de acceso de la informacion
            const queryRef = query(collection(db, "items"), where("categoria", "==", categoryIdd));

            //obtener todos los documentos de la coleccion items
            const response = await getDocs(queryRef);
            // console.log(response);
            const documents = response.docs;
            //contenido de un documento
            // console.log("contenido",documents[0].data())
            // console.log("id doc",documents[0].id)
            const results = documents.map(elemento => {
                return ({
                    ...elemento.data(),
                    id: elemento.id
                })
            });
            setProducts(results);
        }
        getData();
    }, [])


    // console.log(useParams());

    const { categoryId } = useParams();

    const [productos, setProductos] = useState([]);

    // const promesa = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(arregloProductos);
    //     }, 500);
    // })



    useEffect(() => {
        // promesa.then((response) => {
        //     if (categoryId) {
        //         //filtramos por categoria
        //          const productsFiltered = response.filter(elm =>elm.categoria === categoryId);
        //         setProductos(productsFiltered);
        //     } else {
        //         //mostramos todos los productos
        //         setProductos(response)
        //     }
        // })

        const queryRef = categoryId ? query(collection(db, "items"), where("categoria", "==", categoryId)) : collection(db, "items");
        getDocs(queryRef).then((response) => {
            const results = response.docs;
            const docs = results.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
            // console.log(docs);
            setProductos(docs);
            setLoading(false);
        });
        // if (categoryId) {
        //     //crear referencia para consultar documentos de una coleccion.
        //     const queryRef = query(collection(db, "items"), where("categoria", "==", categoryId));
        //     //hacemos la consulta
        //     getDocs(queryRef).then((response) => {
        //         const results = response.docs;
        //         results.map(doc => {
        //             return {
        //                 ...doc.data(),
        //                 id: doc.id
        //             }
        //         });
        //     });
        // } else {
        //     const queryRef = collection(db, "items");
        //     getDocs(queryRef).then((response) => {
        //         const results = response.docs;
        //         results.map(doc => {
        //             return {
        //                 ...doc.data(),
        //                 id: doc.id
        //             }
        //         });
        //     });
        // }
    }, [categoryId])


    // console.log("productos",productos);
    return (
        <div className="item-list-container">
            <p>item list container</p>
            {
                loading ?
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    :
                    <ItemList items={productos} />
            }
        </div>
    )

}