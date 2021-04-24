var $span = document.querySelectorAll('span');

var i = 0;
document.addEventListener('keydown', function (event) {

  if (event.key === $span[i].textContent || ($span[i].textContent === '\xa0' && event.keyCode === 32)) {
    $span[i].className = 'key-right';
    $span[i + 1].className = 'keyDown';
    i++;
  } else {
    $span[i].className = 'key-wrong';
  }

});
