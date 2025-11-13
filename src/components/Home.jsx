// 🔹 Componente principal de la página de inicio
export default function Home() {
  // Retorna la interfaz de la vista principal (homepage)
  return (
    // Contenedor centrado con márgenes
    <div className="container mt-5 text-center">
      
      {/* Título principal con una breve descripción del local */}
      <h1>
        Bienvenido a nuestro local de comida rápida. Productos frescos, porciones generosas,
        promociones diarias y rico para pegarse sus buenos bajones. 🍔
      </h1>

      {/* Párrafo complementario invitando al usuario a explorar el menú */}
      <p>Explora nuestro menú y descubre las mejores ofertas.</p>

      {/* Imagen del logo del local */}
      <img 
        src="/logo.png"                   // Ruta de la imagen dentro del proyecto
        alt="Logo del local"              // Texto alternativo por accesibilidad
        style={{ width: "150px", marginBottom: "20px" }} // Tamaño y espaciado inferior
      />

      {/* Información de contacto y horario de atención */}
      <p>Horario: Lun-Dom 11:00 - 23:00 • Dirección: Av. Santa Rosa 123</p>
    </div>
  );
}

