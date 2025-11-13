// Importamos hooks y utilidades necesarias de React y React Router
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🔹 Componente principal que muestra y gestiona el carrito de compras
export default function Carrito() {
  // Estado local para guardar los productos del carrito
  const [carrito, setCarrito] = useState([]);

  // Hook para redireccionar entre páginas
  const navigate = useNavigate();

  // useEffect → se ejecuta una sola vez al cargar el componente
  useEffect(() => {
    // Recupera el carrito guardado en localStorage (si existe)
    const guardado = localStorage.getItem("carrito");
    if (guardado) {
      // Convierte el JSON guardado a arreglo y lo guarda en el estado
      setCarrito(JSON.parse(guardado));
    }
  }, []);

  // 🔹 Función para eliminar un producto del carrito por su ID
  const eliminarProducto = (id) => {
    // Filtramos los productos, quitando el que tenga el ID indicado
    const nuevo = carrito.filter((p) => p.id !== id);

    // Actualizamos el estado con el nuevo carrito
    setCarrito(nuevo);

    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(nuevo));
  };

  // 🔹 Calculamos el total sumando los precios de todos los productos
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  // 🔹 Renderizado del componente
  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de Compras</h2>

      {/* Si el carrito está vacío, mostramos un mensaje */}
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Tabla con los productos del carrito */}
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {carrito.map((p) => (
                <tr key={p.id}>
                  {/* Nombre del producto */}
                  <td>{p.nombre}</td>

                  {/* Precio del producto */}
                  <td>${p.precio}</td>

                  {/* Imagen del producto */}
                  <td>
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />{" "}
                    {p.nombre}
                  </td>

                  {/* Botón para eliminar un producto del carrito */}
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarProducto(p.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 🔹 Sección inferior: total y botón de finalizar compra */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: ${total}</h4>
            <button
              className="btn btn-success"
              onClick={() => navigate("/checkout")}
            >
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}


