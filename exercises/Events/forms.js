const nat = document.querySelector('.nat');

nat.addEventListener('click', function (event) {
  const preventLeave = confirm('Do you wish to proceed?');

  if (!preventLeave) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

console.log(signupForm);

signupForm.addEventListener('submit', function (event) {
  console.log(event.currentTarget.name.value);
  event.preventDefault();
});
