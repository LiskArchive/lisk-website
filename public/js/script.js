var html_var,
		body_var,
		doc_var,
		global_window_Height,
		reviewSlider,
		stepSlider,
		stepSection,
		popupOrderItem,
		controlPanelBtn,
		popupBtn,
		hero_block,
		nav_container,
		browserWindow,
		$completed_orders_form,
		$send_confirmation,
		$send_to_client,
		$cart_orders_form,
		$postpone_orders_form,
		$contacts_form;

$(function($){

	html_var = $('html');
	body_var = $('body');
	doc_var = $(document);
	nav_container = $(".header");
	stepSection = $(".stepSection");
	hero_block = $('.hero_block');
	browserWindow = $(window);
	global_window_Height = browserWindow.height();

	if($('.scrollTo').length){

		$('.scrollTo').on('click', function(){
			var firedEl = $(this), target = $(firedEl.attr('href'));

			if(target.length){
				scrollDoc(target.offset().top, 1000);
			}

			return false;
		});

	}

	reviewSlider = $('.reviewSlider').slick({
		arrows       : false,
		dots         : true,
		autoplay     : false,
		autoplaySpeed: 2000,
		infinite     : false
	});

	stepSlider = $('.stepSlider').slick({
		arrows       : false,
		autoplay     : false,
		autoplaySpeed: 2000,
		infinite     : false
	});

	$('.dappSlider').slick({
		prevArrow    : '.dapp_slider_holder .slider_prev',
		nextArrow    : '.dapp_slider_holder .slider_next',
		autoplay     : true,
		arrows       : true,
		autoplaySpeed: 20000,
		infinite     : false
	});

	stepSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		stepSection.attr('data-step', nextSlide + 1);
	});

	$('.discoverBtn').on ('click', function () {
		scrollDoc(browserWindow.height() - nav_container.height(), 800);

		return false;
	});

	$('.stepBtn').on('click', function(){
		var firedEl = $(this), ind = firedEl.index();
		stepSlider.slick('slickGoTo', parseInt(ind));
		return false;
	});

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

	$("#investBitcoinBtn").on('click', function () {
		$('html, body').animate({
			scrollTop: $("#investBitcoin").offset().top - 70
		}, 2000);

		return false;
	});

	$("#investCryptiBtn").on('click', function () {
		$('html, body').animate({
			scrollTop: $("#investCrypti").offset().top - 70
		}, 2000);

		return false;
	});

	$("#investEthereumBtn").on('click', function () {
		$('html, body').animate({
			scrollTop: $("#InvestEthereum").offset().top - 70
		}, 2000);

		return false;
	});

	$("#investNowBtn").on('click', function () {
	$('html, body').animate({
		scrollTop: $("#investNow").offset().top - 70
	}, 2000);

	return false;
	});

	$(".footer_menu_block").click(function (e) {
		var menuItem = $(this);
		menuItem.toggleClass("open_submenu");
	});

	hljs.configure({
		tabReplace : '    ',
		classPrefix: ''
	});

	// hljs.initHighlightingOnLoad();

	$('.codeHighlight').each(function(i, block){
		hljs.highlightBlock(block);
	});

	all_dialog_close();

	browserWindow.on('scroll', function(){
		scroll_f();
	}).on('resize', function(){
		resize_f();
	}).on('load', function(){
		resize_f();
	});

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

	body_var.toggleClass('collapsed_menu', browserWindow.width() < 1060);

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
