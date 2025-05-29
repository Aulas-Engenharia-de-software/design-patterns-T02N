// ESTE ARQUIVO REPRESENTA O PUBLISHER
// ELE E A CONTA DO INSTAGRAM QUE POSTA CONTEUDO E NOTIFICA OS SEGUIDORES

class InstagramAccount {
  #followers = [];

  // METODO PARA ADICIONAR UM SEGUIDOR
  addFollower(follower) {
    this.#followers.push(follower);
  }

  // METODO PARA POSTAR UM CONTEUDO (STORY POST OU REELS)
  postContent(content) {
    this.#notify(content);
  }

  // METODO INTERNO PARA NOTIFICAR OS SEGUIDORES
  #notify(content) {
    this.#followers.forEach((follower) => {
      follower.update(content);
    });
  }
}

// EXPORTANDO A CLASSE PARA SER USADA EM OUTROS ARQUIVOS
module.exports = InstagramAccount;