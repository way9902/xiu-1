app.controller("findCtrl", function ($scope, $css) {
	$css.removeAll();
	$css.add("./find/css/find.css")
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:2000,
         autoplayDisableOnInteraction : false,
        loop:true
  	});	
});