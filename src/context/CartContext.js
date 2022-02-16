import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]); 

    const addToCart = (cantidadAgregada, productoAgregado) =>{
        if(isOnCart(productoAgregado.id)){
            actualizarCantidad(cantidadAgregada, productoAgregado);
        } else {
            setCart([...cart, { ...productoAgregado, cantidadAgregada }]);
        }
    };

    const isOnCart = (id) => {
        const answer = cart.some((item) => item.id === id);
        return answer;
    };

    function actualizarCantidad(quantity, item){
        const copiaCart = [...cart];
        copiaCart.forEach((producto) => {
            if(producto.id === item.id) {
                producto.cantidadAgregada += quantity;
            }
        });
    };

    function clear(){
        setCart([]);
    }

    function borrarDeCarrito(id){
        setCart(cart.filter((producto) => producto.id !== id));
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, clear, borrarDeCarrito }}>
            { children }
        </CartContext.Provider>
    );
};

export default CartContextProvider;