import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/contador">Contador</Link>
      <Link to="/tarjeta">Tarjeta</Link>
      <Link to="/formulario">Formulario</Link>
    </nav>
  );
}
export default Navbar;
