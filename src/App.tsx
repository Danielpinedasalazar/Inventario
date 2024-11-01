// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        {/* Redirige a Register si el usuario no está autenticado */}
        <Route path="/" element={!isLoggedIn ? <Navigate to="/register" /> : <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
