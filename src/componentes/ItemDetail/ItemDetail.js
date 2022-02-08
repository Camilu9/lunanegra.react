import './ItemDetail.css'

export default function ItemDetail( {producto} ){
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
                <button className='agregar-carrito'>Agregar al carrito</button>
            </div>
        </div>
    )
};