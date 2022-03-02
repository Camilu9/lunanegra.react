import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItems from '../CartItems/CartItems';
import './Cart.css';

export default function Cart(){

    const { cart, clear, precioTotal } = useContext(CartContext);

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
                    <Link to="/checkOut">
                        <button className='button-comenzar-compra'>Iniciar compra</button>
                    </Link>
                </>
            )}
        </div>
    );
};