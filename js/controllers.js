var myApp = angular.module('myApp', ['ui.bootstrap']);



myApp.controller('statController', function statController($scope, $modal) {

    $scope.user = {
        name:"default"
    };


    $scope.stats = [{
        'label': 'str',
        'value': 8,
        'modifier': " -1 "
    }, {
        'label': 'dex',
        'value': 8,
        'modifier': " -1 "
    }, {
        'label': 'con',
        'value': 8,
        'modifier': " -1 "
    }, {
        'label': 'int',
        'value': 8,
        'modifier': " -1 "
    }, {
        'label': 'wis',
        'value': 8,
        'modifier': " -1 "
    }, {
        'label': 'cha',
        'value': 8,
        'modifier': " -1 "
    }];

    $scope.total = 27;

    $scope.racesList = [{
        id: 1,
        type: "Human",
        perks: "+ All",
        increase_array: [0, 1, 2, 3, 4, 5]
    }, {
        id: 2,
        type: "Halfling: Lightfoot",
        perks: "++ dex, + cha",
        increase_array: [1, 1, 5]
    }, {
        id: 3,
        type: "Halfling: Stout",
        perks: "++ dex, + con",
        increase_array: [1, 1, 2]
    }, {
        id: 4,
        type: "Hill Dwarf",
        perks: "++ con, + wis",
        increase_array: [2, 2, 4]
    }, {
        id: 5,
        type: "Mountain Dwarf",
        perks: "++ con, ++ str",
        increase_array: [0, 0, 2, 2]
    }, {
        id: 6,
        type: "High Elf",
        perks: "++ dex, + int",
        increase_array: [1, 1, 3]
    }, {
        id: 7,
        type: "Wood Elf",
        perks: "++ dex, + wis",
        increase_array: [1, 1, 4]
    }, {
        id: 8,
        type: "Dark Elf",
        perks: "++ dex, + cha",
        increase_array: [1, 1, 5]
    }, {
        id: 9,
        type: "Forest Gnome",
        perks: "++ int, + dex",
        increase_array: [3, 3, 1]
    }, {
        id: 10,
        type: "Rock Gnome",
        perks: "++ int, + con",
        increase_array: [3, 3, 2]
    }, {
        id: 11,
        type: "Half-Orc",
        perks: "++ str, + con",
        increase_array: [0, 0, 2]
    }, {
        id: 12,
        type: "Dragonborn",
        perks: "++ str, + cha",
        increase_array: [0, 0, 5]
    }, {
        id: 13,
        type: "Tiefling",
        perks: "++cha, + int",
        increase_array: [5, 5, 3]
    }, {
        id: 14,
        type: "Half Elf",
        perks: "++cha +any two",
        increase_array: [5, 5]
    }];

    $scope.classList =[
    { 
        id: 1, 
        type:"Barbarian"

    },
    { 
        id: 2, 
        type:"Bard"

    },
    { 
        id: 3, 
        type:"Cleric"

    },
    { 
        id: 4, 
        type:"Druid"

    },
    { 
        id: 5, 
        type:"Fighter"

    },
    { 
        id: 6, 
        type:"Monk"

    },
    { 
        id: 7, 
        type:"Paladin"

    },
    { 
        id: 8, 
        type:"Ranger"

    },
    { 
        id: 9, 
        type:"Rogue"

    },
    { 
        id: 10, 
        type:"Sorceror"

    },
    { 
        id: 11, 
        type:"Wizard"

    },
    { 
        id: 12, 
        type:"Warlock"

    }
    ];



    $scope.benefitsToggle = false;

    $scope.revertStats = function() {
        $scope.total = 27;
        $scope.stats = [{
            'label': 'str',
            'value': 8,
            'modifier': " -1 "
        }, {
            'label': 'dex',
            'value': 8,
            'modifier': " -1 "
        }, {
            'label': 'con',
            'value': 8,
            'modifier': " -1 "
        }, {
            'label': 'int',
            'value': 8,
            'modifier': " -1 "
        }, {
            'label': 'wis',
            'value': 8,
            'modifier': " -1 "
        }, {
            'label': 'cha',
            'value': 8,
            'modifier': " -1 "
        }];
    };

    $scope.selectedRace = function(selected) {
        if ($scope.benefitsToggle === true) {
            $scope.applyRacialBenefits();
            $scope.race = selected;
            $scope.applyRacialBenefits();
            $scope.getAllModifier();
        } else {
            $scope.race = selected;
            document.getElementById("benefitsToggle").style.display = "block";
        }
    };

    $scope.setClass = function(classChoice){
        console.log(classChoice)
        $scope.selectedClass = classChoice;
    }

    //This selectedRace function works but make it less UGLY AND GROSS.

    $scope.selected = $scope.racesList[0];
    // $scope.selectedClass = ;
    $scope.selectedRace($scope.racesList[0]);

    $scope.getModifier = function(stat) {
        if (stat.value <= 9) {
            stat.modifier = " - 1 ";
        } else if (stat.value <= 11) {
            stat.modifier = " + 0 ";
        } else if (stat.value <= 13) {
            stat.modifier = " + 1 ";
        } else if (stat.value <= 15) {
            stat.modifier = " + 2 ";
        } else if (stat.value >= 16) {
            stat.modifier = " + 3 ";
        }
    };

    $scope.getAllModifier = function(stat) {
        for (var i = 0; i < $scope.stats.length; i++) {
            $scope.getModifier($scope.stats[i]);
        }
    };

    

    $scope.increaseStat = function(stat) {
        if ($scope.benefitsToggle === false) {
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
            $scope.getModifier(stat);
        }
    };

    $scope.decreaseStat = function(stat) {
        if ($scope.benefitsToggle === false) {
            if (stat.value == 8) {
                console.log("8 point min");
            } else if (stat.value > 13) {
                stat.value--;
                $scope.total += 2;
            } else if (stat.value <= 13) {
                stat.value--;
                $scope.total++;
            }
            $scope.getModifier(stat);
        }
    };

    $scope.applyRacialBenefits = function() {
        if ($scope.benefitsToggle === false) {
            for (var i = 0; i < $scope.race.increase_array.length; i++) {
                var n = $scope.race.increase_array[i];
                $scope.stats[n].value++;
            }
            $scope.benefitsToggle = true;
        } else if ($scope.benefitsToggle === true) {
            for (var ii = 0; ii < $scope.race.increase_array.length; ii++) {
                var nn = $scope.race.increase_array[ii];
                $scope.stats[nn].value--;
                $scope.revertHalfElfBonus();
            }
            $scope.benefitsToggle = false;
        }
        $scope.getAllModifier();
    };

    $scope.bonusStat = function(stat, box) {
        if (stat.box) {
            stat.value++;
        } else if (!stat.box) {
            stat.value--;
        }
        $scope.getAllModifier();
    };


    //checkbox maxmimum script
    $scope.limit = 2;
    $scope.checked = 0;

    $scope.checkChanged = function(stat) {
        if (stat.box) $scope.checked++;
        else $scope.checked--;
    };

    //

     $scope.revertHalfElfBonus = function() {
            if ($scope.race.type != 'Half Elf') {
                //Uncheck the boxes from H-E bonus
                angular.forEach($scope.stats, function(stat, box) {
                    if (stat.box === true) {
                        stat.box = false;
                        console.log(stat.label + " has been unchecked");
                        stat.value--;
                    }
                    $scope.checked = 0;
                });
            }
        };

        $scope.openModal = function(){
            console.log("open modal");
            console.log($scope.benefitsToggle)

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                backdrop:'static',
                scope:$scope,
                show:false
                
            });

        };

});


angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});


