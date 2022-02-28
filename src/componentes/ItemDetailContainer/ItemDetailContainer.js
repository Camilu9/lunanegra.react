import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { baseDatos } from '../../Firebase';

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        const prodRef = doc(baseDatos, "productos", itemId);
        getDoc(prodRef).then((snapshot) => {
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