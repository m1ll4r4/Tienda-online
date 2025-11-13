// 🔹 Componente: Categorias
// Esta vista está pensada para el administrador.
// Permite gestionar (crear, editar o eliminar) las categorías
// que organizan los productos del menú de la tienda.

export default function Categorias() {
  return (
    // Contenedor principal con margen superior (Bootstrap)
    <div className="container mt-4">
      
      {/* --- Título de la vista --- */}
      <h2>🏷️ Gestión de Categorías</h2>

      {/* --- Descripción de la funcionalidad --- */}
      <p>Crear, editar o eliminar categorías para organizar los productos.</p>

      {/* --- Lista de categorías actuales (por ahora estática) --- */}
      <ul>
        {/* Cada ítem representa una categoría dentro del sistema */}
        <li>Hamburguesas 🍔</li>
        <li>Bebidas 🥤</li>
        <li>Postres 🍰</li>
      </ul>
    </div>
  );
}

