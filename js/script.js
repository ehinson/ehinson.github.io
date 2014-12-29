$(document).ready(function(){
  $("#p1").mouseenter(function(){
    $("#p2").css("display", "inline-block");
  });
  $("#p1").mouseleave(function(){
    $("#p2").css("display", "none");
  });
});