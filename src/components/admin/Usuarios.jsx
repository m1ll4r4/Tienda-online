// 🔹 Componente Usuarios
// Este componente muestra una tabla con la lista de usuarios registrados.
// Actualmente es un ejemplo estático (los datos están escritos directamente),
// pero puede adaptarse fácilmente para leer usuarios desde localStorage o una API.

export default function Usuarios() {
  return (
    // Contenedor principal con espaciado superior
    <div className="container mt-4">

      {/* --- Título y descripción --- */}
      <h2>👥 Gestión de Usuarios</h2>
      <p>Listado de usuarios registrados con sus roles y estado.</p>

      {/* --- Tabla de usuarios --- */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>   {/* Columna con el nombre del usuario */}
            <th>Email</th>    {/* Columna con el correo electrónico */}
            <th>Rol</th>      {/* Columna que indica si es cliente o admin */}
            <th>Acciones</th> {/* Columna para botones como editar/eliminar */}
          </tr>
        </thead>

        <tbody>
          {/* 🔹 Fila de ejemplo (usuario estático) */}
          <tr>
            <td>Juan Pérez</td>
            <td>juan@mail.com</td>
            <td>Cliente</td>
            <td>
              {/* Botón para editar (aún no funcional) */}
              <button className="btn btn-sm btn-warning">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

