///////////// 전역변수 구역 ///////////////
	
	// 1. 각 스크롤 액션 실행여부 (0:실행 전, 1:실행 후)
	var p1=0,p2=0,p3=0,p4=0,p5=0,p6=0,p7=0;
	
	// 2. 스크롤 액션 기준선 요소의 top값 세팅변수
	var p1pos,p2pos,p3pos,p4pos,p5pos,p6pos,p7pos;
	
	// 3. 스크롤 액션 기준선차
	const gap=200;
	///////////////////////////////////////////////
	///////////////////////////////////////////////
	
	
    /*
    [ 스크롤 이벤트 처리 구역 설정하기 ]
    1. 스크롤 이벤트는 scroll() 메서드를 사용하여 처리함
    2. 제이쿼리 구역과 별도로 있어도 됨
    3. 각 페이지 실행상태를 전역변수로 관리해야함
        (이유: 스크롤 액션 시 중복실행 방지!)
    4. 마우스 휠 이벤트와는 다름. 스크롤 이벤트는 페이지의 스크롤바
       가 움직일때 발생한다.(예컨데 마우스 휠이 아닌 마우스로 스크롤바를 끌어도 스크롤이벤트는 실행됨)
    5. 페이지 전체의 스크롤 이벤트를 사용할 경우 window객체를 사용
    (특정 박스에만 스크롤 이벤트 적용할 경우엔 선택자를 사용!)
    */
    //////// 스크롤 이벤트 설정하기 //////////
    $(window).scroll(function(){
        //현재 window의 스크롤바 위치(세로 스크롤)
        var cTop = $(this).scrollTop();
        console.log("현재스크롤바위치: "+cTop);
		
		// 각 위치별 등장요소 액션주기
		if(cTop>100&&cTop<p2pos-gap&&p1===0){
			p1=1; // 한 번만 실행
			scrollAction("#page1");
		}// if //
		
        else if(cTop>p2pos-gap&&cTop<p3pos-gap&&p2===0){
			p2=1; // 한 번만 실행
			scrollAction("#page2");
		}// else if //
		
        else if(cTop>p3pos-gap&&cTop<p4pos-gap&&p3===0){
			p3=1; // 한 번만 실행
			scrollAction("#page3");
		}// else if //
		
        else if(cTop>p4pos-gap&&cTop<p5pos-gap&&p4===0){
			p4=1; // 한 번만 실행
			scrollAction("#page4");
		}// else if //
		
        else if(cTop>p5pos-gap&&cTop<p6pos-gap&&p5===0){
			p5=1; // 한 번만 실행
			scrollAction("#page5");
		}// else if //
		
        else if(cTop>p6pos-gap&&cTop<p7pos-gap&&p6===0){
			p6=1; // 한 번만 실행
			scrollAction("#page6");
		}// else if //
		
        else if(cTop>p7pos-gap&&p7===0){
			p7=1; // 한 번만 실행
			scrollAction("#page7");
		}// else if //
		
    });//////// scroll 이벤트 함수 ////////////////
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    
    
    
    $(function(){/// jQB ////////////////
		
		// 스크롤액션 기준요소 top값 세팅
		// offset().top : 각 요소의 top값을 구해주는 메서드,속성
		p1pos=$("#page1").offset().top;
		p2pos=$("#page2").offset().top;
		p3pos=$("#page3").offset().top;
		p4pos=$("#page4").offset().top;
		p5pos=$("#page5").offset().top;
		p6pos=$("#page6").offset().top;
		p7pos=$("#page7").offset().top;
		console.log("각 기준요소 top값:"+p1pos+"/"+p2pos+"/"+p3pos+"/"+p4pos+"/"+p5pos+"/"+p6pos+"/"+p7pos);
		
		
		
		// 등장할 요소 초기화함수 호출
		initSet();
		
		
        /// GNB의 a링크를 클릭하면 해당페이지 위치로 스크롤 애니메이션
        $("#gnb a").click(function(e){
            e.preventDefault();//a태그 기본이동막기!
            
            /// a태그의 href값을 읽어옴(해당페이지 id)
            var pid = $(this).attr("href");
            console.log(pid);
            /// 해당 id의 현재 html문서에서의 top값을 읽어온다
            var pagepos = $(pid).offset().top;//JS의 offsetTop 속성과 같은 jQuery 높이값 알아내는 방법!!!
            // offset().top은 현재 선택요소의 top값을 단위없는 px값을 리턴해준다
            
            /// 스크롤 애니메이션 ///////////
            // stop()은 애니메이션 앞에 써서 이전 애니를 지움!
            $("html,body").stop().animate({
                scrollTop: pagepos+"px"
            },800,"easeInOutQuint");/// animate ////////////
            // 애니메이션시 이징을 활용하여 엑티브한 느낌을 준다!!!
            
            /// 스크롤 애니메이션 이동원리:
            /// scrollTop 속성은 오른쪽 스크롤바의 높이값(위로부터의 거리 축적값)을 말한다.
            // 이것을 animate 시키면 스크롤 이동과정을 애니메이션해준다.
            // 비교해서 알아둘것-> scrollLeft 속성 : 가로스크롤바위치
            
            // 유의사항: 스크롤바 이동시 선택자는 반드시 "html,body"
            // 두가지를 동시에 잡아줘야 한다.(안그러면 작동안함!)
            /// -> 범용 브라우저코딩임!
            
            //// 클릭된 메뉴의 class="selM" 넣기, 나머지는 지우기
            /// class는 a의 부모인 li에 넣어야 한다(주의!)
            $(this).parent().addClass("selM")
            .siblings().removeClass("selM");//다른li의 class지움
            
            
        });//////// click ////////////////
        //////////////////////////////////
		
    });///// jQB ////////////////////
    /////////////////////////////////
    /////////////////////////////////
    
/*////////////////////////////////////////////////////
	함수명: initSet
	기능: 등장할 요소의 초기값 세팅하기
*/////////////////////////////////////////////////////
	function initSet(){
		// 모든 등장요소(.pic)를 일괄세팅함
		// 내용: 각 요소의 현재 위치로부터 100px 아래로 이동
		// opactiy:0, transition: all .4s ease-out
		$(".pic").css({
			top:"+=100px", // += 은 대입연산자로 현재 위치값에 더함!
			opacity: 0
		}); // css //
		
	}////////// initSet함수 ////////////
	///////////////////////////////////

	
	/*//////////////////////////////////////////////////////////
		함수명: scrollAction
		기능: 스크롤시 해당요소의 등장액션 주기
	*///////////////////////////////////////////////////////////
	function scrollAction(idnm){ // anum-아이디명("#id명")
		$(idnm).find(".pic").animate({
			top:"-=100px",
			opacity:"1"
		},1500,"easeOutQuad");// animate //
	} ////////// scrollAction 함수 ////////////////
	
    
///////////부드러운 스크롤/////////////////
// css의 body요소에 overflow:hidden으로 스크롤바를 숨겨도 스크롤됨!   

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 90;
    else if (event.detail) delta = -event.detail / 2;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
    var animationInterval = 16; //수치가 낮을수록 빠름
  var scrollSpeed = 16; //수치가 낮을수록 빠름

	if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}