// Importamos los hooks de React y las funciones/variables del archivo de datos
import { useState, useEffect } from "react";
import { productos, agregarProducto, eliminarProducto } from "../data/data";

// 🔹 Componente del panel de administración
// Permite agregar y eliminar productos del menú
export default function AdminPanel() {
  // Estado que guarda la lista actual de productos
  const [lista, setLista] = useState(productos);

  // Estado que maneja los valores del nuevo producto a agregar
  const [nuevo, setNuevo] = useState({ nombre: "", precio: "" });

  // useEffect → se ejecuta al montar el componente
  // Actualiza la lista local si cambian los productos originales
  useEffect(() => {
    setLista(productos);
  }, [productos]);

  // 🔹 Maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si el campo es precio, lo convierte a número
    setNuevo({ ...nuevo, [name]: name === "precio" ? Number(value) : value });
  };

  // 🔹 Agrega un nuevo producto al sistema
  const handleAdd = (e) => {
    e.preventDefault();

    // Validamos que el nombre no esté vacío y el precio sea válido
    if (!nuevo.nombre.trim() || nuevo.precio <= 0)
      return alert("Datos inválidos");

    // Creamos un nuevo objeto producto con un id único
    const nuevoProd = { id: Date.now(), ...nuevo, oferta: false };

    // Llamamos a la función para agregar el producto (desde data.js)
    agregarProducto(nuevoProd);

    // Actualizamos la lista local con el nuevo producto
    setLista([...lista, nuevoProd]);

    // Reiniciamos el formulario
    setNuevo({ nombre: "", precio: "" });
  };

  // 🔹 Elimina un producto por su ID
  const handleDelete = (id) => {
    eliminarProducto(id); // Llama a la función global
    setLista(lista.filter((p) => p.id !== id)); // Lo quita de la lista local
  };

  // 🔹 Renderizado principal del panel
  return (
    <div className="container mt-4">
      <h2>Panel de Administración</h2>

      {/* --- Formulario para agregar productos --- */}
      <form onSubmit={handleAdd} className="mt-3 mb-4">
        <div className="row g-2">
          <div className="col-md-5">
            <input
              type="text"
              name="nombre"
              value={nuevo.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Nombre del producto"
              required
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              name="precio"
              value={nuevo.precio}
              onChange={handleChange}
              className="form-control"
              placeholder="Precio"
              min="1"
              required
            />
          </div>

          <div className="col-md-2">
            <button className="btn btn-success w-100" type="submit">
              Agregar
            </button>
          </div>
        </div>
      </form>

      {/* --- Tabla con los productos actuales --- */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {lista.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>
                {/* Botón para eliminar un producto */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(p.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

