import { getItems } from '../../api/api';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        getItems().then(function(productos){
            const producto = productos.find((item) => item.id === Number(itemId));
            setProducto(producto);
            console.log(itemId)
        });
    }, [itemId]);
    return(
        <div key={producto.id} className='divContainerDetail'>
            <ItemDetail producto={producto} />
        </div>
    )
};