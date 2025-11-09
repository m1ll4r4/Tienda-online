export let productos = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    imagen: "/hamburguesaclasica.jpg",
    oferta: false,
    opciones: [
      { nombre: "Normal", extra: 4500 },
      { nombre: "Doble carne", extra: 6500 },
      { nombre: "Combo (con papas y bebida)", extra: 8990 },
    ],
  },
  {
    id: 2,
    nombre: "Pizza",
    precio: 4000,
    imagen: "/pizza.jpg",
    oferta: false,
    opciones: [],
  },
  {
    id: 3,
    nombre: "Papas Fritas",
    imagen: "/papasfritas.jpg",
    oferta: false,
    opciones: [
      { nombre: "Pequeña", extra: 1500 },
      { nombre: "Grande", extra: 3000 },
      { nombre: "Con queso cheddar", extra: 4990 },
    ],
  },
  {
    id: 4,
    nombre: "Completo",
    imagen: "/comple.jpg",
    oferta: false,
    opciones: [
      { nombre: "Italiano", extra: 2300 },
      { nombre: "A lo pobre", extra: 3000 },
      { nombre: "As", extra: 3200 },
    ],
  },
  {
    id: 5,
    nombre: "Bebidas 500ml",
    precio: 1200,
    imagen: "/bebidas.jpg",
    oferta: false,
    opciones: [],
  },
  {
    id: 6,
    nombre: "Churrasco",
    imagen: "/churrasco.jpg",
    oferta: false,
    opciones: [
      { nombre: "Italiano", extra: 3000 },
      { nombre: "A lo pobre", extra: 3500 },
      { nombre: "Barros Luco", extra: 3500 },
    ],
  },
  {
    id: 7,
    nombre: "Pollo Crispy",
    precio: 5200,
    imagen: "/pollocrispy.jpg",
    oferta: false,
    opciones: [],
  },
  {
    id: 8,
    nombre: "Postre Delicia",
    precio: 2500,
    imagen: "/postre.jpg",
    oferta: false,
    opciones: [],
  },
  {
    id: 9,
    nombre: "Fajitas",
    precio: 4000,
    imagen: "/fajitas.jpg",
    oferta: false,
    opciones: [],
  },
  {
    id: 10,
    nombre: "Promo de hoy: Hamburguesa + Porcion de papas",
    precio: 3990,
    imagen: "/promodia.jpg",
    oferta: true,
    opciones: [],
  },
];

// 🔹 Operaciones CRUD
export const agregarProducto = (nuevo) => productos.push(nuevo);

export const actualizarProducto = (id, datos) => {
  const index = productos.findIndex((p) => p.id === id);
  if (index !== -1) productos[index] = { ...productos[index], ...datos };
};

export const eliminarProducto = (id) => {
  const index = productos.findIndex((p) => p.id === id);
  if (index !== -1) productos.splice(index, 1);
};
