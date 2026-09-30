import React from 'react';
import Navbar from './Navbar'; // Importamos nuestro bloque

function App() {
  return (
    <div>
      <Navbar /> {/* ¡Listo! Nuestro menú ya se renderiza aquí */}
      <main style={{ padding: '2rem' }}>
        <h1>SOMOS TU MEJOR OPCIÓN</h1>
      </main>
    </div>
  );
}

export default App;
