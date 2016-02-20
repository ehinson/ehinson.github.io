
function stringReverse(){
  var text = document.getElementById("userInput1").value;
  text  = text.split("").reverse().join("");
  document.getElementById("userOutput1").innerHTML = text;
}