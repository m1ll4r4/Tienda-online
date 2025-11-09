import { useState, useEffect } from "react";
import { productos, agregarProducto, eliminarProducto } from "../data/data";

export default function AdminPanel() {
  const [lista, setLista] = useState(productos);
  const [nuevo, setNuevo] = useState({ nombre: "", precio: "" });

  useEffect(() => {
    setLista(productos);
  }, [productos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevo({ ...nuevo, [name]: name === "precio" ? Number(value) : value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!nuevo.nombre.trim() || nuevo.precio <= 0) return alert("Datos inválidos");
    const nuevoProd = { id: Date.now(), ...nuevo, oferta: false };
    agregarProducto(nuevoProd);
    setLista([...lista, nuevoProd]);
    setNuevo({ nombre: "", precio: "" });
  };

  const handleDelete = (id) => {
    eliminarProducto(id);
    setLista(lista.filter((p) => p.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>Panel de Administración</h2>

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
