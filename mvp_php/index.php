<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=divice-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="css/main.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/common.js"></script>
<script src="js/main.js"></script>
<script src="js/linksys.js"></script>
<title>About B</title>
</head>
<body>

<?php
	include "header.inc";
?>

<!--BANNER -->
<section id="BANNER" class="fullbox">
	<div class="rollArea">
		<div class="roll r0 active">
			<div class="inbox"></div>
		</div>
		<div class="roll r1">
			<div class="inbox"></div>
		</div>
		<div class="roll r2">
			<div class="inbox"></div>
		</div>
	</div>
  </div>
</section>

<?php
	include "search.inc";
?>

<section id="CONTENTS">
  <div class="inbox contbox">
    <div class="cont_inbox">
      <ul>
        <li class="col-3">
			<h2 class="contTit">ABOUT B 소개</h2>
			<p class="contTxt">경매물건 검색과 선택에 최적화된 경매 정보플랫폼을 만나보세요</p>
		</li>
        <li class="col-6">
			<ul class="cont_iconbox">
				<li class="col-3"></li>
				<li class="col-3"></li>
				<li class="col-3"></li>
				<li class="col-3"></li>
				<li class="col-3"></li>
				<li class="col-3"></li>
				<li class="col-3"></li>
				<li class="col-3"></li>
			</ul>
		</li>
        <li class="col-3">
			<h2 class="contTit">초보자를 위한<br>쉬운검색 &nbsp; 페이지</h2>
			<p class="contTxt">어려운 경매 용어?<br>이젠 쉽게 이해하고 투자하세요!</p>
		</li>
      </ul>
    </div>
  </div>
</section>

<?php
	include "footer.inc";
?>


<!-- 우측 고정 네비게이션 -->
<div id="recentView" class="SNB"> <span>최근본물건</span> </div>
<div id="intView" class="SNB"> <span>관심물건</span> </div>

<!--Grid View Start-->
<!-- <ul class="grid">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul> -->
<!--Grid View End-->

</body>
</html>
