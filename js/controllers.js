var myApp = angular.module('myApp', []);

myApp.controller('statController', function statController($scope){

	$scope.total = 27;

	$scope.stats = {
		'str' : 8,
		'dex' : 8,
		'con' : 8,
		'int' : 8,
		'wis' : 8,
		'cha' : 8,
	};

	$scope.plusStr = function(){
		$scope.stats.str++;
		$scope.total--;
	};


});