import { useParams, useNavigate } from "react-router-dom";
import { productos } from "../data/data";
import { useState, useEffect } from "react";

export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [precioFinal, setPrecioFinal] = useState(0);

  useEffect(() => {
    const encontrado = productos.find((p) => p.id === Number(id));
    if (encontrado) {
      setProducto(encontrado);
      setPrecioFinal(encontrado.precio);
    }
  }, [id]);

  const agregarAlCarrito = () => {
    if (!producto) return;

    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
    const nuevoItem = {
      id: producto.id,
      nombre: producto.nombre + (opcionSeleccionada ? ` (${opcionSeleccionada.nombre})` : ""),
      imagen: producto.imagen,
      precio: precioFinal,
      cantidad: 1,
    };

    const nuevoCarrito = [...guardado, nuevoItem];
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    alert(`${producto.nombre} agregado al carrito 🛒`);
    navigate("/carrito");
  };

  const manejarCambioOpcion = (e) => {
    const nombreOpcion = e.target.value;
    const opcion = producto.opciones.find((op) => op.nombre === nombreOpcion);
    setOpcionSeleccionada(opcion);
    setPrecioFinal(opcion.extra);
  };

  if (!producto) return <div className="container mt-5">Producto no encontrado</div>;

  return (
    <div className="container mt-5 text-center">
      <h2>{producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "300px", borderRadius: "10px", marginBottom: "20px" }}
      />

      {producto.opciones && producto.opciones.length > 0 && (
        <div className="mb-3">
          <label htmlFor="opcion" className="form-label">
            Elige una opción:
          </label>
          <select
            id="opcion"
            className="form-select"
            onChange={manejarCambioOpcion}
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {producto.opciones.map((op, index) => (
              <option key={index} value={op.nombre}>
                {op.nombre} - ${op.extra}
              </option>
            ))}
          </select>
        </div>
      )}

      <h4>Precio: ${precioFinal}</h4>

      <button className="btn btn-success mt-3" onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>

      <br />
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        Volver al menú
      </button>
    </div>
  );
}
