import './ItemListContainer.css'
import cremaFacial from '../assets/productos/producto21.jpg'
import ItemCount from '../ItemCount/ItemCount.js'

function ItemList({greeting}){
    return(
        <div className='div-contenedor'>
            <div>
                <p className='pItem'>Bienvenido a {greeting}, tu tienda de Cosmética natural</p>
            </div>
            <div className='producto'>
                <img src={cremaFacial} className='crema-facial'/>
                <h2>Crema facial de día</h2>
                <p>Cantidad: 100 gr</p>
                <p>Descripcion: Hidrata, humecta y nutre el rostro acorde a sus necesidades durante el dia. Para pieles normales a secas.</p>
                <p>Precio: $760</p>
                <ItemCount initial={1} stock={5} />
                <button className='agregar-carrito'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemList;