// 파라미터값
var param = location.href;
console.log("url"+param);

var loc = location.href;
console.log("loc"+loc);

$(function(){ //////////////////// jQB ////////////////////

	// list 페이지로 이동했을 때 물건종류 보이게 하기
	if(param == 'http://localhost:8080/www/mvp/list.html'){
		$(".mulgun").addClass('on');
		$(".mulgunBox").addClass('on');
	}

	// 검색하기 버튼
	$("#topSearchBtn").css({cursor:"pointer"});

	$(".input-PM").WanSpinner().css("border-color", "#2C3E50");

	// Select Box Plug-in
	$('select').prettyDropdown({
		// The default behavior is to move the selected item to the top. 
		// If you want the order of items to remain static, then set this to true.
		classic: false,

		// Custom class to customize the drop-down menu style.
		customClass: 'arrow',

		// Width
		width: 140,

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

$(function() {
    
    $(".pips-slider")
    
        .slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 0, 1000 ],
        	step: 100
        
        })
    
        .slider("pips", {
        	first: "label",
        	last: "label",
            rest: "pip",
        	step: 1,
        	labels: false,
        	prefix: "",
        	suffix: ""
        
        })
    	.slider("float", {
        	
        	handle: true,
        	pips: false,
        	labels: false,
        	prefix: "",
        	suffix: ""
        
    	});

});

var sViewsts = 0;

	$(".sangseView").click(function(e){
		e.preventDefault();
		$("#searchContBox>div, .btnBox").fadeToggle(100);
		$("#searchContBox>div").eq(idx).fadeToggle(100);
	});// click //

	// 검색박스 메뉴 탭 클릭시 글자 변경
	$(".tabBox>ul>li").click(function(e){
		e.preventDefault();
		$(this).addClass('on').siblings().removeClass('on');
		
		// 탭 메뉴의 순번과 같은 컨텐츠 순번에 클래스 부여해서 보이게 하기
		var idx = $(this).index();
		$("#searchContBox>div").eq(idx).addClass('on').siblings().removeClass('on');

	});// click //


	// 물건소재지 메뉴 탭 클릭시 글자 변경
	$(".sojaejiBtnBox>li").click(function(e){
		e.preventDefault();
		$(this).addClass('on').siblings().removeClass('on');

		// 탭 메뉴의 순번과 같은 컨텐츠 순번에 클래스 부여해서 보이게 하기
		var idx = $(this).index();
		$("#sojaejiContBox>ul").eq(idx).addClass('on').siblings().removeClass('on');
	});// click //


	
}); //////////////////// jQB ////////////////////


/*////////////////////////////////////////////////////////////////////////////
	함수명 : chgTab
	기능 : searchBox의 각 메뉴를 클릭하면 순번에 있는 컨텐츠가 보이도록 class 변경
*/////////////////////////////////////////////////////////////////////////////
function chgTab(){
	// alert("탭메뉴"+seq);

	// 대상선정 : .tabBox>ul>li , #searchContBox>div
	var tabTg = $(".tabBox>ul>li");
	var tabTg2 = $("#searchContBox>div");
	var tgLength = tabTg2.length;
	var index = tabTg2.index(this);

	console.log("tabTg의 length값: "+tgLength);
	console.log("tabTg2의 몇 번째 값?: "+index);

	// // 변경내용 : 탭 메뉴와 내용을 초기화하고, 선택된 순번의 컨텐츠만 클래스 부여해서 보이게 하기
	// for(var i=0;i<tabTg.length;i++){
	// 	tabTg.eq(i).removeClass("");
	// 	tabTg2.eq(i).removeClass("");
	// } // for문 //

	// tabTg.eq(tgLength).addClass('on').siblings().removeClass('on');
	tabTg2.eq(tgLength).addClass('on').siblings().removeClass('on');
}///////////// chgTab 함수 ///////////////