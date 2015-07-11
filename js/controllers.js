var myApp = angular.module('myApp', []);

myApp.controller('statController', function statController($scope){

	$scope.stats = {
		'str' : 8,
		'dex' : 8,
		'con' : 8,
		'int' : 8,
		'wis' : 8,
		'cha' : 8,
	};

});