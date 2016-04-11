var color = "blue";

function getColor(){
  return color;
}

alert(getColor());

var food = "cake";

/* function getFood(){
  var food = "pie";
  return food;
  
} */

function getFood(){
  var food = "pie";
  return window.food;
  
}

alert(getFood());

// faster to reference local variables than global variables