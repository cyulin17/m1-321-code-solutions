var clicks = 1;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  $clickCount.textContent = 'Clicks: ' + clicks++;

  if (clicks < 5) {
    this.className = 'hot-button cold';
  } else if (clicks < 8) {
    this.className = 'hot-button cool';
  } else if (clicks < 11) {
    this.className = 'hot-button tepid';
  } else if (clicks < 14) {
    this.className = 'hot-button warm';
  } else if (clicks < 17) {
    this.className = 'hot-button hot';
  } else {
    this.className = 'hot-button nuclear';
  }
});
