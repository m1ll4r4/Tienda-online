import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contacto from "./components/Contacto";
import Categorias from "./components/Categorias";
import Ofertas from "./components/Ofertas";
import Checkout from "./components/Checkout";
import CompraExitosa from "./components/CompraExitosa";
import CompraFallida from "./components/CompraFallida";
import AdminPanel from "./components/AdminPanel";
import Carrito from "./components/Carrito";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Dashboard from "./components/admin/Dashboard";
import Productos from "./components/admin/Productos";
import Usuarios from "./components/admin/Usuarios";
import Ordenes from "./components/admin/Ordenes";
import Reportes from "./components/admin/Reportes";
import HistorialCompras from "./components/admin/HistorialCompras";
import CategoriaAdmin from "./components/admin/CategoriaAdmin";
import ProductoDetalle from "./components/ProductoDetalle";

import React from "react";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compra-exitosa" element={<CompraExitosa />} />
        <Route path="/compra-fallida" element={<CompraFallida />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/productos" element={<Productos />} />
        <Route path="/admin/usuarios" element={<Usuarios />} />
         <Route path="/admin/ordenes" element={<Ordenes />} />
        <Route path="/admin/reportes" element={<Reportes />} />
        <Route path="/admin/historial" element={<HistorialCompras />} />
        <Route path="/admin/categoria" element={<CategoriaAdmin />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>
    </Router>
  );

  
}


