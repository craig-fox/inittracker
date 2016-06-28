System.register(['angular2/testing', '../app/components/combatant/combatant'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, combatant_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (combatant_1_1) {
                combatant_1 = combatant_1_1;
            }],
        execute: function() {
            testing_1.describe('CombatantComponent Tests', function () {
                var combatantComponent;
                testing_1.beforeEach(function () {
                    combatantComponent = new combatant_1.default();
                });
                it('The combatant component should have a valid constructor', function () {
                    testing_1.expect(combatantComponent).toBeAnInstanceOf(combatant_1.default);
                });
            });
        }
    }
});
