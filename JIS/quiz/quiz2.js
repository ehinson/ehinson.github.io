var userInputs = document.getElementById('quiz1').elements;
var radios = [];
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var allQuestions = [
    {
      question: "Which is one of the 7 Dwarves?",
      choices: ["Chesty", "Burpy", "Dopey", "Bubba"],
      correctAnswer: 2,
      selectedAnswer: null
    },
    {
      question: "What Javascript array method removes or inserts items, mutating the original array?",
      choices: [".slice()", ".splice()", ".thatsNice()", ".plop()"],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      question: "What day of the week is it?",
      choices: ["Chesty", "Burpy", "Katilsday", days[d.getDay()]],
      correctAnswer: 3,
      selectedAnswer: null
    },
    {
      question: "What is Euler's number?",
      choices: ["foo", 10, "over 9000", "the square root of -1"],
      correctAnswer: 0,
      selectedAnswer: null
    },
    {
      question: "Which number is never equal to itself?",
      choices: ["NaN", "null", "undefined", "Beyonce"],
      correctAnswer: 0,
      selectedAnswer: null
    }];

var currentQuestion = 0;
var currentAnswer = 0;

var score = 0;

//Collect the radio buttons on first load
window.onload = function getRadios(){
  document.getElementById("error-message").innerHTML = "";
  if (radios.length == 0){
    for (var i = 0; i < userInputs.length; i++){
      if (userInputs[i].type == "radio") {
        radios.push(userInputs[i]);
      }
    };
  }
};

function init(){
  
  updateQuestion();

}


function updateQuestion(){
  
  var question = allQuestions[currentQuestion].question;
  var choices = allQuestions[currentQuestion].choices;

  document.getElementById('quizQuestion').innerHTML = question;

  for (var j = 0; j < choices.length; j++){
      document.getElementById("radioLabel" + (j + 1)).innerHTML = choices[j];
  };

  if (validate == true) {

  }
  checkAnswer();
  

}

// Assign a Group name on the form element? 

function isChecked(obj){
  return obj.checked;
}

function isCorrect(obj){
  return obj.value;
}

function checkAnswer(){
  if (allQuestions[currentQuestion].selectedAnswer == null){
    
    document.getElementById("error-message").innerHTML = "Please choose an answer";

  }
  else {
    
    var ans = allQuestions[currentQuestion].correctAnswer;

    radios.forEach(function(item){
      if (item.checked){
        allQuestions[currentQuestion].selectedAnswer = item.value;
      }
    });
    
    if (ans == allQuestions[currentQuestion].selectedAnswer){
      score +=1;
      alert(score);
    }

  }

  


}

function nextQuestion(){
  currentQuestion += 1;
}

function totalScore(){
  return score;

}

function validate(){
  if (allQuestions[currentQuestion].selectedAnswer == null){
    
    document.getElementById("error-message").innerHTML = "Please choose an answer";

  }
  else {
    
    return true;

  }

}