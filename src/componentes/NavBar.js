import logo from '../multimedia/logo.jpg'
import './NavBar.css';

function NavBar() {
    return (
        <div className='navBar'>
            <nav>
                <ul className='menu'>
                    <li><a href='#' className='paginasMenu'><p className='pMenu'>Inicio</p></a></li>
                    <li><a href='#' className='paginasMenu'><p className='pMenu'>Contacto</p></a></li>
                    <li><img src={logo} className='logo' alt='logo'/></li>
                    <li><a href='#' className='paginasMenu'><p className='pMenu'>Marca</p></a></li>
                    <li><a href='#' className='paginasMenu'><p className='pMenu'>Productos</p></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;