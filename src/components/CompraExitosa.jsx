import { Link } from "react-router-dom";

export default function CompraExitosa() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-success">¡Compra realizada con éxito! 🎉</h2>
      <p>Gracias por tu compra. Tu pedido está en preparación.</p>
      <Link className="btn btn-primary mt-3" to="/menu">
        Volver al Menú
      </Link>
    </div>
  );
}
