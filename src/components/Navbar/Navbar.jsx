import NavbarScript from "./NavbarScript";
import './Navbar.css';


export default function NavBar() {

    return (
        <>

            <nav>
            <a href="#" id="logo"><img src="/ecommercereact/logo.svg" alt="Logo" /></a>
                <ul id="navbar">
                    <li><a href="#" className="activo">Inicio</a></li>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div id="menu-toggle" className="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <NavbarScript />
            </nav>
        </>
    );
}

