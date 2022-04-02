//array of questions and answers
var currentQuestions = [
  {
    question: "Commonly used data types DO Not Include_______?",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",

    },
    correctAnswer:"alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed with _______?",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "parenthesis",
      d: "square brackets",

    },
    correctAnswer:"paranthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store_______?",
    answers: {
      a: "numbers and strings",
      b: "other arravs",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswer:"all of the above"
  },
  {
      question: "String values must be enclosed within _______ when being assigned to variables.",
      answers: {
          a: "commas",
          b: "curly brackets",
          c: "quotes",
          d: "parenthesis",

      },
      correctAnswer:"quotes"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: {
          a: "JavaScript",
          b: "terminal/bash",
          c: "for loops",
          d: "console.log",
            
      },
      correctAnswer:"console.log"
    },
];

//variables declared 
var score=0;
var count= 75;
var timeLeft = 75;
var currentQuestionsIndex=0

//constants declared
var startPage = document.querySelector("#start-page");
var quizBox = document.querySelector("#quiz-box");
var timeCount = document.querySelector(".timer");
var answerChoices = document.getElementById(".answer-choices");
var startBtn= document.getElementById("#start-btn");

//*event click button starts the quiz*//
function startQuiz (){
  console.log("quiz begins!");
//*starting quiz starts timer*//
var timer = document.querySelector("header .timer");
function countdown() {
  console.log ("timer starts");
  
  var timeInterval = setInterval(function () {
  timer.textContent = timeLeft 
  timeLeft--;
      if (timeLeft===0){
          console.log("Game over");
          timer.textContent = '';
          clearInterval(timeInterval);
      }
  }, 1000);
}
countdown ();

//*when we select a choice, we check for true or false, if true submbit score, if false, subtract time*//



//*load next question*//



//loads first quiz questions on question box from array 
const questionEl = document.querySelector("#question")
questionEl.textContent = currentQuestions[0].question

//make question array display in HTML
const answer1El = document.querySelector("#answer1");
answer1El.textContent = currentQuestions[0].answers["a"]
const answer2El = document.querySelector("#answer2");
answer2El.textContent = currentQuestions[0].answers["b"]
const answer3El = document.querySelector("#answer3");
answer3El.textContent = currentQuestions[0].answers["c"]
const answer4El = document.querySelector("#answer4");
answer4El.textContent = currentQuestions[0].answers["d"] 
};

function displayQuestion(){
//loads quiz questions on question box from array 

const questionEl = document.querySelector("#question")
questionEl.textContent = currentQuestions[currentQuestionsIndex].question

//make question array display in answer choice buttons
const answer1El = document.querySelector("#answer1");
answer1El.textContent = currentQuestions[currentQuestionsIndex].answers["a"]
const answer2El = document.querySelector("#answer2");
answer2El.textContent = currentQuestions[currentQuestionsIndex].answers["b"]
const answer3El = document.querySelector("#answer3");
answer3El.textContent = currentQuestions[currentQuestionsIndex].answers["c"]
const answer4El = document.querySelector("#answer4");
answer4El.textContent = currentQuestions[currentQuestionsIndex].answers["d"]

currentQuestionsIndex++
}

var buttonClicked=$("#button-choices").click(function () {
  console.log("answer button lives!");
  var elementClicked=(EventTarget.buttonClicked)
  checkCorrectAnswer(elementClicked);
  displayQuestion();
})


function checkCorrectAnswer() {
  var trueAnswer=currentQuestions[currentQuestionsIndex].correctAnswer;
  console.log(trueAnswer);
  elementClicked=buttonClicked
  if (elementClicked.textContent === trueAnswer){
      console.log([currentQuestionsIndex.correctAnswer]);
  //add points to total storage/
  console.log("correct");
  }else {
      console.log("wrong");
      timeLeft-15;
  }
  console.log("checked answer");
}


//input your name to save score to local storage 
/*$("#task-form-modal .btn-primary").click(function() {
});*/

//*add event listener to start button*//
$("#start-btn").click(function () {
  console.log("you clicked it!");
  $("#start-page").remove();
  console.log("page stolen");
  document.querySelector("#quiz-box").style.display = "block";
  console.log("returned questions box!");
  startQuiz();
  console.log ("quiz started!");
})