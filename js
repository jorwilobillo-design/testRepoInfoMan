window.openModal = function(mode) {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');

  if (mode === 'register') {
    if (loginModal) loginModal.classList.remove('active');
    if (registerModal) registerModal.classList.add('active');
  } else {
    if (registerModal) registerModal.classList.remove('active');
    if (loginModal) loginModal.classList.add('active');
  }
};

window.closeModal = function(mode) {
  if (mode === 'login') {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) loginModal.classList.remove('active');
  } else if (mode === 'register') {
    const registerModal = document.getElementById('registerModal');
    if (registerModal) registerModal.classList.remove('active');
  } else {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    if (loginModal) loginModal.classList.remove('active');
    if (registerModal) registerModal.classList.remove('active');
  }
};

window.switchModal = function(current, target) {
  window.closeModal(current);
  window.openModal(target);
};

window.handleLogin = function(event) {
  event.preventDefault();
  alert('Sign In successful!');
  window.closeModal('login');
};

window.handleRegister = function(event) {
  event.preventDefault();
  alert('Account created successfully!');
  window.closeModal('register');
};

// Close modal when clicking outside card
window.onclick = function(event) {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  if (event.target === loginModal) window.closeModal('login');
  if (event.target === registerModal) window.closeModal('register');
};

  
