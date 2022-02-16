import './CartItems.css';
import borrar from '../assets/borrar.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartItems( {producto} ){

    const { borrarDeCarrito } = useContext(CartContext)

    return(
        <div className='div-cart-container-item'>
            <div className='div-cart-item'>
                <div className='div-cart-item-info'>
                    <img src={producto.imgUrl} />
                    <div>
                        <p>{producto.nombre}</p>
                        <p>{producto.cantidadAgregada} Unidades</p>
                    </div>
                </div>
                <div className='div-cart-item-precio'>
                    <img onClick={() => borrarDeCarrito(producto.id) } src={ borrar } alt='imagen de borrar' />
                    <p>$ </p>
                </div>
            </div>
        </div>
    );
};