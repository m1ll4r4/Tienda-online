import { useState } from "react";
import { productos } from "../data/data";

export default function Categorias() {
  const [categoria, setCategoria] = useState("comida");

  const filtrados = productos.filter(p => p.categoria === categoria);

  return (
    <div className="container mt-4">
      <h2>Categorías de Productos</h2>
      <select
        className="form-select w-50 mb-3"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="comida">Comida</option>
        <option value="bebidas">Bebidas</option>
      </select>

      <div className="row">
        {filtrados.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={p.imagen} className="card-img-top" alt={p.nombre} />
              <div className="card-body text-center">
                <h5>{p.nombre}</h5>
                <p>${p.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
