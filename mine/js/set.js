app.controller("setCtrl", function ($scope, $css) {
	$css.removeAll();
	$css.add("mine/css/set.css")
	
	
	$scope.change = function () {
		var open = document.getElementsByClassName("openBtn")[0];
		if ($scope.flag == true) {
			open.src = "mine/imgs/colse-btn.png";
			$scope.flag = false;
			
		} else {
			open.src = "mine/imgs/open-btn.png";
			$scope.flag = true;
		}
		
	}
});
