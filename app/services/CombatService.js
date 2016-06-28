System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1;
    var Combatant, CombatService, combatants;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Combatant = (function () {
                function Combatant(name, dexMod, hitPoints, advantage) {
                    if (dexMod === void 0) { dexMod = 0; }
                    if (hitPoints === void 0) { hitPoints = 1; }
                    if (advantage === void 0) { advantage = false; }
                    this.name = name;
                    this.dexMod = dexMod;
                    this.hitPoints = hitPoints;
                    this.advantage = advantage;
                }
                return Combatant;
            }());
            exports_1("Combatant", Combatant);
            CombatService = (function () {
                function CombatService() {
                }
                CombatService.prototype.d20roll = function () {
                    return Math.floor(Math.random() * 20) + 1;
                };
                CombatService.prototype.rollInitiative = function (pc) {
                    var rolls = [];
                    rolls[0] = this.d20roll();
                    if (pc.advantage) {
                        rolls[1] = this.d20roll();
                    }
                    var roll = Math.max.apply(Math, rolls);
                    return roll + pc.dexMod;
                };
                CombatService.prototype.getCombatants = function () {
                    var _this = this;
                    return combatants.map(function (p) { return new Combatant(p.name, p.dexMod, p.hitPoints, p.advantage); })
                        .map(function (p) { p.initiative = _this.rollInitiative(p); return p; })
                        .sort(function (p1, p2) {
                        var result = p2.initiative - p1.initiative;
                        if (result == 0) {
                            return p2.dexMod - p1.dexMod;
                        }
                        return result;
                    });
                };
                CombatService = __decorate([
                    core_1.Injectable()
                ], CombatService);
                return CombatService;
            }());
            exports_1("CombatService", CombatService);
            combatants = [
                {
                    "name": 'Jez Thunder',
                    "dexMod": 1,
                    "hitPoints": 35,
                    "advantage": false
                },
                {
                    "name": 'Hench',
                    "dexMod": 1,
                    "hitPoints": 45
                },
                {
                    "name": 'Orc Savage',
                    "dexMod": 2,
                    "hitPoints": 25,
                    "advantage": true
                },
                {
                    "name": 'Bugbear Chief',
                    "dexMod": 3,
                    "hitPoints": 38
                },
                {
                    "name": 'Fat Ogre',
                    "dexMod": -1,
                    "hitPoints": 65
                }
            ];
        }
    }
});
