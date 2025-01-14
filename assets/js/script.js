const button = document.querySelector('#button');
const inputedValue = document.querySelector('input');
const placehoulder = document.querySelector('#flex-username')

let player = {
    username: '',
    score: 0,
    category: "category"
};

let category = [];

const usernameHandle = function () {
    player.username = inputedValue.value;  

    if (player.username === "")
        {
            document.getElementsByName('place')[0].placeholder='Enter a valid User Name';            
            console.log('Try Again')

    }
    else{
        player.score = 0;
        category.push(player);
        localStorage.setItem('submittedForm', JSON.stringify(player));
        localStorage.setItem('username', player.username)  
        window.location.href = "page-2.html";
    }
};

button.addEventListener('click', usernameHandle)