
function pigLatin() {
  var string = document.getElementById("userInput1").value;
  var vowels = ["a","e","i","o","u"];
  var firstLetter=  string.substring(0,1);
  string = string.slice(1,string.length);
  if (vowels.indexOf(firstLetter) > -1){
    string =  firstLetter + string + "hay";
  }
  else{
    string = string + firstLetter + "ay";
  }
  
  document.getElementById("userOutput1").innerHTML = string;
  
}

