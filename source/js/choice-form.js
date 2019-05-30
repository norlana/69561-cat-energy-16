var form = document.forms.choice;
var inputs = form.querySelectorAll('[data-validate]');
var buttonSubmit = form.querySelector('.choice__button');

for (var i = 0; i < inputs.length; i++) {
  inputs[i].classList.toggle('form-section__field--error-no-js');
};

function validateFormLive(event) {
  if (!event.target.hasAttribute('data-validate')) return;
  var inputCurrent = event.target;

  if (inputCurrent.validity) {
    if (!inputCurrent.classList.contains('form-section__field--error-js')) {
      inputCurrent.classList.add('form-section__field--error-js');
    }

    if (!inputCurrent.validity.patternMismatch && !inputCurrent.validity.rangeOverflow && !inputCurrent.validity.rangeUnderflow) {
      inputCurrent.classList.remove('form-section__field--error-js');
    }

    inputCurrent.addEventListener('blur', function(event) {
      if (!inputCurrent.value && !inputCurrent.classList.contains('form-section__field--error-js')) {
        inputCurrent.classList.add('form-section__field--error-js');
      }
    })
  }
};

function validateForm(event) {
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      if (!inputs[i].classList.contains('form-section__field--error-js')) {
        inputs[i].classList.add('form-section__field--error-js');
      }
    }
  }
};

buttonSubmit.addEventListener('click', validateForm);
form.addEventListener('input', validateFormLive);
