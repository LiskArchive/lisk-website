var menuHolder;

var syntax = {
	"sh": "bash",
	"js": "javascript"
}

$(function($){

	menuHolder = $('.menuHolder');

	$('.menuToggleBtn').on('click', function(){
		menuHolder.find('.active').removeClass('active');

		$(this).closest('.aside_m_item').toggleClass('menu_open active');

		//return false;
	});

	$('.asideHoverBtn').on('click', function(){
		body_var.toggleClass('open_aside');
		return false;
	});
});
