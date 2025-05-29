// Conta do Instagram (publisher)
const InstagramAccount = {
  followers: [],

  addFollower: function(follower) {
    this.followers.push(follower);
  },

  postContent: function(content) {
    this.followers.forEach(function(follower) {
      // Aqui simulamos o "update"
      if (
        (content.type === 'story' && follower.type === 'story') ||
        (content.type === 'post' && follower.type === 'post') ||
        (content.type === 'reels' && follower.type === 'reels')
      ) {
        follower.notifications.push(content.title);
      }
    });
  },
};

// Seguidores (observers)

const storyFollower = {
  type: 'story',
  notifications: [],
  listNotifications: function() {
    console.log('Stories:', this.notifications);
  },
};

const postFollower = {
  type: 'post',
  notifications: [],
  listNotifications: function() {
    console.log('Posts:', this.notifications);
  },
};

const reelsFollower = {
  type: 'reels',
  notifications: [],
  listNotifications: function() {
    console.log('Reels:', this.notifications);
  },
};

// Simulação

InstagramAccount.addFollower(storyFollower);
InstagramAccount.addFollower(postFollower);
InstagramAccount.addFollower(reelsFollower);

// Antes de postar
storyFollower.listNotifications();
postFollower.listNotifications();
reelsFollower.listNotifications();
console.log('-------------------------');

// Postagens
InstagramAccount.postContent({ title: 'Stories - Foto na balada', type: 'story' });
InstagramAccount.postContent({ title: 'Postagem - Foto no cassino', type: 'post' });
InstagramAccount.postContent({ title: 'Reels - Video motivador', type: 'reels' });

console.log('-------------------------');

// Após as postagens
storyFollower.listNotifications();
postFollower.listNotifications();
reelsFollower.listNotifications();