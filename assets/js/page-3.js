const questionElement = document.getElementById('questions')
const answer1Element = document.getElementById('answer1')
const answer2Element = document.getElementById('answer2')
const answer3Element = document.getElementById('answer3')
const answer4Element = document.getElementById('answer4')
let score = 0
let endMarker = false
const questionArray = JSON.parse(localStorage.getItem('marvelTrivia'))
let usedQuestionIndex = []


const getRandomQuestion = function (questionArrayPassed) {
    if (usedQuestionIndex.length === questionArrayPassed.length) {
      console.log("All questions have been used.");
      return null;
    }
  
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questionArrayPassed.length);
    } while (usedQuestionIndex.includes(randomIndex));
  
    usedQuestionIndex.push(randomIndex);
  
    return questionArrayPassed[randomIndex];
}

let currentQuestion = getRandomQuestion(questionArray)
const displayQuestion = function(){
    currentQuestion = getRandomQuestion(questionArray)

    if(!currentQuestion){
        let localScoresObject = JSON.parse(localStorage.getItem('scores'))
        let player = {
            username : localStorage.getItem('username'),
            score: score,
            category: "Marvel"
        }
        localScoresObject.push(player)
        localStorage.setItem('scores', JSON.stringify(localScoresObject))
        localStorage.setItem('finalScore', JSON.stringify(score))
        location.assign('page-4.html')
    }

    questionElement.innerHTML = currentQuestion.question
    answer1Element.innerHTML = currentQuestion.answers[0]
    answer2Element.innerHTML = currentQuestion.answers[1]
    answer3Element.innerHTML = currentQuestion.answers[2]
    answer4Element.innerHTML = currentQuestion.answers[3]

}

const handleAnswerClick = function(selectedIndex) {
    if (selectedIndex === currentQuestion.correctAnswer) {
      score += 10;
    }
    displayQuestion();
}

answer1Element.addEventListener('click', () => handleAnswerClick(0));
answer2Element.addEventListener('click', () => handleAnswerClick(1));
answer3Element.addEventListener('click', () => handleAnswerClick(2));
answer4Element.addEventListener('click', () => handleAnswerClick(3));


//displayQuestion();