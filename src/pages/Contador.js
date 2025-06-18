import { useEffect, useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const color = contador > 0 ? "green" : contador < 0 ? "red" : "gray";

  useEffect(() => {
    console.log("Contador actualizado:", contador);
    const timer = setTimeout(() => {
      console.log("Mensaje después de 3 segundos");
    }, 3000);
    return () => clearTimeout(timer);
  }, [contador]);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h2>Contador con useEffect</h2>
      <h3 style={{ color }}>{contador}</h3>
      <button onClick={() => setContador(contador + 1)} className="btn btn-azul">+</button>
      <button onClick={() => setContador(contador - 1)} className="btn btn-rojo">-</button>
      <button onClick={() => setContador(0)} className="btn btn-verde">Reiniciar</button>
    </div>
  );
}
export default Contador;
