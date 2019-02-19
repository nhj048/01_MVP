// ca_view.js

$(function(){

	// height값 최대 값에 맞추기
	var max_h = 0;
	var pad_h = -12;

	var max_br = 0;

	// var br = $(".ca-tab-cont-buildInfo>li>span.two").find("br").length;
	// console.log("건축물정보의 br 갯수는? = " + br);

	$(".ca-tab-cont-envir>li").each(function(){
		var h = parseInt($(this).css("height"));
		var lh = parseInt($(this).children("span:contains('·')").css("height"));
		console.log("lh값" + lh);
		if(max_h<h){
			max_h = h
		}// if문 //
	});// each //

	$(".ca-tab-cont-envir>li").each(function(){
		$(this).children("span:contains('·')").css({lineHeight:max_h+"px"});
		// var lh = $(this).children("span:contains('·')").height();
		// console.log("lh값" + lh);
		$(this).css({height:lh});
		$(".ca-tab-cont-envir>li>span:first-child").css({lineHeight:max_h+pad_h+"px"});
		var br = $(".ca-tab-cont-envir>li>span.two").find("br").length;
			console.log("환경정보의 br 갯수는? = " + br);
			if(br > 1){
				$(".ca-tab-cont-envir>li").css({height:max_h + br * 20 + "px"});
				$(".ca-tab-cont-envir>li>span:first-child").css({lineHeight:max_h + pad_h + br * 20 + "px"});
			} // if //
	});// each //

	$(".ca-tab-cont-buildInfo>li").each(function(){
		var h = parseInt($(this).css("height"));
		if(max_h<h){
			max_h = h
		}// if문 //
	});// each //

	$(".ca-tab-cont-buildInfo>li").each(function(){
		$(this).css({height:max_h});
		$(".ca-tab-cont-buildInfo>li>span:first-child").css({lineHeight:max_h+pad_h+"px"});
			var br = $(".ca-tab-cont-buildInfo>li>span:contains('br')").length;
			console.log("감정평가서정보의 br 갯수는? = " + br);
			if(br > 1){
				$(".ca-tab-cont-buildInfo>li").css({height:max_h + br * 20 + "px"});
				$(".ca-tab-cont-buildInfo>li>span:first-child").css({lineHeight:max_h + pad_h + br * 20 + "px"});
			} // if //
	});// each //

	$(".ca-tab-cont-gamjeong>li").each(function(){
		var h = parseInt($(this).css("height"));
		console.log("h값" + h);
		if(max_h<h){
			max_h = h
		}// if문 //
	});// each //

	$(".ca-tab-cont-gamjeong>li").each(function(){
		$(this).css({height:max_h});
		$(".ca-tab-cont-gamjeong>li>span:not(:first-child)").each(function(){
			var br = $(".ca-tab-cont-gamjeong>li>span.two").find("br").length;
			console.log("감정평가서정보의 br 갯수는? = " + br);
			if(br > 1){
				$(".ca-tab-cont-gamjeong>li").css({height:max_h + br * 20 + "px"});
				$(".ca-tab-cont-gamjeong>li>span:first-child").css({lineHeight:max_h + pad_h + br * 20 + "px"});
			} // if //
		});// each //
	});// each //


	// $(".ca-tab-cont-gamjeong>li>span:not(:first-child)").each(function(){
	// 	if(br > 1){
	// 		$(".ca-tab-cont-gamjeong>li").css({height:max_h + br * 20 + "px"});
	// 		$(".ca-tab-cont-gamjeong>li>span:first-child").css({lineHeight:max_h + pad_h + "px"});
	// 	} // if //
	// });// each //


}); // jQB //