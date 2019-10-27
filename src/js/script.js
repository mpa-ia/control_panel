const hamburger = document.querySelector('.fa-bars');
const aside = document.querySelector('.aside');
hamburger.addEventListener('click', function () {
  aside.classList.toggle('hidden');
});