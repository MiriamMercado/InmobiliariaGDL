import React from 'react';
import './Navbar.css'; // Aquí meteremos el diseño básico

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Inmobiliaria GDL</div>
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#proyectos">Terrenos</a></li>
        <li><a href="#servicios">Quieres vender</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
        <div className="navbar-actions">
          <button className="btn-register">Registro Inmobiliaria GDL</button>
        </div>
    </nav>
  );
}

export default Navbar;