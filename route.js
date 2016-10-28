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
	.when('/classify_zhenzhi',{ //判断'/'并返回分类
		templateUrl: "classify/html/classify_zhenzhi.html",
		controller: "classifyZhenzhiCtrl"
	})
	.when('/mine',{ //判断'/'并返回我的
		templateUrl: "mine/html/mine.html",
		controller: "mineCtrl"
	})
	//home页面里面的子页面女装页面
	.when('/goods',{ //判断'/'并返回分类
		templateUrl: "home/html/goods.html",
		controller: "goodsCtrl"
	})
	.when('/home_girl', {//判断'/home_girl'并返回女装
		templateUrl: "home/html/home_girl.html",
		controller:"home_girlCtrl"
	})
	//home页面里面的子页面搜索页面
	.when('/home_search',{//判断'/home_search',并返回搜索
		templateUrl: "home/html/home_search.html",
		controller: "home_searchCtrl"
	})
	.when('/personal',{ //判断'/'并返回我的
		templateUrl: "mine/html/personal.html",
		controller: "personalCtrl"
	})
	.when('/set',{ //判断'/'并返回我的
		templateUrl: "mine/html/set.html",
		controller: "setCtrl"
	})
	.when('/info',{ //判断'/'并返回我的
		templateUrl: "mine/html/info.html",
		controller: "infoCtrl"
	})
	.when('/hinfo',{ //判断'/'并返回我的
		templateUrl: "home/html/hinfo.html",
		controller: "hinfoCtrl"
	})
	.when('/collect',{ //判断'/'并返回我的
		templateUrl: "mine/html/collect.html",
		controller: "collectCtrl"
	})
	.otherwise({ //判断'/'并返回首页
		redirectTo: '/' //重定向首页
	})	
	
}]);