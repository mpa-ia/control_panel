const asideWrapper = document.querySelector('.aside');

/* Hamburger Menu */

function toggleMenu (visible) {
  asideWrapper.classList.toggle('show', visible);
}

asideWrapper.querySelector('.fa-bars').addEventListener('click', function (e) {
  toggleMenu();
});

asideWrapper.querySelector('.icon-links').addEventListener('click', function (e) {
  toggleMenu();
});

asideWrapper.querySelector('.icon-general').addEventListener('click', function (e) {
  toggleMenu();
});

/* Buttons DOM */
const logoutButtons = document.querySelectorAll('.icon-quit');
const loginButtons = document.querySelectorAll('.icon-profile');

/* Modals DOM */
const modalQuit = document.querySelector('.pop-up__quit');
const modalLogin = document.querySelector('.pop-up__login');


function closeModal() {
  document.getElementById('pop-up-overlay').classList.remove('active')
}

document.querySelectorAll('#pop-up-overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#pop-up-overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal (modal) {
  document.querySelectorAll('#pop-up-overlay > *').forEach(function (modal) {
    modal.classList.remove('active');
  });
  document.querySelector('#pop-up-overlay').classList.add('active');
  modal.classList.add('active');
}

for (let logoutButton of logoutButtons) {
  logoutButton.addEventListener('click', function () {
    openModal(modalQuit);
  });
}

for (let loginButton of loginButtons) {
  loginButton.addEventListener('click', function () {
    openModal(modalLogin);
  });
}
