app.controller("bagCtrl", function ($scope, $css, $http) {
	$css.removeAll();
	$css.add("./bag/css/bag.css")
	
	$scope.count = 0;
	$scope.count2 = 0;
	$scope.$watch('count', function (newC, oldC) {
		if(newC <= 0) {
			$scope.count = 0;
		};
		$scope.add = function () {
			$scope.count++;
		};
		$scope.reduce = function () {
			$scope.count--;
		};
		
	})
		$scope.$watch('count2', function (newC, oldC) {
		if(newC <= 0) {
			$scope.count2 = 0;
		};
		$scope.add2 = function () {
			$scope.count2++;
		};
		$scope.reduce2 = function () {
			$scope.count2--;
		};
		
	})
	
	 $http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK").success(function (data) {
            
            console.log(data)
        })
	
});