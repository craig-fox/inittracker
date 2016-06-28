System.register(['angular2/core', '../components/navbar/navbar', "../components/footer/footer", "../components/carousel/carousel", "../components/combatant/combatant", '../components/combat-options/combat-options', '../services/CombatService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, navbar_1, footer_1, carousel_1, combatant_1, combat_options_1, CombatService_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_1_1) {
                navbar_1 = navbar_1_1;
            },
            function (footer_1_1) {
                footer_1 = footer_1_1;
            },
            function (carousel_1_1) {
                carousel_1 = carousel_1_1;
            },
            function (combatant_1_1) {
                combatant_1 = combatant_1_1;
            },
            function (combat_options_1_1) {
                combat_options_1 = combat_options_1_1;
            },
            function (CombatService_1_1) {
                CombatService_1 = CombatService_1_1;
            }],
        execute: function() {
            RootComponent = (function () {
                function RootComponent(combatService) {
                    this.combatService = combatService;
                    this.combatants = [];
                    this.combatants = this.combatService.getCombatants();
                }
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'app-root',
                        templateUrl: 'app/root/app-root.html',
                        styleUrls: ['app/root/application.css'],
                        directives: [navbar_1.default, footer_1.default, carousel_1.default, combat_options_1.default, combatant_1.default],
                        providers: [CombatService_1.CombatService]
                    })
                ], RootComponent);
                return RootComponent;
            }());
            exports_1("default", RootComponent);
        }
    }
});
