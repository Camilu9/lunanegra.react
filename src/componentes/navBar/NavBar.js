import logo from '../assets/logo.jpg'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js'

function NavBar() {
    return (
        <div className='navBar'>
            <nav>
                <img src={logo} className='logo' alt='logo'/>
                <ul className='menu'>
                    <li><a href='#' className='paginasMenu'><p className='pMenu'>Inicio</p></a></li>
                    <li><a href='#' className='paginasMenu'><p className='pMenu'>Contacto</p></a></li>
                    <li><a href='#' className='paginasMenu'><p className='pMenu'>Marca</p></a></li>
                    <li><a href='#' className='paginasMenu'><p className='pMenu'>Productos</p></a></li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    );
};

export default NavBar;