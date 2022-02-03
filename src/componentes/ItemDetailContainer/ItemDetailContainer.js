import { getItems } from '../../api/api';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js'

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getItems().then(function(productos){
            const producto = productos.find((item) => item.precio === 700);
            setProducto(producto);
            console.log(producto)
        });
    }, []);
    return(
        <div key={producto.id}>
            <ItemDetail producto={producto} />
        </div>
    )
};