// 🔹 Componente HistorialCompras
// Este componente muestra un registro histórico de todas las compras realizadas por los clientes.
// Ideal para que el administrador o el propio cliente revisen transacciones anteriores.

export default function HistorialCompras() {
  return (
    // Contenedor principal con márgenes superiores
    <div className="container mt-4">

      {/* --- Título principal --- */}
      <h2>🕒 Historial de Compras</h2>

      {/* --- Descripción breve de la vista --- */}
      <p>Registro completo de compras realizadas por los clientes.</p>

      {/* --- Tabla con la información del historial --- */}
      <table className="table">
        <thead>
          <tr>
            {/* Encabezados de las columnas de la tabla */}
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Monto Total</th>
            <th>Método de Pago</th>
          </tr>
        </thead>

        <tbody>
          {/* Fila de ejemplo estática — se puede reemplazar por datos dinámicos */}
          <tr>
            <td>06/11/2025</td>
            <td>Carlos Díaz</td>
            <td>$18.000</td>
            <td>Tarjeta</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

