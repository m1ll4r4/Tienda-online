export default function HistorialCompras() {
  return (
    <div className="container mt-4">
      <h2>🕒 Historial de Compras</h2>
      <p>Registro completo de compras realizadas por los clientes.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Monto Total</th>
            <th>Método de Pago</th>
          </tr>
        </thead>
        <tbody>
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
