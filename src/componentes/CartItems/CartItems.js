import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import borrar from '../assets/borrar.png';
import './CartItems.css';

export default function CartItems( {producto} ){

    const { borrarDeCarrito } = useContext(CartContext);

    function precioPorCantidad(cantidad, precio){
        const resultado = cantidad * precio;
        return resultado;
    };


    return(
        <div className='div-cart-container-item'>
            <div className='div-cart-item'>
                <div className='div-cart-item-info'>
                    <img src={producto.imgUrl} />
                    <div>
                        <p>{producto.nombre} - {producto.cantidad}</p>
                        <p>{producto.cantidadAgregada} Unidades</p>
                    </div>
                </div>
                <div className='div-cart-item-precio'>
                    <img onClick={() => borrarDeCarrito(producto.id) } src={ borrar } alt='imagen de borrar' />
                    <p>Total: ${ precioPorCantidad(producto.cantidadAgregada, producto.precio) } </p>
                </div>
            </div>
        </div>
    );
};