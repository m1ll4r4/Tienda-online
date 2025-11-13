// Importamos el hook useState de React y la lista de productos desde data.js
import { useState } from "react";
import { productos } from "../data/data";

// 🔹 Componente que permite filtrar y mostrar productos por categoría
export default function Categorias() {
  // Estado para almacenar la categoría seleccionada (por defecto "comida")
  const [categoria, setCategoria] = useState("comida");

  // 🔹 Filtramos los productos según la categoría seleccionada
  const filtrados = productos.filter(p => p.categoria === categoria);

  return (
    <div className="container mt-4">
      <h2>Categorías de Productos</h2>

      {/* 🔹 Selector para elegir la categoría */}
      <select
        className="form-select w-50 mb-3"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)} // Actualiza el estado al cambiar
      >
        <option value="comida">Comida</option>
        <option value="bebidas">Bebidas</option>
      </select>

      {/* 🔹 Sección donde se muestran los productos filtrados */}
      <div className="row">
        {filtrados.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card">
              {/* Imagen del producto */}
              <img src={p.imagen} className="card-img-top" alt={p.nombre} />

              {/* Cuerpo de la tarjeta con nombre y precio */}
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

