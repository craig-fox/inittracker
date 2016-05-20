import {Component} from 'angular2/core';
import {CombatListingComponent} from '../combat-listing/combat-listing'
import {CurrentNoticeComponent} from '../participant/current-notice'
import {ProcessComponent} from '../participant/process'

@Component({
    selector: 'tracker',
    templateUrl: 'app/tracker/tracker.html',
    directives: [CombatListingComponent, CurrentNoticeComponent, ProcessComponent]
})


export class TrackerComponent {
    constructor(){
        
    }
}
