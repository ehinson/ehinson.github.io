function countVowels(){
  var string = document.getElementById("userInput1").value;
  var results = document.getElementById("results");
  var noVowels = document.getElementById("noVowels");
  if(Boolean(string)== false){
    alert("That's not a string")
  }
  else{
    var vowels = ["a","e","i","o","u"];
    var aye = 0;
    var eee = 0;
    var eye = 0;
    var ohh = 0;
    var you = 0;
    // y as a vowel depends on syllabification
    // http://www.syllablecount.com/syllable/rules/
    // The letter y is a consonant when it is the first letter 
    // of a syllable that has more than one letter. 
    // If y is anywhere else in the syllable, it is a vowel.
    // var why = 0;
    string = string.split("");
    //string = string.sort();
    for (var i = 0; i < string.length; i++){
          switch(vowels.indexOf(string[i])){
            case 0:
              aye ++;
              break;
            case 1:
              eee ++;
              break;
            case 2:
              eye ++;
              break;
            case 3:
              ohh ++;
              break;
            case 4:
              you ++;
              break;
          }
          
       
    }
    if (aye == 0 && eee == 0 && eye == 0 && ohh == 0 && you == 0){
      
      results.style.display = "none";
      noVowels.innerHTML = "There are no vowels in this string!";
    }
    else {
      results.style.display = "block";
      var sum = aye + eee + eye + ohh + you
      if (sum == 1) {
        noVowels.innerHTML = "There is "+ sum + " vowel in this string!";
      }
      else {
        noVowels.innerHTML = "There are "+ sum + " vowels in this string!";
      }
      
      document.getElementById("userOutput1").innerHTML = aye;
      document.getElementById("userOutput2").innerHTML = eee;
      document.getElementById("userOutput3").innerHTML = eye;
      document.getElementById("userOutput4").innerHTML = ohh;
      document.getElementById("userOutput5").innerHTML = you;
      var aye = undefined;
      var eee = undefined;
      var eye = undefined;
      var ohh = undefined;
      var you = undefined;
    }
    

  
  }
  
}


// http://www.w3schools.com/jsref/jsref_match.asp