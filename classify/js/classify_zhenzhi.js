app.controller("classifyZhenzhiCtrl", function ($scope, $css, $http) {
	$css.removeAll();
	$css.add("./classify/css/classify_zhenzhi.css")
	
	$http.get("http://127.0.0.1:8020/2/xiu/data.json").success(function (data) {
		
		$scope.data = data.data3;
		console.log(data)
		
	})
	
});