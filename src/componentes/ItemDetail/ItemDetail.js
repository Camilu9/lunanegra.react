import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount.js';
import { useState } from 'react';
import { Link } from 'react-router-dom' 

export default function ItemDetail( {producto} ){

    const [cantidad, setCantidad] = useState();

    function onAddProducto(nuevaCantidadProducto){
        console.log(nuevaCantidadProducto);
        setCantidad(nuevaCantidadProducto);
    };

return(
        <div key={producto.id} className='productoCard'>
            <div className='divImg'>
                <img src={producto.imgUrl} />
            </div>
            <div>
                <h2>{producto.nombre}</h2>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Descripcion: {producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
                {
                    !cantidad ? 
                    <ItemCount initial={1} stock={5} onAdd={onAddProducto} /> :
                    <Link to='/carrito'>Ir al carrito</Link>
                }
                
            </div>
        </div>
    )
};