import { Link } from "react-router-dom";

export default function CompraFallida() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-danger">No se pudo procesar el pago 😔</h2>
      <p>Por favor, revisa tus datos e inténtalo nuevamente.</p>
      <Link className="btn btn-warning mt-3" to="/checkout">
        Volver al Checkout
      </Link>
    </div>
  );
}
