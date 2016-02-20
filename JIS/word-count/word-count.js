function countWords(){
  var string = document.getElementById("userInput1").value;

  if (Boolean(string) != false){
    count = string.split(" ").length;
    document.getElementById("noWords").innerHTML = "There are <strong>" + count + "</strong> words in: <br><em>"+ string + "</em>";
  }
  else {
    document.getElementById("noWords").innerHTML = "That's not a valid string.";
  }
  
}

// HTML5 FileReader API: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
// http://www.javascripture.com/FileReader
// http://caniuse.com/#search=file

function countFile() {
  var fileInput = document.getElementById("userUpload1").files;
  var fileDisplay = document.getElementById("fileDisplay");
  var file = fileInput[0];
  var fileName = file.name;
  var fr = new FileReader();
  var text = "";
  var count = "";
  //readAsText is asynchronous, so you would need to use the onload callback to see the result.

  fr.onload = function(e) {
    text = e.target.result;
    fileDisplay.innerHTML = text;
    count = text.split(" ").length;
    document.getElementById("fileCount").innerHTML = "There are <strong>" + count + "</strong> words in: <em>"+ fileName + "</em>";
    
   };
  fr.readAsText(file);

  

}