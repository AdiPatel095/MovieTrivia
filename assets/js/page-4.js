let score = 0;
const circleButton = document.querySelector("#restartCircle")
const squareButton = document.querySelector("#restartSquare")
const circleScoreHolder = document.querySelector('#CircleFinalScore')
const squareScoreHolder = document.querySelector('#SquareFinalScore')
const username= ""
const finalScore=""
const category=""

const scoreObject = {
    username: username,
    score: score,
    category: category
}

let scores = []

const readScores = function(){
    scores = JSON.parse(localStorage.getItem('scores')) || [];
    let category1Scores = []
    let category2Scores = []
    let category3Scores = []

    scores.forEach(element => {
        switch (element.category) {
          case "Marvel":
            category1Scores.push(element);
            break;
          case "History":
            category2Scores.push(element);
            break;
          case "Production":
            category3Scores.push(element);
            break;
        }
      });
    let category1Updated = rearrangeScores(category1Scores)
    let category2Updated = rearrangeScores(category2Scores)
    let category3Updated = rearrangeScores(category3Scores)

    updateCategoryTable(category1Updated, 1)
    updateCategoryTable(category2Updated, 2)
    updateCategoryTable(category3Updated, 3)

}

const updateCategoryTable = function(categoryScores, categoryIdPrefix){
    categoryScores.forEach((item, index) => {
        const listItemUsernameId = `cat${categoryIdPrefix}_1_${index +1}`;
        const listUsernameItem = document.getElementById(listItemUsernameId);

        const listItemScoreId = `cat${categoryIdPrefix}_2_${index +1}`;
        const listScoreItem = document.getElementById(listItemScoreId);
        
        document.getElementById(listItemUsernameId).textContent = item.username
        document.getElementById(listItemScoreId).textContent = item.score
    });
}

const rearrangeScores = function(array){
    array.sort((a, b) => b.score - a.score)
    array.slice(0,5)
    return array;
}



const restartBtn = function(){
    location.assign('index.html')
}

circleButton.addEventListener('click', restartBtn)
squareButton.addEventListener('click', restartBtn)
circleScoreHolder.textContent = score;
squareScoreHolder.textContent = score;
readScores()


