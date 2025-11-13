// Declaramos un componente funcional llamado "Ofertas"
export default function Ofertas() {
  // Lo que retorna el componente (el contenido que se mostrará en pantalla)
  return (
    // Contenedor principal con clases de Bootstrap para márgenes
    <div className="container mt-4">
      
      {/* Título principal de la página */}
      <h2>Ofertas Especiales 💥</h2>

      {/* Descripción breve debajo del título */}
      <p>Aquí se muestran todas las promos que tenemos. Para chuparse los dedos.</p>

      {/* Alerta visual con un mensaje informativo */}
      <div className="alert alert-warning">
        (Esta vista mostrará los productos con oferta = true)
      </div>
    </div>
  );
}

