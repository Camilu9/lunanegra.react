import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { baseDatos } from '../../Firebase';
import ItemDetail from '../ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        const productoReferencia = doc(baseDatos, "productos", itemId);
        getDoc(productoReferencia).then((snapshot) => {
            if(snapshot.exists()) {
                setProducto( { id: snapshot.id, ...snapshot.data() } )
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [itemId]);

    return(
        <div key={producto.id} className='divContainerDetail'>
            <ItemDetail producto={producto} />
        </div>
    )
};