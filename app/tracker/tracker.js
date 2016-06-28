System.register(['angular2/core', '../combat-listing/combat-listing', '../participant/current-notice', '../participant/process'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, combat_listing_1, current_notice_1, process_1;
    var TrackerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (combat_listing_1_1) {
                combat_listing_1 = combat_listing_1_1;
            },
            function (current_notice_1_1) {
                current_notice_1 = current_notice_1_1;
            },
            function (process_1_1) {
                process_1 = process_1_1;
            }],
        execute: function() {
            TrackerComponent = (function () {
                function TrackerComponent() {
                }
                TrackerComponent = __decorate([
                    core_1.Component({
                        selector: 'tracker',
                        templateUrl: 'app/tracker/tracker.html',
                        directives: [combat_listing_1.CombatListingComponent, current_notice_1.CurrentNoticeComponent, process_1.ProcessComponent]
                    })
                ], TrackerComponent);
                return TrackerComponent;
            }());
            exports_1("TrackerComponent", TrackerComponent);
        }
    }
});
