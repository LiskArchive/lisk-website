var stepSection,
    stepSlider;

$(function($) {
	var getICOCounters = function () {
		$.getJSON("http://localhost:3000/exchanges.json")
			.done(function(json) {
				console.log(json);

				var totalBTC = (parseFloat(json.bitcoin) + parseFloat(json.shapeshift)).toFixed(0),
						totalXCR = (parseFloat(json.crypti) / 100000).toFixed(0),
						totalPRT = (parseFloat(json.participants));

				$('#btc-counter').text(totalBTC + ' BTC');
				$('#xcr-counter').text(totalXCR + 'M XCR');
				$('#participants-counter').text(totalPRT);
			})
			.fail(function(jqxhr, textStatus, error) {
				console.error('Failed to retrieve ICO counters');

				$('#btc-counter').text('~ BTC');
				$('#xcr-counter').text('~ XCR');
				$('#participants-counter').text('~');
		});
	}

	getICOCounters();
	setInterval(getICOCounters, 60000);

	$("#investNowBtn").on('click', function() {
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

	stepSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		stepSection.attr('data-step', nextSlide + 1);
	});

  $('.stepBtn').on('click', function() {
		var firedEl = $(this), ind = firedEl.index();
		stepSlider.slick('slickGoTo', parseInt(ind));
		return false;
	});

	$('.discoverBtn').on ('click', function() {
		scrollDoc(browserWindow.height() - nav_container.height(), 800);

		return false;
	});

});
