// var userInputs = document.getElementById('quiz1').elements;
// var radios = [];
// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var allQuestions = [
//     {
//       question: "Which is one of the 7 Dwarves?",
//       choices: ["Chesty", "Burpy", "Dopey", "Bubba"],
//       correctAnswer: 0,
//       selectedAnswer: 0
//     },
//     {
//       question: "What Javascript array method removes or inserts items, mutating the original array?",
//       choices: [".slice()", ".splice()", ".thatsNice()", ".plop()"],
//       correctAnswer: 0,
//       selectedAnswer: 0
//     },
//     {
//       question: "What day of the week is it?",
//       choices: ["Chesty", "Burpy", "Katilsday", days[d.getDay()]],
//       correctAnswer: 0,
//       selectedAnswer: 0
//     },
//     {
//       question: "What is Euler's number?",
//       choices: ["foo", 10, "over 9000", "the square root of -1"],
//       correctAnswer: 0,
//       selectedAnswer: 0
//     },
//     {
//       question: "Which number is never equal to itself?",
//       choices: ["NaN", "null", "undefined", "Beyonce"],
//       correctAnswer: 0,
//       selectedAnswer: 0
//     }];

// var currentQuestion = 0;
// var currentAnswer;

// var answerKey = ["Dopey",".splice()",days[d.getDay()],"foo","NaN"];

// var answeredQuestions = [];
// var answeredAnswers = [];
// // var userAnswers = [];
// var score = 0;
// var index = 0;

// var questionsLeft = allQuestions.length;


// //Collect the radio buttons on first load
// window.onload = function getRadios(){
//   document.getElementById("error-message").innerHTML = "";
//   if (radios.length == 0){
//     for (var i = 0; i < userInputs.length; i++){
//       if (userInputs[i].type == "radio") {
//         radios.push(userInputs[i]);
//       }
//     };
//   }
// };

function firstQuestion(){

  document.getElementById("error-message").innerHTML = "";


  if (allQuestions.length > 0){
    
    
    if (radios.some(isChecked)){
        
    
      currentQuestion = allQuestions[index];
    
    allQuestions[0].correctAnswer = firstQuest.correctAnswer;
    var firstAns = answerKey.shift();
    alert(firstAns);



    answeredQuestions.push(firstQuest);
    answeredAnswers.push(firstAns);

    radios.forEach(function(item){

      if (item.checked){

        allQuestions[0].selectedAnswer = radios.indexOf(item);

        if (item.value == firstAns){
          allQuestions[0].correctAnswer += 1;
          score += 1;
          alert(score);
        }

      }
    });
    

    

    
      radios.forEach(function(item){
        item.checked = false;
      });

    }
    else {
      document.getElementById("error-message").innerHTML = "Please choose an answer";
    }



    // var question = allQuestions[0].question;
    // var choices = allQuestions[0].choices;

    // document.getElementById('quizQuestion').innerHTML = question;

    if (allQuestions.length == 1){
      document.getElementById("next").value = "Score Quiz!";
    }

    // for (var j = 0; j < choices.length; j++){
      
    //   document.getElementById("radioLabel" + (j + 1)).innerHTML = choices[j];
    //   document.getElementById("userRadio" + (j + 1)).value = choices[j];
    // };
    



  }
  else {




    document.getElementById('quizQuestion').innerHTML = "Your Score";
    document.getElementById("score").innerHTML = score;
    document.getElementById("next").style.display = "none";
    document.getElementById('quiz1').style.display = "none";

  }

};


// Iterate over radios, set them to unchecked, and recheck the one that is clicked on
function unique(obj){
  for(var i = 0; i < radios.length; i ++){
    radios[i].checked = false;
  }
  obj.checked = true;
};

// Assign a Group name on the form element? 

// function isChecked(obj){
//   return obj.checked;
// }

// function isCorrect(obj){
//   return obj.value;
// }


function totalScore(){

}