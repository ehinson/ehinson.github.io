// // when button clicks
// $(document).ready(function() {
//   $('button').on('click', function() {
//     var tour = $(this).closest('.tour');
//     var discount = tour.data('discount');
//     var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
//     tour.append(message);
//     $(this).remove();
//   });
//   $('#filters').on('click', '.on-sale', function() {
//     $('.highlight').removeClass('highlight');
//     $('.tour').filter('.on-sale').addClass('highlight');
//   });

//   $('#filters').on('click', '.featured', function() {
//     $('.highlight').removeClass('highlight');
//     $('.tour').filter('.featured').addClass('highlight');
//   });
// });

//remove the highlight class immediately after clicking a filter so we are only highlighting the correct elements. Another filter has been added to make things interesting. In both of these filters, remove the highlight class from anything that has it.

// function ready(fn) {
//   if (document.readyState != 'loading'){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }


//use data-attributes
var buttons = document.querySelectorAll(".book");
var tours = document.querySelectorAll(".tour");
var index = 0;

function addTour(obj){
  console.log(obj);
}
// button.addEventListener("click", function(){
  
// });