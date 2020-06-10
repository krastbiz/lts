$(document).ready(function() {
	var navBtn = $(".header-nav__btn-mobile");
	var navBtnActive = $(".header-nav__btn-mobile_active");
	var menu = $(".header-nav");


	navBtn.on('click', function(event) {
		navBtn.toggleClass("header-nav__btn-mobile_active");

		menu.toggleClass('header-nav_active');
	});

	navBtnActive.on('click', function(event) {
		navBtn.toggleClass("header-nav__btn-mobile_active");

		menu.toggleClass('header-nav_active');
	});

	/* popup stuff */
	var overlay = $(".overlay");
	var popupCloseBtn = $(".popup-close");
	var popups = $(".popup");

	var requestBtn = $(".button-request");
	var popupRequest = $(".popup-request");

	var callRequestBtn = $(".button-request__call");
	var popupCallReq = $(".popup-call-request");

	popupCloseBtn.on('click', function(event) {
		overlay.hide();
		popups.hide();
	});

	requestBtn.on('click', function(event) {
		overlay.show();
		popupRequest.show();
	});

	callRequestBtn.on('click', function(event) {
		overlay.show();
		popupCallReq.show();
	});
});