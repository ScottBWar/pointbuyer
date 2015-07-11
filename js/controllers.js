var myApp = angular.module('myApp', []);

myApp.controller('statController', function statController($scope){

	$scope.total = 27;

	$scope.racesList = [{id:1,type:"Human"},{id:2,type:"Other"}];

	$scope.stats = {
		'str' : 8,
		'dex' : 8,
		'con' : 8,
		'int' : 8,
		'wis' : 8,
		'cha' : 8,
	};

	$scope.selectedRace = function(selected){
		$scope.race = selected;
	};

	$scope.plusStr = function(){
		$scope.stats.str++;
		$scope.total--;
	};


});