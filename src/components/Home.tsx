// src/components/Home.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  availableCategory: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Producto A", description: "Descripción A", price: 100, availableCategory: "Categoría 1" },
    { id: 2, name: "Producto B", description: "Descripción B", price: 200, availableCategory: "Categoría 2" },
    { id: 3, name: "Producto C", description: "Descripción C", price: 300, availableCategory: "Categoría 1" },
  ]);

  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Welcome, {username || "Guest"}!</h1>

        {/* Contenedor de botones de acción */}
        <div className="button-container">
          <button className="action-button create">Crear</button>
          <button className="action-button update">Actualizar</button>
          <button className="action-button delete">Borrar</button>
        </div>
      </div>

      {/* Contenedor de tabla de productos */}
      <div className="table-container">
        <h2>Lista de Productos</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Cat. Disponible</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.availableCategory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botón de Logout en la parte inferior derecha */}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Home;
