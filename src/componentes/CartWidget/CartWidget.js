import carrito from '../assets/carrito.png';
import  './CartWidget.css';

function CartWidget() {
    return (
        <div className='div-cart-widget'>
            <img src={carrito} className='carrito' alt='carrito'/>
            <p className='pCart'>5</p>
        </div>
    );
};

export default CartWidget;