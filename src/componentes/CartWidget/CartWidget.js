import { useContext } from 'react';
import carrito from '../assets/carrito.png';
import { CartContext } from '../../context/CartContext';
import  './CartWidget.css';


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