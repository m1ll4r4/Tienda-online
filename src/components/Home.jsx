export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Bienvenido a nuestro local de comida rápida. Productos frescos, porciones generosas, promociones diarias y rico para pegarse sus buenos bajones. 🍔</h1>
      <p>Explora nuestro menú y descubre las mejores ofertas.</p>
      <img 
        src="/logo.png" 
        alt="Logo del local" 
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <p>Horario: Lun-Dom 11:00 - 23:00 • Dirección: Av. Santa Rosa 123</p>
    </div>
  );
}
