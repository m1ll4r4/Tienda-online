import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const guardado = localStorage.getItem("carrito");
    if (guardado) {
      setCarrito(JSON.parse(guardado));
    }
  }, []);

  const eliminarProducto = (id) => {
    const nuevo = carrito.filter((p) => p.id !== id);
    setCarrito(nuevo);
    localStorage.setItem("carrito", JSON.stringify(nuevo));
  };

  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
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
                  <td>{p.nombre}</td>
                  <td>${p.precio}</td>
                  <td>
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />{" "}
                  {p.nombre}
                </td>

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

