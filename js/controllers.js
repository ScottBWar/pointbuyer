var myApp = angular.module('myApp', []);



myApp.controller('statController', function statController($scope) {

    $scope.stats = [{
        'label': 'str',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'dex',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'con',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'int',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'wis',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'cha',
        'value': 8,
        'modifier':" -1 "
    } ];

    $scope.total = 27;

    $scope.racesList = [{
        id: 1,
        type: "Human",
        perks: "+ All",
        increase_array: [0,1,2,3,4,5]
    }, {
        id: 2,
        type: "Halfling: Lightfoot",
        perks: "++ dex, + cha"
    }, {
        id: 3,
        type: "Halfling: Stout",
        perks: "++ dex, + con"
    }, {
        id: 4,
        type: "Hill Dwarf",
        perks: "++ con, + wis"
    }, {
        id: 5,
        type: "Mountain Dwarf",
        perks: "++ con, ++ str",
        increase_array: [0,0,2,2]
    }, {
        id: 6,
        type: "High Elf",
        perks: "++ dex, + int"
    }, {
        id: 7,
        type: "Wood Elf",
        perks: "++ dex, + wis"
    }, {
        id: 8,
        type: "Dark Elf",
        perks: "++ dex, + cha"
    }, {
        id: 9,
        type: "Forest Gnome",
        perks: "++ int, + dex"
    }, {
        id: 10,
        type: "Rock Gnome",
        perks: "++ int, + con"
    }, {
        id: 11,
        type: "Half-Orc",
        perks: "++ str, + con"
    }, {
        id: 12,
        type: "Dragonborn",
        perks: "++ str, + cha"
    }, {
        id: 13,
        type: "Tiefling",
        perks: "++cha, + int"
    }];



    $scope.benefitsToggle = false;

    $scope.revertStats = function() {
        $scope.total = 27;
        $scope.stats = [{
        'label': 'str',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'dex',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'con',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'int',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'wis',
        'value': 8,
        'modifier':" -1 "
    }, {
        'label': 'cha',
        'value': 8,
        'modifier':" -1 "
    } ];
    };

    $scope.selectedRace = function(selected) {
        if ($scope.benefitsToggle === true) {
            $scope.applyRacialBenefits();
            $scope.race = selected;
            $scope.applyRacialBenefits();
        } else {
            $scope.race = selected;
            document.getElementById("benefitsToggle").style.display = "block";
        }
    };

    $scope.selected = $scope.racesList[0];
    $scope.selectedRace($scope.racesList[0]);

    $scope.getModifier = function(stat){
    	if(stat.value <= 9){
    		stat.modifier = " - 1 ";
    	}
    	else if(stat.value < 11){
    		stat.modifier = " + 0 ";
    	}
    	else if(stat.value < 13){
    		stat.modifier = " + 1 ";
    	}
    	else if(stat.value <= 15){
    		stat.modifier = " + 2 ";
    	}
    	else if(stat.value > 15){
    		stat.modifier = " + 3 ";
    	}
    };

    $scope.getAllModifier = function(stat){
    for(var i = 0; i < $scope.stats.length; i++){
    		$scope.getModifier($scope.stats[i]);
    	}
    };

    $scope.increaseStat = function(stat) {
    	$scope.getModifier(stat);
        if (stat.value == 15) {
            console.log("15 point max");
        } else if (stat.value < 13 && $scope.total >= 1) {
            stat.value++;
            $scope.total--;
        } else if (stat.value >= 13 && $scope.total >= 2) {
            stat.value++;
            $scope.total -= 2;
        } else {
            console.log("no more points");
        }
    };

    $scope.applyRacialBenefits = function() {
        if ($scope.benefitsToggle === false) {
            for(var i = 0; i < $scope.race.increase_array.length; i++){
                var n = $scope.race.increase_array[i];
                $scope.stats[n].value++;
            }
             $scope.benefitsToggle = true;
        } else if ($scope.benefitsToggle === true) {
            for(var ii = 0; ii < $scope.race.increase_array.length; ii++){
                var nn = $scope.race.increase_array[ii];
                $scope.stats[nn].value--;
            }
           $scope.benefitsToggle = false;
        }
        $scope.getAllModifier();
    };

});


