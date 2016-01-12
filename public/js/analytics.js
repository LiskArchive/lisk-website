var gridHasBeenDrawn = false;
Raphael.fn.drawGrid = function(x, y, w, h, wv, hv, color){
	color = color || "#cacaca";
	var path = ["M", Math.round(x) + .5, Math.round(y) + .5, "L", Math.round(x + w) + .5, Math.round(y) + .5, Math.round(x + w) + .5, Math.round(y + h) + .5, Math.round(x) + .5, Math.round(y + h) + .5, Math.round(x) + .5, Math.round(y) + .5],
			rowHeight = h / hv,
			columnWidth = w / wv;
	for(var i = 1; i < hv; i++){
		path = path.concat(["M", Math.round(x) + .5, Math.round(y + i * rowHeight) + .5, "H", Math.round(x + w) + .5]);
	}
	for(i = 1; i < wv; i++){
		path = path.concat(["M", Math.round(x + i * columnWidth) + .5, Math.round(y) + .5, "V", Math.round(y + h) + .5]);
	}
	return this.path(path.join(",")).attr({
		stroke: color
	});
};

function getAnchors(p1x, p1y, p2x, p2y, p3x, p3y, smoothing){
	if(smoothing == void 0) smoothing = true;

	var l1 = (p2x - p1x) / 2,
			l2 = (p3x - p2x) / 2,
			a = Math.atan((p2x - p1x) / Math.abs(p2y - p1y)),
			b = Math.atan((p3x - p2x) / Math.abs(p2y - p3y));
	a = p1y < p2y ? Math.PI - a : a;
	b = p3y < p2y ? Math.PI - b : b;
	var alpha = smoothing ? Math.PI / 2 - ((a + b) % (Math.PI * 2)) / 2 : 0,
			dx1 = l1 * Math.sin(alpha + a),
			dy1 = l1 * Math.cos(alpha + a),
			dx2 = l2 * Math.sin(alpha + b),
			dy2 = l2 * Math.cos(alpha + b);
	return {
		x1: p2x - dx1,
		y1: p2y + dy1,
		x2: p2x + dx2,
		y2: p2y + dy2
	};
}

