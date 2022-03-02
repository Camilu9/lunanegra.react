import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.js';
import logo from '../assets/logo.jpg';
import './NavBar.css';

function NavBar() {
    return (
        <div className='navBar'>
            <nav>
                <Link to="/">
                    <img src={logo} className='logo' alt='logo'/>
                </Link>
                <ul className='menu'>
                    <li><NavLink to="/"><p>Inicio</p></NavLink></li>
                    <li><NavLink to="/marca"><p>Marca</p></NavLink></li>
                    <li><p>Productos</p>
                        <ul>
                            <li><NavLink to="/categoria/general"><p>Cuidados e higiene general</p></NavLink></li>
                            <li><NavLink to="/categoria/facial"><p>Cuidados faciales</p></NavLink></li>
                            <li><NavLink to="/"><p>Todos los productos</p></NavLink></li>
                        </ul>
                    </li>
                </ul>
                <NavLink to="/carrito"><CartWidget /></NavLink>
            </nav>
        </div>
    );
};

export default NavBar;