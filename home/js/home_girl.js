
app.controller("home_girlCtrl", function ($scope, $css, $http) {
//	删除其他样式和引入自身css样式
	$css.removeAll();
	$css.add("./home/css/home_girl.css")	
	
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:2000,
         autoplayDisableOnInteraction : false,
        loop:true
	});
	
	
	$http.get("http://127.0.0.1:8020/2/xiu/data.json").success(function (data) {
		
		$scope.data = data.data2;
		console.log($scope.data)
		
		
	})
});