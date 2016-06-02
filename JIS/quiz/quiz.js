var userInputs = document.getElementById('quiz1').elements,
    radios = [],
    d = new Date(),
    days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    allQuestions = [
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
        question: "What does 'bae' stand for?",
        choices: ["Before Anyone Else", "It's just short for 'baby'", "p00p", "British Aerospace Engineering"],
        // correctAnswer: 0,
        selectedAnswer: null
      },
      {
        question: "Which number is never equal to itself?",
        choices: ["NaN", "null", "undefined", "Beyonce"],
        correctAnswer: 0,
        selectedAnswer: null
      },
      {
        question: "Which number is never equal to itself?",
        choices: ["NaN", "null", "undefined", "Beyonce"],
        correctAnswer: 0,
        selectedAnswer: null
      }],
    currentQuestion = 0,
    currentAnswer = 0,
    score = 0;
    
//Collect the radio buttons
window.onload = function getRadios(){
  if (radios.length == 0){
    for (var i = 0; i < userInputs.length; i++){
      if (userInputs[i].type == "radio") {
        radios.push(userInputs[i]);
      }
    };
  }
};

//is an individual radio button checked?
function isChecked(obj){
  return obj.checked;
};

// replace choices with the choices of index currenQuestion
// replace question with question at index currentQuestion
function updateQuestion(){
    // clear the error message
   

      checkAnswer();
      currentQuestion +=1;
      // clear the radio buttons
      radios.forEach(function(item){
        item.checked = false;
      });
      fillInTheBlanks();
  
};

function checkAnswer(){
  var ans = allQuestions[currentQuestion].correctAnswer;
  radios.forEach(function(item){
    if (item.checked){
      allQuestions[currentQuestion].selectedAnswer = item.value;
      
    }
  });
  
  if (ans == allQuestions[currentQuestion].selectedAnswer || ans == undefined){
    score +=1;
  }
};



function fillInTheBlanks(){
  document.getElementById("error-message").innerHTML = "";
  if (currentQuestion < allQuestions.length){
      var question = allQuestions[currentQuestion].question;
      var choices = allQuestions[currentQuestion].choices;

      document.getElementById('quizQuestion').innerHTML = question;

      for (var j = 0; j < choices.length; j++){
          document.getElementById("radioLabel" + (j + 1)).innerHTML = choices[j];
      };
      if (currentQuestion == allQuestions.length-1){
        document.getElementById("next").value = "Score Quiz!";
      }
  }
  else{
    document.getElementById('quizQuestion').innerHTML = "Your Score";
    document.getElementById("score").innerHTML = score;
    $('#back, #next, #quiz1').hide();
    // document.getElementById("next").style.display = "none";
    // document.getElementById('quiz1').style.display = "none";
  }


};

// Next button
$(function(){
    $('input#next').on('click', function(){


      document.getElementById("error-message").innerHTML = "";

      // make sure they chose an answer
      if (!radios.some(isChecked)){
        document.getElementById("error-message").innerHTML = "Please choose an answer";
      }
      else{
        $('.panel, input#back').fadeOut('slow', function(){
           updateQuestion();
           $('.panel').fadeIn();
           if (currentQuestion >= 1 &&currentQuestion < allQuestions.length-1){
            $('input#back').fadeIn();
           }  
        });
      }
      
    });
  });

// Back button

// Being called on document ready
$(function(){
    $('input#back').on('click', function(){
      document.getElementById("error-message").innerHTML = "";
      currentQuestion -=1;
      var selAnswer = allQuestions[currentQuestion].selectedAnswer;
      fillInTheBlanks();
      if( selAnswer != null){
        radios[selAnswer].checked = "checked" ;
      } 
    });



  
});

