$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  $('#home').click(function(event) {
    event.preventDefault();
    newLocation = $('#home').attr("href");
    $('body').fadeOut(1000, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }
});



