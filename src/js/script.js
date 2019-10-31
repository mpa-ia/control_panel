const navWrapper = document.querySelector('.nav');
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

const navLogout = navWrapper.querySelector('.icon-quit');
const navLogin = navWrapper.querySelector('.icon-profile');

const asideLogout = asideWrapper.querySelector('.icon-quit');
const asideLogin = asideWrapper.querySelector('.icon-profile');

const modal = document.querySelector('.pop-up');
const modalQuit = document.querySelector('.pop-up__quit');
const modalLogin = document.querySelector('.pop-up__login');

const quitButton = document.querySelector('.quit');
const closeButton = document.querySelector('.icon-close');


navLogout.addEventListener('click', function () {
  event.preventDefault();
  modal.classList.add('active');
  modalQuit.classList.add('active');
});

asideLogout.addEventListener('click', function () {
  event.preventDefault();
  modal.classList.add('active');
  modalQuit.classList.add('active');
});

navLogin.addEventListener('click', function () {
  event.preventDefault();
  modal.classList.add('active');
  modalLogin.classList.add('active');
});

asideLogin.addEventListener('click', function () {
  event.preventDefault();
  modal.classList.add('active');
  modalLogin.classList.add('active');
});

quitButton.addEventListener('click', function () {
  modal.classList.remove('active');
  modalQuit.classList.remove('active');
  modalLogin.classList.remove('active'); 
});

closeButton.addEventListener('click', function () {
  modal.classList.remove('active');
  modalQuit.classList.remove('active');
  modalLogin.classList.remove('active'); 
});

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.classList.remove('active');
    modalQuit.classList.remove('active');
    modalLogin.classList.remove('active'); 
  }
});
