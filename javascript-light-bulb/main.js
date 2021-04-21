var $lightbulb = document.querySelector('.lightbulb');
var $main = document.querySelector('.main');
var flag = 0;

$lightbulb.addEventListener('click', function (event) {
  if (flag === 1) {
    this.className = 'lightbulb lights-on';
    $main.className = 'main light-on-background';
    flag = 0;
  } else {
    this.className = 'lightbulb lights-off';
    $main.className = 'main light-off-background';
    flag = 1;
  }
});
