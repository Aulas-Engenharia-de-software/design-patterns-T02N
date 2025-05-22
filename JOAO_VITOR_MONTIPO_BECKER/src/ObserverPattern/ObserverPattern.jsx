import React, { useState, useEffect } from 'react';

class PublicadorDeNoticias {
  constructor() {
    this.assinantes = [];
  }

  adicionarAssinante(assinante) {
    this.assinantes.push(assinante);
  }

  publicar(noticia) {
    this.assinantes.forEach(assinante => assinante(noticia));
  }
}

const ObserverPattern = () => {
  const [noticia, setNoticia] = useState("Nenhuma notícia disponível");
  const publicador = new PublicadorDeNoticias();

  useEffect(() => {
    publicador.adicionarAssinante(setNoticia);
  }, [publicador]);

  const publicarNoticia = () => {
    publicador.publicar("Notícia de última hora: Implementação com Observer Pattern");
  };

  return (
    <div>
      <h2>Implementação do Observer Pattern</h2>
      <p>{noticia}</p>
      <button onClick={publicarNoticia}>Publicar Notícia</button>
    </div>
  );
};

export default ObserverPattern;