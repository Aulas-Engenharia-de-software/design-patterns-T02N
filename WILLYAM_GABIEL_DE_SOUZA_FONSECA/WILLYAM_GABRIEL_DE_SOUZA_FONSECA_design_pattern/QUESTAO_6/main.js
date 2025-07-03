const userService = new UserService();
const logDiv = document.getElementById('logOutput');

document.getElementById('loginBtn').addEventListener('click', () => {
  userService.login("aluno123");
  renderLogs();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  userService.logout("aluno123");
  renderLogs();
});

function renderLogs() {
  const logs = userService.getLogs();
  logDiv.innerHTML = logs.map(log => `<div>${log}</div>`).join('');
}
