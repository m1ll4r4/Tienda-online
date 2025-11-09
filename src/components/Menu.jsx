import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productos } from "../data/data";

export default function Menu() {
  const navigate = useNavigate();

  // 🔹 Ordenamos: primero los de precio fijo, luego los que tienen opciones
  const productosOrdenados = [...productos].sort((a, b) => {
    const aTieneOpciones = a.opciones && a.opciones.length > 0;
    const bTieneOpciones = b.opciones && b.opciones.length > 0;
    return aTieneOpciones - bTieneOpciones;
  });

  const agregarAlCarrito = (producto) => {
    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
    const nuevoCarrito = [...guardado, producto];
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    alert(`${producto.nombre} agregado al carrito 🛒`);
  };

  return (
    <div className="container mt-4">
      {/* 🔹 Título centrado */}
      <div className="text-center mb-4">
        <h2>Menú de Productos</h2>
        <p className="text-secondary">
          Los productos con precios fijos se muestran primero.  
          Los que no tienen precio poseen diferentes tamaños u opciones —  
          haz clic en la imagen para verlas.
        </p>
      </div>

      {/* 🔹 Grid de productos */}
      <div className="row">
        {productosOrdenados.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={p.imagen}
                alt={p.nombre}
                className="card-img-top"
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
              <div className="card-body text-center">
                <h5 className="card-title">{p.nombre}</h5>

                {/* 🔹 Si no tiene opciones → mostrar precio fijo */}
                {p.opciones?.length === 0 ? (
                  <p className="card-text text-success">${p.precio || p.extra || "Sin precio"}</p>
                ) : (
                  <p className="card-text text-muted">Ver opciones</p>
                )}

                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(p)}
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
