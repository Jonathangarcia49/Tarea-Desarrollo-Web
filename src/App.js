import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Contador from './pages/Contador';
import TarjetaUsuario from './pages/TarjetaUsuario';
import Formulario from './pages/Formulario';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/tarjeta" element={<TarjetaUsuario nombre="Jonathan Garcia" edad={22} profesion="Desarrollador de Software" />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
