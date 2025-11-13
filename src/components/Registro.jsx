// Importamos los hooks necesarios desde React y React Router
import { useState } from "react";            // useState: permite manejar el estado interno del componente
import { useNavigate } from "react-router-dom"; // useNavigate: permite redirigir a otra ruta

// Definimos el componente funcional Registro
export default function Registro() {

  // Creamos un estado local llamado "usuario" para guardar los datos del formulario
  // Contiene tres campos: nombre, email y password
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  // Inicializamos la función navigate para redirigir al usuario después del registro
  const navigate = useNavigate();

  // handleChange: actualiza el estado "usuario" cada vez que se escribe en un input
  const handleChange = (e) => {
    // Copiamos el objeto usuario existente y actualizamos el campo modificado
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // handleSubmit: se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Obtenemos los usuarios almacenados en localStorage (si existen)
    // Si no hay ninguno, usamos un arreglo vacío
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificamos si ya existe un usuario registrado con el mismo email
    const existe = usuarios.some((u) => u.email === usuario.email);

    if (existe) {
      alert("Este correo ya está registrado"); // Si el correo existe, mostramos una alerta
      return; // Y detenemos el proceso
    }

    // Si el correo no existe, agregamos el nuevo usuario al arreglo
    usuarios.push(usuario);

    // Guardamos el nuevo arreglo actualizado en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Mostramos un mensaje de éxito
    alert("Registro exitoso, ahora puedes iniciar sesión");

    // Redirigimos al usuario a la página de login
    navigate("/login");
  };

  // JSX que define la interfaz del formulario de registro
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      {/* Título */}
      <h3 className="mb-3 text-center">Registro de Usuario</h3>

      {/* Formulario controlado */}
      <form onSubmit={handleSubmit}>

        {/* Campo de nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          className="form-control mb-3"
          value={usuario.nombre}           // Valor ligado al estado
          onChange={handleChange}          // Actualiza el estado al escribir
          required                         // Campo obligatorio
        />

        {/* Campo de correo */}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="form-control mb-3"
          value={usuario.email}
          onChange={handleChange}
          required
        />

        {/* Campo de contraseña */}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          value={usuario.password}
          onChange={handleChange}
          required
        />

        {/* Botón de envío */}
        <button className="btn btn-success w-100" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

