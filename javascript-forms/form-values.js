var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var theForm = {};

  theForm.name = $contactForm.elements.name.value;
  theForm.email = $contactForm.elements.email.value;
  theForm.message = $contactForm.elements.message.value;

  console.log(theForm);

  $contactForm.reset();

});
