const button = document.querySelector('#button');
const inputedValue = document.querySelector('input');

let player = {
    username: '',
    score: 0
};

let category = [];

const usernameHandle = function () {
    player.username = inputedValue.value;  
    player.score = 0;
    category.push(player);

    console.log(player);
    localStorage.setItem('submittedForm', JSON.stringify(player));  
};

button.addEventListener('click', usernameHandle)