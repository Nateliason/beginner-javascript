console.log('it works!');

const myPara = document.createElement('p');
myPara.textContent = `I am a paragraph!`;
myPara.classList.add('special');

const myImg = document.createElement('img');
myImg.src = 'https://placekitten.com/200/300';
myImg.alt = 'Kitty!';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myPara);
console.log(myImg);
console.log(myDiv);

myDiv.appendChild(myImg);
myDiv.appendChild(myPara);
document.body.appendChild(myDiv);
