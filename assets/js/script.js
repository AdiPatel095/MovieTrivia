const button = document.querySelector('#button');
const inputedValue = document.querySelector('input');
const placehoulder = document.querySelector('#flex-username')
let player = {
    username: '',
    score: 0
};

let category = [];

const usernameHandle = function () {


    player.username = inputedValue.value;  

    if (player.username === "")
        {
            document.getElementsByName('place')[0].placeholder='Enter a valid User Name';            
            console.log('try again')

    }
    else{
    player.score = 0;
    category.push(player);

    console.log(player);

    localStorage.setItem('submittedForm', JSON.stringify(player));  
    }
};

button.addEventListener('click', usernameHandle)