$(function(){ //////////////////// jQB ////////////////////
	
	var sViewsts = 0;
	
	$(".sangseView").click(function(e){
		e.preventDefault();
		$(".selBox, .selChkBox, .sangseChk").fadeToggle(100);
		$(".tabBox>ul>li").first().addClass("tabOn");
		$(".tabBox>ul>li:first-child>a").addClass("tabOnTxt");
	});// click //
	
	
	
}); //////////////////// jQB ////////////////////