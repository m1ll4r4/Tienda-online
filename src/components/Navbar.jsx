import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // Obtenemos el usuario activo desde localStorage (si existe)
  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

  // Función para cerrar sesión
  const handleLogout = () => {
    const confirmar = window.confirm("¿Deseas cerrar sesión?");
    if (confirmar) {
      localStorage.removeItem("usuarioActivo");
      alert("Sesión cerrada correctamente");
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <img
          src="/logo.png"
          alt="Logo del local"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <Link className="navbar-brand" to="/">
          Local de comida rápida "El que no come no pasa"
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
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

            {/* --- Sección de usuario (login/logout) --- */}
            {usuario ? (
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
