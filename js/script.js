 $(window).scroll(function(){
    if ($(this).scrollTop() > 600) {
      $('.subhead h2').addClass("affix");
      
    }
    else{
      $('.subhead h2').removeClass("affix");
    }
  });

 $(window).scroll(function(){
    if ($(this).scrollTop() > 750) {
      $('.subhead').addClass("fix-div");

    }
    else{
      $('.subhead').removeClass("fix-div");
    }
 });


$(document).ready(function(){
  $("#p1").mouseenter(function(){
    $("#p2").css("display", "inline-block");
  });
  $("#p1").mouseleave(function(){
    $("#p2").css("display", "none");
  });

});





