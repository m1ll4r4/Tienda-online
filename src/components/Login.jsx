// Importamos los hooks necesarios de React y React Router
import { useState } from "react";          // Para manejar el estado de los inputs
import { useNavigate } from "react-router-dom"; // Para redirigir al usuario después del login

// Componente principal de inicio de sesión
export default function Login() {
  // Estados locales para guardar los datos del formulario
  const [email, setEmail] = useState("");       // Correo ingresado
  const [password, setPassword] = useState(""); // Contraseña ingresada
  const navigate = useNavigate();               // Hook para cambiar de página

  // 🔹 Función que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // 1️⃣ Verificar si el usuario es el administrador
    if (email === "admin@tienda.com" && password === "1234") {
      // Guardamos en localStorage los datos del usuario activo
      localStorage.setItem(
        "usuarioActivo",
        JSON.stringify({ nombre: "Admin", rol: "admin" })
      );
      alert("Bienvenido administrador 👑");  // Mensaje de bienvenida
      navigate("/admin/dashboard");          // Redirige al panel de administrador
      return;                               // Termina aquí si es admin
    }

    // 2️⃣ Verificar si es un usuario normal registrado
    // Obtenemos los usuarios almacenados (si no hay, se usa un arreglo vacío)
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscamos si el correo y contraseña coinciden con algún usuario guardado
    const user = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    // Si el usuario existe → iniciar sesión normal
    if (user) {
      localStorage.setItem("usuarioActivo", JSON.stringify(user)); // Guardamos usuario activo
      alert(`Bienvenido, ${user.nombre}`);                         // Saludo personalizado
      navigate("/");                                               // Redirige a la página principal
    } else {
      // Si no existe, mostramos un error
      alert("Correo o contraseña incorrectos");
    }
  };

  // 🔹 Interfaz del formulario de login
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Iniciar Sesión</h3>

      {/* Formulario de login */}
      <form onSubmit={handleSubmit}>
        {/* Campo de correo */}
        <input
          type="email"
          placeholder="Correo electrónico"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
          required
        />

        {/* Campo de contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
          required
        />

        {/* Botón para enviar el formulario */}
        <button className="btn btn-primary w-100" type="submit">
          Ingresar
        </button>
      </form>

      {/* 🔹 Enlace para redirigir al registro si no tiene cuenta */}
      <p className="mt-3 text-center">
        ¿No tienes cuenta?{" "}
        <a href="/registro">Regístrate aquí</a>
      </p>
    </div>
  );
}


