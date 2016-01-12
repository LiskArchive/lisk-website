$(function($){

	$("#countdown").countdown("2016/02/09", function(event) {
		$(this).text(
			event.strftime('%D days, %H hours, %M minutes, %S seconds')
		);
	});

});
