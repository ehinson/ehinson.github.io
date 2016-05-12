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