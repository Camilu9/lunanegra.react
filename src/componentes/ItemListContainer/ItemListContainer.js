import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../../api/api.js';
import ItemList from '../ItemList/ItemList.js';
import './ItemListContainer.css'


function ItemListContainer({greeting}){
    const [misProductos, setMisProductos] = useState([]);
    const { nombreCategoria } = useParams()

    useEffect(function(){
        getItems().then(function(misProductos){
            if(!nombreCategoria) {
                setMisProductos(misProductos);
            } else {
                const productosEnCategoria = misProductos.filter((producto) => {
                    return producto.categoria === nombreCategoria;
                })
                setMisProductos(productosEnCategoria)
            };
        });
    }, [nombreCategoria])

    
    return(
        <div className='div-contenedor'>
            <div>
                <p className='pItem'>{greeting}</p>
            </div>
            { misProductos.length > 0 ? <ItemList misProductos={misProductos} /> : <p>Cargando...</p> }
        </div>
    )
}

export default ItemListContainer;