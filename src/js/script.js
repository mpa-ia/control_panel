const hamburger = document.querySelector('.fa-bars');
const aside = document.querySelector('.aside');
hamburger.addEventListener('click', function () {
  aside.classList.toggle('hidden');
});


const logout = document.querySelector('.icon-quit');
const login = document.querySelector('.icon-profile');
const modal = document.querySelector('.pop-up');

const modalQuit = document.querySelector('.pop-up__quit');
const modalLogin = document.querySelector('.pop-up__login');

const quitButton = document.querySelector('.quit');

const closeButton = document.querySelector('.icon-close');


logout.addEventListener('click', function () {
  event.preventDefault();
  modal.classList.add('active');
  modalQuit.classList.add('active');
});

login.addEventListener('click', function () {
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
