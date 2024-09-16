import React, { useState, useEffect } from 'react';

const AutoNota = () => {
  const [nota, setNota] = useState('');
  const [guardado, setGuardado] = useState(false);
  const [temporizador, setTemporizador] = useState(null);

  // Función para manejar el cambio en el textarea
  const handleChange = (e) => {
    setNota(e.target.value);
    setGuardado(false);

    // Limpiar el temporizador previo
    if (temporizador) {
      clearTimeout(temporizador);
    }

    // Configurar un nuevo temporizador para guardar automáticamente
    const nuevoTemporizador = setTimeout(() => {
      guardarNota(e.target.value);
    }, 2000); // Ajusta el tiempo de espera en milisegundos (2000 ms = 2 segundos)

    setTemporizador(nuevoTemporizador);
  };

  // Función para guardar la nota
  const guardarNota = (contenido) => {
    // Aquí puedes agregar lógica para guardar la nota, por ejemplo, en localStorage
    localStorage.setItem('nota', contenido);
    setGuardado(true);
  };

  // Recuperar la nota almacenada cuando el componente se monta
  useEffect(() => {
    const notaGuardada = localStorage.getItem('nota');
    if (notaGuardada) {
      setNota(notaGuardada);
      setGuardado(true);
    }
  }, []);

  return (
    <div>
      <h1>Hoja De Nota Imborrable</h1>
      <textarea
        value={nota}
        onChange={handleChange}
        rows="10"
        cols="50"
        placeholder="Escribe tu nota aquí..."
      />
      <p>{guardado ? 'Tu Nota Se Guardo Automaticamente 👍🏽.' : 'Tu Nota No Se Guardo.'}</p>
      <p>{guardado ? 'pd: Leo todo lo que escribis' : ' '}</p>
    </div>
  );
};

export default AutoNota;
