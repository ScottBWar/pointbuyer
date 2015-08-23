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
        size: 'Medium',
        hillDwarfHealthBonus: 1
    }, {
        id: 5,
        type: "Mountain Dwarf",
        perks: "++ con, ++ str",
        increase_array: [0, 0, 2, 2],
        speed: 25,
        size: 'Medium',
        armorTraining: ['Leather', 'Hide', 'Scale Mail']
    }, {
        id: 6,
        type: "High Elf",
        perks: "++ dex, + int",
        increase_array: [1, 1, 3],
        speed: 30,
        size: 'Medium',
        weaponTraining: ['Longsword', 'Shortsword', 'Shortbow', 'Longbow']

    }, {
        id: 7,
        type: "Wood Elf",
        perks: "++ dex, + wis",
        increase_array: [1, 1, 4],
        speed: 35,
        size: 'Medium',
        weaponTraining: ['Longsword', 'Shortsword', 'Shortbow', 'Longbow']
    }, {
        id: 8,
        type: "Dark Elf",
        perks: "++ dex, + cha",
        increase_array: [1, 1, 5],
        speed: 30,
        size: 'Medium',
        weaponTraining: ['Rapier', 'Shortsword', 'Hand Crossbow']
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
        rangedChoices: ['simple', 'Handaxe', 'Light Hammer'],
        hasShield: true,
        armorChoices: ['Natural(Barbarian)', 'Leather']
    }, {
        id: 2,
        type: "Bard",
        health: 8,
        saveThrows: [1, 5],
        skillOptions: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight Of Hand", "Stealth", "Survival"],
        maxSkills: 5,
        wpn1Choices: ['simple', 'Rapier', 'Longsword'],
        rangedChoices: ['simple', 'Hand Crossbow'],
        spellAbility: 'cha',
        armorChoices: ['None', 'Leather']

    }, {
        id: 3,
        type: "Cleric",
        health: 8,
        saveThrows: [4, 5],
        skillOptions: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['Mace', 'Warhammer'],
        rangedChoices: ['simple', 'thrown'],
        hasShield: true,
        spellAbility: 'wis',
        armorChoices: ['Leather', 'Scale Mail', 'Chain Mail']

    }, {
        id: 4,
        type: "Druid",
        health: 8,
        saveThrows: [3, 4],
        skillOptions: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        maxSkills: 4,
        wpn1Choices: ['simple'],
        rangedChoices: ['Dart', 'Javelin', 'Sling'],
        hasShield: true,
        spellAbility: 'wis',
        armorChoices: ['None', 'Leather']
    }, {
        id: 5,
        type: "Fighter",
        health: 10,
        saveThrows: [1, 2],
        skillOptions: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
        maxSkills: 4,
        wpn1Choices: ['martial', 'Handaxe', 'Light Hammer'],
        rangedChoices: ['simple', 'martial'],
        hasShield: true,
        armorChoices: ['Leather', 'Scale Mail', 'Chain Mail']

    }, {
        id: 6,
        type: "Monk",
        health: 8,
        saveThrows: [1, 4],
        skillOptions: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        maxSkills: 4,
        wpn1Choices: ['Martial Arts'],
        rangedChoices: ['Dart', 'Shortbow'],
        spellAbility: 'wis',
        armorChoices: ['Natural(Monk)']

    }, {
        id: 7,
        type: "Paladin",
        health: 10,
        saveThrows: [0, 4],
        skillOptions: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['martial', 'Handaxe', 'Light Hammer'],
        hasShield: true,
        spellAbility: 'wis',
        rangedChoices: ['Javelin', 'Light Hammer'],
        armorChoices: ['Leather', 'Scale Mail', 'Chain Mail']

    }, {
        id: 8,
        type: "Ranger",
        health: 10,
        saveThrows: [1, 4],
        skillOptions: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        maxSkills: 5,
        wpn1Choices: ['simple', 'martial'],
        hasShield: true,
        spellAbility: 'wis',
        rangedChoices: ['Shortbow', 'Light Crossbow', 'martial'],
        armorChoices: ['Leather', 'Hide', 'Scale Mail']

    }, {
        id: 9,
        type: "Rogue",
        health: 8,
        saveThrows: [1, 3],
        skillOptions: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        maxSkills: 6,
        wpn1Choices: ['Rapier', 'Shortsword', 'Dagger'],
        rangedChoices: ['Shortbow', 'Hand Crossbow', 'Dart'],
        armorChoices: ['Leather']

    }, {
        id: 10,
        type: "Sorceror",
        health: 6,
        saveThrows: [2, 5],
        skillOptions: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['simple'],
        spellAbility: 'cha',
        rangedChoices: ['Dart', 'Sling'],
        armorChoices: ['None']

    }, {
        id: 11,
        type: "Wizard",
        health: 6,
        saveThrows: [3, 4],
        skillOptions: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['Quarterstaff', 'Dagger'],
        spellAbility: 'int',
        rangedChoices: ['Dart', 'Sling', 'Light Crossbow'],
        armorChoices: ['None']

    }, {
        id: 12,
        type: "Warlock",
        health: 8,
        saveThrows: [4, 5],
        skillOptions: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
        maxSkills: 4,
        wpn1Choices: ['simple'],
        spellAbility: 'cha',
        rangedChoices: ['simple'],
        armorChoices: ['Leather']
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
        light: true,
    }, {
        name: 'Handaxe',
        type: 'simple',
        damage: '1d6',
        reqStat: 0,
        twoHanded: false,
        light: true,
        thrown: true,
        range: '20/60'
    }, {
        name: 'Light Hammer',
        type: 'simple',
        damage: '1d4',
        reqStat: 0,
        light: true,
        thrown: true,
        range: '20/60'
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

    $scope.rangedWeapons = [{
        name: 'Dart',
        damage: '1d4',
        reqStat: 1,
        thrown: true,
        range: '20/60',
        type: 'simple'
    }, {
        name: 'Sling',
        damage: '1d4',
        reqStat: 1,
        range: '30/120',
        type: 'simple'
    }, {
        name: 'Javelin',
        type: 'simple',
        damage: '1d6',
        reqStat: 0,
        twoHanded: false,
        thrown: true,
        range: '30/120'
    }, {
        name: 'Light Hammer',
        damage: '1d4',
        reqStat: 0,
        light: true,
        thrown: true,
        range: '20/60'
    }, {
        name: 'Handaxe',
        damage: '1d6',
        reqStat: 0,
        twoHanded: false,
        light: true,
        thrown: true,
        range: '20/60'
    }, {
        name: 'Shortbow',
        damage: '1d6',
        reqStat: 1,
        range: '80/320',
        type: 'simple'
    }, {
        name: 'Light Crossbow',
        damage: '1d6',
        reqStat: 1,
        range: '80/320',
        type: 'simple'
    }, {
        name: 'Blowgun',
        damage: '1',
        range: '35/100',
        type: 'martial'
    }, {
        name: 'Hand Crossbow',
        damage: '1d6',
        reqStat: 1,
        range: '40/150',
        type: 'martial'
    }, {
        name: 'Heavy Crossbow',
        damage: '1d10',
        reqStat: 1,
        range: '100/400',
        type: 'martial'
    }, {
        name: 'Longbow',
        damage: '1d8',
        reqStat: 1,
        range: '150/600',
        type: 'martial'
    }, {
        name: 'Net',
        damage: 'special',
        range: '5/15',
        type: 'martial'
    }];

    $scope.armorList = [{
        name: 'None',
        baseAC: 10,
        maxDexBonus: 5
    }, {
        name: 'Leather',
        baseAC: 11,
        maxDexBonus: 5
    }, {
        name: 'Hide',
        baseAC: 12,
        maxDexBonus: 2,
    }, {
        name: 'Scale Mail',
        baseAC: 14,
        maxDexBonus: 2,
        stealthDisadvantage: true
    }, {
        name: 'Chain Mail',
        baseAC: 16,
        maxDexBonus: 0,
        stealthDisadvantage: true
    }, {
        name: 'Natural(Barbarian)',
        baseAC: 10,
        maxDexBonus: 5,
        extraStat: 'con'
    }, {
        name: 'Natural(Monk)',
        baseAC: 10,
        maxDexBonus: 5,
        extraStat: 'wis'
    }, ]

    $scope.armorList.getOptions = function(options) {
        var choices = [];
        this.forEach(function(armor) {
            for (var prop in armor) {
                if (options.indexOf(armor[prop]) >= 0) {
                    choices.push(armor);
                }
                if ($scope.race.armorTraining) {
                    if ($scope.race.armorTraining.indexOf(armor[prop]) >= 0 && options.indexOf(armor[prop]) < 0) {
                        choices.push(armor);
                    }
                }
            }
        })
        console.log(choices)
        return choices
    }

    $scope.determineArmorClass = function(){
        var ac = $scope.armor.baseAC;
        switch ($scope.armor.maxDexBonus) {
            case 5:
                ac += $scope.stats[1].mod
                break;
            case 2:
                if ($scope.stats[1].mod < 3) {
                    ac += $scope.stats[1].mod;
                } else {
                    ac += 2;
                }
                break;
            case 0:
                ac = $scope.armor.baseAC;
                break;
        }
        if ($scope.weapon2) {
            if ($scope.weapon2.name === 'Shield') {
                ac += 2;
            }
        }
        if($scope.selectedClass.type === 'Barbarian' || 'Monk'){
            console.log("YOU GOT HERE")
            $scope.stats.forEach(function(stat){
                if(stat.label === $scope.armor.extraStat){
                    ac += stat.mod;
                }
            })
        }

        $scope.armorClass = ac;
    }

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
                if ($scope.race.weaponTraining) {
                    if ($scope.race.weaponTraining.indexOf(weapon[prop]) >= 0 && options.indexOf(weapon[prop]) < 0) {
                        choices.push(weapon);
                    }
                }
            }
        })
        return choices
    }

    $scope.rangedWeapons.getOptions = function(options) {
        var choices = [];
        this.forEach(function(weapon) {
            for (var prop in weapon) {
                if (options.indexOf(weapon[prop]) >= 0) {
                    choices.push(weapon);
                    if (weapon.name === 'Longbow' && $scope.race.size === 'Small') {
                        choices.splice(-1, 1)
                    }
                    if (weapon.name === 'Heavy Crossbow' && $scope.race.size === 'Small') {
                        choices.splice(-1, 1)
                    }
                }
                if ($scope.race.weaponTraining) {
                    if ($scope.race.weaponTraining.indexOf(weapon[prop]) >= 0 && options.indexOf(weapon[prop]) < 0) {
                        choices.push(weapon);
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

    $scope.chooseOffHand = function(weapon2) {
        $scope.weapon2 = weapon2;
        $scope.determineArmorClass();
    }

    $scope.chooseRanged = function(weapon3) {
        $scope.weapon3 = weapon3;
    }

    $scope.chooseArmor = function(armor1) {
        $scope.armor = armor1;
        $scope.determineArmorClass();
    }


    // REFACTOR THIS HIDEOUS FUNCTION!
    $scope.findOffHands = function() {
        $scope.offHandChoices = []
        for (var i = 0; i < $scope.meleeWeapons.length; i++) {
            if ($scope.weapon1.light === true && $scope.meleeWeapons[i].light === true && $scope.meleeWeapons[i].type === 'simple') {
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
            if ($scope.weapon1.light === true && $scope.meleeWeapons[i].name === 'Shortsword' && $scope.selectedClass.type === 'Rogue') {
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
            if ($scope.weapon1.light === true && $scope.meleeWeapons[i].name === 'Shortsword' && $scope.selectedClass.type === 'Ranger') {
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
            if ($scope.weapon1.light === true && $scope.meleeWeapons[i].name === 'Shortsword' && $scope.selectedClass.type === 'Fighter') {
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
            if ($scope.weapon1.name === 'Martial Arts' && $scope.meleeWeapons[i].name === 'Martial Arts') {
                $scope.offHandChoices.push($scope.meleeWeapons[i]);
            }
        }
        if ($scope.weapon1.twoHanded != true && $scope.selectedClass.hasShield === true) {
            $scope.offHandChoices.push($scope.meleeWeapons[$scope.meleeWeapons.length - 1])
        }
    }


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
        // console.log("you picked a race = " + $scope.race.type + "  and the benefitstoggle was " + $scope.benefitstoggle + " when you picked");
        if ($scope.benefitsToggle === true) {
            $scope.applyRacialBenefits();
            $scope.race = selected;
            $scope.applyRacialBenefits();
            $scope.getAllModifier();
        } else {
            $scope.race = selected;
            document.getElementById("benefitsToggle").style.display = "block";
        }
        if ($scope.selectedClass) {
            $scope.meleeChoices = $scope.meleeWeapons.getOptions($scope.selectedClass.wpn1Choices);
            $scope.armorChoices = $scope.armorList.getOptions($scope.selectedClass.armorChoices);
            $scope.rangedChoices = $scope.rangedWeapons.getOptions($scope.selectedClass.rangedChoices);
            console.log("your ranged choices are " + $scope.rangedChoices)
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
        $scope.rangedChoices = $scope.rangedWeapons.getOptions($scope.selectedClass.rangedChoices)
        $scope.armorChoices = $scope.armorList.getOptions($scope.selectedClass.armorChoices);
        if ($scope.weapon1) {
            $scope.findOffHands();
        }
    };

    $scope.setBackground = function(backgroundChoice) {
        $scope.selectedBackground = backgroundChoice;
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
            } else {}
            $scope.getModifier(stat);
        }
        $scope.getSkillModifiers();
        $scope.getSpellSaveDC();
        if ($scope.armor) {
            $scope.determineArmorClass();
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
        $scope.getSkillModifiers();
        if ($scope.armor) {
            $scope.determineArmorClass();
        }
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
        $scope.getSpellSaveDC();
        if ($scope.armor) {
            $scope.determineArmorClass();
        }
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


    $scope.getSpellSaveDC = function() {
        for (var i = 0; i < $scope.stats.length; i++) {
            if ($scope.stats[i].label === $scope.selectedClass.spellAbility) {
                $scope.spellSaveDC = 10 + $scope.stats[i].mod
            }
        }
    }





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