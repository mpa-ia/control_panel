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

const logoutButtons = document.querySelectorAll('.icon-quit');
const loginButtons = document.querySelectorAll('.icon-profile');

const modal = document.querySelector('.pop-up');
const modalQuit = document.querySelector('.pop-up__quit');
const modalLogin = document.querySelector('.pop-up__login');

const quitButtons = document.querySelectorAll('.quit');

function toggleModal () {
  event.preventDefault();
  modal.classList.toggle('active');
}

for (let logoutButton of logoutButtons) {
  logoutButton.addEventListener('click', function () {
    toggleModal();
    modalQuit.classList.add('active');
  });
}

for (let loginButton of loginButtons) {
  loginButton.addEventListener('click', function () {
    toggleModal();
    modalLogin.classList.add('active');
  });
}

for (let quitButton of quitButtons) {
  quitButton.addEventListener('click', function () {
    toggleModal();
    modalLogin.classList.remove('active');
    modalQuit.classList.remove('active');
  });
}

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.classList.remove('active');
    modalQuit.classList.remove('active');
    modalLogin.classList.remove('active');
  }
});
