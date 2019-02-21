// ca_view.js

$(function(){

	$(".ca-tabBox>li").click(function(e) {
		e.preventDefault();
		$(this).addClass('on').siblings().removeClass('on');

		var idx = $(this).index();
		$("#ca-tab-cont>.ca-inbox>div").eq(idx).addClass('on').siblings().removeClass('on');
	}); // click //

	// a태그 기능 죽이기
	$(".ca-favor a").click(function(e) {
		e.preventDefault();
	});

	






}); // jQB //