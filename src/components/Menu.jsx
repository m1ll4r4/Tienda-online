// Importamos los hooks y datos necesarios
import { useState } from "react"; // (en este caso no se usa, pero se podría usar más adelante)
import { useNavigate } from "react-router-dom"; // Para navegar entre páginas
import { productos } from "../data/data"; // Lista de productos del menú

// Componente principal del menú
export default function Menu() {
  const navigate = useNavigate(); // Hook que permite cambiar de ruta (por ejemplo: ir al detalle del producto)

  // 🔹 Ordenamos los productos:
  // Los que tienen precio fijo se muestran primero
  // Los que tienen "opciones" (como tamaños o sabores) después
  const productosOrdenados = [...productos].sort((a, b) => {
    const aTieneOpciones = a.opciones && a.opciones.length > 0;
    const bTieneOpciones = b.opciones && b.opciones.length > 0;
    return aTieneOpciones - bTieneOpciones;
  });

  // 🔹 Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    // Obtenemos el carrito guardado en localStorage (si no existe, usamos un arreglo vacío)
    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];

    // Creamos un nuevo carrito con el producto agregado
    const nuevoCarrito = [...guardado, producto];

    // Guardamos el carrito actualizado en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    // Mostramos un mensaje de confirmación
    alert(`${producto.nombre} agregado al carrito 🛒`);
  };

  // 🔹 Renderizado de la interfaz
  return (
    <div className="container mt-4">
      {/* Encabezado con título y descripción */}
      <div className="text-center mb-4">
        <h2>Menú de Productos</h2>
        <p className="text-secondary">
          Los productos con precios fijos se muestran primero.  
          Los que no tienen precio poseen diferentes tamaños u opciones —  
          haz clic en la imagen para verlas.
        </p>
      </div>

      {/* 🔹 Sección donde se muestran todos los productos */}
      <div className="row">
        {/* Recorremos cada producto del arreglo ordenado */}
        {productosOrdenados.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            {/* Tarjeta visual para cada producto */}
            <div className="card h-100 shadow-sm">
              {/* Imagen del producto */}
              <img
                src={p.imagen} // Ruta de la imagen
                alt={p.nombre} // Texto alternativo
                className="card-img-top"
                // Cuando el usuario hace clic en la imagen, se redirige al detalle del producto
                onClick={() => navigate(`/producto/${p.id}`)}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />

              {/* Cuerpo de la tarjeta con información */}
              <div className="card-body text-center">
                {/* Nombre del producto */}
                <h5 className="card-title">{p.nombre}</h5>

                {/* 🔹 Si el producto NO tiene opciones, muestra el precio fijo */}
                {p.opciones?.length === 0 ? (
                  <p className="card-text text-success">
                    ${p.precio || p.extra || "Sin precio"}
                  </p>
                ) : (
                  // 🔹 Si tiene opciones (tamaños o variantes), muestra "Ver opciones"
                  <p className="card-text text-muted">Ver opciones</p>
                )}

                {/* Botón para agregar al carrito */}
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(p)} // Llama a la función al hacer clic
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

