$(function($){

	function initialize_map(){
		var mapOptions = {
			center: {lat: 51.2609, lng: 3.2221},
			zoom  : 6,
			scrollwheel: false
		};
		var map = new google.maps.Map(document.getElementById('g_map'),
				mapOptions);

		var positions = [

		];

		var myIcon = new google.maps.MarkerImage('i/countries/map_pin.png', new google.maps.Size(44, 44));

		// Max
		new google.maps.Marker({
			position: new google.maps.LatLng(50.75968, 6.0965247),
			map: map,
			icon: myIcon
		});

		// Olivier
		new google.maps.Marker({
			position: new google.maps.LatLng(52.6966, -1.7729),
			map: map,
			icon: myIcon
		});
	}

	if (typeof google !== 'undefined') {
		google.maps.event.addDomListener(window, 'load', initialize_map);
	}

});
