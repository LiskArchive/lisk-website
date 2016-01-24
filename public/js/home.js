var stepSection,
    stepSlider;

$(function($){
	$("#investNowBtn").on('click', function () {
		$('html, body').animate({
			scrollTop: $("#investNow").offset().top - 70
		}, 2000);

		return false;
	});

	stepSection = $(".stepSection");

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

  $('.stepBtn').on('click', function(){
		var firedEl = $(this), ind = firedEl.index();
		stepSlider.slick('slickGoTo', parseInt(ind));
		return false;
	});

	$('.discoverBtn').on ('click', function () {
		scrollDoc(browserWindow.height() - nav_container.height(), 800);

		return false;
	});

	hljs.configure({
		tabReplace : '    ',
		classPrefix: ''
	});

	// hljs.initHighlightingOnLoad();

	$('.codeHighlight').each(function(i, block){
		hljs.highlightBlock(block);
	});

});
