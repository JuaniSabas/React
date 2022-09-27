import Button from 'react-bootstrap/Button';
import "./NavBar.css";
import { CartWidget } from './CartWidget/CartWidget';

const NavBar = () => {

    return (
        <nav className='navegation'>
            <img className='logo'src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" alt="logo" />
            <ul className='list'>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Bicicletas</a></li>
                <li><a href="/">Contacto</a></li>
                <li><a href="/">Sobre Nosotros</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar