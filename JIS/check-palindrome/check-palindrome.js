function checkPalindrome(){
  string = document.getElementById("userInput1").value.toLowerCase();
  var reverse = string.split("").reverse().join("");
  if (string === reverse){
    document.getElementById("userOutput1").innerHTML = string.charAt(0).toUpperCase() + string.slice(1) + " is a palindrome! Awesome!";
  
  }
  else{
    document.getElementById("userOutput1").innerHTML = string.charAt(0).toUpperCase() + string.slice(1) + " is not a palindrome. Bummer.";
  }
}