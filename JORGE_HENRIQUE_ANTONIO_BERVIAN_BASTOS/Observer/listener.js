// ESTE ARQUIVO REPRESENTA OS OBSERVADORES
// CADA CLASSE E UM TIPO DE SEGUIDOR QUE QUER RECEBER UM TIPO DE NOTIFICACAO

// CLASSE QUE REPRESENTA UM SEGUIDOR QUE QUER NOTIFICACAO DE STORIES
class StoryFollower {
  // LISTA INTERNA DE NOTIFICACOES RECEBIDAS
  #notifications = [];

  // METODO QUE RECEBE A NOTIFICACAO DO PUBLISHER
  update(content) {
    if (content.type === 'story') {
      this.#notifications.push(content.title);
    }
  }

  // METODO PARA LISTAR AS NOTIFICACOES RECEBIDAS
  listNotifications() {
    console.log('Stories:', this.#notifications);
  }
}

// CLASSE QUE REPRESENTA UM SEGUIDOR QUE QUER NOTIFICACAO DE POSTS
class PostFollower {
  #notifications = [];

  update(content) {
    if (content.type === 'post') {
      this.#notifications.push(content.title);
    }
  }

  listNotifications() {
    console.log('Posts:', this.#notifications);
  }
}

// CLASSE QUE REPRESENTA UM SEGUIDOR QUE QUER NOTIFICACAO DE REELS
class ReelsFollower {
  #notifications = [];

  update(content) {
    if (content.type === 'reels') {
      this.#notifications.push(content.title);
    }
  }

  listNotifications() {
    console.log('Reels:', this.#notifications);
  }
}

// EXPORTANDO AS CLASSES PARA SEREM USADAS NO INDEX
module.exports = {
  StoryFollower,
  PostFollower,
  ReelsFollower,
};