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

	$scope.total = 27;

	$scope.racesList = [{id:1,type:"Human"},{id:2,type:"Hill Dwarf"},{id:3,type:"other"}];

	$scope.revertStats = function(){
		$scope.stats = {
		'str' : 8,
		'dex' : 8,
		'con' : 8,
		'int' : 8,
		'wis' : 8,
		'cha' : 8,
		};
	};

	$scope.selectedRace = function(selected){
		$scope.race = selected;
		$scope.revertStats();
		switch ($scope.race.type){
			case "Human":
			$scope.stats.str++;
			$scope.stats.dex++;
			$scope.stats.con++;
			$scope.stats.int++;
			$scope.stats.wis++;
			$scope.stats.cha++;
			break;
			case "Hill Dwarf":
			$scope.stats.con += 2;
			$scope.stats.wis++;
		}
	};

	$scope.plusStr = function(){
		$scope.stats.str++;
		$scope.total--;
	};


});