console.log('it works!');

const item = document.querySelector('.pic-div');
console.log(item.innerHTML);

item.innerHTML = `<h1>New heading!</h1>`;
