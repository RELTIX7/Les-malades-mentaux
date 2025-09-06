import { html } from 'https://unpkg.com/htm?module';
const root = document.getElementById('root');
root.innerHTML = `
  <div class="hero">
    <h1>Les Malades Mentaux — Dashboard PRO</h1>
    <p class="muted">Vue interactive (version légère sans build tools)</p>
    <div id="content"></div>
  </div>
`;
async function load(){
  const res = await fetch('/api/stats');
  const s = await res.json();
  document.getElementById('content').innerHTML = `<h2>${s.name}</h2><p>${s.memberCount} membres</p><p>${s.onlineCount} en ligne</p>`;
}
load();
