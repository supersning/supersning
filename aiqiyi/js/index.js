$(function(){
	$(".navs .swiper-slide").eq(0).addClass("active1");
	$("footer>dl").eq(0).addClass("active");
	$(".content>div").eq(0).show().siblings("div").hide();
	$("footer>dl").tap(function(){
		$(".content>div").eq( $(this).index() ).show().siblings("div").hide();
		$("footer>dl").eq( $(this).index() ).addClass("active").siblings("dl").removeClass("active");
	});
	$(".navs .swiper-slide").tap(function(){
		$(this).addClass("active1").siblings().removeClass("active1");
	});
})