const buyButtons = document.querySelectorAll('button.buy');

function buyButtonClick(event) {
  const button = event.target;
  console.log(button.dataset.price);
}

buyButtons.forEach(function (button) {
  button.addEventListener('click', buyButtonClick);
});
