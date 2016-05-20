import {Component, Input} from 'angular2/core';
import {Combatant} from '../../services/CombatService';

@Component({
    selector: 'tracker-combatant',
    properties: ['combatant', 'initiative'],
    templateUrl: 'app/components/combatant/combatant.html',
    styleUrls: ['app/components/combatant/combatant.css'],
    directives: []
})

export default class CombatantComponent {
   initiative: number; 
    
   @Input combatant: Combatant;
}
