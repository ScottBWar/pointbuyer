var myApp = angular.module('myApp', []);

myApp.controller('statController', function statController($scope) {

    $scope.stats = [{
        'label': 'str',
        'value': 8
    }, {
        'label': 'dex',
        'value': 8
    }, {
        'label': 'con',
        'value': 8
    }, {
        'label': 'int',
        'value': 8
    }, {
        'label': 'wis',
        'value': 8
    }, {
        'label': 'cha',
        'value': 8
    }, ];

    $scope.total = 27;

    $scope.racesList = [{
        id: 1,
        type: "Human",
        perks: "+ All"
    }, {
        id: 2,
        type: "Hill Dwarf",
        perks: "++ con, + wis"
    }, {
        id: 3,
        type: "other"
    }];

    $scope.benefitsToggle = false;

    $scope.revertStats = function() {
    	$scope.total = 27;
        $scope.stats = [{
            'label': 'str',
            'value': 8
        }, {
            'label': 'dex',
            'value': 8
        }, {
            'label': 'con',
            'value': 8
        }, {
            'label': 'int',
            'value': 8
        }, {
            'label': 'wis',
            'value': 8
        }, {
            'label': 'cha',
            'value': 8
        }, ];
    };

    $scope.selectedRace = function(selected) {
    	if($scope.benefitsToggle === true){
        	$scope.applyRacialBenefits();
        	document.getElementById("benefits").checked = false;
        	$scope.race = selected;
        }
      else{
        $scope.race = selected;
        document.getElementById("benefitsToggle").style.display="block";
      }
    };

    $scope.increaseStat = function(stat) {
    		if(stat.value == 15){
        	console.log("15 point max");
        }
        else if(stat.value < 13 && $scope.total >= 1){
        	stat.value++;
        	$scope.total--;
        }
        else if(stat.value >= 13 && $scope.total >= 2){
        	stat.value++;
        	$scope.total -= 2;
        }
        else{
        	console.log("no more points");
        }
    };

    $scope.applyRacialBenefits = function(){
    	if($scope.benefitsToggle === false){
    	 switch ($scope.race.type) {
            case "Human":
                $scope.stats[0].value++;
                $scope.stats[1].value++;
                $scope.stats[2].value++;
                $scope.stats[3].value++;
                $scope.stats[4].value++;
                $scope.stats[5].value++;
                break;
            case "Hill Dwarf":
                $scope.stats[2].value += 2;
                $scope.stats[4].value++;
                break;
            case undefined:
            		break;
        }
        $scope.benefitsToggle = true;
      }
      else if($scope.benefitsToggle === true){
      	switch ($scope.race.type) {
            case "Human":
                $scope.stats[0].value--;
                $scope.stats[1].value--;
                $scope.stats[2].value--;
                $scope.stats[3].value--;
                $scope.stats[4].value--;
                $scope.stats[5].value--;
                break;
            case "Hill Dwarf":
                $scope.stats[2].value -= 2;
                $scope.stats[4].value--;
                break;
            case undefined:
            		break;
        }
      	$scope.benefitsToggle = false;
      }
    };

});