app.controller("goodsCtrl", function ($scope, $css) {
	$css.removeAll();
	$css.add("./home/css/goods.css")
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:2000,
         autoplayDisableOnInteraction : false,
        loop:true
	});
	
		var foot = document.getElementsByClassName("indexNav")[0]
	
	
		foot.style.display = "none"
	
});