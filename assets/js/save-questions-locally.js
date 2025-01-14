const marvelTrivia = [
    {
      indexQuestion: 0,
      question: "Who played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
      answers: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
      correctAnswer: 2
    },
    {
      indexQuestion: 1,
      question: "In which Marvel movie did the character Black Panther make his first appearance?",
      answers: ["Avengers: Age of Ultron", "Black Panther", "Captain America: Civil War", "Spider-Man: Homecoming"],
      correctAnswer: 2
    },
    {
      indexQuestion: 2,
      question: "Which Marvel character is known for saying 'I am Groot'?",
      answers: ["Rocket", "Groot", "Star-Lord", "Drax"],
      correctAnswer: 1
    },
    {
      indexQuestion: 3,
      question: "What is the name of the fictional city where Black Panther rules?",
      answers: ["Sokovia", "Wakanda", "Asgard", "Atlantis"],
      correctAnswer: 1
    },
    {
      indexQuestion: 4,
      question: "What is the name of Thor's hammer?",
      answers: ["Stormbreaker", "Gungnir", "Mjolnir", "Aether"],
      correctAnswer: 2
    },
    {
      indexQuestion: 5,
      question: "In Avengers: Endgame, which character says the line, 'I love you 3000'?",
      answers: ["Tony Stark", "Pepper Potts", "Morgan Stark", "Peter Parker"],
      correctAnswer: 2
    },
    {
      indexQuestion: 6,
      question: "Which Marvel villain is also known as the Mad Titan?",
      answers: ["Loki", "Ultron", "Thanos", "Hela"],
      correctAnswer: 2
    },
    {
      indexQuestion: 7,
      question: "In Guardians of the Galaxy, which song plays during the opening scene where Peter Quill dances?",
      answers: [
        "Hooked on a Feeling by Blue Swede",
        "Come and Get Your Love by Redbone",
        "Cherry Bomb by The Runaways",
        "Ain't No Mountain High Enough by Marvin Gaye & Tammi Terrell"
      ],
      correctAnswer: 1
    },
    {
      indexQuestion: 8,
      question: "What is the real name of the character who becomes Captain Marvel?",
      answers: ["Natasha Romanoff", "Carol Danvers", "Monica Rambeau", "Peggy Carter"],
      correctAnswer: 1
    },
    {
      indexQuestion: 9,
      question: "Who was the first character to join the Avengers in the MCU?",
      answers: ["Thor", "Iron Man", "Captain America", "Hulk"],
      correctAnswer: 1
    }
  ];
  
redirectUrl = 'page-3.html'

if(localStorage.getItem('marvelTrivia')){
    location.assign(redirectUrl)
}
else{
    localStorage.setItem('marvelTrivia', JSON.stringify(marvelTrivia))
    location.assign(redirectUrl)
}