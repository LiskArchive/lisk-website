$(function($){

	$("#oldVersionsBtn").on('click', function () {
		$('html, body').animate({
			scrollTop: $("#oldVersions").offset().top - 70
		}, 2000);

		return false;
	});

});
