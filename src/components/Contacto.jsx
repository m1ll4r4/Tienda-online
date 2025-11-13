// 🔹 Componente principal de la página de contacto
export default function Contacto() {
  return (
    // Contenedor principal con margen superior
    <div className="container mt-4">
      {/* Título de la página */}
      <h2>Contáctanos, para reservas, sugerencias, etc.</h2>

      {/* Formulario de contacto */}
      <form className="mt-3">
        {/* Campo de nombre */}
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input 
            type="text"            // Tipo de campo texto
            className="form-control" // Estilo Bootstrap
            required                // Campo obligatorio
          />
        </div>

        {/* Campo de correo electrónico */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input 
            type="email"            // Valida formato de correo
            className="form-control"
            required
          />
        </div>

        {/* Campo de mensaje */}
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea 
            className="form-control" // Caja de texto más grande
            rows="4"                 // Altura de 4 líneas
            required
          ></textarea>
        </div>

        {/* Botón para enviar el formulario */}
        <button 
          className="btn btn-primary" // Estilo Bootstrap azul
          type="submit"               // Envía el formulario
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

