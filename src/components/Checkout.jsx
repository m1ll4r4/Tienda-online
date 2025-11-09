import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const guardado = localStorage.getItem("carrito");
    if (guardado) setCarrito(JSON.parse(guardado));
  }, []);

  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const exito = Math.random() > 0.5;
    if (exito) {
      localStorage.removeItem("carrito");
      navigate("/compra-exitosa");
    } else {
      navigate("/compra-fallida");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Finalizar Compra</h2>

      {carrito.length > 0 && (
        <div className="mb-4">
          <h4>Resumen del carrito:</h4>
          <ul className="list-group">
            {carrito.map((p) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={p.id}
              >
                <span>{p.nombre}</span>
                <span>${p.precio}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${total}</span>
            </li>
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <button className="btn btn-success" type="submit">
          Confirmar y pagar
        </button>
      </form>
    </div>
  );
}
