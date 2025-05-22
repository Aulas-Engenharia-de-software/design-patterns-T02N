import React, { useState } from 'react';

const NaiveObserver = () => {
  const [noticia, setNoticia] = useState("Nenhuma notícia disponível");

  const publicarNoticia = () => {
    setNoticia("Notícia de última hora: Implementação ingênua");
    alert("Notícia publicada: Notícia de última hora: Implementação ingênua");
  };

  return (
    <div>
      <h2>Implementação Ingênua do Observer</h2>
      <p>{noticia}</p>
      <button onClick={publicarNoticia}>Publicar Notícia</button>
    </div>
  );
};

export default NaiveObserver;