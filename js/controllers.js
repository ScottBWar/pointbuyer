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
        type: "Human"
    }, {
        id: 2,
        type: "Hill Dwarf"
    }, {
        id: 3,
        type: "other"
    }];

    $scope.revertStats = function() {
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

    // $scope.selectedRace = function(selected) {
    //     console.log(selected);
    //     $scope.race = selected;
    //     $scope.revertStats();
    //     switch ($scope.race.type) {
    //         case "Human":
    //             $scope.stats.str++;
    //             $scope.stats.dex++;
    //             $scope.stats.con++;
    //             $scope.stats.int++;
    //             $scope.stats.wis++;
    //             $scope.stats.cha++;
    //             break;
    //         case "Hill Dwarf":
    //             $scope.stats.con += 2;
    //             $scope.stats.wis++;
    //     }
    // };

    // $scope.plusStr = function() {
    //     $scope.stats.str++;
    //     $scope.total--;
    // };


});