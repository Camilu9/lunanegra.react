import { useState } from 'react';
import './CheckOut.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItems from '../CartItems/CartItems';

export default function CheckOut(){

    const [nombre, setNombre] =useState("");
    const [telefono, setTelefono] =useState("");
    const [correo, setCorreo] =useState("");

    const inputNombreChange = event => setNombre(event.target.value);
    const inputTelefonoChange = event => setTelefono(event.target.value);
    const inputCorreoChange = event => setCorreo(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(mostrar())
    }

    function mostrar(){
        const buyer = {name: nombre, phone: telefono, email: correo};
        return buyer;
    }

    const { cart, precioTotal } = useContext(CartContext);

    return(
        <div className='formulario-compras-container'>
            <div className='formulario-cliente'>
                <h1>Datos de contacto</h1>
                <form onSubmit={ onSubmit }>
                    <div>
                        <div>
                        <label>Nombre y apellido:</label>
                        </div>
                        <div>
                        <input value={ nombre } onChange={ inputNombreChange } type="text" placeholder='Homero Simpson' required></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Teléfono de contacto:</label>
                        </div>
                        <div>
                            <input value={ telefono } onChange={ inputTelefonoChange } type="text" placeholder='351-3111111' required></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Correo electrónico:</label>
                        </div>
                        <div>
                            <input value={ correo } onChange= { inputCorreoChange } type="email" placeholder='tu-correo@gmail.com' required></input>
                        </div>
                        <div>
                            <label>Repita su correo electrónico:</label>
                        </div>
                        <div>
                            <input type="email" placeholder='tu-correo@gmail.com' required></input>
                        </div>
                    </div>
                    <button className='button-formulario' type='submit' >Enviar</button>
                </form>
            </div>
            <div className='div-cart-checkout'>
                <h1>Tus productos</h1>
                <div className='cart-on-checkout'>
                    <div>
                        {cart.map((producto) =>(
                                    <CartItems key={producto.id} producto={ producto }/>
                                )) }
                    </div>
                    <div>
                        <h4>Total de la compra</h4>
                        <h4>${precioTotal}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}