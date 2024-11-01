// src/components/Register.tsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      alert(`User ${username} registered successfully`);
      setUsername("");
      setPassword("");
      navigate("/login");
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <form onSubmit={handleRegister} className="form-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>

      {/* Frase de redirección al inicio de sesión */}
      <p className="redirect-text">
        ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </form>
  );
};

export default Register;
