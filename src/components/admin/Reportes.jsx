// 🔹 Componente Reportes
// Este componente representa la sección donde el administrador puede generar reportes
// y estadísticas sobre ventas, productos y rendimiento.
// Actualmente solo muestra botones de acción, pero puede ampliarse para mostrar gráficos o datos reales.

export default function Reportes() {
  return (
    // Contenedor principal con margen superior
    <div className="container mt-4">

      {/* --- Título y descripción --- */}
      <h2>📈 Reportes y Estadísticas</h2>
      <p>
        Generación de reportes de ventas, productos más vendidos
        y desempeño por período.
      </p>

      {/* --- Botones de acciones --- */}
      {/* Botón para generar un PDF con los reportes */}
      <button className="btn btn-primary">Generar reporte PDF</button>

      {/* Botón para exportar los datos a Excel (con margen a la izquierda) */}
      <button className="btn btn-success ms-2">Exportar a Excel</button>
    </div>
  );
}

