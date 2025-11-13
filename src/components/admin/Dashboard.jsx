// 🔹 Componente Dashboard
// Este componente representa el panel general del administrador,
// mostrando un resumen de la información más importante de la tienda.

export default function Dashboard() {
  return (
    // Contenedor principal con margen superior
    <div className="container mt-4">

      {/* --- Título principal del panel --- */}
      <h2>📊 Dashboard - Panel General</h2>

      {/* --- Descripción del contenido --- */}
      <p>Resumen de la tienda:</p>

      {/* --- Lista con métricas generales --- */}
      <ul>
        {/* Número total de productos registrados en el sistema */}
        <li>Total de productos: 25</li>

        {/* Total de usuarios registrados */}
        <li>Total de usuarios: 120</li>

        {/* Cantidad de órdenes o pedidos realizados */}
        <li>Órdenes realizadas: 42</li>

        {/* Ingresos aproximados del mes */}
        <li>Ingresos del mes: $2.350.000</li>
      </ul>
    </div>
  );
}

