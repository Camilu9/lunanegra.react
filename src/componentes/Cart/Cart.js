import React, { useContext } from 'react';
import './Cart.css'
import { CartContext } from '../../context/CartContext';
import CartItems from '../CartItems/CartItems';
import { Link } from 'react-router-dom';

export default function Cart(){

    const { cart, clear } = useContext(CartContext);

    const precioXCantidad = cart.map(producto => {
        const cantidad = producto.cantidadAgregada;
        const precio = producto.precio;
        const resultado = cantidad * precio;
        return resultado;
    });

    const precioTotal = precioXCantidad.reduce((a, b) => a + b, 0);

    return(
        <div className='div-cart'>
            <h1>Carrito de compras</h1>
            {cart.length === 0 ? (
                <>
                    <h3>Su carrito aun está vacío</h3>
                    <Link to="/">
                        <button className='button-finalizar'>Ir a comprar</button>
                    </Link>
                </>
            ) : (
                <>
                    {cart.map((producto) =>(
                        <CartItems key={producto.id} producto={ producto }/>
                    )) }
                    <div>
                        <h4>Total de la compra</h4>
                        <h4>${precioTotal}</h4>
                        <button onClick={ clear } className='button-vaciar'>Vaciar el carrito</button>
                    </div>
                    <button className='button-finalizar'>Finalizar compra</button>
                </>
            )}
        </div>
    );
};