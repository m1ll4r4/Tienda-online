import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Verificar si es el admin
    if (email === "admin@tienda.com" && password === "1234") {
      localStorage.setItem(
        "usuarioActivo",
        JSON.stringify({ nombre: "Admin", rol: "admin" })
      );
      alert("Bienvenido administrador 👑");
      navigate("/admin/dashboard");
      return;
    }

    // 2. Verificar usuarios normales (registrados)
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("usuarioActivo", JSON.stringify(user));
      alert(`Bienvenido, ${user.nombre}`);
      navigate("/"); // redirige al inicio normal
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Iniciar Sesión</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100" type="submit">
          Ingresar
        </button>
      </form>

      {/* 🔹 Enlace para ir al registro */}
      <p className="mt-3 text-center">
        ¿No tienes cuenta?{" "}
        <a href="/registro">Regístrate aquí</a>
      </p>
    </div>
  );
}

