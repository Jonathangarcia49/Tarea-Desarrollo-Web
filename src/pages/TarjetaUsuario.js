function TarjetaUsuario({ nombre, edad, profesion }) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Profesión:</strong> {profesion}</p>
    </div>
  );
}
export default TarjetaUsuario;
