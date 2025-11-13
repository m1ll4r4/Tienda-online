// Importamos Link (para navegación sin recargar la página) y useNavigate (para redirecciones programáticas)
import { Link, useNavigate } from "react-router-dom";

// Componente funcional principal de la barra de navegación
export default function Navbar() {
  // Hook para redirigir a otras rutas desde código (sin usar <Link>)
  const navigate = useNavigate();

  // Recuperamos el usuario activo desde el localStorage
  // Si el usuario ha iniciado sesión, este dato debería estar guardado ahí
  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

  // --- FUNCIÓN PARA CERRAR SESIÓN ---
  const handleLogout = () => {
    // Pedimos confirmación al usuario
    const confirmar = window.confirm("¿Deseas cerrar sesión?");
    if (confirmar) {
      // Eliminamos el usuario activo del almacenamiento local
      localStorage.removeItem("usuarioActivo");
      alert("Sesión cerrada correctamente");
      // Redirigimos al login
      navigate("/login");
    }
  };

  // --- ESTRUCTURA VISUAL DEL NAVBAR ---
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo del local */}
        <img
          src="/logo.png"
          alt="Logo del local"
          style={{ width: "150px", marginBottom: "20px" }}
        />

        {/* Nombre o marca visible del restaurante */}
        <Link className="navbar-brand" to="/">
          Local de comida rápida "El que no come no pasa"
        </Link>

        {/* Botón del menú responsive (para móviles) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenedor del menú (colapsable en pantallas pequeñas) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            {/* --- Enlaces principales del sitio --- */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menú</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/carrito">Carrito 🛒</Link>
            </li>

            {/* --- Sección del usuario --- */}
            {usuario ? (
              // Si hay un usuario activo, mostramos su nombre y el botón "Cerrar sesión"
              <>
                <li className="nav-item ms-3">
                  <span className="text-white">
                    👋 Hola, <strong>{usuario.nombre}</strong>
                  </span>
                </li>
                <li className="nav-item ms-3">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              // Si no hay usuario activo, mostramos el botón "Iniciar sesión"
              <li className="nav-item ms-3">
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-outline-light btn-sm"
                >
                  Iniciar sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

