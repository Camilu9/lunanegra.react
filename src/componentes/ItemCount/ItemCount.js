import React, { useState, useEffect } from 'react';
import suma from '../assets/signoMas.png';
import resta from '../assets/signoMenos.png';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }){

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
        if (cantidad > initial) {
        setCantidad(cantidad - 1)};
    };

    function aumentar() {
        if (cantidad < stock){
        setCantidad(cantidad + 1)};
    };

    function addToCart(){
        onAdd(cantidad);
    };

    return(
        <>
            <div className='item-count-container'>
                <button onClick={disminuir} className='resta'>
                    <img src={resta} />
                </button>
                <h3> { cantidad } </h3>
                <button onClick={aumentar} className='suma'>
                    <img src={suma} />
                </button>
            </div>
            <button onClick={addToCart} className='agregar-carrito'>Agregar al carrito</button>
            <p className='mensaje-stock'>{msjStock !== '' && msjStock}</p>
        </>
    )
};
export default ItemCount;