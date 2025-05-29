// ESTE ARQUIVO E O ARQUIVO CENTRAL PARA FAZER OS TESTES
// AQUI E ONDE INSTANCIAMOS A CONTA E OS SEGUIDORES E FAZEMOS AS POSTAGENS

// IMPORTANDO O PUBLISHER
const InstagramAccount = require('./publisher');

// IMPORTANDO OS OBSERVADORES
const {
  StoryFollower,
  PostFollower,
  ReelsFollower,
} = require('./listener');

// INSTANCIANDO A CONTA DO INSTAGRAM
const account = new InstagramAccount();

// INSTANCIANDO OS SEGUIDORES
const storyFollower = new StoryFollower();
const postFollower = new PostFollower();
const reelsFollower = new ReelsFollower();

// ADICIONANDO OS SEGUIDORES NA CONTA
account.addFollower(storyFollower);
account.addFollower(postFollower);
account.addFollower(reelsFollower);

// TESTE SEM NENHUMA NOTIFICACAO
storyFollower.listNotifications();
postFollower.listNotifications();
reelsFollower.listNotifications();
console.log('-------------------------');

// POSTANDO CONTEUDO NO INSTAGRAM
account.postContent({ title: 'Stories - Foto na balada', type: 'story' });
account.postContent({ title: 'Postagem - Foto no cassino', type: 'post' });
account.postContent({ title: 'Reels - Video motivador', type: 'reels' });

console.log('-------------------------');

// TESTE MOSTRANDO AS NOTIFICACOES RECEBIDAS
storyFollower.listNotifications();
postFollower.listNotifications();
reelsFollower.listNotifications();