// function inchesToCm(inches) {
//     const cm = inches * 2.54;
//     return cm;
//   }

const inchesToCm = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

const clicked = () => console.log('it clicked!');

const button = document.querySelector('#clickme');

button.addEventListener('click', clicked);
