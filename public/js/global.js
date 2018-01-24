var html_var,
		body_var,
		doc_var,
		nav_container,
		hero_block;

var browserWindow, global_window_Height;

$(function($){

	html_var = $('html');
	body_var = $('body');
	doc_var = $(document);
	nav_container = $(".header");
	hero_block = $('.hero_block');

	browserWindow = $(window);
	global_window_Height = browserWindow.height();

	promptCookieConsent();

	if($('.scrollTo').length){
		$('.scrollTo').on('click', function(){
			var firedEl = $(this), target = $(firedEl.attr('href'));

			if(target.length){
				scrollDoc(target.offset().top, 1000);
			}

			return false;
		});
	}

	$('.mobMenuBtn').on('click', function(){
		body_var.toggleClass('open_menu');
		return false;
	});

	$(document).click(function(e){
		body_var.removeClass('open_menu open_aside');
	});

	$("#oldVersionsBtn").on('click', function () {
		$('html, body').animate({
			scrollTop: $("#oldVersions").offset().top - 70
		}, 2000);

		return false;
	});

	$("#becomeADelegateBtn").on('click', function() {
		$('html, body').animate({
			scrollTop: $("#becomeADelegate").offset().top - 70
		}, 2000);

		return false;
	});

	$(".footer_menu_block").click(function (e) {
		var menuItem = $(this);
		menuItem.toggleClass("open_submenu");
	});

	all_dialog_close();

	browserWindow.on('scroll', function(){
		scroll_f();
	}).on('resize', function(){
		resize_f();
	}).on('load', function(){
		resize_f();
	});

	// Launch countdown
	if ($('#countdown').length) {
		$('#countdown').countdown("2016/05/24 20:00", function(event) {
			$(this).html(event.strftime('%-H hour%!H, %M minute%!M, %S second%!S'));
		});
	}
});

function scrollDoc(pos, speed, callback){
	$('html,body').animate({'scrollTop': pos}, speed);

	if(typeof(callback) == 'function'){
		callback();
	}
}

function scroll_f(){
	if(doc_var.scrollTop() < nav_container.outerHeight() * 2){
		nav_container.removeClass("fixed");
	} else{
		nav_container.addClass("fixed");
	}

	if(doc_var.scrollTop() > hero_block.outerHeight() - nav_container.outerHeight()){
		nav_container.addClass("sticky").removeClass("sticky_fixed");
	} else{
		nav_container.removeClass("sticky").addClass("sticky_fixed");
	}

	if(doc_var.scrollTop() <= nav_container.outerHeight()){
		nav_container.removeClass("sticky_fixed");
	}
}

function resize_f(){
	$('.heightChecker').each(function(){
		var firedEl = $(this);

		firedEl.removeClass('hide');

		if(firedEl.outerHeight(false) - firedEl.css('padding-bottom').replace('px', '') * 1 - 1 * firedEl.css('padding-top').replace('px', '') > firedEl.find('.heightElement').height()){
			firedEl.addClass('hide');
		}

	});

	body_var.toggleClass('collapsed_menu', browserWindow.width() < 1200);
}

function all_dialog_close(){
	body_var.on('click', '.ui-widget-overlay', all_dialog_close_gl);
}

function all_dialog_close_gl(){
	$(".ui-dialog-content").each(function(){
		var $this = $(this);
		if(!$this.parent().hasClass('always_open')){
			$this.dialog("close");
		}
	});
}

function promptCookieConsent() {
	if (window.cookieconsent && typeof window.cookieconsent.initialise === 'function') {
		window.cookieconsent.initialise({
			"palette": {
				"popup": {
					"background": "#000"
				},
				"button": {
					"background": "#f57c00",
					"text": "#fff"
				}
			}
		});
	}
}
