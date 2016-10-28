app.controller("classifyCtrl", function ($scope, $css) {
	$css.removeAll();
	$css.add("./classify/css/classify.css")
	
	var foot = document.getElementsByClassName("indexNav")[0]
  	
  	
		foot.style.display = "block";
		
		
		
		var wrap = document.getElementsByClassName('main-top')[0];
	
		wrap.addEventListener('touchstart', function (e) {
			
			var touch = e.targetTouches[0];
			var startX = touch.pageX - this.offsetLeft;
			

			wrap.addEventListener('touchmove', function (e) {
				// console.log(this.offsetLeft)
				var touch = e.targetTouches[0];
				
				var disX = touch.pageX - startX;
				
				if (disX >= 0) {
					disX = 0;
				}
				if (disX <= -300) {
					disX = -300;
				}
			
				wrap.style.left = disX + "px";
				
				
				
				
			})

		})
		
});