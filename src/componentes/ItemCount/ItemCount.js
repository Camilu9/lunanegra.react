import React, { useState, useEffect } from 'react';
import './ItemCount.css';
import suma from '../assets/signoMas.png';
import resta from '../assets/signoMenos.png';

function ItemCount({ stock, initial }){

    const [cantidad, setCantidad] = useState(initial);
    const [msjStock, setMsjStock] = useState('')

    useEffect(function(){
        if(cantidad === stock){
            setMsjStock('El máximo de unidades disponibles fue alcanzado'); 
        } else{
            setMsjStock('')
        }
    }, [cantidad])

    function disminuir() {
        console.log(cantidad);
        if (cantidad > initial) {
        setCantidad(cantidad - 1)};
    };

    function aumentar() {
        console.log('sumo');
        if (cantidad < stock){
        setCantidad(cantidad + 1)};
    };

const onAdd = () => {
    console.log(`${cantidad} productos se agregaron al carrito.`);
    setCantidad(initial);
};

    return(
        <div>
            <div className='item-count-container'>
                <button onClick={disminuir} className='resta'>
                    <img src={resta} />
                </button>
                <h3> { cantidad } </h3>
                <button onClick={aumentar} className='suma'>
                    <img src={suma} />
                </button>
            </div>
            <button onClick={onAdd} className='agregar-carrito'>Agregar al carrito</button>
            <p className='mensaje-stock'>{msjStock !== '' && msjStock}</p>
        </div>
    )
};

export default ItemCount;