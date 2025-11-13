// Importamos el componente Link para navegar entre rutas sin recargar la página
import { Link } from "react-router-dom";

// 🔹 Componente principal que se muestra cuando una compra se completa exitosamente
export default function CompraExitosa() {
  return (
    // Contenedor con márgenes y texto centrado
    <div className="container mt-5 text-center">
      
      {/* Mensaje principal de confirmación en color verde */}
      <h2 className="text-success">¡Compra realizada con éxito! 🎉</h2>
      
      {/* Mensaje secundario agradeciendo al cliente */}
      <p>Gracias por tu compra. Tu pedido está en preparación.</p>

      {/* Botón que redirige al menú para seguir comprando */}
      <Link 
        className="btn btn-primary mt-3" // Estilo Bootstrap: botón azul
        to="/menu"                        // Enlace hacia la página del menú
      >
        Volver al Menú
      </Link>
    </div>
  );
}

