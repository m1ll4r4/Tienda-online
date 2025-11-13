// Importamos el componente Link para crear enlaces internos sin recargar la página
import { Link } from "react-router-dom";

// 🔹 Componente principal que se muestra cuando una compra no se procesa correctamente
export default function CompraFallida() {
  return (
    // Contenedor principal con margen superior y texto centrado
    <div className="container mt-5 text-center">
      
      {/* Mensaje principal de error en color rojo */}
      <h2 className="text-danger">No se pudo procesar el pago 😔</h2>
      
      {/* Mensaje explicativo */}
      <p>Por favor, revisa tus datos e inténtalo nuevamente.</p>

      {/* Botón para volver al proceso de checkout */}
      <Link 
        className="btn btn-warning mt-3" // Estilo Bootstrap: botón amarillo
        to="/checkout"                   // Enlace que redirige al usuario al checkout
      >
        Volver al Checkout
      </Link>
    </div>
  );
}
