export default function Usuarios() {
  return (
    <div className="container mt-4">
      <h2>👥 Gestión de Usuarios</h2>
      <p>Listado de usuarios registrados con sus roles y estado.</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>juan@mail.com</td>
            <td>Cliente</td>
            <td><button className="btn btn-sm btn-warning">Editar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
