var menuHolder;

$(function($){

	menuHolder = $('.menuHolder');

	$('.menuToggleBtn').on('click', function(){
		menuHolder.find('.active').removeClass('active');
		$(this).closest('.aside_m_item').toggleClass('menu_open active');
	});

	$('.asideHoverBtn').on('click', function(){
		body_var.toggleClass('open_aside');
		return false;
	});

});
