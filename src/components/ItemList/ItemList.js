import { Item } from "../Item/Item"
import './ItemList.css';

export const ItemList = ({items}) =>{
    console.log(items)

    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>item list</div>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
            </div>
    )
}