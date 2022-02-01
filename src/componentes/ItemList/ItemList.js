import './ItemList.css'
import Item from '../Item/Item';

export default function ItemList( { misProductos } ){
    return (
        <div className="div-productos">
            {
                misProductos.map(function(producto) {
                    return (
                        <div key={producto.id}>
                            <Item key={producto.id} item={producto}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

