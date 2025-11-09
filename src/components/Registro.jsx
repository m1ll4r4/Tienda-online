import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const existe = usuarios.some((u) => u.email === usuario.email);

    if (existe) {
      alert("Este correo ya está registrado");
      return;
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Registro exitoso, ahora puedes iniciar sesión");
    navigate("/login");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Registro de Usuario</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          className="form-control mb-3"
          value={usuario.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="form-control mb-3"
          value={usuario.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          value={usuario.password}
          onChange={handleChange}
          required
        />
        <button className="btn btn-success w-100" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}
