import Button from 'react-bootstrap/Button';
import "./NavBar.css";
import { CartWidget } from './CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";

export const NavBar = () => {

    return (
        <nav className='nav-container'>
            <div>
            <img className='logo'src="https://www.freepnglogos.com/uploads/javascript/js-circle-black-design-logo-30.png" alt="logo" />
            </div>
            <div className='navegacion'>
                <Link to="/">Inicio</Link>
                <Link to="/contacto">Contacto</Link>
                <NavLink className={({isActive})=>isActive===true? 'claseActiva' : 'claseInactiva'} to="/category/hombre">Hombre</NavLink>
                <NavLink className={({isActive})=>isActive===true? 'claseActiva' : 'claseInactiva'} to="/category/mujer">Mujer</NavLink>
            </div>
            <div>
            <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar