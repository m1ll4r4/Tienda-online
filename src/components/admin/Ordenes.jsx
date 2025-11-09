export default function Ordenes() {
  return (
    <div className="container mt-4">
      <h2>🧾 Manejo de Órdenes / Boletas</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID Orden</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#00123</td>
            <td>Ana López</td>
            <td>$12.500</td>
            <td>Pendiente</td>
            <td>
              <button className="btn btn-success btn-sm">Marcar Entregada</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
