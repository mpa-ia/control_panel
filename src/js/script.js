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

/* Chart */

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

  type: 'bar',
  data: {

    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],

    datasets: [{

      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],

      hidden: true,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, 
  },
  
});