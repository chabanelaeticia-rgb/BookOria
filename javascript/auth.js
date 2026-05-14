// Simulated user database
const USERS = [
  {
    id: 1,
    nom: "Benali",
    prenom: "Karim",
    email: "karim@email.com",
    password: "Karim123!",
    phone: "0551234567"
  },
  {
    id: 2,
    nom: "Meziane",
    prenom: "Sara",
    email: "sara@email.com",
    password: "Sara456@",
    phone: "0661234567"
  }
];

// Auth functions
function getUsers() {
  const stored = localStorage.getItem('bookstore_users');
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem('bookstore_users', JSON.stringify(USERS));
  return USERS;
}

function saveUsers(users) {
  localStorage.setItem('bookstore_users', JSON.stringify(users));
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const session = { id: user.id, nom: user.nom, prenom: user.prenom, email: user.email };
    localStorage.setItem('bookstore_session', JSON.stringify(session));
    return { success: true, user: session };
  }
  return { success: false, message: "Email ou mot de passe incorrect." };
}

function register(nom, prenom, email, password, phone) {
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, message: "Cet email est déjà utilisé." };
  }
  const newUser = {
    id: users.length + 1,
    nom, prenom, email, password, phone
  };
  users.push(newUser);
  saveUsers(users);
  const session = { id: newUser.id, nom: newUser.nom, prenom: newUser.prenom, email: newUser.email };
  localStorage.setItem('bookstore_session', JSON.stringify(session));
  return { success: true, user: session };
}

function logout() {
  localStorage.removeItem('bookstore_session');
  window.location.href = '../index.html';
}

function getCurrentUser() {
  const session = localStorage.getItem('bookstore_session');
  return session ? JSON.parse(session) : null;
}

function isLoggedIn() {
  return getCurrentUser() !== null;
}

// Cart functions
function getCart() {
  const cart = localStorage.getItem('bookstore_cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('bookstore_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product) {
  if (!isLoggedIn()) {
    window.location.href = 'content/login.html';
    return;
  }
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  showNotification(`"${product.name}" ajouté au panier !`);
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

function showNotification(message, type = 'success') {
  const notif = document.createElement('div');
  notif.className = `notification ${type}`;
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.classList.add('show'), 10);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.remove(), 300);
  }, 3000);
}

// Update nav on load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateNavAuth();
});

function updateNavAuth() {
  const user = getCurrentUser();
  const authLinks = document.querySelectorAll('.nav-auth');
  const userLinks = document.querySelectorAll('.nav-user');
  const userNames = document.querySelectorAll('.nav-username');

  authLinks.forEach(el => el.style.display = user ? 'none' : 'flex');
  userLinks.forEach(el => el.style.display = user ? 'flex' : 'none');
  userNames.forEach(el => el.textContent = user ? user.prenom : '');
}
