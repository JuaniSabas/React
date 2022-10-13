import './ItemDetail.css';
import { Count } from '../ItemCount/ItemCount';

export const ItemDetail = ({ item }) => {
    return (
        <div className='detail-container'>
            <p style={{ width: "100%" }}>Item Detail</p>
            <div className='img-container'>
                <img src={item.imagen} className="card-img-top w-50" alt={item.name} />
            </div>
            <div className='img-container'>
                <h4>{item.name}</h4>
                <h5>$ {item.precio}</h5>
                <h6 className="card-title h4 text-black p-2 rounded">Cantidad </h6> <Count/>
              
              <hr></hr>
              <button className="btn btn-primary py-0 mt-2 mb-3" ><i className="bi bi-cart-check-fill fs-3"></i> <span className="fs-3 ms-2"> Agregar al carrito</span> </button>
            </div>
        </div>
    )
}