// linksys.js

$(function(){
	$(".ca-link").click(function(e) {
		url = "../mvp/ca_view2.html";
		window.open(url, '', 'width='+sw+',height='+sh+',top=0 ,left='+ml+',resizable=no, scrollbar=yes');
	
	});
	// 상단 관심물건 클릭
	// $(".ca-favor").click(function(e) {
	// 	e.preventDefault();
	// 	console.log("왜 클릭이 두번 됨");
	// 	url = "index.html";
	// 	window.open(url, "", "width=800, height=920, scrollbar=yes");
	// }); // click //

	$(".ca-document-link").click(function(e) {
		e.preventDefault();
		url = "../mvp/ca_view2.html?pno=1";
		window.open(url, '', 'width='+sw+',height='+sh+',top=0 ,left='+ml+',resizable=no, scrollbar=yes');
	});

});// jQB //