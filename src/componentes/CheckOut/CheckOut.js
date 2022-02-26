import { useState } from 'react';
import './CheckOut.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItems from '../CartItems/CartItems';
import { collection, getFirestore, addDoc } from 'firebase/firestore';


export default function CheckOut(){
    
    const { cart, precioTotal, clear } = useContext(CartContext);

    const [nombre, setNombre] =useState("");
    const [telefono, setTelefono] =useState("");
    const [correo, setCorreo] =useState("");
    const [corroboroCorreo, setCorroboroCorreo] =useState("")

    const inputNombreChange = event => setNombre(event.target.value);
    const inputTelefonoChange = event => setTelefono(event.target.value);
    const inputCorreoChange = event => setCorreo(event.target.value);
    const inputCorroboroCorreoChange = event => setCorroboroCorreo(event.target.value);
    

    const onSubmit = (e) => {
        e.preventDefault();
        if(correo === corroboroCorreo){
            nuevaOrden();
            clear();
            e.target.reset();
        }
        else{
            alert("El correo electrónico no coinside en ambos campos.");
        }
    };

    const nuevaOrden = () => {
        const obtengoFecha = new Date;
        const fecha = obtengoFecha.toISOString();
        const orden = {
            buyer: { nombre, telefono, correo },
            items: cart,
            date: fecha,
            total: precioTotal,
        };
        const baseOrdenes = getFirestore();
        const ordenes = collection(baseOrdenes, "ordenes");
        addDoc(ordenes, orden).then(doc => {
            alert(`Su pedido fue realizado con éxito, el id de su compra es: ${doc.id}`);
        }).catch(error => {
            console.log(error);
        });
    };


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
                            <input value={ corroboroCorreo } onChange={ inputCorroboroCorreoChange } type="email" placeholder='tu-correo@gmail.com' required></input>
                        </div>
                    </div>
                    <button className='button-formulario' type='submit' >Enviar y finalizar compra</button>
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