// Importamos hooks de React y el hook de navegación de React Router
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🔹 Componente principal que gestiona el proceso de compra
export default function Checkout() {
  // Estado local que almacena los productos del carrito
  const [carrito, setCarrito] = useState([]);

  // Hook para redirigir a otras rutas
  const navigate = useNavigate();

  // 🔹 Cargar los productos del carrito desde localStorage al montar el componente
  useEffect(() => {
    const guardado = localStorage.getItem("carrito"); // Obtener datos guardados
    if (guardado) setCarrito(JSON.parse(guardado));   // Convertir y guardar en el estado
  }, []);

  // 🔹 Calcular el total sumando los precios de los productos del carrito
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  // 🔹 Función que simula el envío del pago
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    // Simulación aleatoria del resultado del pago (éxito o fallo)
    const exito = Math.random() > 0.5;

    if (exito) {
      // Si la compra fue exitosa → limpiar el carrito y redirigir
      localStorage.removeItem("carrito");
      navigate("/compra-exitosa");
    } else {
      // Si falló → redirigir a la pantalla de error
      navigate("/compra-fallida");
    }
  };

  // 🔹 Renderizado del componente
  return (
    <div className="container mt-4">
      <h2>Finalizar Compra</h2>

      {/* Mostrar resumen del carrito si hay productos */}
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
            {/* Mostrar el total de la compra */}
            <li className="list-group-item d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${total}</span>
            </li>
          </ul>
        </div>
      )}

      {/* Botón para confirmar el pago */}
      <form onSubmit={handleSubmit}>
        <button className="btn btn-success" type="submit">
          Confirmar y pagar
        </button>
      </form>
    </div>
  );
}
