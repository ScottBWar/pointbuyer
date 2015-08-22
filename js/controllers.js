var myApp = angular.module('myApp', ['ui.bootstrap', 'ngDragDrop']);



myApp.controller('statController', function statController($scope, $modal) {


    $scope.user = {
        name: ""
    };



    $scope.stats = [{
        'label': 'str',
        'value': 8,
        'modifier': " -1 ",
        'proficient': false
    }, {
        'label': 'dex',
        'value': 8,
        'modifier': " -1 ",
        'proficient': false
    }, {
        'label': 'con',
        'value': 8,
        'modifier': " -1 ",
        'proficient': false
    }, {
        'label': 'int',
        'value': 8,
        'modifier': " -1 ",
        'proficient': false
    }, {
        'label': 'wis',
        'value': 8,
        'modifier': " -1 ",
        'proficient': false
    }, {
        'label': 'cha',
        'value': 8,
        'modifier': " -1 ",
        'proficient': false
    }];

    $scope.total = 27;

    $scope.racesList = [{
        id: 1,
        type: "Human",
        perks: "+ All",
        increase_array: [0, 1, 2, 3, 4, 5],
        speed: 30,
        size: 'Medium'
    }, {
        id: 2,
        type: "Lightfoot Halfling",
        perks: "++ dex, + cha",
        increase_array: [1, 1, 5],
        speed: 25,
        size: 'Small'
    }, {
        id: 3,
        type: "Stout Halfling",
        perks: "++ dex, + con",
        increase_array: [1, 1, 2],
        speed: 25,
        size: 'Small'
    }, {
        id: 4,
        type: "Hill Dwarf",
        perks: "++ con, + wis",
        increase_array: [2, 2, 4],
        speed: 25,
        size: 'Medium'
    }, {
        id: 5,
        type: "Mountain Dwarf",
        perks: "++ con, ++ str",
        increase_array: [0, 0, 2, 2],
        speed: 25,
        size: 'Medium'
    }, {
        id: 6,
        type: "High Elf",
        perks: "++ dex, + int",
        increase_array: [1, 1, 3],
        speed: 30,
        size: 'Medium',

    }, {
        id: 7,
        type: "Wood Elf",
        perks: "++ dex, + wis",
        increase_array: [1, 1, 4],
        speed: 35,
        size: 'Medium'
    }, {
        id: 8,
        type: "Dark Elf",
        perks: "++ dex, + cha",
        increase_array: [1, 1, 5],
        speed: 30,
        size: 'Medium'
    }, {
        id: 9,
        type: "Forest Gnome",
        perks: "++ int, + dex",
        increase_array: [3, 3, 1],
        speed: 25,
        size: 'Small'
    }, {
        id: 10,
        type: "Rock Gnome",
        perks: "++ int, + con",
        increase_array: [3, 3, 2],
        speed: 25,
        size: 'Small'
    }, {
        id: 11,
        type: "Half-Orc",
        perks: "++ str, + con",
        increase_array: [0, 0, 2],
        speed: 30,
        size: 'Medium'
    }, {
        id: 12,
        type: "Dragonborn",
        perks: "++ str, + cha",
        increase_array: [0, 0, 5],
        speed: 30,
        size: 'Medium'
    }, {
        id: 13,
        type: "Tiefling",
        perks: "++cha, + int",
        increase_array: [5, 5, 3],
        speed: 30,
        size: 'Medium'
    }, {
        id: 14,
        type: "Half Elf",
        perks: "++cha +any two",
        increase_array: [5, 5],
        speed: 30,
        size: 'Medium'
    }];

    $scope.classList = [{
        id: 1,
        type: "Barbarian",
        health: 12,
        saveThrows: [0, 2],
        skillOptions: ["Animal Handling", "Athletics", "Intimidation", "Nature",
            "Perception", "Survival"
        ],
        maxSkills: 4,
        wpn1Choices: ['martial', 'Handaxe', 'Light Hammer'],
        hasShield:true
    }, {
        id: 2,
        type: "Bard",
        health: 8,
        saveThrows: [1, 5],
        skillOptions: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight Of Hand", "Stealth", "Survival"],
        maxSkills: 5,
        wpn1Choices: ['simple', 'Rapier', 'Longsword']

    }, {
        id: 3,
        type: "Cleric",
        health: 8,
        saveThrows: [4, 5],
        skillOptions: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['Mace', 'Warhammer'],
        hasShield:true

    }, {
        id: 4,
        type: "Druid",
        health: 8,
        saveThrows: [3, 4],
        skillOptions: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        maxSkills: 4,
        wpn1Choices: ['simple'],
        hasShield:true

    }, {
        id: 5,
        type: "Fighter",
        health: 10,
        saveThrows: [1, 2],
        skillOptions: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
        maxSkills: 4,
        wpn1Choices: ['martial', 'Handaxe', 'Light Hammer'],
        hasShield:true

    }, {
        id: 6,
        type: "Monk",
        health: 8,
        saveThrows: [1, 4],
        skillOptions: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        maxSkills: 4,
        wpn1Choices: ['Martial Arts']

    }, {
        id: 7,
        type: "Paladin",
        health: 10,
        saveThrows: [0, 4],
        skillOptions: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['martial', 'Handaxe', 'Light Hammer'],
        hasShield:true

    }, {
        id: 8,
        type: "Ranger",
        health: 10,
        saveThrows: [1, 4],
        skillOptions: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        maxSkills: 5,
        wpn1Choices: ['simple', 'martial'],
        hasShield:true

    }, {
        id: 9,
        type: "Rogue",
        health: 8,
        saveThrows: [1, 3],
        skillOptions: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        maxSkills: 6,
        wpn1Choices: ['Rapier', 'Shortsword', 'Dagger']

    }, {
        id: 10,
        type: "Sorceror",
        health: 6,
        saveThrows: [2, 5],
        skillOptions: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['simple']

    }, {
        id: 11,
        type: "Wizard",
        health: 6,
        saveThrows: [3, 4],
        skillOptions: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['Quarterstaff', 'Dagger']

    }, {
        id: 12,
        type: "Warlock",
        health: 8,
        saveThrows: [4, 5],
        skillOptions: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['simple']

    }];


    $scope.skills = [{
            label: "Acrobatics",
            req: "dex",
            proficient: false
        }, {
            label: "Animal Handling",
            req: "wis",
            proficient: false
        }, {
            label: "Arcana",
            req: "int",
            proficient: false
        }, {
            label: "Athletics",
            req: "str",
            proficient: false
        }, {
            label: "Deception",
            req: "cha",
            proficient: false
        }, {
            label: "History",
            req: "int",
            proficient: false
        }, {
            label: "Insight",
            req: "wis",
            proficient: false
        }, {
            label: "Intimidation",
            req: "cha",
            proficient: false
        }, {
            label: "Investigation",
            req: "int",
            proficient: false
        }, {
            label: "Medicine",
            req: "wis",
            proficient: false
        }, {
            label: "Nature",
            req: "int",
            proficient: false
        }, {
            label: "Perception",
            req: "wis",
            proficient: false
        }, {
            label: "Performance",
            req: "cha",
            proficient: false
        }, {
            label: "Persuasion",
            req: "cha",
            proficient: false
        }, {
            label: "Religion",
            req: "int",
            proficient: false
        }, {
            label: "Sleight of Hand",
            req: "dex",
            proficient: false
        }, {
            label: "Stealth",
            req: "dex",
            proficient: false
        }, {
            label: "Survival",
            req: "wis",
            proficient: false
        }


    ];

    $scope.skillsPicked = function() {
        var total = 0;
        for (var i = 0; i < $scope.skills.length; i++) {
            if ($scope.skills[i].proficient === true) {
                total += 1;
            }
        }
        return total;
    };


    $scope.backgrounds = [{
        label: 'Acolyte',
        skills: ['Insight', 'Religion']
    }, {
        label: 'Charlatan',
        skills: ['Deception', 'Sleight of Hand']
    }, {
        label: 'Criminal',
        skills: ['Deception', 'Stealth']
    }, {
        label: 'Entertainer',
        skills: ['Acrobatics', 'Performance']
    }, {
        label: 'Folk Hero',
        skills: ['Animal Handling', 'Survival']
    }, {
        label: 'Guild Artisan',
        skills: ['Insight', 'Persuasion']
    }, {
        label: 'Hermit',
        skills: ['Medicine', 'Religion']
    }, {
        label: 'Noble',
        skills: ['History', 'Persuasion']
    }, {
        label: 'Outlander',
        skills: ['Athletics', 'Survival']
    }, {
        label: 'Sage',
        skills: ['Arcana', 'History']
    }, {
        label: 'Sailor',
        skills: ['Athletics', 'Perception']
    }, {
        label: 'Soldier',
        skills: ['Athletics', 'Intimidation']
    }, {
        label: 'Urchin',
        skills: ['Sleight of Hand', 'Stealth']
    }];


    $scope.meleeWeapons = [{
        name: 'Dagger',
        type: 'simple',
        damage: '1d4',
        reqStat: 1,
        twoHanded: false,
        light: true
    }, {
        name: 'Handaxe',
        type: 'simple',
        damage: '1d6',
        reqStat: 0,
        twoHanded: false,
        light: true
    }, {
        name: 'Light Hammer',
        type: 'simple',
        damage: '1d4',
        reqStat: 0,
        light: true
    }, {
        name: 'Javelin',
        type: 'simple',
        damage: '1d6',
        reqStat: 0,
        twoHanded: false
    }, {
        name: 'Mace',
        type: 'simple',
        damage: '1d6',
        reqStat: 0,
        twoHanded: false
    }, {
        name: 'Quarterstaff',
        type: 'simple',
        damage: '1d6',
        reqStat: 0,
        properties: 'Versatile(1d8)',
        twoHanded: false
    }, {
        name: 'Spear',
        type: 'simple',
        damage: '1d6',
        reqStat: 0,
        properties: 'Versatile(1d8)',
        twoHanded: false
    }, {
        name: 'Sickle',
        type: 'simple',
        damage: '1d4',
        reqStat: 1,
        light: true
    }, {
        name: 'BattleAxe',
        type: 'martial',
        damage: '1d8',
        reqStat: 0,
        properties: 'Versatile(1d10)',
        twoHanded: false
    }, {
        name: 'Flail',
        type: 'martial',
        damage: '1d8',
        reqStat: 0,
        twoHanded: false
    }, {
        name: 'Glaive',
        type: 'martial',
        damage: '1d10',
        reqStat: 0,
        properties: 'reach',
        twoHanded: true
    }, {
        name: 'Greataxe',
        type: 'martial',
        damage: '1d12',
        reqStat: 0,
        twoHanded: true
    }, {
        name: 'Greatsword',
        type: 'martial',
        damage: '2d6',
        reqStat: 0,
        twoHanded: true
    }, {
        name: 'Maul',
        type: 'martial',
        damage: '2d6',
        reqStat: 0,
        twoHanded: true
    }, {
        name: 'Halberd',
        type: 'martial',
        damage: '1d10',
        reqStat: 0,
        properties: 'reach',
        twoHanded: true
    }, {
        name: 'Longsword',
        type: 'martial',
        damage: '1d8',
        reqStat: 0,
        properties: 'Versatile(1d10)',
        twoHanded: false
    }, {
        name: 'Rapier',
        type: 'martial',
        damage: '1d8',
        reqStat: 1,
        twoHanded: false
    }, {
        name: 'Scimitar',
        type: 'martial',
        damage: '1d6',
        reqStat: 1,
        twoHanded: false,
        light: true
    }, {
        name: 'Shortsword',
        type: 'martial',
        damage: '1d6',
        reqStat: 1,
        twoHanded: false,
        light: true
    }, {
        name: 'Warhammer',
        type: 'martial',
        damage: '1d8',
        reqStat: 0,
        properties: 'Versatile(1d10)',
        twoHanded: false
    }, {
        name: 'Whip',
        type: 'martial',
        damage: '1d4',
        reqStat: 1,
        properties: 'reach'
    }, {
        name: 'Martial Arts',
        damage: '1d4',
        reqStat: 1
    }, {
        name: 'Shield',
        damage: 'AC+2',
        armorClass: 2
    }]

    $scope.meleeWeapons.getOptions = function(options) {
        var choices = [];
        this.forEach(function(weapon) {
            for (var prop in weapon) {
                if (options.indexOf(weapon[prop]) >= 0) {
                    choices.push(weapon);
                    if (weapon.twoHanded === true && $scope.race.size === 'Small') {
                        choices.splice(-1, 1)
                    }
                }
            }
        })
        return choices
    }

    $scope.chooseMelee = function(weapon1) {
        $scope.weapon1 = weapon1;
        if ($scope.weapon1) {
            $scope.findOffHands();
        }
    }


// REFACTOR THIS HIDEOUS FUNCTION!
    $scope.findOffHands = function() {
        $scope.offHandChoices = []
        for (var i = 0; i < $scope.meleeWeapons.length; i++) {
            if ($scope.weapon1.light === true && $scope.meleeWeapons[i].light === true && $scope.meleeWeapons[i].type === 'simple') {
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
            if ($scope.weapon1.light === true && $scope.meleeWeapons[i].name === 'Shortsword' && $scope.selectedClass.type === 'Rogue'){
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
            if ($scope.weapon1.light === true && $scope.meleeWeapons[i].name === 'Shortsword' && $scope.selectedClass.type === 'Ranger'){
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
            if ($scope.weapon1.light === true && $scope.meleeWeapons[i].name === 'Shortsword' && $scope.selectedClass.type === 'Fighter'){
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
        }
        if ($scope.weapon1.twoHanded != true && $scope.selectedClass.hasShield === true) {
            $scope.offHandChoices.push($scope.meleeWeapons[$scope.meleeWeapons.length - 1])
        }
    }



    $scope.rangedWeapons = [{
        name: 'Dagger',
        type: 'simple',
        damage: '1d4',
        reqStat: 1,
        twoHanded: false,
        light: true
    }, ]



    $scope.benefitsToggle = false;

    $scope.revertStats = function() {
        $scope.total = 27;
        $scope.stats = [{
            'label': 'str',
            'value': 8,
            'modifier': " -1 ",
            'proficient': false
        }, {
            'label': 'dex',
            'value': 8,
            'modifier': " -1 ",
            'proficient': false
        }, {
            'label': 'con',
            'value': 8,
            'modifier': " -1 ",
            'proficient': false
        }, {
            'label': 'int',
            'value': 8,
            'modifier': " -1 ",
            'proficient': false
        }, {
            'label': 'wis',
            'value': 8,
            'modifier': " -1 ",
            'proficient': false
        }, {
            'label': 'cha',
            'value': 8,
            'modifier': " -1 ",
            'proficient': false
        }];
    };

    $scope.selectedRace = function(selected) {
        console.log(selected);
        console.log($scope.benefitsToggle);
        // console.log("you picked a race = " + $scope.race.type + "  and the benefitstoggle was " + $scope.benefitstoggle + " when you picked");
        if ($scope.benefitsToggle === true) {
            $scope.applyRacialBenefits();
            $scope.race = selected;
            $scope.applyRacialBenefits();
            $scope.getAllModifier();
        } else {
            $scope.race = selected;
            console.log("now it's " + $scope.race.type);
            document.getElementById("benefitsToggle").style.display = "block";
        }
        if ($scope.selectedClass) {
            $scope.meleeChoices = $scope.meleeWeapons.getOptions($scope.selectedClass.wpn1Choices)
        }
    };

    $scope.setClass = function(classChoice) {
        console.log(classChoice);
        $scope.selectedClass = classChoice;
        for (var i = 0; i < $scope.stats.length; i++) {
            if ($scope.selectedClass.saveThrows.indexOf(i) >= 0) {
                $scope.stats[i].proficient = true;
            } else {
                $scope.stats[i].proficient = false;
            }
        }
        if ($scope.selectedBackground) {
            $scope.setSkillProficiencies();
        }
        $scope.meleeChoices = $scope.meleeWeapons.getOptions($scope.selectedClass.wpn1Choices)
        $scope.findOffHands();
    };

    $scope.setBackground = function(backgroundChoice) {
        console.log(backgroundChoice);
        $scope.selectedBackground = backgroundChoice;
        console.log($scope.selectedBackground);
        $scope.setSkillProficiencies();
    };

    //This selectedRace function works but make it less UGLY AND GROSS.

    // $scope.selected = $scope.race;
    // $scope.selectedClass = ;
    // $scope.selectedRace($scope.racesList[0]);

    $scope.getModifier = function(stat) {
        if (stat.value <= 9) {
            stat.modifier = " - 1 ";
            stat.mod = -1;
        } else if (stat.value <= 11) {
            stat.modifier = " + 0 ";
            stat.mod = 0;
        } else if (stat.value <= 13) {
            stat.modifier = " + 1 ";
            stat.mod = 1;
        } else if (stat.value <= 15) {
            stat.modifier = " + 2 ";
            stat.mod = 2;
        } else if (stat.value >= 16) {
            stat.mod = 3;
            stat.modifier = " + 3 ";
        }
    };

    $scope.getAllModifier = function(stat) {
        for (var i = 0; i < $scope.stats.length; i++) {
            $scope.getModifier($scope.stats[i]);
        }
        $scope.getSkillModifiers();
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
        $scope.getSkillModifiers();
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
        $scope.getSkillModifiers();
    };

    $scope.applyRacialBenefits = function() {
        // console.log("you clicked the checkbox, and when you clicked the benefitsToggle was" + $scope.benefitsToggle + "  and the race was " + $scope.race.type);
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
                    // console.log(stat.label + " has been unchecked");
                    stat.value--;
                }
                $scope.checked = 0;
            });
        }
    };

    //this getSkillModifiers function works for now... but needs to be refactored
    $scope.getSkillModifiers = function() {
        for (var i = 0; i < $scope.skills.length; i++) {
            for (var ii = 0; ii < $scope.stats.length; ii++) {
                if ($scope.skills[i].req == $scope.stats[ii].label) {
                    $scope.skills[i].mod = $scope.stats[ii].mod;
                    console.log($scope.skills[i].mod);
                }
            }
        }
    };
    //Seriously, refactor this when you get the chance ^

    $scope.setSkillProficiencies = function() {
        for (var i = 0; i < $scope.skills.length; i++) {
            if ($scope.selectedBackground.skills.indexOf($scope.skills[i].label) >= 0) {
                $scope.skills[i].proficient = true;
            } else
                $scope.skills[i].proficient = false;
        }
    };





    //this is the end of the controller, where we simply call getAllModifier once.
    $scope.getAllModifier();
});


// angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
//   $scope.ok = function () {
//     $modalInstance.close();
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// });

// var elem = document.querySelector('.modalContainer');
// var draggie = new Draggabilly( elem, {
//   // options...
// });