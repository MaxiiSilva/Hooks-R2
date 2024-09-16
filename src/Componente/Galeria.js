import React, { useState, useEffect } from 'react';
import './Galeria.css';

// Array de imágenes (puedes reemplazarlas con tus propias imágenes)
const imagenes = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5byIEbQ1oc8CJP33fohgOOYssGWYPmgbnLg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUQoUHdGj6tO9qK_Vwkj5ha2Up-bpU2lliA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyENlnCPmxcjZliKFjfF5AHkzP7KBTFU7Og&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVp-ZM070AzTqORTKzI4vLMgbUNQSpvwr-A&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_P66t6EqABOETmZFxbWTrXswi_91yTXGEDg&s',
];

const Galeria = () => {
  const [indiceActual, setIndiceActual] = useState(0);

  const manejarTeclaPresionada = (evento) => {
    if (evento.key === 'ArrowRight') {
      setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % imagenes.length);
    } else if (evento.key === 'ArrowLeft') {
      setIndiceActual((indiceAnterior) => (indiceAnterior - 1 + imagenes.length) % imagenes.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', manejarTeclaPresionada);
    return () => {
      window.removeEventListener('keydown', manejarTeclaPresionada);
    };
  }, []);

  return (
    <div className="contenedor-galeria">
      <img src={imagenes[indiceActual]} alt={`Imagen ${indiceActual + 1}`} className="imagen-galeria" />
      <div className="navegacion">
        <button className="boton-navegacion" onClick={() => setIndiceActual((indiceActual - 1 + imagenes.length) % imagenes.length)}>&lt;</button>
        <button className="boton-navegacion" onClick={() => setIndiceActual((indiceActual + 1) % imagenes.length)}>&gt;</button>
      </div>
    </div>
  );
};

export default Galeria;
