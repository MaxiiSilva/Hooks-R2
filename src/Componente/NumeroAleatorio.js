import React, { useState, useEffect } from 'react';

// Componente de juego de adivinanza de números
const NumeroAleatorio = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(generateRandomNumber());
  const [adivinanza, setAdivinanza] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [intentos, setIntentos] = useState(0);

  // Función para generar un número aleatorio entre 1 y 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleChange = (e) => {
    setAdivinanza(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numeroAdivinado = parseInt(adivinanza, 10);

    if (isNaN(numeroAdivinado)) {
      setMensaje('Por favor, ingresa un número válido.');
      return;
    }

    setIntentos(intentos + 1);

    if (numeroAdivinado > numeroAleatorio) {
      setMensaje('Más bajo!');
    } else if (numeroAdivinado < numeroAleatorio) {
      setMensaje('Más alto!');
    } else {
      setMensaje(`¡Felicidades! Has adivinado el número en ${intentos + 1} intentos.`);
    }
  };

  // Restablecer el juego cuando se reinicie
  useEffect(() => {
    setNumeroAleatorio(generateRandomNumber());
    setMensaje('');
    setIntentos(0);
  }, []);

  return (
    <div>
      <h1>Juego de Adivinar el Número</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="adivinanza">Adivina el número (1-100):</label>
        <input
          type="number"
          id="adivinanza"
          value={adivinanza}
          onChange={handleChange}
          min="1"
          max="100"
        />
        <button type="submit">Adivinar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default NumeroAleatorio;
