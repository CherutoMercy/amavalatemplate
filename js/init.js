(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

  $(document).ready(function(){
    $('.collapsible').collapsible();
    $(".dropdown-button").dropdown();
    $('.slider').slider();
    $('.modal').modal();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
  });