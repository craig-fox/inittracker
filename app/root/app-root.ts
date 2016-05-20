import {Component} from 'angular2/core';
import NavbarComponent from '../components/navbar/navbar';
import FooterComponent from "../components/footer/footer";
import CarouselComponent from "../components/carousel/carousel";
import CombatantComponent from "../components/combatant/combatant";
//import {TrackerComponent} from '../tracker/tracker';
//import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
//import {CurrentNoticeComponent} from '../participant/current-notice'
import CombatOptionsComponent from '../components/combat-options/combat-options'
import {Combatant, CombatService} from '../services/CombatService'

@Component({
    selector: 'app-root',
    templateUrl: 'app/root/app-root.html',
    styleUrls: ['app/root/application.css'],
    directives: [NavbarComponent, FooterComponent, CarouselComponent, CombatOptionsComponent, CombatantComponent],
    providers: [CombatService]
})

/*@RouteConfig(
    [
        {path: '/', component:TrackerComponent, as: 'Tracker'}
    ]
) */

export default class RootComponent {
    combatants: Array<Combatant> = [];

    constructor(private combatService: CombatService){
        this.combatants = this.combatService.getCombatants();
    }
}
