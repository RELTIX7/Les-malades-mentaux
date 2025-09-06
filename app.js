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
    const res = await fetch('https://TON_URL_PTERODACTYL:3000/api/stats'); // ← Mets ici ton URL publique
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
