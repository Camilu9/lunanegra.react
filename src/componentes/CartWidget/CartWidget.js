import carrito from '../assets/carrito.png';
import  './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

function CartWidget() {

    const { sumaCantidadesCarrito } = useContext(CartContext);

    return (
        <>
            { sumaCantidadesCarrito < 1 ? (
                <></>
            ) : (
                <div className='div-cart-widget'>
                        <img src={carrito} alt='carrito'/>
                        <p>{ sumaCantidadesCarrito }</p>
                    </div>
            )
            }
        </>
    );
};
export default CartWidget;