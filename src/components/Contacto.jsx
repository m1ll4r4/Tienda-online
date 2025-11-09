export default function Contacto() {
  return (
    <div className="container mt-4">
      <h2>Contáctanos, para reservas, sugerencias, etc.</h2>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Enviar</button>
      </form>
    </div>
  );
}
