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

	$("code").parent().append("<pre></pre>");

	$("code").each(function () {
		$(this).appendTo($(this).parent().find("pre"));
		var text = $(this).text();
		var strs = text.split('\n');
		var lang = syntax[strs[0]];
		if (!lang) {
			lang = "markup";
		}

		$(this).addClass("language-" + lang);
		strs.splice(0, 1);
		text = strs.join('\n');
		$(this).text(text);
	});
});