function drawLine(conf){

	var holder = !conf.holder ? '' : conf.holder,
			data_holder = !conf.data_holder ? '' : conf.data_holder,
			mastercolor = !conf.mastercolor ? '#01A8F0' : conf.mastercolor,
			spewidth = Math.max(Math.min($(window).width() - 20, (!conf.spewidth ? 500 : conf.spewidth)), 300),
			showarea = !conf.showarea ? false : conf.showarea,
			linecolor1 = !conf.linecolor1 ? '#000000' : conf.linecolor1,
			linecolor2 = !conf.linecolor2 ? conf.mastercolor : conf.linecolor2,
			mousecoords = !conf.mousecoords ? 'none' : conf.mousecoords,
			nodot = !conf.nodot ? false : conf.nodot,
			nogrid = !conf.nogrid ? false : conf.nogrid,
			gridcolor = !conf.gridcolor ? '#eeeeee' : conf.gridcolor,
			stroke_width = conf.stroke_width == void 0 ? 4 : conf.stroke_width,
			data_offset = conf.data_offset == void 0 ? 0 : conf.data_offset,
			cur_pos = conf.cur_pos == void 0 ? 0 : conf.cur_pos,
			max_items = conf.max_items == void 0 ? 0 : conf.max_items,
			show_items = conf.showItems == void 0 ? 0 : conf.showItems,
			smoothing = conf.smoothing == void 0 ? true : conf.smoothing,
			dotcolor = !conf.dotcolor ? '#ffffff' : conf.dotcolor;

	var datatotal = [],
			labels = conf.data_source.labels,
			data = conf.data_source.data,
			lines1 = conf.data_source.lines1,
			lines2 = conf.data_source.lines2,
			lines3 = conf.data_source.lines3;

	if(!$(data_holder)){
		return false;
	}

	var width = spewidth,
			height = 350,
			leftgutter = 0,
			bottomgutter = 30,
			topgutter = 50,
			colorhue = .6 || Math.random(),
			color = mastercolor,
			r = holder,
			txt = {
				font         : '12px Helvetica, Arial',
				fill         : "#777",
				"text-anchor": "start"
			},
			txt1 = {
				font         : '16px RobotoRegular',
				fill         : "#ffffff",
				"text-anchor": "start"
			},
			txt2 = {
				font         : '14px Helvetica, Arial',
				fill         : "#d1d1d1",
				"text-anchor": "start"
			},
			txt3 = {
				font         : '12px Helvetica, Arial',
				fill         : "#969696",
				"text-anchor": "start"
			},
			txt4 = {
				font: '11px Helvetica, Arial',
				fill: "#d2d2d2"
			},
			X = (width - leftgutter) / (conf.max_items || data.length),
			max = Math.max.apply(Math, data),
			Y = (height - bottomgutter - topgutter) / max;

	if(!r.gridDrawn && nogrid == false){
		r.drawGrid(leftgutter + X * .5 + .5, topgutter + .5, width - leftgutter - X, height - topgutter - bottomgutter, 10, 10, conf.gridcolor);
	}
	r.gridDrawn = true;
	var path = r.path().attr({
				stroke           : stroke_width == 0 ? 'none' : color,
				"stroke-width"   : stroke_width,
				"stroke-linejoin": "round"
			}),
			bgp = showarea == true ? r.path().attr({
				stroke: "none",
				//opacity: .3,
				fill  : color
			}) : r.path().attr({
				stroke : "none",
				opacity: 0,
				fill   : color
			}).hide(),
			label = r.set(),
			is_label_visible = false,
			leave_timer, blanket = r.set();

	var paper = Raphael(0, 0, width, height), grad_start = '#1e88e5', grad_end = '#7cb342';

	paper.defineLinearGradient("grad1", [{
		"id"    : "s1",
		"offset": "0",
		"style" : "stop-color:" + grad_start + ";stop-opacity:1;"
	},
		{
			"id"    : "s2",
			"offset": "1",
			"style" : "stop-color:" + grad_end + ";stop-opacity:1;"
		}]);

	path.strokeLinearGradient("grad1", stroke_width);

	//path.glow({
	//	color: '#f00'
	//});

	label.push(r.text(3, 20, "Over 500 dapps").attr(txt1));
	//label.push(r.text(3, 38, "24 hits").attr(txt2));
	//label.push(r.text(3, 57, "22 September 2008").attr(txt3));
	label.hide();
	var frame = r.popup(160, 40, label, "left").attr({
		fill          : "#37474f",
		stroke        : "#37474f",
		"stroke-width": 0
	}).hide();
	var p, bgpp;

	for(var i = 0, ii = data.length; i < ii; i++){
		var y = Math.round(height - bottomgutter - Y * data[i + cur_pos]) - data_offset,
				x = Math.round(leftgutter + X * (i + .5)),
				t = gridHasBeenDrawn[holder] == false ? labels.length > 120 ? i % 2 == 0 ? false : r.text(x, height - 25, labels[i + cur_pos]).attr(txt).rotate(70).toBack() : r.text(x, height - 25, labels[i + cur_pos]).attr(txt).rotate(70).toBack() : false;

		if(!i){
			p = ["M", x, y, "L", x, y];
			//bgpp = ["M", leftgutter + X * .5, height - bottomgutter, "L", x, y, "L", x, y];
			bgpp = ["M", 0, height - bottomgutter, "L", x, y, "L", x, y];
		}
		if(i && i < ii - 1){
			//var Y0 = Math.round(height - bottomgutter - Y * data[i + cur_pos - 1]),
			//		X0 = Math.round(leftgutter + X * (i - .5)),
			//		Y2 = Math.round(height - bottomgutter - Y * data[i + cur_pos + 1]),
			//		X2 = Math.round(leftgutter + X * (i + 1.5));
			//var a = getAnchors(X0, Y0, x, y, X2, Y2, smoothing);
			//p = p.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			//bgpp = bgpp.concat([a.x1, a.y1, x, y, a.x2, a.y2]);

			p = p.concat([x, y]);
			bgpp = bgpp.concat([x, y]);
		}

		var grad_pos_color = color_mixer(grad_start, grad_end, (1 - i / data.length)) || color;

		if(!conf.nodot){
			var dot = r.circle(x, y, 8).attr({
				fill          : dotcolor,
				stroke        : grad_pos_color,
				"stroke-width": stroke_width || 1
			});
			dot.hide();
			if(y == 0){
				dot.attr({
					opacity: 0
				});
			}
		} else{
			var dot = false;
		}

		if(conf.axis_label){
			var lbl = r.text(x, height - (conf.label_bottom_offset || 20)).attr({
				text: labels[i]
			}).attr(txt4);
		}

		if(mousecoords == 'circle'){
			blanket.push(r.circle(x, y, 14).attr({
				stroke : "none",
				fill   : "#fff",
				opacity: 0
			}));
		} else if(mousecoords == 'rect'){
			blanket.push(r.rect(leftgutter + X * i, 0, X, height - bottomgutter).attr({
				stroke : "none",
				fill   : "#fff",
				opacity: 0
			}));
		} else if(mousecoords == 'none'){
			blanket.push(r.circle(x, y, 0).attr({
				stroke : "none",
				fill   : "#fff",
				opacity: 0
			}));
		}

		var rect = blanket[blanket.length - 1];

		(function(x, y, data, datatotal, line1, dot){
			var timer, i = 0;
			rect.hover(function(){

				clearTimeout(leave_timer);
				var side = "right";
				if(x + frame.getBBox().width > width){
					side = "left";
				}

				var ppp = r.popup(x, y, label, side, 1),
						anim = Raphael.animation({
							path     : ppp.path,
							transform: ["t", ppp.dx, ppp.dy]
						}, 200 * is_label_visible);

				lx = label[0].transform()[0][1] + ppp.dx + 24;
				ly = label[0].transform()[0][2] + ppp.dy + 14;

				frame.show().stop().animate(anim);

				label[0].attr({text: line1}).show().stop().animateWith(frame, anim, {transform: ["t", lx, ly]}, 200 * is_label_visible);
				//label[1].attr({text: line2}).show().stop().animateWith(frame, anim, {transform: ["t", lx, ly]}, 200 * is_label_visible);
				//label[2].attr({text: line3}).show().stop().animateWith(frame, anim, {transform: ["t", lx, ly]}, 200 * is_label_visible);

				if(dot){
					dot.show();
				}
				is_label_visible = true;
			}, function(){
				if(dot){
					dot.hide();
				}
				leave_timer = setTimeout(function(){
					frame.hide();
					label[0].hide();
					//label[1].hide();
					//label[2].hide();
					is_label_visible = false;
				}, 50);
			});
		})(x, y, data[i + cur_pos], datatotal[i + cur_pos], lines1[i + cur_pos], dot);
	}

	gridHasBeenDrawn[holder] = true;
	p = p.concat([x, y, x, y]);
	bgpp = bgpp.concat([x, y, x, y, "L", x, height - bottomgutter, "z"]);

	path.attr({
		path: p
	});
	bgp.attr({
		path: bgpp
	});
	frame.toFront();
	label[0].toFront();
	//label[1].toFront();
	//label[2].toFront();
	blanket.toFront();
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
function rgbToHsl(r, g, b){
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if(max == min){
		h = s = 0; // achromatic
	} else{
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max){
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return [h, s, l];
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */
function hslToRgb(h, s, l){
	var r, g, b;

	if(s == 0){
		r = g = b = l; // achromatic
	} else{
		var hue2rgb = function hue2rgb(p, q, t){
			if(t < 0) t += 1;
			if(t > 1) t -= 1;
			if(t < 1 / 6) return p + (q - p) * 6 * t;
			if(t < 1 / 2) return q;
			if(t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		}

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function componentToHex(c){
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b){
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex){
	hex = hex.toString().replace('#', '');

	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b){
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

function color_mixer(color1, color2, amount){
	if(typeof amount === "undefined"){
		amount = 0.5;
	}

	var rgb1 = hexToRgb(color1), rgb2 = hexToRgb(color2),
			hsl1 = rgbToHsl(rgb1.r, rgb1.g, rgb1.b),
			hsl2 = rgbToHsl(rgb2.r, rgb2.g, rgb2.b),
			h = amount * hsl1[0] + (1 - amount) * hsl2[0],
			s = amount * hsl1[1] + (1 - amount) * hsl2[1],
			l = amount * hsl1[2] + (1 - amount) * hsl2[2],
			hsl = (hslToRgb(h, s, l));

	return rgbToHex(hsl[0], hsl[1], hsl[2]);
}

(function(){
	var tokenRegex = /\{([^\}]+)\}/g,
			objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
			replacer = function(all, key, obj){
				var res = obj;
				key.replace(objNotationRegex, function(all, name, quote, quotedName, isFunc){
					name = name || quotedName;
					if(res){
						if(name in res){
							res = res[name];
						}
						typeof res == "function" && isFunc && (res = res());
					}
				});
				res = (res == null || res == obj ? all : res) + "";
				return res;
			},
			fill = function(str, obj){
				return String(str).replace(tokenRegex, function(all, key){
					return replacer(all, key, obj);
				});
			};
	/*	Raphael.fn.popup = function(X, Y, set, pos, ret){
	 pos = String(pos || "top-middle").split("-");
	 pos[1] = pos[1] || "middle";

	 var r = 2,
	 bb = set.getBBox(),
	 w = Math.max(Math.round(bb.width), 180),
	 h = Math.round(bb.height),
	 x = Math.round(bb.x) - r,
	 y = Math.round(bb.y) - r,
	 gap = 4,// Math.min(h / 2, w / 2, 10),
	 shapes = {
	 top: "M{x},{y}" +
	 "h{w4},{w4},{w4},{w4}" +
	 "a{r},{r},0,0,1,{r},{r}" +
	 "v{h4},{h4},{h4},{h4}" +
	 "a{r},{r},0,0,1,-{r},{r}" +
	 "l-{right},0-{gap},{gap}-{gap}-{gap}-{left},0" +
	 "a{r},{r},0,0,1-{r}-{r}" +
	 "v-{h4}-{h4}-{h4}-{h4}" +
	 "a{r},{r},0,0,1,{r}-{r}" +
	 "z",

	 bottom: "M{x},{y}l{left},0,{gap}-{gap},{gap},{gap},{right},0a{r},{r},0,0,1,{r},{r}v{h4},{h4},{h4},{h4}a{r},{r},0,0,1,-{r},{r}h-{w4}-{w4}-{w4}-{w4}a{r},{r},0,0,1-{r}-{r}v-{h4}-{h4}-{h4}-{h4}a{r},{r},0,0,1,{r}-{r}z",

	 right: "M{x},{y}" +
	 "h{w4},{w4},{w4},{w4}" +
	 "a{r},{r},0,0,1,{r},{r}" +
	 "v{h4},{h4},{h4},{h4}" +
	 "a{r},{r},0,0,1,-{r},{r}" +
	 "l-{right},0-{gap},{gap}-{gap}-{gap}-{left},0" +
	 //"l-{right},0-{gap},{gap}-{gap}-{gap}-{left},0" +
	 "a{r},{r},0,0,1-{r}-{r}" +
	 "v-{h4}-{h4}-{h4}-{h4}" +
	 "a{r},{r},0,0,1,{r}-{r}" +
	 "z",

	 //"M{x},{y}" +
	 //"h{w4},{w4},{w4},{w4}" +
	 //"a{r},{r},0,0,1,{r},{r}" +
	 //"v{h4},{h4},{h4},{h4}" +
	 //"a{r},{r},0,0,1,-{r},{r}" +
	 //"h-{w4}-{w4}-{w4}-{w4}" +
	 //"a{r},{r},0,0,1-{r}-{r}" +
	 //"l0-{bottom}-{gap}-{gap},{gap}-{gap},0-{top}" +
	 //"a{r},{r},0,0,1,{r}-{r}" +
	 //"z",

	 left: "M{x},{y}" +
	 "h{w4},{w4},{w4},{w4}" +
	 "a{r},{r},0,0,1,{r},{r}" +
	 "v{h4},{h4},{h4},{h4}" +
	 "a{r},{r},0,0,1,-{r},{r}" +
	 "l-{left},0-{gap},{gap}-{gap}-{gap}-{right},0" +
	 "a{r},{r},0,0,1-{r}-{r}" +
	 "v-{h4}-{h4}-{h4}-{h4}" +
	 "a{r},{r},0,0,1,{r}-{r}" +
	 "z"

	 //"M{x},{y}" +
	 //"h{w4},{w4},{w4},{w4}" +
	 //"a{r},{r},0,0,1,{r},{r}l0,{top},{gap},{gap}-{gap},{gap},0,{bottom}" +
	 //"a{r},{r},0,0,1,-{r},{r}h-{w4}-{w4}-{w4}-{w4}" +
	 //"a{r},{r},0,0,1-{r}-{r}" +
	 //"v-{h4}-{h4}-{h4}-{h4}" +
	 //"a{r},{r},0,0,1,{r}-{r}" +
	 //"z"
	 },
	 offset = {
	 hx0  : X - (x + r + w - gap * 2),
	 hx1  : X - (x + r + w / 2 - gap),
	 hx2  : X - (x + r + gap),
	 vhy  : Y - (y + r + h + r + gap),
	 "^hy": Y - (y - gap)
	 },
	 mask = [{
	 x     : x + r,
	 y     : y,
	 w     : w,
	 w4    : w / 4,
	 h4    : h / 4,
	 right : 0,
	 left  : w - gap * 2,
	 bottom: 0,
	 top   : h - gap * 2,
	 r     : r,
	 h     : h,
	 gap   : gap
	 }, {
	 x     : x + r,
	 y     : y,
	 w     : w,
	 w4    : w / 4,
	 h4    : h / 4,
	 left  : 15, // w / 2 - gap,
	 right : w - 15, // w / 2 - gap,
	 top   : h / 2 - gap,
	 bottom: h / 2 - gap,
	 r     : r,
	 h     : h,
	 gap   : gap
	 }, {
	 x     : x + r,
	 y     : y,
	 w     : w,
	 w4    : w / 4,
	 h4    : h / 4,
	 left  : 0,
	 right : w - gap * 2,
	 top   : 0,
	 bottom: h - gap * 2,
	 r     : r,
	 h     : h,
	 gap   : gap
	 }][pos[1] == "middle" ? 1 : (pos[1] == "top" || pos[1] == "left") * 2];
	 var dx = 0,
	 dy = 0,
	 out = this.path(fill(shapes[pos[0]], mask)).insertBefore(set);

	 switch(pos[0]){
	 case "top":
	 dx = X - (x + r + mask.left + gap);
	 dy = Y - (y + r + h + r + gap);
	 break;
	 case "bottom":
	 dx = X - (x + r + mask.left + gap);
	 dy = Y - (y - gap);
	 break;
	 case "left":
	 //dx = X - (x + r + w + r + gap);
	 dx = X - (x + r + w + r - gap * 3 - 10);
	 //dy = Y - (y + r + mask.top + gap);
	 dy = Y - (y + r + mask.top + mask.h + gap );
	 break;
	 case "right":
	 //dx = X - (x - gap);
	 dx = X - (x + gap + 10);
	 //dy = Y - (y + r + mask.top + gap);
	 dy = Y - (y + r + mask.top + mask.h + gap );
	 break;
	 }
	 out.translate(dx, dy);
	 if(ret){
	 ret = out.attr("path");
	 out.remove();
	 return {
	 path: ret,
	 dx  : dx,
	 dy  : dy
	 };
	 }
	 set.translate(dx, dy);
	 return out;
	 };*/
})();

/**     raphael gradient   ***/

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