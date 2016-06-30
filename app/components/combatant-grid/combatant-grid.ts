import {Component} from 'angular2/core'
import CombatantComponent from '../combatant/combatant'
import {Combatant, CombatService} from '../../services/CombatService'

@Component({
    selector: 'combatant-grid',
    templateUrl: 'app/components/combatant-grid/combatant-grid.html',
    directives: [CombatantComponent],
    providers: [CombatService]
})

export default class CombatantGridComponent {
    combatants: Array<Combatant> = [];

    constructor(private combatService: CombatService){
        this.combatants = this.combatService.getCombatants();
    }
}