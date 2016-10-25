//获取AngularJS应用程序
var app = angular.module('myApp', ['ngRoute', 'angularCSS']);

app.config(['$routeProvider', function($routeProvider){
	//使用$routeProvider获取各锚点的值
	$routeProvider
	.when('/',{ //判断'/'并返回首页
		templateUrl: "home/html/home.html",
		controller: "homeCtrl"
	})
	.when('/find',{ //判断'/'并返回发现
		templateUrl: "find/html/find.html",
		controller: "findCtrl"
	})
	.when('/bag',{ //判断'/'并返回秀客
		templateUrl: "bag/html/bag.html",
		controller: "bagCtrl"
	})
	.when('/classify',{ //判断'/'并返回分类
		templateUrl: "classify/html/classify.html",
		controller: "classifyCtrl"
	})
	.when('/mine',{ //判断'/'并返回我的
		templateUrl: "mine/html/mine.html",
		controller: "mineCtrl"
	})
	.otherwise({ //判断'/'并返回首页
		redirectTo: '/' //重定向首页
	})	
}]);