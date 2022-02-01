import ItemCount from '../ItemCount/ItemCount'
import './Item.css';

export default function Item( { item } ) {
    return (
        <div key={item.id} className='producto'>
            <img src={item.imgUrl} className='img-producto'/>
            <h2 className='titulo'>{item.nombre}</h2>
            <p>Cantidad: {item.cantidad}</p>
            <p className='descripcion'>Descripcion: {item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <ItemCount initial={1} stock={5} />
            <button className='agregar-carrito'>Agregar al carrito</button>
        </div>
    )
};