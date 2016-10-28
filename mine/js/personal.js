app.controller("personalCtrl", function ($scope, $css) {
	$css.removeAll();
	$css.add("mine/css/personal.css")
	$scope.down = function () {
		console.log("1");
	}
	
	var yc = document.getElementsByClassName("yincang")[0]
	
	var downBtn = document.getElementsByClassName("downBtn")[0]
	
	
	$scope.downAndUp = function () {
		if ($scope.flag == true) {
			yc.style.display = "block";
			downBtn.childNodes[1].innerHTML = '收起';
			downBtn.childNodes[3].src = "mine/imgs/up.png";
			$scope.flag = false;
		}else {
			yc.style.display = "none";
			downBtn.childNodes[1].innerHTML = '展开';
			downBtn.childNodes[3].src = "mine/imgs/down.png";
			$scope.flag = true;
			
		}
		
	}
	
});
