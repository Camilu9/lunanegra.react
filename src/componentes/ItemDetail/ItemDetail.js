export default function ItemDetail( {producto} ){
return(
        <div key={producto.id} className='producto'>
            <img src={producto.imgUrl} className='img-producto'/>
            <h2 className='titulo'>{producto.nombre}</h2>
            <p>Cantidad: {producto.cantidad}</p>
            <p className='descripcion'>Descripcion: {producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <button className='agregar-carrito'>Agregar al carrito</button>
        </div>
    )
};