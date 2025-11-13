// 🔹 Componente Productos
// Este componente representa la vista de gestión de productos dentro del panel de administración.
// Aquí el administrador podrá ver, agregar, editar o eliminar productos del catálogo.

export default function Productos() {
  return (
    // Contenedor principal con margen superior
    <div className="container mt-4">

      {/* --- Título principal --- */}
      <h2>🛍️ Gestión de Productos</h2>

      {/* --- Descripción de la sección --- */}
      <p>
        Desde aquí el administrador puede agregar, editar o eliminar productos.
      </p>

      {/* 
        ⚙️ Aquí más adelante puedes agregar:
        - Un formulario para crear nuevos productos.
        - Una tabla o tarjetas para listar los productos existentes.
        - Botones de acción (editar / eliminar).
        - Filtros o buscador para encontrar productos fácilmente.
      */}
    </div>
  );
}

