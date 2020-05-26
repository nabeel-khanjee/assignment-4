// $('.pushpin-demo-nav').each(function() {
//   var $this = $(this);
//   var $target = $('#' + $(this).attr('data-target'));
//   $this.pushpin({
//     top: $target.offset().top,
//     bottom: $target.offset().top + $target.outerHeight() - $this.height()
//   });
// });
      
$(document).ready(function(){
  $('.sidenav').sidenav();
});
$(document).ready(function() {  
  $(".slider").slider({ full_width: true });  
});  
$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function(){
  $('.carousel').carousel();
});

$('.dropdown-trigger').dropdown();
        


$(document).ready(function(){
  $('.datepicker').datepicker();
});