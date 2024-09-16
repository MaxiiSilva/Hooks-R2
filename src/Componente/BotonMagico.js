import React, { useState } from 'react';

// Componente BotonMagico
const BotonMagico = () => {
  const [mensaje, setMensaje] = useState('');
  const [estilo, setEstilo] = useState({});

  // Función para manejar clic simple
  const handleClick = () => {
    setMensaje('¡Has hecho clic en el botón!');
    setEstilo({ backgroundColor: 'lightblue' });
  };

  // Función para manejar doble clic
  const handleDblClick = () => {
    setMensaje('¡Has hecho doble clic en el botón!');
    setEstilo({ backgroundColor: 'lightcoral' });
  };

  return (
    <div>
      <button
        onClick={handleClick}
        onDoubleClick={handleDblClick}
        style={estilo}
      >
        Clic o Doble Clic en mí
      </button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default BotonMagico;
