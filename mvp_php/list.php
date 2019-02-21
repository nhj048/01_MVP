<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=divice-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="css/list.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/common.js"></script>
<script src="js/Inc.js"></script>
<script src="js/linksys.js"></script>
<title>About B - List</title>
</head>

<body>
<!--HEADER INCLUDE-->
<?php
include "header.inc";
?>


<!--SEARCH INCLUDE-->
<?php
include "search.inc";
?>

<!--CONTENTS-->
<section id="listCont" class="ca-link">
    <div class="inbox listBox">
        <div class="listTOP"> <span>이번 주 신건</span>
            <ul class="listFilter">
                <li><a href="#">감정가</a><span>▲</span></li>
                <li><a href="#">최저가</a><span>▲</span></li>
                <li><a href="#">유찰횟수</a><span>▲</span></li>
                <li><a href="#">매각기일</a><span>▲</span></li>
                <li><a href="#">조회수</a><span>▲</span></li>
            </ul>
        </div>
        <div class="listTOP2"> <span>총 5건</span>
            <div class="listStArea"> <a href="#" class="listSet">리스트조건설정</a>
                <ul>
                    <li class="listView"></li>
                    <li class="cardView"></li>
                </ul>
            </div>
        </div>
        <div class="saListBox first-list">
            <p class="saAddr">서울특별시 구로구 구로동 743-32 동방 2층 202호 [아파트]</p>
            <span class="favoriteBtn">♡</span><span class="favorite">관심물건</span> 
            <!--리스트 테이블-->
            <ul class="listTable">
                <li class="col-3 tbSbox">
                    <ul>
                        <li class="tbTit">사건번호</li>
                        <li class="tbTxt">2018 타경 6515</li>
                        <li class="tbTit">진행현황</li>
                        <li class="tbTxt">유찰 1회 (80%)</li>
                        <li class="tbTit">매각기일</li>
                        <li class="tbTxt">2019.02.12</li>
                    </ul>
                </li>
                <li class="col-3 tbSbox">
                    <ul>
                        <li class="tbTit">물건종류</li>
                        <li class="tbTxt">아파트</li>
                        <li class="tbTit">건물면적</li>
                        <li class="tbTxt">59.94㎡</li>
                        <li class="tbTit">대지권</li>
                        <li class="tbTxt">19.5㎡</li>
                    </ul>
                </li>
                <li class="col-3 tbSbox">
                    <ul>
                        <li class="tbTit moneyTit">감정가</li>
                        <li class="tbTxt moneyTxt gamMoney">177,000,000</li>
                        <li class="tbTit moneyTit">최저가</li>
                        <li class="tbTxt moneyTxt">141,600,000</li>
                    </ul>
                </li>
                <li class="col-3 tbSbox">
                    <ul>
                        <img src="images/attention.svg" alt="특수물건" class="attentionIcon">
						<span class="attTit">위험요소</span>
                        <li class="tbTxt attTxt">1. 가등기</li>
                        <li class="tbTxt attTxt">2. 대항력</li>
                        <li class="tbTxt attTxt">3. 재매각</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</section>

<!--FOOTER INCLUDE-->
<?php
    include "footer.inc";
?>
</body>
</html>
