import './Item.css';
import { Link } from 'react-router-dom';

export default function Item( { item } ) {
    return (
        <div key={item.id} className='producto'>
            <Link to={`/producto/${item.id}`}>
                <img src={item.imgUrl} className='img-producto'/>
                <h2 className='titulo'>{item.nombre}</h2>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio: ${item.precio}</p>
                <button className='agregar-carrito'>Comprar</button>
            </Link>
        </div>
    )
};