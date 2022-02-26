import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount.js';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom' 
import { CartContext } from '../../context/CartContext';

export default function ItemDetail( {producto} ){

    const [nuevaCantidad, setNuevaCantidad] = useState();
    const { addToCart } = useContext(CartContext)

    function onAddProducto(quantity){
        setNuevaCantidad(quantity);
        addToCart(quantity, producto)
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
                    !nuevaCantidad ? 
                    <ItemCount initial={1} stock={5} onAdd={onAddProducto} /> :
                    <div>
                        <Link to='/carrito'>
                            <button>Ir al carrito</button>
                        </Link>
                        <Link to='/'>
                            <button>Seguir comprando</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
};