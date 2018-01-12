var stepSection,
    stepSlider;

$(function($) {
	var addCommas = function(nStr) {
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
		  x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}

	function createCookie(name, value, days) {
		if (days) {
				var now = new Date();
				now.setTime(now.getTime() + 24 * days * 60 * 60 * 1e3);
				var expiry = '; expires=' + now.toGMTString();
		} else {
			var expiry = '';
		}
		document.cookie = name + "=" + value + expiry + '; path=/';
	}

	function readCookie(name) {
		var value = new RegExp(name + "=([^;]+)");
		var parsedValue = value.exec(document.cookie);
		return null !== parsedValue ? decodeURIComponent(parsedValue[1]) : null
	}

	var getICOCounters = function () {
		$.getJSON("https://ico.lisk.io/exchanges.json")
			.done(function(json) {
				console.log(json);

				var totalBTC = (parseFloat(json.bitcoin) + parseFloat(json.shapeshift)).toFixed(0),
						totalXCR = addCommas(parseFloat(json.crypti.toFixed(0))),
						totalPRT = (parseFloat(json.participants));

				$('#btc-counter').text(totalBTC + ' BTC');
				$('#xcr-counter').text(totalXCR + ' XCR');
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
	
	$("#readMoreBtn").on('click', function() {
		$('html, body').animate({
			scrollTop: $("#readMore").offset().top - 70
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
	var popupName = 'relaunch-popup';

	var popupFadeIn = function (el) {
		el.removeClass('hidden');
	};

	var popupFadeOut = function (el) {
		el.addClass('hidden');
	};

	var popupShow = function () {
		var popup = $('.' + popupName);
		if (readCookie(popupName) !== 'seen') {
			popupFadeIn($('.' + popupName));
			createCookie(popupName, 'opened', 3);
		}
	};

	var popupHide = function () {
		popupFadeOut($('.' + popupName));
		createCookie(popupName, 'seen', 3);
	};

	$('.relaunch-popup .close').on('click', popupHide);
	$('.relaunch-popup .see').on('click', popupHide);

	$('body > main').mouseleave(popupShow);
});
