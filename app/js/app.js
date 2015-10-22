$(function () {
  menuToggle ();
  imageSider ();
});

// Toggle menu with narrow viewport
function menuToggle () {
  var $menuToggle = $('#menu-toggle');

  $menuToggle.on('click', function() {
    var $menu 		  = $('.menu'),
        $iconMenu = $('.icon-menu');

    $menu.toggleClass('menu-open');
    $('.overlay, body').toggleClass('is-open');
    $iconMenu.toggleClass('icon-cancel');
    return false;
  });
};

// Sliding images
function imageSider () {
	Slider = $('#slider').Swipe({
		auto: 3000,
		continuous: true
	}).data('Swipe');

	Slider2 = $('#slider2').Swipe({
		auto: 4500,
		continuous: true
	}).data('Swipe');
};