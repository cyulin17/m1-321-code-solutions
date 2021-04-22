var $btn = document.querySelector('.click-me');
var $overlay = document.querySelector('.overlay');
var $window = document.querySelector('.pop-out-window');
var $nobtn = document.querySelector('.no-button');

$btn.addEventListener('click', function (event) {
  $overlay.className = 'overlay-show';
  $window.className = 'pop-out-window-show';
});

$nobtn.addEventListener('click', function (event) {
  $overlay.className = 'overlay';
  $window.className = 'pop-out-window';
});
