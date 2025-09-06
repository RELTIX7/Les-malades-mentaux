import { html } from 'https://unpkg.com/htm?module';

const root = document.getElementById('root');
root.innerHTML = `
  <div class="hero">
    <h1>Les Malades Mentaux — Dashboard PRO</h1>
    <p class="muted">Vue interactive (version légère sans build tools)</p>
    <div id="content">Chargement...</div>
  </div>
`;

async function load(){
  try {
    // Fetch vers ton serveur Pterodactyl
    const res = await fetch('https://node.silverhost.fr:2042/api/stats');
    if(!res.ok) throw new Error('Erreur réseau');
    const s = await res.json();
    document.getElementById('content').innerHTML = `
      <h2>${s.name}</h2>
      <p>${s.memberCount} membres</p>
      <p>${s.onlineCount} en ligne</p>
    `;
  } catch (e) {
    console.error(e);
    document.getElementById('content').innerHTML = 'Impossible de charger les stats';
  }
}

load();
