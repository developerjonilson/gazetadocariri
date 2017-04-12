// $(document).ready(function(){
//   $('.right.menu.open').on("click",function(e){
//     e.preventDefault();
//     $('.ui.vertical.menu').toggle();
//   });
//
//   $('.ui.dropdown').dropdown();
// });

$(document).ready(function(){
  $('.handle').click(function() {
    $('#nav ul').toggleClass('showing');
  }),

  $('#faleconosco').click(function () {
    $("#content").load("faleconosco.html");
  });
});
