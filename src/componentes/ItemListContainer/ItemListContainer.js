import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { getItems } from '../../api/api.js';
import ItemList from '../ItemList/ItemList.js';

function ItemListContainer({greeting}){

    const [misProductos, setMisProductos] = useState([]);

    useEffect(function(){
        getItems().then(function(misProductos){
            setMisProductos(misProductos);
        })
    }, [])

    return(
        <div className='div-contenedor'>
            <div>
                <p className='pItem'>Bienvenido a {greeting}, tu tienda de Cosmética natural</p>
            </div>
            { misProductos.length > 0 ? <ItemList misProductos={misProductos} /> : <p>Cargando...</p> }
        </div>
    )
}

export default ItemListContainer;