import { useState } from 'react';

function Formulario() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.correo)) {
      alert("Correo inválido");
      return;
    }
    console.log("Formulario enviado:", form);
  };

  return (
    <div className="card">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" onChange={handleChange} placeholder="Nombre" /><br/>
        <input name="correo" onChange={handleChange} placeholder="Correo" /><br/>
        <textarea name="mensaje" onChange={handleChange} placeholder="Mensaje"></textarea><br/>
        <button type="submit" className="btn btn-verde">Enviar</button>
      </form>
    </div>
  );
}
export default Formulario;
