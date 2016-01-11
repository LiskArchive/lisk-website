var dataSource = '{"1980": 0, "1985": 50, "1990": 8, "1995": 80, "2000": 1, "2005": 15, "2005": 31, "2010": 15, "2015": 0}';

$(window).on('load', function($){

	var paper = Raphael(10, 10, 800, 600);
	paper.defineLinearGradient("grad1", [{
		"id"    : "s1",
		"offset": "0",
		"style" : "stop-color:#1e88e5;stop-opacity:1;"
	},
		{
			"id"    : "s2",
			"offset": "1",
			"style" : "stop-color:#7cb342;stop-opacity:1;"
		}]);

	path.strokeLinearGradient("grad1", 4);
	
	Raphael(function(){
		var r = Raphael("graph_1", 620, 250),
				e = [],
				clr = [],
				months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				values = [],
				now = 0,
				month = r.text(310, 27, months[now]).attr({
					fill  : "#fff",
					stroke: "none",
					"font": '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif'
				}),
				//rightc = r.circle(364, 27, 10).attr({fill: "#fff", stroke: "none"}),
				//right = r.path("M360,22l10,5 -10,5z").attr({fill: "#000"}),
				//leftc = r.circle(256, 27, 10).attr({fill: "#fff", stroke: "none"}),
				//left = r.path("M260,22l-10,5 10,5z").attr({fill: "#000"}),
				c = r.path("M0,0").attr({fill: "none", "stroke-width": 4, "stroke-linecap": "round"}),
				bg = r.path("M0,0").attr({stroke: "none", opacity: .3}),
				dotsy = [];

		function randomPath(length, j){
			var path = "",
					x = 10,
					y = 0;
			dotsy[j] = dotsy[j] || [];
			for(var i = 0; i < length; i++){
				dotsy[j][i] = Math.round(Math.random() * 200);
				// if (i) {
				//     path += "C" + [x + 10, y, (x += 20) - 10, (y = 240 - dotsy[j][i]), x, y];
				// } else {
				//     path += "M" + [10, (y = 240 - dotsy[j][i])];
				// }
				if(i){
					x += 20;
					y = 240 - dotsy[j][i];
					path += "," + [x, y];
				} else{
					path += "M" + [10, (y = 240 - dotsy[j][i])] + "R";
				}
			}
			return path;
		}

		for(var i = 0; i < 12; i++){
			values[i] = randomPath(30, i);
			clr[i] = Raphael.getColor(1);
		}
		c.attr({path: values[0], stroke: clr[0]});
		bg.attr({path: values[0] + "L590,250 10,250z", fill: clr[0]});
		var animation = function(){
			var time = 500;
			if(now == 12){
				now = 0;
			}
			if(now == -1){
				now = 11;
			}
			var anim = Raphael.animation({path: values[now], stroke: clr[now]}, time, "<>");
			c.animate(anim);
			bg.animateWith(c, anim, {path: values[now] + "L590,250 10,250z", fill: clr[now]}, time, "<>");
			month.attr({text: months[now]});
		};
	
	});


});

/**     raphael    ***/

(function(){
	if(Raphael.vml){
		Raphael.el.strokeLinearGradient = function(){
			// not supporting VML yet
			return this; // maintain chainability
		};
	} else{
		var setAttr = function(el, attr){
			var key;
			if(attr){
				for(key in attr){
					if(attr.hasOwnProperty(key)){
						el.setAttribute(key, attr[key]);
					}
				}
			} else{
				return document.createElementNS("http://www.w3.org/2000/svg", el);
			}

			return null;
		};

		var defLinearGrad = function(defId, stops){
			var def = setAttr("linearGradient");
			var i, l;
			def.id = defId;

			for(i = 0, l = stops.length; i < l; i += 1){
				var stopEle = setAttr("stop");
				var stop = stops[i];
				setAttr(stopEle, stop);

				def.appendChild(stopEle);
			}

			return def;
		};

		Raphael.el.strokeLinearGradient = function(defId, width, stops){

			if(stops){
				this.paper.defs.appendChild(defLinearGrad(defId, stops));
			}

			setAttr(this.node, {
				"stroke"      : "url(#" + defId + ")",
				"stroke-width": width
			});

			return this; // maintain chainability
		};

		Raphael.st.strokeLinearGradient = function(defId, width, stops){
			return this.forEach(function(el){
				el.strokeLinearGradient(defId, width, stops);
			});
		};

		Raphael.fn.defineLinearGradient = function(defId, stops){

			this.defs.appendChild(defLinearGrad(defId, stops));
		};
	}
}());



