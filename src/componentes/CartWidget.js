import carrito from './assets/carrito.png';
import  './CartWidget.css';

function CartWidget() {
    return (
            <p className='pCart'><img src={carrito} className='carrito' alt='carrito'/>5</p>
    );
};

export default CartWidget;