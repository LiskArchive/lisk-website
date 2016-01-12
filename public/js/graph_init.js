var graphArr = [
			{
				graphWidth : 580,
				graphHeight: 300,
				dataStart  : 0,
				//showItems  : 8,
				dataSource : {
					//labels: ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY"],
				data  : [ '5',
					'7',
					'9',
					'11',
					'12',
					'13',
					'17',
					'19',
					'23',
					'26',
					'31',
					'35',
					'36',
					'39',
					'47',
					'58',
					'72',
					'84',
					'90',
					'100'],
					lines1: ["Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!", "Growing Interest!"]
				}
			}
		],
		graph_1,
		g_width;

$(window).on('load', function(){

	var graph_1 = $('#graph_1');
	var g_width = graph_1.width();

	init_graph();
}).on('resize', function(){
	var bw = Math.max(browserWindow.width(), 320), i = 0;

	if(g_width > bw){
		g_width = Math.max(browserWindow.width(), 320);
		graph_1.empty();
		init_graph();
	} else{
		if(g_width < graphArr[i].graphWidth){
			graph_1.empty();
			init_graph();
		}
	}

});

function init_graph(){
	try {
		var i = 0, graphData = graphArr[i];

		var graphTotalWidth = graphData.graphWidth / graphData.showItems * graphData.dataSource.data.length, h1 = Raphael('graph_1', graphTotalWidth, graphData.graphHeight);

		drawLine({
			holder: h1,
			data_offset: 25,
			showarea: false,
			stroke_width: 3,
			nogrid: true,
			mousecoords: 'rect',
			smoothing: false,
			axis_label: false,
			label_bottom_offset: 5,
			spewidth: graphData.graphWidth,
			cur_pos: graphData.dataStart,
			data_source: graphData.dataSource
		});
	} catch (e) {}
}