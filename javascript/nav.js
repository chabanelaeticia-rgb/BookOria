// nav.js — injects navigation into every page
function injectNav(activePage = '') {
  const isRoot = !window.location.pathname.includes('/content/');
  const base = isRoot ? '' : '../';

  const html = `
  <nav>
    <div class="nav-inner">
      <a href="${base}index.html" class="nav-logo">Biblio<span>thèque</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="${base}index.html" class="${activePage==='home'?'active':''}">Accueil</a></li>
        <li><a href="${base}content/products.html" class="${activePage==='products'?'active':''}">Catalogue</a></li>
        <li><a href="${base}content/order.html" class="${activePage==='order'?'active':''}">Commander</a></li>
      </ul>
      <div class="nav-actions">
        <div class="nav-auth" style="display:none">
          <a href="${base}content/login.html" class="btn-nav btn-nav-outline ${activePage==='login'?'active':''}">Connexion</a>
          <a href="${base}content/register.html" class="btn-nav btn-nav-fill ${activePage==='register'?'active':''}">S'inscrire</a>
        </div>
        <div class="nav-user" style="display:none">
          <span style="font-size:0.8rem;color:var(--text-muted)">Bonjour, <span class="nav-username"></span></span>
          <button class="btn-nav btn-nav-outline" onclick="logout()">Déconnexion</button>
        </div>
        <button class="cart-btn" onclick="window.location='${base}content/order.html'">
          🛒 Panier
          <span class="cart-badge">0</span>
        </button>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;

  document.body.insertAdjacentHTML('afterbegin', html);

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
}
