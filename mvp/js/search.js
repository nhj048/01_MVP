$(function(){ //////////////////// jQB ////////////////////
	
	$('select').prettyDropdown({

		// The default behavior is to move the selected item to the top. 
		// If you want the order of items to remain static, then set this to true.
		classic: false,

		// Custom class to customize the drop-down menu style.
		customClass: 'arrow',

		// Width
		width: null,

		// Item height in pixels.
		height: 32,

		// The wait period (in milliseconds) before collapsing the drop-down menu after you hover off of it. 
		hoverIntent: 200,

		// The separator character to use for the list of selected items in a multi-select menu.
		multiDelimiter: '; ',

		// The maximum number of selected items to display in a multi-select menu before replacing it with a summary (e.g., "2/3 selected"). 
		// To display "0/3 selected" instead of "None selected", set this option to -1.
		multiVerbosity: 99,

		// The icon or symbol to mark that an item is selected. HTML is accepted
		selectedMarker: '&#10003;',

		// Callback
		afterLoad: function(){}

	});

	var sViewsts = 0;
	
	$(".sangseView").click(function(e){
		e.preventDefault();
		$(".mulgunBox, .selChkBox, .sangseChk, .btnBox").fadeToggle(100);
		$(".tabBox>ul>li").first().addClass("tabOn");
		$(".tabBox>ul>li:first-child>a").addClass("tabOnTxt");
	});// click //
	
	
	
}); //////////////////// jQB ////////////////////