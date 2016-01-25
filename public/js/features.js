$(function($){

	hljs.configure({
		tabReplace : '		',
		classPrefix: ''
	});

	// hljs.initHighlightingOnLoad();

	$('.codeHighlight').each(function(i, block){
		hljs.highlightBlock(block);
	});

});
