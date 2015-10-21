$(function () {
  menuToggle ();
});


function menuToggle () {
  var $menuToggle = $('#menu-toggle');

  $menuToggle.on('click', function() {
    var $menu = $('.menu');
    $menu.toggleClass('menu-open');
    return false;
  });
};