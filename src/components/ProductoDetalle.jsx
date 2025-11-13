// Importamos hooks de React Router y React
import { useParams, useNavigate } from "react-router-dom"; // useParams: obtiene el id del producto desde la URL / useNavigate: redirige
import { productos } from "../data/data"; // Importamos la lista de productos desde un archivo local
import { useState, useEffect } from "react"; // useState y useEffect son hooks de React

// Componente principal que muestra el detalle de un producto individual
export default function ProductoDetalle() {

  // Obtenemos el parámetro "id" desde la URL (por ejemplo: /producto/3)
  const { id } = useParams();

  // Hook para navegar entre rutas
  const navigate = useNavigate();

  // Estado para guardar el producto actual
  const [producto, setProducto] = useState(null);

  // Estado para guardar la opción seleccionada (por ejemplo, tamaño o tipo)
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  // Estado para el precio final mostrado al usuario
  const [precioFinal, setPrecioFinal] = useState(0);

  // useEffect se ejecuta cuando cambia el "id" (cuando el usuario entra al detalle de otro producto)
  useEffect(() => {
    // Busca el producto en el arreglo "productos" que coincida con el id de la URL
    const encontrado = productos.find((p) => p.id === Number(id));

    // Si lo encuentra, lo guarda en el estado y define su precio base
    if (encontrado) {
      setProducto(encontrado);
      setPrecioFinal(encontrado.precio);
    }
  }, [id]); // ← se ejecuta cada vez que cambia el id del producto

  // 🔹 Función para agregar el producto al carrito
  const agregarAlCarrito = () => {
    if (!producto) return; // Si no hay producto, no hace nada

    // Recuperamos el carrito guardado en localStorage o creamos uno vacío
    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];

    // Creamos un nuevo objeto con la información del producto seleccionado
    const nuevoItem = {
      id: producto.id,
      nombre: producto.nombre + (opcionSeleccionada ? ` (${opcionSeleccionada.nombre})` : ""),
      imagen: producto.imagen,
      precio: precioFinal,
      cantidad: 1,
    };

    // Agregamos el nuevo producto al carrito
    const nuevoCarrito = [...guardado, nuevoItem];

    // Guardamos el nuevo carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    // Mostramos un mensaje y redirigimos al carrito
    alert(`${producto.nombre} agregado al carrito 🛒`);
    navigate("/carrito");
  };

  // 🔹 Función que maneja el cambio de opción (por ejemplo, tamaño o tipo de producto)
  const manejarCambioOpcion = (e) => {
    const nombreOpcion = e.target.value; // Nombre de la opción seleccionada
    const opcion = producto.opciones.find((op) => op.nombre === nombreOpcion); // Busca la opción en la lista
    setOpcionSeleccionada(opcion); // Guarda la opción seleccionada en el estado
    setPrecioFinal(opcion.extra); // Actualiza el precio final con el valor extra
  };

  // Si no se encuentra el producto, mostramos un mensaje de error
  if (!producto) return <div className="container mt-5">Producto no encontrado</div>;

  // Renderizamos el detalle del producto
  return (
    <div className="container mt-5 text-center">
      {/* Título del producto */}
      <h2>{producto.nombre}</h2>

      {/* Imagen del producto */}
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "300px", borderRadius: "10px", marginBottom: "20px" }}
      />

      {/* Si el producto tiene opciones (por ejemplo, tamaño o sabor), las mostramos */}
      {producto.opciones && producto.opciones.length > 0 && (
        <div className="mb-3">
          <label htmlFor="opcion" className="form-label">
            Elige una opción:
          </label>

          {/* Selector desplegable de opciones */}
          <select
            id="opcion"
            className="form-select"
            onChange={manejarCambioOpcion}
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona una opción
            </option>

            {/* Generamos una lista de <option> dinámicamente según el producto */}
            {producto.opciones.map((op, index) => (
              <option key={index} value={op.nombre}>
                {op.nombre} - ${op.extra}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Mostramos el precio actual del producto */}
      <h4>Precio: ${precioFinal}</h4>

      {/* Botón para agregar al carrito */}
      <button className="btn btn-success mt-3" onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>

      <br />

      {/* Botón para volver a la página principal */}
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        Volver al menú
      </button>
    </div>
  );
}
