// 🔹 Componente Ordenes
// Este componente muestra el listado de órdenes o boletas generadas por los clientes.
// Permite al administrador visualizar y gestionar el estado de cada pedido.

export default function Ordenes() {
  return (
    // Contenedor principal con margen superior
    <div className="container mt-4">

      {/* --- Título de la sección --- */}
      <h2>🧾 Manejo de Órdenes / Boletas</h2>

      {/* --- Tabla de órdenes --- */}
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* Encabezados de las columnas */}
            <th>ID Orden</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* Ejemplo de una fila de orden (datos estáticos) */}
          <tr>
            <td>#00123</td>
            <td>Ana López</td>
            <td>$12.500</td>
            <td>Pendiente</td>
            <td>
              {/* Botón para cambiar el estado de la orden */}
              <button className="btn btn-success btn-sm">
                Marcar Entregada
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
