import '../css/main.css';

const form = document.getElementById('form');
const email = document.getElementById('email');

// ^Show input error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
}
// ^Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// ^email validation
function validateEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else if (email.value === '') {
    showError(email, 'Email is required');
  } else {
    showError(input, 'Please enter a valid email address');
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  validateEmail(email);
});
