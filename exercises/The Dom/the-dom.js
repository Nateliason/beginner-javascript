console.log('it works!');
const p = document.querySelector('p');
const div = document.querySelector('div');
const picDiv = document.querySelector('.pic-div');

const heading = document.querySelector('h2');

const pizza = document.querySelector('#pizza');
console.log(pizza);

const pizzaButton = document.querySelector('#pizza-button');

pizzaButton.addEventListener('click', function () {
  pizza.textContent += '🍕';
});
