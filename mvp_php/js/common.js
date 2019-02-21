$(function(){
	
	// 현재 창 크기
	var winW = screen.availWidth;
	var winH = screen.availHeight;

	console.log(winW+","+winH);
	sw = 1200;
	sh = winH-60;

	ml = (winW-sw)/2;
	mt = (winH-sh)/2;

	console.log(sh);

	// test = window.open('http://naver.com', '', 'width='+sw+',height='+sh+',top='+mt+',left='+ml+',resizable=no, scrollbar=yes');



}); // jQB //