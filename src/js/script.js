/* global Chart, $ */
/* eslint no-undef: "error" */

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
const chatButton = document.querySelector('#chat-link');

/* Modals DOM */
const modalQuit = document.querySelector('.modal__quit');
const modalLogin = document.querySelector('.modal__login');
const modalChat = document.querySelector('.modal__chat');

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

document.querySelectorAll('#modal-overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#modal-overlay').addEventListener('click', function (e) {
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
  document.querySelectorAll('#modal-overlay > *').forEach(function (modal) {
    modal.classList.remove('active');
  });
  document.querySelector('#modal-overlay').classList.add('active');
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

chatButton.addEventListener('click', function () {
  openModal(modalChat);
});

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
console.log(chart);

/* Range Slider */

const valueBubble = '<output class="rangeslider__value-bubble" />';
const labels = '<div class="rangeslider__labels"></div>';
const elem = $('input[type="range"]');

// get range index labels 
let rangeLabels = elem.attr('labels');
rangeLabels = rangeLabels.split(', ');

function updateValueBubble(pos, value, context) {
  pos = pos || context.position;
  value = value || context.value;
  var $valueBubble = $('.rangeslider__value-bubble', context.$range);
  var tempPosition = pos + context.grabPos;
  var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

  if ($valueBubble.length) {
    $valueBubble[0].style.left = Math.ceil(position) + 'px';
    $valueBubble[0].innerHTML = value + ' ';
  }
}

$('input[type="range"]').rangeslider({polyfill: false, 
  onInit: function() {
    const $rangeElem = this.$range;
    $rangeElem.append($(valueBubble));
    updateValueBubble(null, null, this);
    $rangeElem.append($(labels));
    $(rangeLabels).each(function(index, value) {
      $rangeElem.find('.rangeslider__labels').append('<span class="rangeslider__labels__label">' + value + '</span>');
    });
  },
  onSlide: function(pos, value) {
    updateValueBubble(pos, value, this);
    let $handle = this.$range.find('.rangeslider__handle__value');
    $handle.text(this.value);
  }
});
$('input[type="range"]').rangeslider('update', true);