var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {

  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (e.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }

  var $attribute = e.target.getAttribute('data-view');
  for (var j = 0; j < $view.length; j++) {
    if ($attribute === $view[j].getAttribute('data-view')) {
      $view[j].className = 'view';
    } else {
      $view[j].className = 'view hidden';
    }

  }
});
